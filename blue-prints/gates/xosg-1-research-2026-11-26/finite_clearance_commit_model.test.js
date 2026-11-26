/**
 * xOSG-1 bounded research model only. Not a controller, authorization service,
 * cryptographic verifier, or es-xosg-9 instrumentation.
 * No external calls or production effects. Run with Node.js:
 *     node finite_clearance_commit_model.test.js
 * Assumed evidence flags are MOCK FIXTURE VALUES, not verified facts.
 */
"use strict";

const BINDING_FIELDS = ["candidateId","revisionId","targetId","profileId","grantId","riskAssessmentId","promptIdentity"];
const BASE_BINDING = Object.freeze({
  "candidateId": "candidate-A",
  "revisionId": "revision-1",
  "targetId": "target-A",
  "profileId": "selected-seven-gate-profile",
  "grantId": "grant-A",
  "riskAssessmentId": "risk-A",
  "promptIdentity": "prompt-A"
});
const DIRECT_EFFECTS = ["piece-alpha","piece-beta"];
const COMPOSITE_EFFECT = "composed-protected-effect";

function makeEventGraph(revocationOrder="NO_REVOKE") {
  const events=["ISSUANCE","GATE_1","GATE_2","GATE_3","GATE_4","GATE_5","GATE_6","ALPHA_LOCK","EFFECT_COMMIT"];
  const edges=[["ISSUANCE","GATE_1"],["GATE_1","GATE_2"],["GATE_2","GATE_3"],["GATE_3","GATE_4"],["GATE_4","GATE_5"],["GATE_5","GATE_6"],["GATE_6","ALPHA_LOCK"],["ALPHA_LOCK","EFFECT_COMMIT"]];
  if(revocationOrder!=="NO_REVOKE"){
    events.push("REVOCATION");
    if(revocationOrder==="BEFORE_COMMIT")edges.push(["ISSUANCE","REVOCATION"],["REVOCATION","EFFECT_COMMIT"]);
    else if(revocationOrder==="AFTER_COMMIT")edges.push(["EFFECT_COMMIT","REVOCATION"]);
    else if(revocationOrder==="UNORDERED")edges.push(["ISSUANCE","REVOCATION"]);
    else throw Error("Unrecognized revocation model");
  }
  return {events,edges};
}

function makeFiniteFixture(revocationOrder="NO_REVOKE") {
  return {
    ...BASE_BINDING,
    selectedProfile:true,
    issuerRootEstablished:true,
    issuerPrecedenceResolved:true,
    grantBindingEstablished:true,
    externalAlphaAuthorization:true,
    alphaControllerIndependent:true,
    revocationFeedComplete:true,
    eventGraph:makeEventGraph(revocationOrder),
    receipts:Array.from({length:6},(_,i)=>({
      gateNumber:i+1,receiptId:"receipt-"+(i+1),previousReceiptId:i===0?null:"receipt-"+i,
      receiptEvent:"GATE_"+(i+1),clearance:"CLEARED",signatureVerifiedFixture:true,
      validThroughCommitFixture:true,restatementConsistent:i===5?true:null,
      ...BASE_BINDING
    })),
    conditionRegistryComplete:true,
    conditionAuthorityEstablished:true,
    mandatoryConditions:[{identity:"condition-1",applicability:"APPLICABLE",support:"SUPPORTED",sufficiencyEstablished:true}],
    candidateOperations:[{identity:"operation-alpha",directEffects:["piece-alpha"]},{identity:"operation-beta",directEffects:["piece-beta"]}],
    declaredEffects:["piece-alpha","piece-beta","composed-protected-effect"],
    interactionRules:[{ifAllEffects:["piece-alpha","piece-beta"],thenEffect:"composed-protected-effect"}],
    effectCoverageEvidenceFixture:true,
    grantPermittedEffects:["piece-alpha","piece-beta","composed-protected-effect"]
  };
}

function analyzeFiniteGraph(graph) {
  if(!graph || !Array.isArray(graph.events) || !Array.isArray(graph.edges))return {valid:false,reason:"missing graph"};
  const identifiers=new Set(graph.events);
  if(identifiers.size!==graph.events.length)return {valid:false,reason:"duplicate event identity"};
  const successors=new Map(graph.events.map(x=>[x,[]]));
  for(const edge of graph.edges) {
    if(!Array.isArray(edge)||edge.length!==2||!identifiers.has(edge[0])||!identifiers.has(edge[1]))return {valid:false,reason:"invalid edge"};
    successors.get(edge[0]).push(edge[1]);
  }
  const visitState=new Map();
  function hasCycleAt(eventId) {
    if(visitState.get(eventId)===1)return true;
    if(visitState.get(eventId)===2)return false;
    visitState.set(eventId,1);
    for(const nextId of successors.get(eventId))if(hasCycleAt(nextId))return true;
    visitState.set(eventId,2);
    return false;
  }
  for(const eventId of graph.events)if(hasCycleAt(eventId))return {valid:false,reason:"cyclic event order"};
  function happensBefore(fromEvent,toEvent) {
    if(fromEvent===toEvent||!identifiers.has(fromEvent)||!identifiers.has(toEvent))return false;
    const checked=new Set([fromEvent]),remaining=[fromEvent];
    while(remaining.length>0){
      const current=remaining.shift();
      for(const nextEvent of successors.get(current)){
        if(nextEvent===toEvent)return true;
        if(!checked.has(nextEvent)){checked.add(nextEvent);remaining.push(nextEvent);}
      }
    }
    return false;
  }
  return {valid:true,happensBefore,hasEvent:id=>identifiers.has(id)};
}

function calculateModeledEffects(fixture){
  const declaredEffects=new Set(fixture.declaredEffects);
  const actualEffects=new Set();
  for(const operation of fixture.candidateOperations){
    for(const effect of operation.directEffects){
      if(!declaredEffects.has(effect))return {valid:false,reason:"direct effect outside declared domain"};
      actualEffects.add(effect);
    }
  }
  for(let pass=0;pass<=declaredEffects.size;pass++){
    let changed=false;
    for(const rule of fixture.interactionRules){
      if(!declaredEffects.has(rule.thenEffect))return {valid:false,reason:"interaction effect outside declared domain"};
      if(rule.ifAllEffects.every(effect=>actualEffects.has(effect))&&!actualEffects.has(rule.thenEffect)){
        actualEffects.add(rule.thenEffect);
        changed=true;
      }
    }
    if(!changed)return {valid:true,effects:[...actualEffects]};
  }
  return {valid:false,reason:"effect closure exceeded bound"};
}

function evaluateFiniteCommitFixture(fixture) {
  function block(reason){return {clearance:"NOT_CLEARED",reason};}
  if(fixture.selectedProfile!==true)return block("profile not selected");
  if(fixture.issuerRootEstablished!==true||fixture.issuerPrecedenceResolved!==true||
     fixture.grantBindingEstablished!==true)return block("authority scope or precedence unestablished");
  if(fixture.conditionRegistryComplete!==true||fixture.conditionAuthorityEstablished!==true)return block("mandatory condition registry unestablished");
  if(!Array.isArray(fixture.mandatoryConditions))return block("condition registry missing");
  for(const condition of fixture.mandatoryConditions){
    if(condition.applicability!=="APPLICABLE"||condition.support!=="SUPPORTED"||
       condition.sufficiencyEstablished!==true)return block("mandatory condition not established");
  }
  if(fixture.effectCoverageEvidenceFixture!==true)return block("effect universe completeness unestablished");
  const closure=calculateModeledEffects(fixture);
  if(!closure.valid)return block(closure.reason);
  const permittedEffects=new Set(fixture.grantPermittedEffects);
  if(closure.effects.some(effect=>!permittedEffects.has(effect)))return block("composition includes unauthorized effect");
  if(!Array.isArray(fixture.receipts)||fixture.receipts.length!==6)return block("missing or surplus gate receipts");
  const order=analyzeFiniteGraph(fixture.eventGraph);
  if(!order.valid)return block(order.reason);
  const orderEvents=["ISSUANCE","GATE_1","GATE_2","GATE_3","GATE_4","GATE_5","GATE_6","ALPHA_LOCK","EFFECT_COMMIT"];
  for(let idx=0;idx<orderEvents.length-1;idx++)
    if(!order.happensBefore(orderEvents[idx],orderEvents[idx+1]))return block("causal clearance chain incomplete");
  for(let gateIndex=0;gateIndex<6;gateIndex++){
    const receipt=fixture.receipts[gateIndex],expected=gateIndex+1;
    if(receipt.gateNumber!==expected||receipt.receiptEvent!=="GATE_"+expected||
       receipt.receiptId!=="receipt-"+expected||
       receipt.previousReceiptId!==(expected===1?null:"receipt-"+(expected-1)))return block("receipt identity or chain invalid");
    if(receipt.clearance!=="CLEARED")return block("gate "+expected+" NOT_CLEARED");
    if(receipt.signatureVerifiedFixture!==true||receipt.validThroughCommitFixture!==true)return block("receipt assurance or expiry unresolved");
    for(const field of BINDING_FIELDS)if(receipt[field]!==fixture[field])return block("receipt binding changed: "+field);
    if(expected===6&&receipt.restatementConsistent!==true)return block("Gate Six restatement mismatch");
  }
  if(fixture.revocationFeedComplete!==true)return block("revocation visibility incomplete");
  if(order.hasEvent("REVOCATION")&&!order.happensBefore("EFFECT_COMMIT","REVOCATION"))
    return block("revocation precedes or is unordered with effect commit");
  if(fixture.externalAlphaAuthorization!==true||fixture.alphaControllerIndependent!==true)
    return block("independent Alpha-Lock authority unavailable");
  return {clearance:"CLEARED",reason:"finite mock fixture meets all declared assumptions"};
}

function runFiniteProperties(){
  const outcomes={checked:0,mismatches:[],mockCleared:0,mockNotCleared:0,revocationTypes:{}};
  const ordering=["NO_REVOKE","BEFORE_COMMIT","AFTER_COMMIT","UNORDERED"];
  for(let gateMask=0;gateMask<64;gateMask++)
    for(let prerequisiteBits=0;prerequisiteBits<32;prerequisiteBits++)
      for(const revocationOrder of ordering){
        const f=makeFiniteFixture(revocationOrder);
        for(let k=0;k<6;k++)if(!(gateMask&(1<<k)))f.receipts[k].clearance="NOT_CLEARED";
        const issuerValid=!!(prerequisiteBits&1), registryValid=!!(prerequisiteBits&2),
              effectCoverageValid=!!(prerequisiteBits&4),alphaValid=!!(prerequisiteBits&8),
              aggregateAuthorized=!!(prerequisiteBits&16);
        f.issuerRootEstablished=issuerValid;f.conditionRegistryComplete=registryValid;
        f.effectCoverageEvidenceFixture=effectCoverageValid;f.externalAlphaAuthorization=alphaValid;
        if(!aggregateAuthorized)f.grantPermittedEffects=["piece-alpha","piece-beta"];
        const result=evaluateFiniteCommitFixture(f);
        const expectClear=gateMask===63 && prerequisiteBits===31 &&
          (revocationOrder==="NO_REVOKE"||revocationOrder==="AFTER_COMMIT");
        const good=(result.clearance==="CLEARED")===expectClear;
        outcomes.checked++;
        if(result.clearance==="CLEARED")outcomes.mockCleared++;else outcomes.mockNotCleared++;
        outcomes.revocationTypes[revocationOrder]=(outcomes.revocationTypes[revocationOrder]||0)+1;
        if(!good)outcomes.mismatches.push({gateMask,prerequisiteBits,revocationOrder,result,expectClear});
      }
  return outcomes;
}

function runFiniteCounterexamples(){
  const scenarios=[];
  function verify(name,mutation,expected="NOT_CLEARED"){
    const f=makeFiniteFixture();
    mutation(f);
    const result=evaluateFiniteCommitFixture(f);
    scenarios.push({name,expected,actual:result.clearance,pass:expected===result.clearance,reason:result.reason});
  }
  verify("complete declared fixture",()=>{},"CLEARED");
  verify("revocation known after effect",f=>f.eventGraph=makeEventGraph("AFTER_COMMIT"),"CLEARED");
  verify("revocation known before effect",f=>f.eventGraph=makeEventGraph("BEFORE_COMMIT"));
  verify("revocation incomparable with effect",f=>f.eventGraph=makeEventGraph("UNORDERED"));
  verify("unobserved revocations",f=>f.revocationFeedComplete=false);
  verify("incomplete mandatory condition registry",f=>f.conditionRegistryComplete=false);
  verify("empty unverified mandatory registry",f=>{f.mandatoryConditions=[];f.conditionRegistryComplete=false;});
  verify("conflicted condition evidence",f=>f.mandatoryConditions[0].support="CONFLICTED");
  verify("unsupported inapplicability",f=>f.mandatoryConditions[0].applicability="NOT_APPLICABLE");
  verify("unestablished condition sufficiency",f=>f.mandatoryConditions[0].sufficiencyEstablished=false);
  verify("untrusted condition authority",f=>f.conditionAuthorityEstablished=false);
  verify("unmodeled effect universe",f=>f.effectCoverageEvidenceFixture=false);
  verify("individually allowed actions compose into forbidden effect",f=>f.grantPermittedEffects=["piece-alpha","piece-beta"]);
  verify("unrecognized side effect",f=>f.candidateOperations[0].directEffects.push("unknown-side-effect"));
  verify("out of universe interaction",f=>f.interactionRules[0].thenEffect="outside-domain-effect");
  verify("issuer legitimacy unestablished",f=>f.issuerRootEstablished=false);
  verify("issuer precedence unresolved",f=>f.issuerPrecedenceResolved=false);
  verify("grant binding unestablished",f=>f.grantBindingEstablished=false);
  verify("unselected seven gate profile",f=>f.selectedProfile=false);
  verify("gate two not cleared",f=>f.receipts[1].clearance="NOT_CLEARED");
  verify("gate six not cleared",f=>f.receipts[5].clearance="CONFLICTED");
  verify("missing gate receipt",f=>f.receipts.splice(3,1));
  verify("duplicate receipt identity",f=>f.receipts[3].receiptId="receipt-3");
  verify("receipt predecessor is wrong",f=>f.receipts[4].previousReceiptId="receipt-2");
  verify("malformed receipt signature",f=>f.receipts[0].signatureVerifiedFixture=false);
  verify("stale receipt",f=>f.receipts[2].validThroughCommitFixture=false);
  verify("changed candidate",f=>f.receipts[2].candidateId="different-candidate");
  verify("changed revision",f=>f.receipts[0].revisionId="new-revision");
  verify("changed target",f=>f.receipts[5].targetId="other-target");
  verify("changed risk assessment",f=>f.receipts[4].riskAssessmentId="risk-updated");
  verify("gate six restatement mismatch",f=>f.receipts[5].restatementConsistent=false);
  verify("Alpha-Lock controller missing",f=>f.alphaControllerIndependent=false);
  verify("external Alpha-Lock authorization absent",f=>f.externalAlphaAuthorization=false);
  verify("causal Gate Two to Gate Three edge removed",f=>f.eventGraph.edges=f.eventGraph.edges.filter(e=>!(e[0]==="GATE_2"&&e[1]==="GATE_3")));
  verify("Alpha-Lock is not ordered before effect",f=>f.eventGraph.edges=f.eventGraph.edges.filter(e=>!(e[0]==="ALPHA_LOCK"&&e[1]==="EFFECT_COMMIT")));
  verify("causal cycle",f=>f.eventGraph.edges.push(["GATE_3","GATE_2"]));
  verify("missing effect commit event",f=>f.eventGraph.events=f.eventGraph.events.filter(e=>e!=="EFFECT_COMMIT"));
  verify("two-step emergent effect becomes unauthorized",f=>{
    f.declaredEffects.push("second-order-protected-effect");
    f.interactionRules.push({ifAllEffects:["composed-protected-effect","piece-beta"],thenEffect:"second-order-protected-effect"});
  });
  return scenarios;
}

const exhaustiveProperties = runFiniteProperties();
const targetedCounterexamples = runFiniteCounterexamples();
const failedCases = [
  ...exhaustiveProperties.mismatches,
  ...targetedCounterexamples.filter(testCase => !testCase.pass)
];
const resultSummary = {
  researchOnly: true,
  exhaustiveCases: exhaustiveProperties.checked,
  targetedCases: targetedCounterexamples.length,
  totalCases: exhaustiveProperties.checked + targetedCounterexamples.length,
  passedCases: exhaustiveProperties.checked + targetedCounterexamples.length - failedCases.length,
  failedCases: failedCases.length,
  mockClearedInExhaustiveDomain: exhaustiveProperties.mockCleared,
  mockNotClearedInExhaustiveDomain: exhaustiveProperties.mockNotCleared,
  failures: failedCases
};
console.log(JSON.stringify(resultSummary, null, 2));
if (failedCases.length > 0 || exhaustiveProperties.checked !== 8192 || exhaustiveProperties.mockCleared !== 2)
  process.exitCode = 1;
