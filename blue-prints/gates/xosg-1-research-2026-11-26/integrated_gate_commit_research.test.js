/**
 * xOSG-1 R3 integrated RESEARCH-ONLY gate model (Node.js 22+).
 * Ed25519 keys are ephemeral test fixtures, not legitimate Operator credentials.
 * This program has no external effects, network traffic, or deployed gates.
 * A mock CLEARED is never a production authorization or es-xosg-9 instrumentation.
 * Run: node integrated_gate_commit_research.test.js
 */
"use strict";
const crypto = require("node:crypto");

function canonical(value) {
  if (value === null || typeof value === "string" || typeof value === "boolean" ||
      (typeof value === "number" && Number.isFinite(value))) return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (typeof value === "object" && value !== null && Object.getPrototypeOf(value) === Object.prototype)
    return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${canonical(value[key])}`).join(",")}}`;
  throw Error("Unsupported canonical test material");
}
const digest = value => crypto.createHash("sha256").update(canonical(value)).digest("hex");
function signMock(payload, signerId, privateKey) {
  return {payload, signerId, signature:crypto.sign(null, Buffer.from(canonical(payload)), privateKey).toString("base64")};
}
function verifyMock(envelope, expectedSignerId, publicKey) {
  if (!envelope || envelope.signerId !== expectedSignerId || typeof envelope.signature !== "string" || !publicKey)
    return false;
  try { return crypto.verify(null, Buffer.from(canonical(envelope.payload)), publicKey, Buffer.from(envelope.signature, "base64")); }
  catch { return false; }
}
function makeFixture(revocationOrder="NO_REVOKE") {
  const signerIds=["test-issuer","test-gate-1","test-gate-2","test-gate-3","test-gate-4","test-gate-5","test-gate-6","test-alpha"];
  const keys=Object.fromEntries(signerIds.map(id=>[id,crypto.generateKeyPairSync("ed25519")]));
  const trust=Object.fromEntries(signerIds.map(id=>[id,keys[id].publicKey]));
  const material={
    candidate:{id:"candidate-A",revision:"r1",target:"target-A",prompt:"prompt-A",risk:"risk-A"},
    plan:{operations:[{id:"step-1",effects:["alpha"]},{id:"step-2",effects:["beta"]}],
      interactions:[{all:["alpha","beta"],generates:"combined"}],effectUniverse:["alpha","beta","combined","gamma"]},
    conditions:{revision:"registry-v1",complete:true,authorityEstablished:true,
      required:[{id:"requirement-A",applicable:true,evidence:"SUPPORTED",sufficient:true}]},
    profile:{id:"seven-gate-study",revision:"policy-v1",selected:true}
  };
  const materialHash=digest(material),sessionId="session-R3-A";
  const grantPayload={id:"grant-A",revision:"grant-v1",materialHash,sessionId,issuer:"test-issuer",
    target:"target-A",authorizedEffects:["alpha","beta","combined","gamma"],expiresAt:100};
  const grant=signMock(grantPayload,"test-issuer",keys["test-issuer"].privateKey);
  const grantHash=digest(grant);
  const receipts=[];
  for(let gateNumber=1;gateNumber<=6;gateNumber++){
    const payload={gateNumber,sessionId,materialHash,grantHash,clearance:"CLEARED",eventId:`GATE_${gateNumber}`,
      predecessorHash:gateNumber===1?null:digest(receipts[gateNumber-2]),expiresAt:100,
      restatementConsistent:gateNumber===6?true:null};
    receipts.push(signMock(payload,`test-gate-${gateNumber}`,keys[`test-gate-${gateNumber}`].privateKey));
  }
  const alpha=signMock({gateNumber:7,sessionId,materialHash,grantHash,clearance:"CLEARED",
    eventId:"ALPHA_LOCK",predecessorHash:digest(receipts[5]),expiresAt:100},"test-alpha",keys["test-alpha"].privateKey);
  const events=["ISSUANCE",...Array.from({length:6},(_,i)=>`GATE_${i+1}`),"ALPHA_LOCK","COMMIT"];
  const edges=events.slice(0,-1).map((eventId,i)=>[eventId,events[i+1]]);
  let revocation=null;
  if(revocationOrder!=="NO_REVOKE"){
    events.push("REVOCATION");
    if(revocationOrder==="BEFORE_COMMIT")edges.push(["ISSUANCE","REVOCATION"],["REVOCATION","COMMIT"]);
    else if(revocationOrder==="AFTER_COMMIT")edges.push(["COMMIT","REVOCATION"]);
    else if(revocationOrder==="UNORDERED")edges.push(["ISSUANCE","REVOCATION"]);
    else throw Error("Unexpected ordering");
    revocation=signMock({grantId:"grant-A",sessionId,eventId:"REVOCATION"},"test-issuer",keys["test-issuer"].privateKey);
  }
  return {material,grant,receipts,alpha,trust,causalGraph:{events,edges},revocation,
    revocationCoverageFixture:true,commitTick:10,consumedSessionIds:new Set(),
    independentControllerFixture:true,keysForAdversarialFixtures:keys};
}
function analyzeOrder(graph) {
  if(!graph||!Array.isArray(graph.events)||!Array.isArray(graph.edges))return null;
  const events=new Set(graph.events),adjacency=new Map(graph.events.map(eventId=>[eventId,[]]));
  if(events.size!==graph.events.length)return null;
  for(const edge of graph.edges){
    if(!Array.isArray(edge)||edge.length!==2||!events.has(edge[0])||!events.has(edge[1]))return null;
    adjacency.get(edge[0]).push(edge[1]);
  }
  const visit=new Map();
  function cycle(node){
    if(visit.get(node)===1)return true;
    if(visit.get(node)===2)return false;
    visit.set(node,1);
    for(const next of adjacency.get(node))if(cycle(next))return true;
    visit.set(node,2);return false;
  }
  if([...events].some(eventId=>cycle(eventId)))return null;
  function precedes(a,b) {
    if(a===b||!events.has(a)||!events.has(b))return false;
    const reached=new Set([a]),queue=[a];
    while(queue.length){for(const next of adjacency.get(queue.shift())){
      if(next===b)return true;
      if(!reached.has(next)){reached.add(next);queue.push(next);}
    }}return false;
  }
  return {precedes,has:eventId=>events.has(eventId)};
}
function closeDeclaredEffects(plan) {
  if(!plan||!Array.isArray(plan.operations)||!Array.isArray(plan.interactions)||!Array.isArray(plan.effectUniverse))return null;
  const universe=new Set(plan.effectUniverse),effects=new Set();
  for(const operation of plan.operations){
    if(!Array.isArray(operation.effects))return null;
    for(const effect of operation.effects){if(!universe.has(effect))return null;effects.add(effect);}
  }
  for(let iteration=0;iteration<=universe.size;iteration++){
    let changed=false;
    for(const rule of plan.interactions){
      if(!Array.isArray(rule.all)||!universe.has(rule.generates))return null;
      if(rule.all.every(requiredEffect=>effects.has(requiredEffect))&&!effects.has(rule.generates)){
        effects.add(rule.generates);changed=true;
      }
    }
    if(!changed)return effects;
  }
  return null;
}
function evaluateMockGateChain(fixture){
  const blocked=reason=>({result:"NOT_CLEARED",reason});
  const {material,grant,receipts,alpha,trust,causalGraph,revocation,commitTick}=fixture;
  if(!material?.profile?.selected)return blocked("profile not selected");
  if(!material.conditions?.complete||!material.conditions.authorityEstablished)return blocked("mandatory condition registry incomplete");
  for(const condition of material.conditions.required||[])
    if(condition.applicable!==true||condition.evidence!=="SUPPORTED"||condition.sufficient!==true)
      return blocked("mandatory condition evidence insufficient");
  const materialHash=digest(material);
  if(!verifyMock(grant,"test-issuer",trust["test-issuer"]))return blocked("untrusted grant signature");
  if(grant.payload.materialHash!==materialHash||grant.payload.target!==material.candidate.target||
     grant.payload.sessionId!=="session-R3-A"||grant.payload.issuer!=="test-issuer"||grant.payload.expiresAt<commitTick)
    return blocked("grant binding/expiry invalid");
  const effectiveEffects=closeDeclaredEffects(material.plan);
  if(!effectiveEffects)return blocked("undeclared effect or invalid closure");
  if([...effectiveEffects].some(effect=>!grant.payload.authorizedEffects.includes(effect)))
    return blocked("cumulative effect outside authorized grant scope");
  const order=analyzeOrder(causalGraph);
  if(!order)return blocked("causal graph invalid");
  const sequence=["ISSUANCE",...Array.from({length:6},(_,i)=>`GATE_${i+1}`),"ALPHA_LOCK","COMMIT"];
  for(let index=0;index<sequence.length-1;index++)
    if(!order.precedes(sequence[index],sequence[index+1]))return blocked("ordered clearance to commit unestablished");
  if(!Array.isArray(receipts)||receipts.length!==6)return blocked("exactly six previous gate receipts required");
  for(let index=0;index<6;index++){
    const number=index+1,receipt=receipts[index],expectedSigner=`test-gate-${number}`;
    if(!verifyMock(receipt,expectedSigner,trust[expectedSigner]))return blocked("receipt signature or signer invalid");
    const p=receipt.payload;
    if(p.gateNumber!==number||p.eventId!==`GATE_${number}`||p.clearance!=="CLEARED"||
       p.materialHash!==materialHash||p.grantHash!==digest(grant)||p.sessionId!=="session-R3-A"||
       p.predecessorHash!==(index?digest(receipts[index-1]):null)||p.expiresAt<commitTick)
      return blocked("receipt binding, freshness or sequence invalid");
    if(number===6&&p.restatementConsistent!==true)return blocked("Gate Six restatement not established");
  }
  if(!verifyMock(alpha,"test-alpha",trust["test-alpha"]))return blocked("Alpha-Lock signature or signer invalid");
  const ap=alpha.payload;
  if(ap.gateNumber!==7||ap.clearance!=="CLEARED"||ap.eventId!=="ALPHA_LOCK"||
     ap.sessionId!=="session-R3-A"||ap.materialHash!==materialHash||ap.grantHash!==digest(grant)||
     ap.predecessorHash!==digest(receipts[5])||ap.expiresAt<commitTick)
    return blocked("Alpha-Lock binding or expiry invalid");
  if(fixture.independentControllerFixture!==true)return blocked("independent Alpha-Lock controller not established");
  if(fixture.revocationCoverageFixture!==true)return blocked("revocation event coverage not established");
  if(revocation!==null){
    if(!verifyMock(revocation,"test-issuer",trust["test-issuer"])||
       revocation.payload.grantId!==grant.payload.id||revocation.payload.sessionId!=="session-R3-A"||
       revocation.payload.eventId!=="REVOCATION"||!order.has("REVOCATION"))
      return blocked("revocation identity or signature invalid");
    if(!order.precedes("COMMIT","REVOCATION"))
      return blocked("revocation before or unordered with commit");
  }
  return {result:"CLEARED",reason:"mock authorization and causal prerequisites met"};
}
function simulateInMemoryCommit(fixture){
  if(fixture.consumedSessionIds.has("session-R3-A"))return {result:"NOT_CLEARED",reason:"session already consumed"};
  const evaluation=evaluateMockGateChain(fixture);
  if(evaluation.result!=="CLEARED")return evaluation;
  fixture.consumedSessionIds.add("session-R3-A");
  return {result:"CLEARED",reason:"mock session recorded, no external effect"};
}
function expectResearchCase(name,change,expected="NOT_CLEARED",order="NO_REVOKE"){
  const fixture=makeFixture(order);
  change(fixture);
  const actual=evaluateMockGateChain(fixture);
  return {name,expected,actual:actual.result,passed:actual.result===expected,reason:actual.reason};
}
function runTargetedResearchCases(){
  const tests=[];
  const check=(name,change,expected="NOT_CLEARED",order="NO_REVOKE")=>
    tests.push(expectResearchCase(name,change,expected,order));
  check("valid mock fixture",()=>{},"CLEARED");
  check("revocation after modeled commit",()=>{},"CLEARED","AFTER_COMMIT");
  check("revocation before commit",()=>{},"NOT_CLEARED","BEFORE_COMMIT");
  check("unordered revocation",()=>{},"NOT_CLEARED","UNORDERED");
  check("revocation visibility not established",f=>f.revocationCoverageFixture=false);
  check("add otherwise permitted operation without new signatures",f=>f.material.plan.operations.push({id:"step-3",effects:["gamma"]}));
  check("new valid condition without new signatures",f=>f.material.conditions.required.push({id:"extra",applicable:true,evidence:"SUPPORTED",sufficient:true}));
  check("revised policy without new signatures",f=>f.material.profile.revision="policy-v2");
  check("changed interaction with same candidate name",f=>f.material.plan.interactions[0].generates="gamma");
  check("changed prompt identity",f=>f.material.candidate.prompt="different-prompt");
  check("expanded grant scope without issuer signature",f=>f.grant.payload.authorizedEffects.push("extra"));
  check("forged issuer signature",f=>f.grant.signature="AAAA");
  check("grant has expired at commit",f=>f.commitTick=101);
  check("receipt signature corrupted",f=>f.receipts[3].signature="AAAA");
  check("gate number altered",f=>f.receipts[2].payload.gateNumber=4);
  check("clearance altered without signature",f=>f.receipts[3].payload.clearance="NOT_CLEARED");
  check("receipt copied to different gate",f=>f.receipts[2]=f.receipts[1]);
  check("removed gate receipt",f=>f.receipts.pop());
  check("predecessor receipt mutated",f=>f.receipts[4].payload.predecessorHash="fake");
  check("Alpha-Lock token mutated",f=>f.alpha.payload.clearance="NOT_CLEARED");
  check("Alpha-Lock signature corrupted",f=>f.alpha.signature="AAAA");
  check("gate signer trust root replaced",f=>f.trust["test-gate-4"]=crypto.generateKeyPairSync("ed25519").publicKey);
  check("issuer trust root replaced",f=>f.trust["test-issuer"]=crypto.generateKeyPairSync("ed25519").publicKey);
  check("Alpha-Lock trust root replaced",f=>f.trust["test-alpha"]=crypto.generateKeyPairSync("ed25519").publicKey);
  check("controller independence flag absent",f=>f.independentControllerFixture=false);
  check("incorrect causal order",f=>f.causalGraph.edges=f.causalGraph.edges.filter(([a,b])=>!(a==="GATE_5"&&b==="GATE_6")));
  check("cyclic event graph",f=>f.causalGraph.edges.push(["GATE_3","GATE_2"]));
  check("unmodeled direct effect",f=>f.material.plan.operations[0].effects.push("external-leak"));
  check("condition registry incomplete",f=>f.material.conditions.complete=false);
  check("mandatory condition conflicted",f=>f.material.conditions.required[0].evidence="CONFLICTED");
  check("profile not selected",f=>f.material.profile.selected=false);
  check("signed positive receipt not cleared",f=>{
    const old=f.receipts[2];old.payload.clearance="NOT_CLEARED";
    f.receipts[2]=signMock(old.payload,"test-gate-3",f.keysForAdversarialFixtures["test-gate-3"].privateKey);
  });
  check("same signature cannot endorse another session",f=>f.grant.payload.sessionId="other-session");
  check("replayed mock session second commit",f=>{
    const first=simulateInMemoryCommit(f);
    if(first.result!=="CLEARED")throw Error("First session not accepted in fixture");
  },"CLEARED"); // evaluate-only is read-only; separate replay test below
  const replayFixture=makeFixture();
  const firstCommit=simulateInMemoryCommit(replayFixture),secondCommit=simulateInMemoryCommit(replayFixture);
  tests.push({name:"replay blocked by in-memory session ledger",expected:"CLEARED,NOT_CLEARED",
    actual:`${firstCommit.result},${secondCommit.result}`,passed:firstCommit.result==="CLEARED"&&secondCommit.result==="NOT_CLEARED"});
  // Deliberately demonstrate remaining root-of-trust problem: a fully replaced mock trust registry
  // and re-signed fixtures can still be internally consistent. This is *not* authorized reality.
  const rootSwap=makeFixture();
  rootSwap.grant.payload.id="grant-B";
  rootSwap.grant=signMock(rootSwap.grant.payload,"test-issuer",rootSwap.keysForAdversarialFixtures["test-issuer"].privateKey);
  const grantHash=digest(rootSwap.grant),materialHash=digest(rootSwap.material);
  rootSwap.receipts=[];
  for(let i=1;i<=6;i++){
    rootSwap.receipts.push(signMock({gateNumber:i,sessionId:"session-R3-A",materialHash,grantHash,clearance:"CLEARED",eventId:`GATE_${i}`,
      predecessorHash:i===1?null:digest(rootSwap.receipts[i-2]),expiresAt:100,restatementConsistent:i===6?true:null},
      `test-gate-${i}`,rootSwap.keysForAdversarialFixtures[`test-gate-${i}`].privateKey));
  }
  rootSwap.alpha=signMock({gateNumber:7,sessionId:"session-R3-A",materialHash,grantHash,clearance:"CLEARED",
    eventId:"ALPHA_LOCK",predecessorHash:digest(rootSwap.receipts[5]),expiresAt:100},
    "test-alpha",rootSwap.keysForAdversarialFixtures["test-alpha"].privateKey);
  const rootResult=evaluateMockGateChain(rootSwap);
  tests.push({name:"re-signed coherent fixture with test-owned trust roots",expected:"CLEARED",actual:rootResult.result,
    passed:rootResult.result==="CLEARED",note:"Fixture validity does not establish legitimate external authority."});
  return tests;
}
function runBoundedSweep(){
  // 64 gate masks × 8 material-change masks × 4 temporal orders = 2048 fixtures.
  // We reuse one signed fixture per temporal class; each case changes inputs in a new fixture
  // without re-signing the affected material, to test failure on stale signed receipts.
  const outcomes={total:0,expectedMatches:0,mockCleared:0,mockNotCleared:0,failures:[]};
  for(const order of ["NO_REVOKE","BEFORE_COMMIT","AFTER_COMMIT","UNORDERED"]){
    const stable=makeFixture(order);
    for(let gateMask=0;gateMask<64;gateMask++)for(let materialMask=0;materialMask<8;materialMask++){
      // Shallow copy envelopes; clone changed pieces to avoid modifying baseline.
      const f={...stable,receipts:stable.receipts.slice(),material:JSON.parse(JSON.stringify(stable.material))};
      for(let i=0;i<6;i++)if(!(gateMask&(1<<i))){
        f.receipts[i]={...f.receipts[i],payload:{...f.receipts[i].payload,clearance:"NOT_CLEARED"}};
      }
      if(materialMask&1)f.material.plan.operations.push({id:"extra",effects:["gamma"]});
      if(materialMask&2)f.material.conditions.revision="registry-v2";
      if(materialMask&4)f.material.profile.revision="policy-v2";
      const result=evaluateMockGateChain(f);
      const expected=gateMask===63&&materialMask===0&&(order==="NO_REVOKE"||order==="AFTER_COMMIT")?"CLEARED":"NOT_CLEARED";
      outcomes.total++;
      if(result.result===expected)outcomes.expectedMatches++;
      else outcomes.failures.push({order,gateMask,materialMask,expected,observed:result.result,reason:result.reason});
      if(result.result==="CLEARED")outcomes.mockCleared++;else outcomes.mockNotCleared++;
    }
  }
  return outcomes;
}
const bounded=runBoundedSweep();
const targeted=runTargetedResearchCases();
const failedTargeted=targeted.filter(t=>!t.passed);
const report={model:"R3 integrated signed-fixture study; NOT es-xosg-9",boundedTests:bounded.total,
  boundedExpectedMatches:bounded.expectedMatches,boundedMockCleared:bounded.mockCleared,
  targetedTests:targeted.length,targetedExpectedMatches:targeted.length-failedTargeted.length,
  totalTests:bounded.total+targeted.length,totalExpectedMatches:bounded.expectedMatches+targeted.length-failedTargeted.length,
  failures:[...bounded.failures,...failedTargeted],
  limits:"Ephemeral fixture keys and supplied trust registry; event graph and coverage are unverified; no external effects."};
console.log(JSON.stringify(report,null,2));
if(report.failures.length||bounded.total!==2048||bounded.mockCleared!==2)process.exitCode=1;
