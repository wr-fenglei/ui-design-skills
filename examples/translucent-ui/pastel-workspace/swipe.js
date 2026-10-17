/* Continuous three-card rail. Adjacent cards always contain their own question.
   Each pointer contact / wheel burst owns one adjacent destination. No timed text swap. */
function installQuestionSwipe(card, change, renderPreview) {
  const stack=card.parentElement, viewport=document.createElement('div');
  viewport.className='question-window';stack.insertBefore(viewport,card);viewport.append(card);
  const previous=card.cloneNode(true), next=card.cloneNode(true);
  for(const preview of [previous,next]){
    preview.removeAttribute('id');preview.classList.add('question-preview');
    preview.setAttribute('aria-hidden','true');preview.inert=true;
    preview.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
    preview.querySelectorAll('[aria-live]').forEach(el=>el.removeAttribute('aria-live'));
    preview.querySelectorAll('input,button').forEach(el=>el.tabIndex=-1);
    viewport.append(preview);
  }
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const editable='input:not([type="radio"]),textarea,select,[contenteditable="true"],.note';
  let position=0,base=0,target=0,velocity=0,raf=0,lastFrame=0,pointer=null,wheel=null,wheelTimer=0,suppressClick=false;
  const span=()=>card.offsetWidth+16;
  const scale=()=>viewport.getBoundingClientRect().width/viewport.offsetWidth||1;
  const refresh=()=>{renderPreview(previous,-1);renderPreview(next,1);};
  function paint(){
    const nearest=Math.round(position);
    if(nearest!==base){const delta=nearest-base;base=nearest;change(delta);refresh();}
    const x=(base-position)*span();
    card.style.transform=`translate3d(${x}px,0,0)`;
    previous.style.transform=`translate3d(${x-span()}px,0,0)`;
    next.style.transform=`translate3d(${x+span()}px,0,0)`;
    stack.dataset.motion=pointer?.axis==='x'?'dragging':wheel?'wheel':raf?'settling':'idle';
  }
  function stop(){cancelAnimationFrame(raf);raf=0;lastFrame=0;}
  function animate(time){
    const dt=Math.min((time-lastFrame)/1000||1/60,.034);lastFrame=time;
    // Analytic critically damped spring, including velocity carried from the hand.
    const omega=24,delta=position-target,c=velocity+omega*delta,decay=Math.exp(-omega*dt);
    position=target+(delta+c*dt)*decay;velocity=(velocity-omega*c*dt)*decay;
    if(Math.abs(position-target)<.0006&&Math.abs(velocity)<.015){position=target;velocity=0;raf=0;paint();return;}
    paint();raf=requestAnimationFrame(animate);
  }
  function settle(destination,releaseVelocity=0){
    stop();target=destination;velocity=Math.max(-6,Math.min(6,releaseVelocity));
    // Carry velocity without overshooting this gesture's one-page destination.
    const distance=target-position;if(velocity*distance>0)velocity=Math.sign(velocity)*Math.min(Math.abs(velocity),24*Math.abs(distance));if(!distance)velocity=0;
    if(reduced.matches){position=target;velocity=0;paint();return;}
    lastFrame=performance.now();raf=requestAnimationFrame(animate);paint();
  }
  function gestureDestination(g,v=0,cancelled=false){
    if(cancelled)return g.anchor;
    const distance=(position-g.start)*g.direction;
    if(v*g.direction<-.65)return g.anchor;
    return distance>=.16||v*g.direction>.65?g.anchor+g.direction:g.anchor;
  }
  function withinGesture(value,g){
    // A long contact cannot cross the second page; reversing can return to its origin.
    const end=g.anchor+g.direction;
    return Math.max(Math.min(g.start,g.anchor,end),Math.min(Math.max(g.start,g.anchor,end),value));
  }
  function begin(id,x,y,node){
    if(node.closest(editable+',button,a'))return;
    suppressClick=false;
    pointer={id,x,y,lastX:x,lastTime:performance.now(),start:position,axis:null,scale:scale(),v:0};
    // Do not interrupt for an incidental tap or vertical scroll. Claim only on x lock.
  }
  function track(id,x,y,event){
    if(!pointer||pointer.id!==id)return;
    const p=pointer,dx=(x-p.x)/p.scale,dy=(y-p.y)/p.scale;
    if(!p.axis){
      if(Math.max(Math.abs(dx),Math.abs(dy))<8)return;
      if(Math.abs(dy)>Math.abs(dx)*1.15){p.axis='y';return;}
      if(Math.abs(dx)<=Math.abs(dy)*1.15)return;
      p.axis='x';p.anchor=raf?target:Math.round(position);p.direction=dx<0?1:-1;stop();clearTimeout(wheelTimer);wheel=null;refresh();
      p.start=position;p.lastX=p.x;p.lastTime=performance.now()-16;
      try{viewport.setPointerCapture?.(id);}catch{}
    }
    if(p.axis!=='x')return;
    if(event.cancelable)event.preventDefault();
    const now=performance.now(),delta=-(x-p.lastX)/p.scale/span();
    const sample=delta/Math.max((now-p.lastTime)/1000,.008);
    p.v=p.v*.25+Math.max(-6,Math.min(6,sample))*.75;
    position=withinGesture(position+delta,p);p.lastX=x;p.lastTime=now;paint();
  }
  function end(id,cancelled=false){
    if(!pointer||pointer.id!==id)return;
    const p=pointer;pointer=null;
    try{if(viewport.hasPointerCapture?.(id))viewport.releasePointerCapture(id);}catch{}
    if(p.axis!=='x')return;
    suppressClick=true;
    const v=performance.now()-p.lastTime>100?0:p.v;
    settle(gestureDestination(p,v,cancelled),cancelled?0:v);
  }
  viewport.addEventListener('click',e=>{if(suppressClick&&e.detail!==0){e.preventDefault();e.stopImmediatePropagation();suppressClick=false;}},true);
  if('PointerEvent' in window){
    viewport.addEventListener('pointerdown',e=>{if(!e.isPrimary){if(pointer)end(pointer.id,true);return;}if(e.button===0)begin(e.pointerId,e.clientX,e.clientY,e.target);});
    window.addEventListener('pointermove',e=>track(e.pointerId,e.clientX,e.clientY,e),{passive:false});
    window.addEventListener('pointerup',e=>end(e.pointerId));
    window.addEventListener('pointercancel',e=>end(e.pointerId,true));
    viewport.addEventListener('lostpointercapture',e=>end(e.pointerId,true));
  }else{
    viewport.addEventListener('touchstart',e=>{if(e.touches.length!==1){if(pointer)end(pointer.id,true);return;}const t=e.changedTouches[0];begin(t.identifier,t.clientX,t.clientY,e.target);},{passive:true});
    window.addEventListener('touchmove',e=>{if(e.touches.length!==1){if(pointer)end(pointer.id,true);return;}const t=e.touches[0];track(t.identifier,t.clientX,t.clientY,e);},{passive:false});
    window.addEventListener('touchend',e=>{for(const t of e.changedTouches)end(t.identifier);});
    window.addEventListener('touchcancel',e=>{for(const t of e.changedTouches)end(t.identifier,true);});
  }
  viewport.addEventListener('wheel',e=>{
    if(e.ctrlKey||e.target.closest(editable)||pointer)return;
    const unit=e.deltaMode===1?16:e.deltaMode===2?span():1,dx=e.deltaX*unit,dy=e.deltaY*unit;
    if(Math.abs(dx)<=Math.abs(dy)*1.2||Math.abs(dx)<.1)return;
    if(e.cancelable)e.preventDefault();
    const now=performance.now(),direction=Math.sign(dx);
    // The DOM WheelEvent has no portable finger-up/momentum phase. Keep the burst
    // until300ms of quiet, or an explicit >=40px reversal. Decaying tails do not rearm.
    if(wheel&&direction!==wheel.direction){wheel.reverse+=Math.abs(dx);if(wheel.reverse>=40)wheel=null;}
    else if(wheel)wheel.reverse=0;
    if(!wheel){wheel={anchor:raf?target:Math.round(position),start:position,direction,last:now-16,reverse:0,committed:false};refresh();}
    clearTimeout(wheelTimer);wheelTimer=setTimeout(()=>{wheel=null;paint();},300);
    if(wheel.committed){paint();return;}
    const delta=dx/scale()/span(),v=Math.max(-6,Math.min(6,delta/Math.max((now-wheel.last)/1000,.016)));
    stop();position=withinGesture(position+delta,wheel);wheel.last=now;paint();
    const goal=gestureDestination(wheel,0);
    if(goal!==wheel.anchor)wheel.committed=true;
    // Motion starts on every event; the burst timer never delays the spring.
    settle(goal,v);
  },{passive:false});
  window.addEventListener('blur',()=>{if(pointer)end(pointer.id,true);});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){pointer=null;wheel=null;clearTimeout(wheelTimer);stop();position=Math.round(position);velocity=0;paint();}});
  refresh();paint();
  return {step(delta){clearTimeout(wheelTimer);wheel=null;refresh();settle((raf?target:Math.round(position))+delta,velocity);}};
}
