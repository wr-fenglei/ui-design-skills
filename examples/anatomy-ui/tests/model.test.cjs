const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const M = require('../model.js');
const sandbox = {}; vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../data.js'), 'utf8'), sandbox);
const seed = JSON.parse(JSON.stringify(sandbox.FieldnotesSeed));
test('12 unique, valid seed records; invalid input and duplicate IDs rejected', () => {
  assert.equal(seed.length, 12); assert.deepEqual(M.validateRecords(seed), []);
  assert.ok(M.validateRecords([...seed, seed[0]]).some(x => x.includes('duplicate')));
  assert.ok(M.validateRecords([{...seed[0], title:' ', category:'Unknown'}]).length >= 2);
  assert.ok(M.validateRecords(Array(501).fill(seed[0])).length);
  assert.ok(M.validateRecords([{...seed[0],updated:'2026-02-31'}]).length);
});
test('optional upstream follow is time-based and stillness snaps to target', () => {
  const once=M.follow(0,1,1/30,.2), twice=M.follow(M.follow(0,1,1/60,.2),1,1/60,.2);
  assert.ok(Math.abs(once-twice)<1e-12); assert.equal(M.follow(0,1,1/60,.2,true),1);
  assert.throws(()=>M.follow(0,1,1/60,0),RangeError);
});
test('search, category, sorting, selection and counts derive from one state', () => {
  const result = M.derive(seed, {query:'maya', category:'Discovery', sort:'title', direction:'asc', selectedId:'missing'});
  assert.equal(result.count, 1); assert.equal(result.selected.id, 'FN-012'); assert.equal(result.total, 12);
  assert.equal(M.derive(seed,{query:'impossible123'}).selected, null);
  const a = M.derive(seed, {sort:'updated', direction:'asc'}), b = M.derive(seed, {sort:'updated', direction:'desc'});
  assert.equal(a.visible[0].id, 'FN-001'); assert.equal(b.visible[0].id, 'FN-012');
  assert.equal(seed[0].id,'FN-012');
});
test('insets preserve nonnegative content size and bounded corner radius', () => {
  assert.deepEqual(M.insetBox(100,60,12,8), {width:84,height:44,radius:4,inset:8});
  for (const w of [0,10,40,100]) for (const h of [0,10,40]) for (const n of [-20,4,50,Infinity]) {
    const b=M.insetBox(w,h,100,n); assert.ok(b.width>=0 && b.height>=0); assert.ok(b.radius>=0 && b.radius<=Math.min(b.width,b.height)/2);
  }
});
test('viewport contract, bounded spacing and typography roles', () => {
  assert.equal(M.layoutFor(390).available,358); assert.equal(M.layoutFor(768).split,false);
  assert.equal(M.layoutFor(1440).available,1320); assert.equal(M.layoutFor(1440).split,true);
  assert.equal(M.spacing(-3),4); assert.equal(M.spacing(99),32); assert.equal(M.TYPE.body,14);
  assert.equal(M.overflowReport([{left:0,right:390},{left:0,right:392}],390).length,1);
});
test('storage reports real success, round-trips, handles denial and corrupt payload', () => {
  const data = new Map(), storage={getItem:k=>data.get(k)??null,setItem:(k,v)=>data.set(k,v)};
  assert.equal(M.save(storage,'test',seed).ok,true); assert.deepEqual(M.load(storage,'test',[]).records,seed);
  const denied={getItem(){throw Error('denied')},setItem(){throw Error('quota')}};
  assert.equal(M.save(denied,'test',seed).ok,false); assert.equal(M.load(denied,'test',seed).source,'fallback');
  data.set('test','{'); assert.equal(M.load(storage,'test',seed).source,'fallback');
  assert.equal(data.get('test'),'{');
});
function luminance(hex) { const c=hex.match(/[a-f\d]{2}/gi).map(n=>parseInt(n,16)/255).map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4); return .2126*c[0]+.7152*c[1]+.0722*c[2]; }
test('actual text/surface pairs reach 4.5:1 (new UI palette)', () => {
  const css=fs.readFileSync(path.join(__dirname,'../tokens.css'),'utf8');
  const tokens=Object.fromEntries([...css.matchAll(/--([\w-]+):\s*(#[a-f\d]{6})(?=;)/gi)].map(m=>[m[1],m[2]]));
  const pairs=[['ink','page'],['text','page'],['secondary','page'],['text','surface'],['secondary','surface'],['green','green-bg'],['amber','amber-bg'],['danger','surface']];
  for(const [fg,bg] of pairs){ const [a,b]=[luminance(tokens[fg]),luminance(tokens[bg])].sort((a,b)=>b-a); const ratio=(a+.05)/(b+.05); console.log(`${fg}/${bg}: ${ratio.toFixed(2)}:1`); assert.ok(ratio>=4.5,`${fg}/${bg}: ${ratio}`); }
});
