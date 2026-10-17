'use strict';
const questions=[
 {project:'Photo Library',title:'What should we explore next?',options:['Organize the collection','Refine the preview','Review accessibility']},
 {project:'Studio Journal',title:'What should we shape next?',options:['Draft a new entry','Collect a few references','Review the layout']},
 {project:'Learning Notes',title:'Where should we begin?',options:['Try a small sample','Review the notes','Explore a new topic']}
];
const projects={journal:['Studio Journal','A fictional space for ideas, references, and small creative experiments.'],library:['Photo Library','A fictional collection for exploring image layouts and browsing patterns.'],planner:['Weekend Planner','A fictional planner for sketching a relaxed weekend.'],reading:['Reading List','A fictional shelf for keeping a few interesting reads together.'],sound:['Sound Sketch','A fictional notebook for short audio ideas. No microphone or audio app is connected.'],learning:['Learning Notes','A fictional place to choose a topic and record a next step.']};
const storageKey='pastel-workspace-demo-v1',selectionPrefix='pastel-workspace-current-choices-v1';
const localDay=()=>{const d=new Date();return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;};
const selectionKey=()=>selectionPrefix+':'+localDay();
let selections={day:localDay(),answers:{}};
try{const saved=JSON.parse(sessionStorage.getItem(selectionKey()));if(saved?.day===localDay()&&saved.answers&&typeof saved.answers==='object')selections=saved;}catch{}
let state={drafts:questions.map(()=>({option:null,note:'',saved:false}))},current=0,storageAvailable=true;
try{const data=JSON.parse(localStorage.getItem(storageKey));if(Array.isArray(data?.drafts)&&data.drafts.length===3)state={...data,drafts:data.drafts.map(d=>({...d,option:Number.isInteger(d.option)&&d.option>=0&&d.option<3?d.option:null,note:typeof d.note==='string'?d.note.slice(0,300):'',saved:d.saved===true}))};}catch{storageAvailable=false;}
const $=id=>document.getElementById(id);
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(state));storageAvailable=true;return true;}catch{storageAvailable=false;return false;}}
// Use one renderer for the live card and its two adjacent content previews.
const slotIds=['question-project','question-title','options','note','counter','save-status'];
slotIds.forEach(id=>$(id).dataset.slot=id);
function renderCard(root,index,preview=false){
 const q=questions[index],d=state.drafts[index],slot=id=>root.querySelector(`[data-slot="${id}"]`);
 slot('question-project').textContent=q.project;slot('question-title').textContent=q.title;
 slot('options').replaceChildren();
 q.options.forEach((option,i)=>{const label=document.createElement('label');label.className='option';const radio=document.createElement('input');radio.type='radio';radio.name=preview?'preview-choice-'+index:'choice';radio.value=String(i);radio.setAttribute('aria-label',option);radio.checked=d.option===i;radio.tabIndex=preview?-1:0;
 if(!preview)radio.addEventListener('change',()=>{d.option=i;d.saved=false;persist();$('save-status').textContent='';});
 const number=document.createElement('span');number.className='number';number.textContent=String(i+1);number.setAttribute('aria-hidden','true');const text=document.createElement('span');text.textContent=option;label.append(radio,number,text);slot('options').append(label);});
 slot('note').value=d.note;slot('counter').textContent=`${index+1} / 3`;
 root.querySelectorAll('[data-question]').forEach((b,i)=>{b.classList.toggle('active',i===index);b.setAttribute('aria-current',i===index?'step':'false');});
 slot('save-status').textContent=d.saved&&selections.day===localDay()&&selections.answers[index]?'Saved in this browser only. Not sent to anyone.':'';
 root.dataset.questionIndex=String(index);
}
function render(){renderCard($('question-form'),current);}
let swipe;
function move(delta){swipe.step(delta);}
$('note').addEventListener('input',e=>{const d=state.drafts[current];d.note=e.target.value;d.saved=false;persist();$('save-status').textContent='';});
$('home-button').addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
$('question-form').addEventListener('keydown',e=>{if(e.target.matches('input'))return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}});
swipe=installQuestionSwipe($('question-form'),delta=>{current=(current+delta%3+3)%3;render();},(root,offset)=>renderCard(root,(current+offset+3)%3,true));
$('question-form').addEventListener('submit',e=>{
 e.preventDefault();const d=state.drafts[current];
 if(d.option===null&&!d.note.trim()){$('save-status').textContent='Choose an option or add a thought first.';return;}
 d.saved=true;
 if(!persist()){d.saved=false;$('save-status').textContent='Browser storage is unavailable. Nothing was saved or sent.';return;}
 if(selections.day!==localDay())selections={day:localDay(),answers:{}};
 const snapshot={option:d.option,note:d.note};selections.answers[current]=snapshot;
 try{sessionStorage.setItem(selectionKey(),JSON.stringify(selections));$('save-status').textContent='Saved in this browser only. Not sent to anyone.';}
 catch{$('save-status').textContent='Draft saved locally. Choices may not survive refresh. Nothing was sent.';}
});
function renderSelections(){
 const list=$('selections-list');list.replaceChildren();let count=0;
 if(selections.day===localDay())questions.forEach((q,i)=>{const answer=selections.answers[i];if(!answer)return;count++;
  const item=document.createElement('article');item.className='selection-item';
  const title=document.createElement('h3');title.textContent=q.project;item.append(title);
  if(Number.isInteger(answer.option)&&q.options[answer.option]){const option=document.createElement('p');option.className='selection-option';option.textContent=q.options[answer.option];item.append(option);}
  if(typeof answer.note==='string'&&answer.note.trim()){const note=document.createElement('p');note.className='selection-note';note.textContent=answer.note;item.append(note);}
  list.append(item);
 });
 if(!count){const empty=document.createElement('p');empty.className='selection-empty';empty.textContent='No choices saved in this session yet.';list.append(empty);}
}
$('open-selections').addEventListener('click',()=>{renderSelections();$('selections-dialog').showModal();});
$('close-selections').addEventListener('click',()=>$('selections-dialog').close());
$('selections-dialog').addEventListener('click',e=>{if(e.target!==e.currentTarget)return;const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.currentTarget.close();});
function showDetail(title,description){$('detail-title').textContent=title;$('detail-description').textContent=description;$('detail').showModal();}
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>showDetail(...projects[b.dataset.project])));$('other-projects').addEventListener('click',()=>showDetail('Other projects','This demo contains six fictional projects. No live project directory is connected.'));$('date-button').addEventListener('click',()=>showDetail('Oct 17 · Demo date','A fixed example date. This page does not read your calendar or work history.'));$('close-detail').addEventListener('click',()=>$('detail').close());$('detail-done').addEventListener('click',()=>$('detail').close());$('detail').addEventListener('click',e=>{if(e.target===$('detail')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});render();
