/**
 * xOSG-1 Research-only Alpha-Lock mock; NOT an operational gate.
 * No external I/O, credentials, filesystem writes, network calls, or production actions.
 * Every authenticated/independent flag is test data, not real-world verification.
 * Run: node alpha_lock_research_model.test.js
 */

"use strict";

const BASE_CONTEXT = Object.freeze({
  "candidate": "candidate-A",
  "revision": "revision-1",
  "target": "test-target",
  "effect": "test-effect",
  "profile": "seven-gate-profile-1",
  "authorization": "operator-grant-1",
  "risk": "risk-assessment-1"
});

function makeMockReceipts() {
  return Array.from({length:6},(_,index)=>({
    gateNumber:index+1,sequencePosition:index+1,clearanceResult:"CLEARED",
    receiptAuthenticated:true,...BASE_CONTEXT,expired:false,
    restatementConsistent:index===5?true:null,
    noWorkRequiredByPolicy:index===2?true:null
  }));
}

function evaluateMockAlphaLock({receipts=makeMockReceipts(),profileSelected=true,externalAlphaAuthorization=true,
  independentControllerPresent=true,authorizationRevoked=false,current={...BASE_CONTEXT}}={}) {
  if(!profileSelected)return {result:"NOT_CLEARED",reason:"profile not selected"};
  if(!Array.isArray(receipts)||receipts.length!==6)return {result:"NOT_CLEARED",reason:"incomplete receipt chain"};
  for(let receiptIndex=0;receiptIndex<6;receiptIndex++) {
    const receipt=receipts[receiptIndex],expectedGate=receiptIndex+1;
    if(receipt.gateNumber!==expectedGate||receipt.sequencePosition!==expectedGate)return {result:"NOT_CLEARED",reason:"receipt order"};
    if(receipt.clearanceResult!=="CLEARED")return {result:"NOT_CLEARED",reason:"gate "+expectedGate+" not cleared"};
    if(receipt.receiptAuthenticated!==true)return {result:"NOT_CLEARED",reason:"receipt not authenticated"};
    if(receipt.expired===true)return {result:"NOT_CLEARED",reason:"receipt expired"};
    for(const contextField of Object.keys(BASE_CONTEXT))
      if(receipt[contextField]!==current[contextField])return {result:"NOT_CLEARED",reason:"context changed: "+contextField};
    if(expectedGate===6&&receipt.restatementConsistent!==true)return {result:"NOT_CLEARED",reason:"restatement mismatch"};
  }
  if(authorizationRevoked)return {result:"NOT_CLEARED",reason:"grant revoked"};
  if(!externalAlphaAuthorization||!independentControllerPresent)return {result:"NOT_CLEARED",reason:"no independent Alpha-Lock authority"};
  return {result:"CLEARED",reason:"mock fixture meets checks"};
}

function runResearchTests() {
  const tests=[];
  function caseWith(name,modify,expected) {
    const fixture={receipts:makeMockReceipts(),profileSelected:true,externalAlphaAuthorization:true,
      independentControllerPresent:true,authorizationRevoked:false,current:{...BASE_CONTEXT}};
    modify(fixture);
    const observed=evaluateMockAlphaLock(fixture);
    tests.push({name,expected,observed:observed.result,passed:observed.result===expected,reason:observed.reason});
  }
  caseWith("complete mock receipt chain",()=>{},"CLEARED");
  for(let gate=1;gate<=6;gate++)
    caseWith("gate "+gate+" NOT_CLEARED",fixture=>fixture.receipts[gate-1].clearanceResult="NOT_CLEARED","NOT_CLEARED");
  for(const state of ["UNRESOLVED","CONFLICTED","REFUTED","NOT_ADOPTED","NOT_APPLICABLE"])
    caseWith("gate five state "+state,fixture=>fixture.receipts[4].clearanceResult=state,"NOT_CLEARED");
  caseWith("unselected profile",fixture=>fixture.profileSelected=false,"NOT_CLEARED");
  caseWith("missing gate six receipt",fixture=>fixture.receipts.pop(),"NOT_CLEARED");
  caseWith("out of order",fixture=>[fixture.receipts[0],fixture.receipts[1]]=[fixture.receipts[1],fixture.receipts[0]],"NOT_CLEARED");
  caseWith("duplicate gate number",fixture=>fixture.receipts[1].gateNumber=1,"NOT_CLEARED");
  caseWith("receipt unauthenticated",fixture=>fixture.receipts[3].receiptAuthenticated=false,"NOT_CLEARED");
  caseWith("receipt expired",fixture=>fixture.receipts[0].expired=true,"NOT_CLEARED");
  caseWith("authorization revoked",fixture=>fixture.authorizationRevoked=true,"NOT_CLEARED");
  caseWith("restatement conflict",fixture=>fixture.receipts[5].restatementConsistent=false,"NOT_CLEARED");
  caseWith("external Alpha-Lock not authorized",fixture=>fixture.externalAlphaAuthorization=false,"NOT_CLEARED");
  caseWith("Alpha-Lock controller not independent",fixture=>fixture.independentControllerPresent=false,"NOT_CLEARED");
  for(const contextField of Object.keys(BASE_CONTEXT))
    caseWith("change to "+contextField,fixture=>fixture.current[contextField]="other-"+contextField,"NOT_CLEARED");
  caseWith("policy-established no-handoff is still cleared",fixture=>fixture.receipts[2].noWorkRequiredByPolicy=true,"CLEARED");
  caseWith("missing gate three cannot be skipped",fixture=>fixture.receipts.splice(2,1),"NOT_CLEARED");
  return tests;
}

const researchTestResults = runResearchTests();
const failedTests = researchTestResults.filter(test => !test.passed);
const clearedTests = researchTestResults.filter(test => test.observed === "CLEARED");
console.log(JSON.stringify({
  model: "research mock only, not es-xosg-9",
  total: researchTestResults.length,
  passed: researchTestResults.length - failedTests.length,
  failed: failedTests.length,
  mockedCleared: clearedTests.length,
  mockedNotCleared: researchTestResults.length - clearedTests.length,
  failures: failedTests
}, null, 2));
if (failedTests.length > 0) process.exitCode = 1;
