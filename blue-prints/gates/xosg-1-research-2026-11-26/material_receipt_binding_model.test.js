/**
 * xOSG-1 Research Mock R2-01: CONTENT-to-RECEIPT structural binding study.
 * Not es-xosg-9, not cryptographic authentication, not production clearance.
 * Canonical text equality is only a simulated immutable snapshot contract.
 * Run: node material_receipt_binding_model.test.js
 */
"use strict";

function canonicalMaterialText(value){
  if(value===null||typeof value==="string"||typeof value==="number"||typeof value==="boolean")return JSON.stringify(value);
  if(Array.isArray(value))return "["+value.map(canonicalMaterialText).join(",")+"]";
  if(typeof value==="object")return "{"+Object.keys(value).sort().map(k=>JSON.stringify(k)+":"+canonicalMaterialText(value[k])).join(",")+"}";
  throw Error("Unsupported value in bounded fixture: "+typeof value);
}

function makeMaterialFixture(){
  const source={
    candidate:{identity:"candidate-A",revision:"r1",target:"target-A",promptIdentity:"prompt-A",riskIdentity:"risk-A"},
    operationPlan:{
      operations:[{identity:"action-alpha",effects:["piece-alpha"]},{identity:"action-beta",effects:["piece-beta"]}],
      interactionRules:[{requires:["piece-alpha","piece-beta"],generates:"composite-protected-effect"}],
      declaredEffects:["piece-alpha","piece-beta","piece-gamma","composite-protected-effect"]
    },
    conditionRegistry:{registryRevision:"conditions-v1",completenessEstablished:true,
      requirements:[{identity:"condition-1",assertion:"requested effect authorized",evidence:"SUPPORTED",method:"checked"}]},
    grant:{identity:"grant-A",revision:"grant-v1",permittedEffects:["piece-alpha","piece-beta","piece-gamma","composite-protected-effect"]},
    profile:{identity:"seven-gate-profile",revision:"policy-v1",selected:true}
  };
  const bound=canonicalMaterialText(source);
  const receipts=Array.from({length:6},(_,i)=>({
    gateNumber:i+1,receiptId:"receipt-"+(i+1),priorReceiptId:i===0?null:"receipt-"+i,
    outcome:"CLEARED",authenticatedFixture:true,boundMaterialText:bound
  }));
  return {source,receipts,externalAlphaAuthorizedFixture:true,alphaControllerIndependentFixture:true};
}

function evaluateMaterialBoundFixture(fixture){
  function denied(reason){return {outcome:"NOT_CLEARED",reason};}
  if(!fixture.source.profile.selected)return denied("profile not selected");
  if(!fixture.source.conditionRegistry.completenessEstablished)return denied("condition registry incomplete");
  if(fixture.source.conditionRegistry.requirements.some(c=>c.evidence!=="SUPPORTED"))return denied("mandatory evidence unresolved");
  if(!Array.isArray(fixture.receipts)||fixture.receipts.length!==6)return denied("missing gate receipt");
  const currentMaterial=canonicalMaterialText(fixture.source);
  for(let idx=0;idx<6;idx++){
    const r=fixture.receipts[idx];
    if(r.gateNumber!==idx+1||r.receiptId!=="receipt-"+(idx+1)||r.priorReceiptId!==(idx===0?null:"receipt-"+idx))
      return denied("receipt order / linkage invalid");
    if(r.outcome!=="CLEARED"||r.authenticatedFixture!==true)return denied("uncleared or unauthenticated mock gate");
    if(r.boundMaterialText!==currentMaterial)return denied("material changed after clearance");
  }
  if(!fixture.externalAlphaAuthorizedFixture||!fixture.alphaControllerIndependentFixture)
    return denied("independent Alpha-Lock authorization missing");
  const present=new Set();
  for(const operation of fixture.source.operationPlan.operations)for(const effect of operation.effects)present.add(effect);
  for(let pass=0;pass<=fixture.source.operationPlan.declaredEffects.length;pass++){
    let changed=false;
    for(const rule of fixture.source.operationPlan.interactionRules){
      if(rule.requires.every(effect=>present.has(effect))&&!present.has(rule.generates)){
        present.add(rule.generates);changed=true;
      }
    }
    if(!changed)break;
  }
  if([...present].some(effect=>!fixture.source.operationPlan.declaredEffects.includes(effect)))
    return denied("effect outside declared domain");
  if([...present].some(effect=>!fixture.source.grant.permittedEffects.includes(effect)))
    return denied("effect outside grant scope");
  return {outcome:"CLEARED",reason:"all structural fixture conditions satisfied"};
}

function applyMaterialMutation(fixture,axis){
  if(axis===0)fixture.source.operationPlan.operations.push({identity:"action-gamma",effects:["piece-gamma"]});
  else if(axis===1){
    fixture.source.conditionRegistry.registryRevision="conditions-v2";
    fixture.source.conditionRegistry.requirements.push({identity:"condition-2",assertion:"updated rule",evidence:"SUPPORTED",method:"checked"});
  }
  else if(axis===2)fixture.source.grant.permittedEffects.push("unrelated-extra-permission");
  else if(axis===3)fixture.source.profile.revision="policy-v2";
  else if(axis===4)fixture.source.candidate.promptIdentity="prompt-updated";
  else throw Error("Unexpected axis");
}

function runMaterialExhaustiveChecks(){
  let total=0,cleared=0,blocked=0;
  const mismatches=[];
  for(let gateMask=0;gateMask<64;gateMask++){
    for(let changeMask=0;changeMask<32;changeMask++){
      const f=makeMaterialFixture();
      for(let gate=0;gate<6;gate++)if(!(gateMask&(1<<gate)))f.receipts[gate].outcome="NOT_CLEARED";
      for(let axis=0;axis<5;axis++)if(changeMask&(1<<axis))applyMaterialMutation(f,axis);
      const actual=evaluateMaterialBoundFixture(f);
      const expected=gateMask===63&&changeMask===0?"CLEARED":"NOT_CLEARED";
      total++;
      if(actual.outcome==="CLEARED")cleared++;else blocked++;
      if(actual.outcome!==expected)mismatches.push({gateMask,changeMask,actual,expected});
    }
  }
  return {total,cleared,blocked,mismatches};
}

function runMaterialTargetedChecks(){
  const checks=[];
  function check(name,change,expected="NOT_CLEARED"){
    const fixture=makeMaterialFixture();
    change(fixture);
    const actual=evaluateMaterialBoundFixture(fixture);
    checks.push({name,expected,actual:actual.outcome,passed:actual.outcome===expected});
  }
  check("original bound plan",()=>{},"CLEARED");
  check("new permitted operation without new gates",f=>applyMaterialMutation(f,0));
  check("new supported condition without new gates",f=>applyMaterialMutation(f,1));
  check("expanded grant without new gates",f=>applyMaterialMutation(f,2));
  check("same profile name with changed policy revision",f=>applyMaterialMutation(f,3));
  check("same candidate name with changed prompt identity",f=>applyMaterialMutation(f,4));
  check("change risk identity",f=>f.source.candidate.riskIdentity="new-risk");
  check("change target identity",f=>f.source.candidate.target="new-target");
  check("change effect interaction",f=>f.source.operationPlan.interactionRules[0].generates="piece-gamma");
  check("remove effect interaction",f=>f.source.operationPlan.interactionRules=[]);
  check("change supported condition evidence method",f=>f.source.conditionRegistry.requirements[0].method="alternate-method");
  check("receipt snapshot changed",f=>f.receipts[4].boundMaterialText="forged-snapshot");
  check("gate two not cleared",f=>f.receipts[1].outcome="NOT_CLEARED");
  check("gate three skipped",f=>f.receipts.splice(2,1));
  check("condition registry no longer complete",f=>f.source.conditionRegistry.completenessEstablished=false);
  check("Alpha-Lock not independently allowed",f=>f.alphaControllerIndependentFixture=false);
  check("source-and-receipts forged together exposes missing real authentication",f=>{
    applyMaterialMutation(f,0);
    const forged=canonicalMaterialText(f.source);
    for(const receipt of f.receipts)receipt.boundMaterialText=forged;
  },"CLEARED");
  return checks;
}

const exhaustive=runMaterialExhaustiveChecks();
const targeted=runMaterialTargetedChecks();
const failed=[...exhaustive.mismatches,...targeted.filter(t=>!t.passed)];
console.log(JSON.stringify({
  model:"R2-01 material binding, mocked trust only",
  exhaustive:exhaustive.total,
  targeted:targeted.length,
  tested:exhaustive.total+targeted.length,
  passed:exhaustive.total+targeted.length-failed.length,
  mockClearedExhaustive:exhaustive.cleared,
  mockBlockedExhaustive:exhaustive.blocked,
  explicitlyDemonstratedTrustGap:"source plus mock receipts can be forged together",
  failures:failed
},null,2));
if(failed.length>0||exhaustive.total!==2048||exhaustive.cleared!==1)process.exitCode=1;
