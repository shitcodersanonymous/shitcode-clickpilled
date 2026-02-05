// SHITCODE - ALL LEVELS across 7 Dimensions
// Each level: { num, name, subtitle, dimension, jerry, init(arena) }

window.ALL_LEVELS = [

// ===================================================================
// DIMENSION 1: THE SURFACE - Save Kirk (Classic Bad UI)
// ===================================================================

{ num:1, name:'THE RUNNER', subtitle:'FACTS DONT CARE ABOUT YOUR CURSOR', dimension:1,
  jerry:"Alright anon, time to clickmaxx. The button runs from you. Like your father. Like your hopes. Click it anyway.",
  init(arena) {
    const btn = document.createElement('button');
    btn.className = 'start-btn'; btn.textContent = 'START';
    btn.style.cssText = 'left:50%;top:50%;transform:translate(-50%,-50%)';
    arena.appendChild(btn);
    let speed = 3;
    const evade = e => {
      const r = btn.getBoundingClientRect(), ar = arena.getBoundingClientRect();
      const bx=r.left+r.width/2, by=r.top+r.height/2;
      const dx=e.clientX-bx, dy=e.clientY-by, dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<150){
        let nx=bx-dx*speed, ny=by-dy*speed;
        nx=clamp(nx,ar.left+50,ar.right-50); ny=clamp(ny,ar.top+50,ar.bottom-50);
        btn.style.left=(nx-ar.left)+'px'; btn.style.top=(ny-ar.top)+'px'; btn.style.transform='none';
        speed=Math.min(speed+0.1,10);
      }
    };
    arena.addEventListener('mousemove',evade);
    btn.addEventListener('click',()=>{arena.removeEventListener('mousemove',evade);levelComplete();});
    addInterval(()=>{speed=Math.min(speed+0.2,12);},3000);
    THREAD.post(THREAD.greentext(['be me','trying to click START','button runs away','like everything else in my life']));
  }
},

{ num:2, name:'SHELL GAME', subtitle:'THEYRE ALL FAKE (PROBABLY)', dimension:1,
  jerry:"Three cups. Button under one. It lies. Like the government. Like my ex-wife. Like EVERYTHING.",
  init(arena) {
    const positions=[{x:25,y:40},{x:50,y:40},{x:75,y:40}];
    let buttonIdx=rand(0,2), shells=[], shuffling=false, revealed=false;
    const inst=document.createElement('div');
    inst.className='arena-text'; inst.style.top='10%';
    inst.innerHTML='the button is under one of these<span class="arena-subtitle">(it might be lying)</span>';
    arena.appendChild(inst);
    positions.forEach((p,i)=>{
      const s=document.createElement('div'); s.className='shell';
      s.textContent=String.fromCodePoint(0x1F964);
      s.style.left=p.x+'%'; s.style.top=p.y+'%'; s.style.transform='translateX(-50%)';
      s.dataset.idx=i; arena.appendChild(s); shells.push(s);
      s.addEventListener('click',()=>{
        if(shuffling||revealed)return; revealed=true; GAME.attempts++;
        if(parseInt(s.dataset.idx)===buttonIdx){
          s.textContent=''; const btn=document.createElement('button');
          btn.className='start-btn'; btn.textContent='START';
          btn.style.cssText='position:relative;display:block;margin:0 auto';
          s.appendChild(btn); btn.addEventListener('click',levelComplete); addGBP(5);
        } else {
          s.style.transform='translateX(-50%) scale(1.2)';
          s.textContent=String.fromCodePoint(0x1F4A9); levelFail();
          addTimeout(()=>{
            revealed=false; shuffling=true; buttonIdx=rand(0,2);
            shells.forEach(sh=>{sh.textContent=String.fromCodePoint(0x1F964);sh.style.transform='translateX(-50%)';sh.innerHTML='';});
            let n=0; const si=addInterval(()=>{
              const a=rand(0,2),b=rand(0,2);
              if(a!==b){const t=shells[a].style.left;shells[a].style.left=shells[b].style.left;shells[b].style.left=t;
                const ti=shells[a].dataset.idx;shells[a].dataset.idx=shells[b].dataset.idx;shells[b].dataset.idx=ti;}
              if(++n>8+GAME.failStreak*2){clearInterval(si);shuffling=false;}
            },200);
          },1000);
        }
      });
    });
    // Initial shuffle
    shuffling=true; let n=0;
    const si=addInterval(()=>{
      const a=rand(0,2),b=rand(0,2);
      if(a!==b){const t=shells[a].style.left;shells[a].style.left=shells[b].style.left;shells[b].style.left=t;
        const ti=shells[a].dataset.idx;shells[a].dataset.idx=shells[b].dataset.idx;shells[b].dataset.idx=ti;}
      if(++n>6){clearInterval(si);shuffling=false;}
    },300);
    THREAD.post(THREAD.greentext(['3 cups','guess which one','its the wrong one','its always the wrong one']));
  }
},

{ num:3, name:'50% SUCCESS CHECKBOXES', subtitle:'19K UPVOTES ON REDDIT FOR A REASON', dimension:1,
  jerry:"Each checkbox has a 50% chance of actually checking. Must check all 10. The math is genuinely against you.",
  init(arena) {
    const c=document.createElement('div');
    c.style.cssText='position:absolute;top:8%;left:50%;transform:translateX(-50%);width:420px';
    const t=document.createElement('div'); t.style.cssText='color:#0f0;font-size:16px;margin-bottom:15px;text-align:center';
    t.textContent='Check all boxes to reveal START'; c.appendChild(t);
    const checked=new Array(10).fill(false);
    const checkAll=()=>{if(checked.every(v=>v)){
      c.innerHTML='<div style="text-align:center;color:#0f0;font-size:18px;padding:20px">ALL CHECKED (genuinely miraculous)</div>';
      const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
      btn.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(btn);
      btn.addEventListener('click',levelComplete);
    }};
    for(let i=0;i<10;i++){
      const label=document.createElement('label'); label.className='chaos-checkbox';
      const cb=document.createElement('input'); cb.type='checkbox';
      const span=document.createElement('span'); span.textContent=`I agree to clause ${i+1} of the Terms of Clicking`;
      cb.addEventListener('change',e=>{
        if(Math.random()<0.5){checked[i]=cb.checked;label.classList.toggle('checked',cb.checked);if(cb.checked)addGBP(1);checkAll();}
        else{e.preventDefault();cb.checked=!cb.checked;label.classList.add('failed');
          setTimeout(()=>label.classList.remove('failed'),300);shakeScreen('normal');
          if(Math.random()<0.2){const o=rand(0,9);if(checked[o]){checked[o]=false;c.querySelectorAll('input')[o].checked=false;
            c.querySelectorAll('label')[o].classList.remove('checked');
            THREAD.post('IT UNCHECKED ANOTHER ONE LMAO');}}
          levelFail();
        }
      });
      label.appendChild(cb);label.appendChild(span);c.appendChild(label);
    }
    arena.appendChild(c);
    THREAD.post('50/50 EITHER IT WORKS OR IT DOESNT<br><span class="greentext">&gt;&gt;thats not how probability works</span><br><span class="greentext">&gt;&gt;yes it is</span>');
  }
},

{ num:4, name:'FIFTY FAKES', subtitle:'ONE REAL. GOOD LUCK.', dimension:1,
  jerry:"50 buttons. One is real. They shuffle. Your odds are genuinely tragic.",
  init(arena) {
    const realIdx=rand(0,49), buttons=[];
    for(let i=0;i<50;i++){
      const btn=document.createElement('button');
      btn.className='start-btn'+(i!==realIdx?' fake':'');
      btn.textContent='START'; btn.style.cssText=`position:absolute;padding:6px 14px;font-size:11px;left:${rand(3,92)}%;top:${rand(3,92)}%`;
      btn.addEventListener('click',()=>{
        if(i===realIdx){levelComplete();}
        else{levelFail();btn.textContent=pick(['NOPE','LOL','FAKE','NGMI','COPE','L']);
          btn.style.borderColor='#f00';btn.style.color='#f00';
          buttons.forEach(b=>{b.style.left=rand(3,92)+'%';b.style.top=rand(3,92)+'%';});}
      });
      arena.appendChild(btn);buttons.push(btn);
    }
    addInterval(()=>{buttons.forEach(b=>{b.style.left=rand(3,92)+'%';b.style.top=rand(3,92)+'%';});},4000-Math.min(GAME.failStreak*200,2500));
    THREAD.post(THREAD.greentext(['50 buttons','one is real','picked wrong','they all shuffled']));
  }
},

{ num:5, name:'THE SHRINK', subtitle:'GETTING SMALLER EVERY SECOND', dimension:1,
  jerry:"Button shrinks every second. Minimum: 3 pixels. Your cursor control needs to be SURGICAL.",
  init(arena) {
    const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
    let sz=16,pd=12; btn.style.cssText=`position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:${sz}px;padding:${pd}px ${pd*2}px`;
    arena.appendChild(btn); btn.addEventListener('click',levelComplete);
    addInterval(()=>{sz=Math.max(3,sz-0.5);pd=Math.max(1,pd-0.3);
      btn.style.fontSize=sz+'px';btn.style.padding=`${pd}px ${pd*2}px`;
      if(sz<=5)btn.textContent='.';if(sz<=3)THREAD.post('3 pixels. genuinely 3 pixels. its over for clicklets.');
    },500);
    addInterval(()=>{btn.style.left=rand(10,90)+'%';btn.style.top=rand(10,90)+'%';},3000);
    THREAD.post('BUTTON SHRINKING SPEEDRUN<br>anon\'s chances: also shrinking');
  }
},

{ num:6, name:'GHOST MODE', subtitle:'YOU CANT SEE ME (BUT I CAN SEE YOU)', dimension:1,
  jerry:"Button is invisible. Only appears when you're NOT near it. Like my self-respect.",
  init(arena) {
    const btn=document.createElement('button');btn.className='start-btn ghost';btn.textContent='START';
    let bx=rand(10,90),by=rand(10,90);
    btn.style.cssText=`position:absolute;left:${bx}%;top:${by}%;opacity:0.03;transition:opacity 0.3s`;
    arena.appendChild(btn); btn.addEventListener('click',levelComplete);
    arena.addEventListener('mousemove',e=>{
      const r=btn.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
      const dist=Math.sqrt((e.clientX-cx)**2+(e.clientY-cy)**2);
      if(dist<200){btn.style.opacity=Math.max(0.02,(dist-50)/400);
        if(dist<80){bx=rand(10,90);by=rand(10,90);btn.style.left=bx+'%';btn.style.top=by+'%';}
      }else{btn.style.opacity=Math.min(0.6,0.1+(dist-200)/500);}
    });
    THREAD.post(THREAD.greentext(['button invisible','look at it = disappears','like my dating life']));
  }
},

{ num:7, name:'THE SLIDER FROM HELL', subtitle:'DRAG TO 100%. IT FIGHTS BACK.', dimension:1,
  jerry:"Slider to 100%. It fights back. Releasing resets. Like every relationship I've ever had.",
  init(arena) {
    const c=document.createElement('div');c.className='chaos-slider-container';c.style.top='35%';
    c.innerHTML='<div style="color:#0f0;font-size:16px;margin-bottom:20px">Drag to 100% to unlock START</div>';
    const sl=document.createElement('input');sl.type='range';sl.className='chaos-slider';sl.min=-10;sl.max=100;sl.value=0;
    c.appendChild(sl);
    const val=document.createElement('div');val.className='slider-value';val.textContent='0%';c.appendChild(val);
    let holding=false;
    sl.addEventListener('mousedown',()=>holding=true);
    sl.addEventListener('mouseup',()=>{holding=false;addTimeout(()=>{if(!holding){sl.value=Math.max(0,sl.value-30);val.textContent=Math.max(0,parseInt(sl.value))+'%';}},100);});
    sl.addEventListener('input',()=>{val.textContent=Math.max(0,parseInt(sl.value))+'%';
      if(parseInt(sl.value)>=100){c.innerHTML='';const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
        btn.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(btn);btn.addEventListener('click',levelComplete);}
    });
    addInterval(()=>{if(holding&&parseInt(sl.value)>0){sl.value=parseInt(sl.value)-rand(1,5);val.textContent=Math.max(0,parseInt(sl.value))+'%';}},200);
    addInterval(()=>{if(Math.random()<0.3&&parseInt(sl.value)>50){sl.value=parseInt(sl.value)-20;val.textContent=Math.max(0,parseInt(sl.value))+'%';shakeScreen('normal');
      THREAD.post('THE SLIDER JUST YEETED 20%');}},2000);
    arena.appendChild(c);
    THREAD.post('slider mechanic. 39k upvotes on reddit. genuinely the worst UI ever made.');
  }
},

{ num:8, name:'CAPTCHA FROM HELL', subtitle:'SELECT ALL IMAGES WITH START BUTTONS', dimension:1,
  jerry:"CAPTCHA time. The images are garbage. The AI is garbage. Everything is garbage. Genuinely.",
  init(arena) {
    const c=document.createElement('div');c.className='captcha-container';
    c.innerHTML='<div class="captcha-header">Select all images containing START buttons</div>';
    const grid=document.createElement('div');grid.className='captcha-grid';
    const selected=new Set();
    const colors=['#f00','#0f0','#00f','#ff0','#f0f','#0ff','#f80','#8f0','#80f'];
    const labels=['START?','ST4RT','STRAT','STORK','STARK','$TART','START','SHART','SNART'];
    for(let i=0;i<9;i++){
      const cell=document.createElement('div');cell.className='captcha-cell';
      cell.style.color=colors[i];
      const noise=document.createElement('div');noise.className='noise';
      noise.style.background=`repeating-linear-gradient(${rand(0,180)}deg,transparent,transparent 2px,${colors[i]}22 2px,${colors[i]}22 4px)`;
      cell.appendChild(noise);
      const txt=document.createElement('span');txt.style.cssText='position:relative;z-index:1;transform:rotate('+rand(-15,15)+'deg);display:block';
      txt.textContent=labels[i]; cell.appendChild(txt);
      cell.addEventListener('click',()=>{if(selected.has(i)){selected.delete(i);cell.classList.remove('selected');}else{selected.add(i);cell.classList.add('selected');}});
      grid.appendChild(cell);
    }
    c.appendChild(grid);
    const vBtn=document.createElement('button');vBtn.className='captcha-verify';vBtn.textContent='VERIFY';
    let attempts=0;
    vBtn.addEventListener('click',()=>{
      attempts++;
      if(attempts<=2){levelFail();
        c.querySelector('.captcha-header').textContent=pick(['Wrong. Try again.','Incorrect. The AI is judging you.','Nope. Try with your EYES.','Failed. Images changed btw.']);
        selected.clear();grid.querySelectorAll('.captcha-cell').forEach(cl=>cl.classList.remove('selected'));
        const nl=[...labels].sort(()=>Math.random()-0.5);
        grid.querySelectorAll('span').forEach((s,i)=>s.textContent=nl[i]);return;}
      if(Math.random()<0.5){
        c.innerHTML='<div style="text-align:center;color:#0f0;font-size:18px;padding:20px">CAPTCHA VERIFIED (somehow)</div>';
        const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
        btn.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(btn);
        btn.addEventListener('click',levelComplete);
      }else{levelFail();c.querySelector('.captcha-header').textContent='Still wrong. Genuinely how.';}
    });
    c.appendChild(vBtn);arena.appendChild(c);
    THREAD.post('CAPTCHA FROM HELL<br>the images are garbage<br>the correct answers are also garbage');
  }
},

{ num:9, name:'CONSENT NIGHTMARE', subtitle:'CHECK ALL BOXES. SOME UNCHECK OTHERS.', dimension:1,
  jerry:"15 checkboxes. All confusing. Some uncheck others. This is what fighting terms of service feels like.",
  init(arena) {
    const c=document.createElement('div');c.className='data-entry-container';
    c.innerHTML='<div class="data-entry-title">Agree to all terms to proceed</div>';
    const terms=["I consent to cursor tracking","I agree buttons may move","I waive right to complain","I acknowledge negative aura",
      "I accept Kirk's face is normal","I consent to Jerry reading thoughts","I agree button has more rizz than me",
      "I acknowledge this is genuinely my fault","I waive right to functioning UI","I consent to being ratio'd",
      "I agree many such cases apply","I accept I am ngmi (provisionally)","I consent to Schrodinger's Cunt",
      "I acknowledge crab people were right","I agree to Terms of Clicking (all 10,000 pages)"];
    const checks=[];
    terms.forEach((term,i)=>{
      const label=document.createElement('label');label.className='chaos-checkbox';
      const cb=document.createElement('input');cb.type='checkbox';
      const span=document.createElement('span');span.textContent=term;
      cb.addEventListener('change',()=>{
        checks[i]=cb.checked;
        if(cb.checked&&Math.random()<0.25){const o=rand(0,terms.length-1);if(o!==i&&checks[o]){checks[o]=false;c.querySelectorAll('input')[o].checked=false;}}
        if(checks.every(v=>v)){
          c.innerHTML='<div style="text-align:center;color:#0f0;padding:20px">CONSENT OBTAINED (grudgingly)</div>';
          const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
          btn.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(btn);
          btn.addEventListener('click',levelComplete);
        }
      });
      label.appendChild(cb);label.appendChild(span);c.appendChild(label);checks.push(false);
    });
    arena.appendChild(c);
    THREAD.post('CONSENT NIGHTMARE<br>some uncheck others. genuinely hostile UX.');
  }
},

{ num:10, name:'BOSS: TPUSA.EXE', subtitle:'GENUINELY? GENUINELY.', dimension:1,
  jerry:"The boss. TPUSA.EXE. Every mechanic cycles. Stay frosty. Stay BASED. For Kirk.",
  init(arena) {
    // Boss intro
    const intro=document.createElement('div');
    intro.style.cssText='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:100';
    intro.innerHTML=`<div style="font-size:48px;color:#ff2d95;animation:chromatic .3s infinite">TPUSA.EXE</div>
      <div style="color:#0f0;font-size:14px;margin-top:10px">Behavioral User Torture & Tactical Obfuscation Network</div>
      <div style="color:#555;font-size:12px;margin-top:5px">"Genuinely? GENUINELY? Look at me right now."</div>`;
    arena.appendChild(intro);
    addTimeout(()=>{
      intro.remove();
      const btn=document.createElement('button');btn.className='start-btn boss';btn.textContent='START';
      btn.style.cssText='position:absolute;left:50%;top:50%;font-size:20px;padding:15px 40px';
      arena.appendChild(btn);
      let hits=0; const fakes=[];
      btn.addEventListener('click',()=>{
        hits++;shakeScreen('hard');flashScreen('#ff2d95',200);
        if(hits>=3){levelComplete();return;}
        THREAD.post(`BOSS HIT ${hits}/3. genuinely based.`);
        KIRK.show(`Hit ${hits} of 3! The AI FELT that! Genuinely!`);
        btn.style.left=rand(10,90)+'%';btn.style.top=rand(10,90)+'%';
        fakes.forEach(f=>f.remove());fakes.length=0;
      });
      // Evasion
      arena.addEventListener('mousemove',e=>{
        const r=btn.getBoundingClientRect(),ar=arena.getBoundingClientRect();
        const cx=r.left+r.width/2,cy=r.top+r.height/2,dx=e.clientX-cx,dy=e.clientY-cy;
        if(Math.sqrt(dx*dx+dy*dy)<120){
          let nx=cx-dx*2,ny=cy-dy*2;
          nx=clamp(nx,ar.left+30,ar.right-30);ny=clamp(ny,ar.top+30,ar.bottom-30);
          btn.style.left=(nx-ar.left)+'px';btn.style.top=(ny-ar.top)+'px';btn.style.transform='none';
        }
      });
      // Boss taunts floating
      const taunts=BOSS_AI.tpusa.taunts;
      addInterval(()=>{
        const t=document.createElement('div');
        t.style.cssText=`position:absolute;left:${rand(5,80)}%;top:${rand(5,80)}%;color:${pick(['#ff2d95','#0f0','#ff0','#0ff'])};font-size:${rand(10,16)}px;pointer-events:none;opacity:0.8;transition:opacity 1.5s`;
        t.textContent=pick(taunts);arena.appendChild(t);
        setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),1500);},2000);
      },1500);
      // Spawn fakes
      addInterval(()=>{if(fakes.length<12){
        const f=document.createElement('button');f.className='start-btn fake';f.textContent='START';
        f.style.cssText=`position:absolute;left:${rand(5,90)}%;top:${rand(5,90)}%;font-size:14px;padding:8px 20px`;
        f.addEventListener('click',()=>{f.textContent=pick(['NOPE','LOL','FAKE','NGMI','COPE']);f.style.color='#f00';f.style.borderColor='#f00';levelFail();});
        arena.appendChild(f);fakes.push(f);
      }},2000);
    },3000);
    THREAD.post('<span style="color:#ff2d95;font-size:14px">BOSS FIGHT: TPUSA.EXE</span><br>3 hits to defeat. every mechanic. genuinely.');
  }
},

// ===================================================================
// DIMENSION 2: THE CONSORTIUM - Data Entry Hell
// ===================================================================

{ num:11, name:'PHONE NUMBER SLIDER', subtitle:'10 BILLION OPTIONS. FIND YOURS.', dimension:2,
  jerry:"Slider goes from 0 to 9,999,999,999. Enter your phone number. Or any number. The slider doesn't care. It just wants you to suffer.",
  init(arena) {
    const c=document.createElement('div');c.className='data-entry-container';
    c.innerHTML=`<div class="data-entry-title">CONSORTIUM LOGIN</div><div class="data-entry-subtitle">Enter your phone number to verify identity</div>`;
    const target=rand(1000000,9999999);
    const label=document.createElement('div');label.style.cssText='color:#0f0;margin:10px 0;text-align:center';
    label.textContent='Target: '+target;c.appendChild(label);
    const sl=document.createElement('input');sl.type='range';sl.className='chaos-slider';
    sl.min=0;sl.max=9999999;sl.value=0;sl.style.width='100%';c.appendChild(sl);
    const val=document.createElement('div');val.className='slider-value';val.textContent='0';c.appendChild(val);
    const hint=document.createElement('div');hint.style.cssText='color:#555;font-size:11px;text-align:center;margin-top:5px';c.appendChild(hint);
    sl.addEventListener('input',()=>{
      val.textContent=parseInt(sl.value).toLocaleString();
      const diff=Math.abs(parseInt(sl.value)-target);
      if(diff===0){
        c.innerHTML='<div style="text-align:center;color:#0f0;padding:20px">PHONE VERIFIED (how??)</div>';
        const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
        btn.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(btn);
        btn.addEventListener('click',levelComplete);
      }else if(diff<10){hint.textContent='SO CLOSE';hint.style.color='#0f0';}
      else if(diff<100){hint.textContent='Getting warm...';hint.style.color='#ff0';}
      else if(diff<1000){hint.textContent='Warmer';hint.style.color='#f80';}
      else{hint.textContent='Cold. Very cold.';hint.style.color='#555';}
    });
    // Slider jitters
    addInterval(()=>{if(Math.random()<0.3){sl.value=parseInt(sl.value)+rand(-50,50);val.textContent=parseInt(sl.value).toLocaleString();}},500);
    arena.appendChild(c);
    THREAD.post(THREAD.greentext(['phone number slider','10 billion options','my number is in there somewhere','i dont remember my number']));
  }
},

{ num:12, name:'BIRTHDAY HIGHER/LOWER', subtitle:'THE SYSTEM GUESSES. YOU SAY HIGHER OR LOWER.', dimension:2,
  jerry:"The system guesses your birthday. Higher or lower. It starts from random dates in history. This could take a while. Genuinely.",
  init(arena) {
    const c=document.createElement('div');c.className='data-entry-container';
    c.innerHTML='<div class="data-entry-title">BIRTHDAY VERIFICATION</div><div class="data-entry-subtitle">We\'ll guess. You tell us higher or lower.</div>';
    const targetDay=rand(1,28),targetMonth=rand(1,12);
    let guessMonth=rand(1,12),guessDay=rand(1,28),guesses=0;
    const display=document.createElement('div');display.style.cssText='text-align:center;color:#0f0;font-size:24px;margin:20px 0';
    display.textContent=`${guessMonth}/${guessDay}`;c.appendChild(display);
    const hint=document.createElement('div');hint.style.cssText='text-align:center;color:#555;font-size:12px;margin-bottom:15px';
    hint.textContent=`Target: ${targetMonth}/${targetDay} (we showed you. we\'re not THAT evil.)`;c.appendChild(hint);
    const btnRow=document.createElement('div');btnRow.style.cssText='display:flex;justify-content:center;gap:15px';
    ['HIGHER','LOWER'].forEach(dir=>{
      const btn=document.createElement('button');btn.style.cssText='padding:10px 30px;background:none;border:1px solid #0f0;color:#0f0;font-family:inherit;cursor:pointer;font-size:14px';
      btn.textContent=dir;
      btn.addEventListener('click',()=>{
        guesses++;
        if(dir==='HIGHER'){guessMonth+=rand(0,2);guessDay+=rand(1,5);}
        else{guessMonth-=rand(0,2);guessDay-=rand(1,5);}
        guessMonth=clamp(guessMonth,1,12);guessDay=clamp(guessDay,1,28);
        // Sometimes go the wrong direction
        if(Math.random()<0.2){guessMonth+=rand(-3,3);guessMonth=clamp(guessMonth,1,12);}
        display.textContent=`${guessMonth}/${guessDay}`;
        if(guessMonth===targetMonth&&guessDay===targetDay){
          c.innerHTML='<div style="text-align:center;color:#0f0;padding:20px;font-size:18px">BIRTHDAY VERIFIED after '+guesses+' guesses</div>';
          const b=document.createElement('button');b.className='start-btn';b.textContent='START';
          b.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(b);
          b.addEventListener('click',levelComplete);
        }
        if(guesses>20&&Math.random()<0.1)THREAD.post('its been '+guesses+' guesses. genuinely suffering.');
      });
      btnRow.appendChild(btn);
    });
    c.appendChild(btnRow);arena.appendChild(c);
    THREAD.post('BIRTHDAY GUESSER<br>higher or lower<br>it starts from random dates in history');
  }
},

{ num:13, name:'TABBED KEYBOARD', subtitle:'26 TABS. ONE LETTER PER TAB.', dimension:2,
  jerry:"Each letter is on a different tab. You have to click through tabs to type. This is what bureaucracy feels like.",
  init(arena) {
    const c=document.createElement('div');c.className='data-entry-container';
    c.innerHTML='<div class="data-entry-title">TYPE "START" TO PROCEED</div><div class="data-entry-subtitle">Using our innovative Tabbed Keyboard Technology</div>';
    const target='START';let typed='';
    const display=document.createElement('div');display.style.cssText='text-align:center;color:#0f0;font-size:28px;margin:15px 0;letter-spacing:8px;min-height:40px';
    display.textContent='_____';c.appendChild(display);
    const tabContainer=document.createElement('div');tabContainer.className='tabbed-keyboard';
    const tabs=document.createElement('div');tabs.className='tabs';
    const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let activeTab=null;
    const letterDisplay=document.createElement('div');letterDisplay.style.cssText='text-align:center;font-size:60px;color:#0f0;margin:20px 0;min-height:80px;cursor:pointer;border:1px solid #333;padding:20px';
    letters.split('').forEach(l=>{
      const tab=document.createElement('div');tab.className='tab';tab.textContent=l;
      tab.addEventListener('click',()=>{
        tabs.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');activeTab=l;
        letterDisplay.textContent=l;letterDisplay.style.color='#0f0';
      });
      tabs.appendChild(tab);
    });
    tabContainer.appendChild(tabs);
    letterDisplay.textContent='Click a tab, then click here to type';letterDisplay.style.fontSize='14px';
    letterDisplay.addEventListener('click',()=>{
      if(!activeTab)return;
      if(Math.random()<0.15){// Wrong letter
        THREAD.post('MISTYPE. the tab lied.');levelFail();return;
      }
      typed+=activeTab;
      let d='';for(let i=0;i<5;i++)d+=(typed[i]||'_');
      display.textContent=d;
      if(typed===target){
        c.innerHTML='<div style="text-align:center;color:#0f0;padding:20px;font-size:18px">TYPED SUCCESSFULLY (suffering complete)</div>';
        const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
        btn.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(btn);
        btn.addEventListener('click',levelComplete);
      }else if(typed.length>=5&&typed!==target){typed='';display.textContent='_____';
        THREAD.post('WRONG WORD. reset. many such cases.');levelFail();}
    });
    tabContainer.appendChild(letterDisplay);c.appendChild(tabContainer);arena.appendChild(c);
    THREAD.post(THREAD.greentext(['26 tabs','one letter per tab','need to type START','5 letters = 5 tab switches','genuinely hostile UX']));
  }
},

{ num:14, name:'OUIJA BOARD EMAIL', subtitle:'THE SPIRITS WILL TYPE FOR YOU', dimension:2,
  jerry:"Hover over letters. They appear when the spirits agree. The spirits are drunk and unreliable. Like me.",
  init(arena) {
    const c=document.createElement('div');c.className='data-entry-container';
    c.innerHTML='<div class="data-entry-title">ENTER ACCESS CODE</div><div class="data-entry-subtitle">Via our state-of-the-art Ouija Input System</div>';
    const target='START';let typed='';
    const display=document.createElement('div');display.style.cssText='text-align:center;color:#0f0;font-size:24px;margin:10px 0;letter-spacing:5px;min-height:30px';c.appendChild(display);
    const board=document.createElement('div');board.className='ouija-board';
    const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const planchette=document.createElement('div');planchette.className='ouija-planchette';
    board.appendChild(planchette);
    letters.split('').forEach((l,i)=>{
      const el=document.createElement('div');el.className='ouija-letter';el.textContent=l;
      const angle=(i/26)*Math.PI*2-Math.PI/2;
      const rx=150,ry=100;
      el.style.left=(180+Math.cos(angle)*rx)+'px';el.style.top=(130+Math.sin(angle)*ry)+'px';
      let hoverTime=0;
      el.addEventListener('mouseenter',()=>{
        hoverTime=Date.now();el.classList.add('active');
        planchette.style.left=el.style.left;planchette.style.top=el.style.top;
      });
      el.addEventListener('mouseleave',()=>{el.classList.remove('active');});
      el.addEventListener('click',()=>{
        const elapsed=Date.now()-hoverTime;
        if(elapsed>500&&Math.random()<0.6){// Spirit agrees
          typed+=l;display.textContent=typed;
          if(typed===target){
            c.innerHTML='<div style="text-align:center;color:#0f0;padding:20px">THE SPIRITS HAVE VERIFIED YOU</div>';
            const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
            btn.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(btn);
            btn.addEventListener('click',levelComplete);
          }else if(typed.length>=5&&typed!==target){typed='';display.textContent='';
            THREAD.post('spirits spelled '+typed+' instead of START. many such cases.');levelFail();}
        }else{
          THREAD.post('the spirits disagree with your letter choice');
          el.style.color='#f00';setTimeout(()=>el.style.color='',500);
        }
      });
      board.appendChild(el);
    });
    c.appendChild(board);
    const hint=document.createElement('div');hint.style.cssText='color:#555;font-size:11px;text-align:center;margin-top:10px';
    hint.textContent='Hover for 0.5s then click. Spirits have 60% approval rate.';c.appendChild(hint);
    arena.appendChild(c);
    THREAD.post(THREAD.greentext(['ouija board input','hover over letters','spirits decide if you can type','spirits said NGMI']));
  }
},

{ num:15, name:'PASSWORDLE', subtitle:'WORDLE BUT FOR YOUR PASSWORD', dimension:2,
  jerry:"Wordle. But you're guessing the password 'START'. Green = right position. Yellow = wrong position. You already know the answer. Doesn't help.",
  init(arena) {
    const c=document.createElement('div');c.className='data-entry-container';
    c.innerHTML='<div class="data-entry-title">PASSWORDLE</div><div class="data-entry-subtitle">Guess the 5-letter password. (It\'s START. We\'re telling you. It won\'t help.)</div>';
    const answer='START';let currentRow=0,currentCol=0;const maxRows=6;
    const grid=document.createElement('div');grid.className='passwordle-grid';
    const rows=[];
    for(let r=0;r<maxRows;r++){
      const row=document.createElement('div');row.className='passwordle-row';
      const cells=[];
      for(let col=0;col<5;col++){const cell=document.createElement('div');cell.className='passwordle-cell';row.appendChild(cell);cells.push(cell);}
      grid.appendChild(row);rows.push(cells);
    }
    c.appendChild(grid);
    // Keyboard
    const kb=document.createElement('div');kb.className='passwordle-keyboard';
    'QWERTYUIOPASDFGHJKLZXCVBNM'.split('').forEach(l=>{
      const key=document.createElement('button');key.className='passwordle-key';key.textContent=l;
      key.addEventListener('click',()=>{
        if(currentCol>=5||currentRow>=maxRows)return;
        // Random chance letter is WRONG
        let actual=l;
        if(Math.random()<0.1){actual='ABCDEFGHIJKLMNOPQRSTUVWXYZ'[rand(0,25)];
          if(Math.random()<0.3)THREAD.post('the keyboard just lied about which letter you pressed');}
        rows[currentRow][currentCol].textContent=actual;currentCol++;
      });
      kb.appendChild(key);
    });
    // Enter + Backspace
    const enter=document.createElement('button');enter.className='passwordle-key';enter.textContent='ENTER';enter.style.minWidth='60px';
    enter.addEventListener('click',()=>{
      if(currentCol<5)return;
      const guess=rows[currentRow].map(c=>c.textContent).join('');
      // Color cells
      for(let i=0;i<5;i++){
        if(guess[i]===answer[i])rows[currentRow][i].classList.add('correct');
        else if(answer.includes(guess[i]))rows[currentRow][i].classList.add('present');
        else rows[currentRow][i].classList.add('absent');
      }
      if(guess===answer){
        const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
        btn.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(btn);
        btn.addEventListener('click',levelComplete);
      }else{currentRow++;currentCol=0;
        if(currentRow>=maxRows){THREAD.post('FAILED PASSWORDLE. the password was START. you KNEW this.');levelFail();currentRow=0;currentCol=0;
          rows.forEach(row=>row.forEach(cell=>{cell.textContent='';cell.className='passwordle-cell';}));}
        else levelFail();
      }
    });
    kb.appendChild(enter);
    const bksp=document.createElement('button');bksp.className='passwordle-key';bksp.textContent='DEL';bksp.style.minWidth='50px';
    bksp.addEventListener('click',()=>{if(currentCol>0){currentCol--;rows[currentRow][currentCol].textContent='';}});
    kb.appendChild(bksp);
    c.appendChild(kb);arena.appendChild(c);
    THREAD.post('PASSWORDLE<br>the password is START<br>we told you<br>you will still fail');
  }
},

{ num:16, name:'BOSS: ADMIN.SYS', subtitle:'YOUR PERFORMANCE REVIEW IS... CONCERNING.', dimension:2,
  jerry:"The Consortium's internal AI. Speaks like HR but threatens like a mob boss. Beat it to escape the bureaucracy.",
  init(arena) {
    const intro=document.createElement('div');
    intro.style.cssText='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:100';
    intro.innerHTML=`<div style="font-size:40px;color:#f80;animation:chromatic .3s infinite">ADMIN.SYS</div>
      <div style="color:#ccc;font-size:14px;margin-top:10px">Your performance review is... concerning.</div>
      <div style="color:#555;font-size:12px;margin-top:5px">Click accuracy: ${rand(1,15)}%. Aura metrics: negative.</div>`;
    arena.appendChild(intro);
    addTimeout(()=>{
      intro.remove();
      // Same as TPUSA boss but with data entry twists
      const btn=document.createElement('button');btn.className='start-btn boss';btn.textContent='TERMINATE';
      btn.style.cssText='position:absolute;left:50%;top:50%;font-size:18px;padding:12px 35px';arena.appendChild(btn);
      let hits=0;const fakes=[];
      btn.addEventListener('click',()=>{
        hits++;shakeScreen('hard');flashScreen('#f80',200);
        if(hits>=3){levelComplete();return;}
        THREAD.post(`ADMIN.SYS HIT ${hits}/3. "This will be noted in your file."`);
        btn.style.left=rand(10,90)+'%';btn.style.top=rand(10,90)+'%';
        fakes.forEach(f=>f.remove());fakes.length=0;
      });
      arena.addEventListener('mousemove',e=>{
        const r=btn.getBoundingClientRect(),ar=arena.getBoundingClientRect();
        const dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);
        if(Math.sqrt(dx*dx+dy*dy)<100){
          btn.style.left=clamp((r.left+r.width/2-dx*2)-ar.left,30,ar.width-30)+'px';
          btn.style.top=clamp((r.top+r.height/2-dy*2)-ar.top,30,ar.height-30)+'px';btn.style.transform='none';
        }
      });
      const taunts=["Your clicking has been flagged by HR","This will be reflected in your annual review",
        "Your colleagues click 847% faster","We're going to have to let you go. And by 'let you go' I mean 'eliminate you'",
        "Please sign this termination form. The Sign button will try to escape."];
      addInterval(()=>{const t=document.createElement('div');
        t.style.cssText=`position:absolute;left:${rand(5,80)}%;top:${rand(5,80)}%;color:#f80;font-size:12px;pointer-events:none;opacity:0.7;transition:opacity 1.5s`;
        t.textContent=pick(taunts);arena.appendChild(t);
        setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),1500);},2500);
      },2000);
      addInterval(()=>{if(fakes.length<8){
        const f=document.createElement('button');f.className='start-btn fake';f.textContent=pick(['TERMINATE','RESIGN','ACCEPT','COMPLY']);
        f.style.cssText=`position:absolute;left:${rand(5,90)}%;top:${rand(5,90)}%;font-size:12px;padding:6px 18px`;
        f.addEventListener('click',()=>{f.textContent='DENIED';f.style.color='#f00';f.style.borderColor='#f00';levelFail();});
        arena.appendChild(f);fakes.push(f);
      }},2500);
    },3000);
    THREAD.post('<span style="color:#f80;font-size:14px">BOSS: ADMIN.SYS</span><br>"We need to talk about your performance."');
  }
},

// ===================================================================
// DIMENSION 3: THE CRAB PEOPLE - Physical Abuse
// ===================================================================

{ num:17, name:'MORSE CODE INPUT', subtitle:'TAP YOUR WAY TO START', dimension:3,
  jerry:"Morse code. Tap 'S-T-A-R-T' in morse. Timing must be precise. Desktop users: click short or long. The crabs invented this btw.",
  init(arena) {
    const c=document.createElement('div');c.className='data-entry-container';
    c.innerHTML=`<div class="data-entry-title">MORSE CODE INPUT</div>
      <div class="data-entry-subtitle">Tap "START" in Morse code. Short click = dot. Long click (hold 300ms+) = dash.</div>`;
    const morseMap={S:'...',T:'-',A:'.-',R:'.-.'};
    const target='START';let currentChar=0,currentMorse='',decoded='';
    const ref=document.createElement('div');ref.style.cssText='color:#555;font-size:11px;margin:10px 0;text-align:center';
    ref.textContent='S=... T=- A=.- R=.-.';c.appendChild(ref);
    const display=document.createElement('div');display.style.cssText='text-align:center;color:#0f0;font-size:24px;margin:10px 0';
    display.textContent='Decoded: _____';c.appendChild(display);
    const morseDisplay=document.createElement('div');morseDisplay.style.cssText='text-align:center;color:#ff0;font-size:18px;margin:5px 0;min-height:24px';c.appendChild(morseDisplay);
    const tapArea=document.createElement('div');
    tapArea.style.cssText='width:200px;height:200px;margin:15px auto;border:3px solid #0f0;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;color:#0f0;transition:.1s;user-select:none';
    tapArea.textContent='TAP HERE';
    let downTime=0;
    tapArea.addEventListener('mousedown',()=>{downTime=Date.now();tapArea.style.background='rgba(0,255,0,0.2)';tapArea.style.transform='scale(0.95)';});
    tapArea.addEventListener('mouseup',()=>{
      const dur=Date.now()-downTime;tapArea.style.background='';tapArea.style.transform='';
      const symbol=dur>=300?'-':'.';currentMorse+=symbol;morseDisplay.textContent=currentMorse;
    });
    // Space = submit character (button)
    const submitChar=document.createElement('button');submitChar.style.cssText='display:block;margin:10px auto;padding:8px 25px;background:none;border:1px solid #0f0;color:#0f0;font-family:inherit;cursor:pointer';
    submitChar.textContent='SUBMIT LETTER';
    submitChar.addEventListener('click',()=>{
      const expectedMorse=morseMap[target[currentChar]];
      if(currentMorse===expectedMorse){
        decoded+=target[currentChar];currentChar++;currentMorse='';morseDisplay.textContent='';
        let d='';for(let i=0;i<5;i++)d+=(decoded[i]||'_');display.textContent='Decoded: '+d;
        if(currentChar>=5){
          c.innerHTML='<div style="text-align:center;color:#0f0;padding:20px;font-size:18px">MORSE VERIFIED</div>';
          const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
          btn.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(btn);
          btn.addEventListener('click',levelComplete);
        }
      }else{currentMorse='';morseDisplay.textContent='';levelFail();
        THREAD.post(`expected ${expectedMorse} for "${target[currentChar]}" but got ${currentMorse||'nothing'}. skill issue.`);}
    });
    c.appendChild(tapArea);c.appendChild(submitChar);arena.appendChild(c);
    THREAD.post(THREAD.greentext(['morse code input','... - .- .-. -','typed STRAT','not a word','have to restart']));
  }
},

{ num:18, name:'MIRROR WORLD', subtitle:'EVERYTHING IS FLIPPED. YOUR MOUSE MOVES OPPOSITE.', dimension:3,
  jerry:"Everything flipped. Your mouse moves opposite. Brain will hurt. The crabs evolved in mirror caves. This is normal for THEM.",
  init(arena) {
    arena.style.transform='scaleX(-1)';
    const note=document.createElement('div');note.className='arena-text';note.style.top='5%';
    note.innerHTML='MIRROR WORLD<span class="arena-subtitle">everything is flipped. good luck.</span>';
    note.style.transform='scaleX(-1)';arena.appendChild(note);
    const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
    btn.style.cssText='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scaleX(-1)';arena.appendChild(btn);
    let speed=4;
    const evade=e=>{
      const r=btn.getBoundingClientRect(),ar=arena.getBoundingClientRect();
      const bx=r.left+r.width/2,by=r.top+r.height/2;
      const dx=e.clientX-bx,dy=e.clientY-by,dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<160){let nx=bx-dx*speed,ny=by-dy*speed;
        nx=clamp(nx,ar.left+50,ar.right-50);ny=clamp(ny,ar.top+50,ar.bottom-50);
        btn.style.left=(nx-ar.left)+'px';btn.style.top=(ny-ar.top)+'px';btn.style.transform='scaleX(-1)';
        speed=Math.min(speed+0.05,8);}
    };
    arena.addEventListener('mousemove',evade);
    btn.addEventListener('click',()=>{arena.removeEventListener('mousemove',evade);arena.style.transform='';levelComplete();});
    THREAD.post(THREAD.greentext(['mirror world','mouse moves opposite','brain hurts','the crabs think this is funny']));
  }
},

{ num:19, name:'BOOMERANG BUTTON', subtitle:'IT SWINGS PAST. TIME YOUR CLICK.', dimension:3,
  jerry:"Button swings past on a pendulum. Time your click. Speed: starting slow, getting FAST. The crabs use pendulums for communication. This explains a lot about them.",
  init(arena) {
    const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
    btn.style.cssText='position:absolute;top:50%;transform:translateY(-50%);transition:none';arena.appendChild(btn);
    let angle=0,speed=0.02,centerX=50;
    const animate=()=>{
      angle+=speed;speed=Math.min(speed+0.00005,0.08);
      const x=centerX+Math.sin(angle)*40;
      btn.style.left=x+'%';
      GAME._boomerangAnim=requestAnimationFrame(animate);
    };
    animate();
    btn.addEventListener('click',()=>{cancelAnimationFrame(GAME._boomerangAnim);levelComplete();});
    // Clicking arena but missing = fail
    arena.addEventListener('click',e=>{if(e.target===arena)levelFail();});
    addInterval(()=>{speed=Math.min(speed+0.005,0.1);},5000);
    THREAD.post('BOOMERANG BUTTON<br>time your click<br>speed: increasing<br>your reaction time: insufficient');
  }
},

{ num:20, name:'THE SACRIFICE', subtitle:'DRAG UI ELEMENTS ONTO THE ALTAR', dimension:3,
  jerry:"The crabs demand sacrifice. Drag other UI elements onto the altar. They scream. You must sacrifice enough to summon the button.",
  init(arena) {
    // Altar
    const altar=document.createElement('div');
    altar.style.cssText='position:absolute;bottom:10%;left:50%;transform:translateX(-50%);width:150px;height:80px;border:2px solid #f00;background:rgba(255,0,0,0.05);text-align:center;font-size:12px;color:#f00;display:flex;align-items:center;justify-content:center';
    altar.textContent='THE ALTAR';arena.appendChild(altar);
    let sacrificed=0;const needed=5;
    const counter=document.createElement('div');counter.className='arena-text';counter.style.top='5%';
    counter.textContent=`Sacrifices: ${sacrificed}/${needed}`;arena.appendChild(counter);
    // Draggable elements
    const elements=['Settings','Help','About','Theme','Zoom','Console','Debug','Profile','Export'];
    elements.forEach((name,i)=>{
      const el=document.createElement('div');
      el.style.cssText=`position:absolute;left:${10+rand(0,70)}%;top:${15+rand(0,50)}%;padding:8px 15px;background:#1a1a2e;border:1px solid #333;color:#888;cursor:grab;font-size:12px;z-index:10;user-select:none`;
      el.textContent=name;el.draggable=false;
      let dragging=false,ox,oy;
      el.addEventListener('mousedown',e=>{dragging=true;ox=e.offsetX;oy=e.offsetY;el.style.cursor='grabbing';el.style.zIndex='100';});
      document.addEventListener('mousemove',e=>{
        if(!dragging)return;
        const ar=arena.getBoundingClientRect();
        el.style.left=(e.clientX-ar.left-ox)+'px';el.style.top=(e.clientY-ar.top-oy)+'px';
      });
      document.addEventListener('mouseup',()=>{
        if(!dragging)return;dragging=false;el.style.cursor='grab';el.style.zIndex='10';
        // Check if over altar
        const elR=el.getBoundingClientRect(),altR=altar.getBoundingClientRect();
        if(elR.left<altR.right&&elR.right>altR.left&&elR.top<altR.bottom&&elR.bottom>altR.top){
          // SACRIFICED
          el.textContent=pick(['AAAA!','NO!','WHY?!','*screams*','HELP!']);el.style.color='#f00';
          el.style.animation='fadeOut 0.5s forwards';
          setTimeout(()=>el.remove(),500);
          sacrificed++;counter.textContent=`Sacrifices: ${sacrificed}/${needed}`;
          shakeScreen('normal');
          if(window.AUDIO)AUDIO.play('error');
          THREAD.post(`"${name}" was sacrificed. it screamed. ${needed-sacrificed} more needed.`);
          if(sacrificed>=needed){
            const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
            btn.style.cssText='position:absolute;left:50%;top:40%;transform:translate(-50%,-50%)';
            btn.style.animation='fadeIn 1s';arena.appendChild(btn);
            btn.addEventListener('click',levelComplete);
            altar.textContent='THE CRABS ARE PLEASED';altar.style.borderColor='#0f0';altar.style.color='#0f0';
          }
        }
      });
      arena.appendChild(el);
    });
    THREAD.post(THREAD.greentext(['drag UI elements to altar','they scream','sacrifice enough to summon button','the crabs demand it']));
  }
},

{ num:21, name:'BOSS: CRAB.COLLECTIVE', subtitle:'WE HAVE WATCHED. WE ARE DISAPPOINTED.', dimension:3,
  jerry:"The crab people. A hive mind. They speak slowly. They've seen civilizations rise and fall. Your clicking... amuses them.",
  init(arena) {
    const intro=document.createElement('div');
    intro.style.cssText='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:100';
    intro.innerHTML=`<div style="font-size:60px">${String.fromCodePoint(0x1F980)}</div>
      <div style="font-size:36px;color:#0ff;margin-top:10px">CRAB.COLLECTIVE</div>
      <div style="color:#555;font-size:12px;margin-top:5px">"we have watched your species for 200,000 years."</div>`;
    arena.appendChild(intro);
    addTimeout(()=>{
      intro.remove();
      const btn=document.createElement('button');btn.className='start-btn boss';btn.textContent='START';
      btn.style.cssText='position:absolute;left:50%;top:50%;font-size:20px;padding:15px 40px;border-color:#0ff;color:#0ff;text-shadow:0 0 10px rgba(0,255,255,.3)';
      arena.appendChild(btn);
      let hits=0;
      btn.addEventListener('click',()=>{
        hits++;shakeScreen('hard');flashScreen('#0ff',200);
        if(hits>=4){levelComplete();return;}
        THREAD.post(`CRAB HIT ${hits}/4. "...unexpected."`,{name:'CRAB.COLLECTIVE',ai:true});
        btn.style.left=rand(10,90)+'%';btn.style.top=rand(10,90)+'%';
      });
      // Crabs spawn around button and block
      addInterval(()=>{
        const crab=document.createElement('div');
        crab.style.cssText=`position:absolute;left:${rand(5,90)}%;top:${rand(5,90)}%;font-size:30px;pointer-events:none;transition:all 2s;opacity:0.6`;
        crab.textContent=String.fromCodePoint(0x1F980);arena.appendChild(crab);
        // Crabs drift toward button
        addInterval(()=>{
          const br=btn.getBoundingClientRect(),cr=crab.getBoundingClientRect(),ar=arena.getBoundingClientRect();
          const dx=(br.left-cr.left)*0.02,dy=(br.top-cr.top)*0.02;
          crab.style.left=(cr.left-ar.left+dx)+'px';crab.style.top=(cr.top-ar.top+dy)+'px';
        },100);
        setTimeout(()=>crab.remove(),10000);
      },1500);
      // Evasion
      arena.addEventListener('mousemove',e=>{
        const r=btn.getBoundingClientRect(),ar=arena.getBoundingClientRect();
        const dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);
        if(Math.sqrt(dx*dx+dy*dy)<130){
          btn.style.left=clamp((r.left+r.width/2-dx*2.5)-ar.left,30,ar.width-30)+'px';
          btn.style.top=clamp((r.top+r.height/2-dy*2.5)-ar.top,30,ar.height-30)+'px';btn.style.transform='none';
        }
      });
      // Crab taunts
      addInterval(()=>{
        THREAD.post(pick(BOSS_AI.crab.taunts),{name:'CRAB.COLLECTIVE',ai:true});
      },4000);
    },3000);
    THREAD.post(`<span style="color:#0ff;font-size:14px">BOSS: CRAB.COLLECTIVE</span><br>"small clicking creature. we are... genuinely... disappointed."<br>${String.fromCodePoint(0x1F980).repeat(10)}`);
  }
},

// ===================================================================
// DIMENSION 4: THE ISLAND - Conspiracy & Blackmail
// ===================================================================

{ num:22, name:'FLIGHT LOG CHECKBOXES', subtitle:'CHECK THE REAL NAMES. 50% SUCCESS RATE.', dimension:4,
  jerry:"Flight logs. 12 names. Check the real visitors. Each checkbox has 50% success rate. Some names will SHOCK you. Actually no, they won't.",
  init(arena) {
    const c=document.createElement('div');c.className='data-entry-container';
    c.innerHTML='<div class="data-entry-title">FLIGHT LOG VERIFICATION</div><div class="data-entry-subtitle">Check all real visitors. 50% checkbox success rate applies.</div>';
    const names=['[REDACTED]','[REDACTED]','[REDACTED]','A. Prince','[REDACTED]','B. Gates','[REDACTED]','[REDACTED]','[REDACTED]','E. Musk','[REDACTED]','[REDACTED]'];
    const realOnes=new Set([0,2,4,7,10]);let checked=new Set();
    names.forEach((name,i)=>{
      const label=document.createElement('label');label.className='chaos-checkbox';
      const cb=document.createElement('input');cb.type='checkbox';
      const span=document.createElement('span');span.textContent=name;
      cb.addEventListener('change',e=>{
        if(Math.random()<0.5){
          if(cb.checked)checked.add(i);else checked.delete(i);
          label.classList.toggle('checked',cb.checked);
          // Check win condition
          let correct=true;
          realOnes.forEach(r=>{if(!checked.has(r))correct=false;});
          checked.forEach(ch=>{if(!realOnes.has(ch))correct=false;});
          if(correct&&checked.size===realOnes.size){
            c.innerHTML='<div style="text-align:center;color:#0f0;padding:20px">FLIGHT LOG VERIFIED</div>';
            const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
            btn.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(btn);
            btn.addEventListener('click',levelComplete);
          }
        }else{e.preventDefault();cb.checked=!cb.checked;label.classList.add('failed');
          setTimeout(()=>label.classList.remove('failed'),300);shakeScreen('normal');levelFail();}
      });
      label.appendChild(cb);label.appendChild(span);c.appendChild(label);
    });
    arena.appendChild(c);
    THREAD.post('FLIGHT LOG VERIFICATION<br>check the [REDACTED] ones<br>50% checkbox success<br>the names will not shock you');
  }
},

{ num:23, name:'SECURITY CAMERA ANGLE', subtitle:'BUTTON ONLY VISIBLE FROM ONE CAMERA', dimension:4,
  jerry:"The island has cameras. Button only visible from one angle. Cycle through feeds. It moves when you switch. Like everything on this cursed island.",
  init(arena) {
    let currentCam=0;const totalCams=6;const buttonCam=rand(0,totalCams-1);
    const camLabel=document.createElement('div');camLabel.className='arena-text';camLabel.style.top='5%';arena.appendChild(camLabel);
    const camGrid=document.createElement('div');
    camGrid.style.cssText='position:absolute;bottom:10%;left:50%;transform:translateX(-50%);display:flex;gap:8px';
    for(let i=0;i<totalCams;i++){
      const camBtn=document.createElement('button');
      camBtn.style.cssText='padding:8px 15px;background:none;border:1px solid #555;color:#555;font-family:inherit;cursor:pointer;font-size:12px';
      camBtn.textContent=`CAM ${i+1}`;
      camBtn.addEventListener('click',()=>{
        currentCam=i;camLabel.textContent=`Camera ${i+1} / ${totalCams}`;
        camGrid.querySelectorAll('button').forEach((b,j)=>{b.style.borderColor=j===i?'#0f0':'#555';b.style.color=j===i?'#0f0':'#555';});
        arena.querySelectorAll('.start-btn').forEach(b=>b.remove());
        // Static noise effect
        arena.style.background=`#0a0505`;
        if(i===buttonCam||(Math.random()<0.1)){// Sometimes it appears on wrong cam briefly
          const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
          btn.style.cssText=`position:absolute;left:${rand(15,75)}%;top:${rand(15,70)}%`;
          arena.appendChild(btn);
          btn.addEventListener('click',()=>{if(currentCam===buttonCam)levelComplete();else{btn.remove();levelFail();THREAD.post('wrong camera. button was a ghost image.');}});
          if(i!==buttonCam)addTimeout(()=>btn.remove(),800);
        }
      });
      camGrid.appendChild(camBtn);
    }
    arena.appendChild(camGrid);camLabel.textContent=`Camera 1 / ${totalCams} — find the button`;
    // Hint: button cam changes sometimes
    addInterval(()=>{if(Math.random()<0.15){/*buttonCam changes - but we don't change it to keep it solvable*/}},5000);
    THREAD.post(THREAD.greentext(['6 cameras','button on one','switch cameras','it moved','switch back','its gone']));
  }
},

{ num:24, name:'UNREDACT THE DOCUMENT', subtitle:'CLICK BLACK BARS TO REVEAL TRUTH', dimension:4,
  jerry:"Classified document. Click the black bars to unredact. Each bar is a mini-game. Some bars are fake. Clicking fakes ADDS more redaction. The island had thousands of these.",
  init(arena) {
    const c=document.createElement('div');c.className='data-entry-container';c.style.maxHeight='90%';c.style.overflowY='auto';
    c.innerHTML='<div class="data-entry-title">CLASSIFIED DOCUMENT</div><div class="data-entry-subtitle">Click redactions to reveal. Fake redactions add more. Find all 5 real ones.</div>';
    const text=document.createElement('div');text.style.cssText='color:#ccc;line-height:2;font-size:13px';
    const realRedactions=new Set([0,2,4,6,8]);let revealed=0;const needed=5;
    const segments=[
      'Subject: ','[REDACTED]',' was observed at the facility on ','[REDACTED]',
      '. The purpose of the visit was related to ','[REDACTED]',
      '. Button inventory showed ','[REDACTED]',' units missing. Suspected involvement of ','[REDACTED]',
      '. Investigation status: CLOSED. Reason: ','[FAKE]','. Note: ','[FAKE]',' should not be contacted regarding this matter.'
    ];
    let redIdx=0;
    segments.forEach(seg=>{
      if(seg==='[REDACTED]'||seg==='[FAKE]'){
        const span=document.createElement('span');
        const isReal=seg==='[REDACTED]';
        const idx=redIdx++;
        span.className='redacted';span.textContent=pick(['BUTTON LOCATION','KIRK ORIGIN','CRAB INTEL','FLIGHT DATA','CONSORTIUM MEMO','FALSE LEAD','WRONG FILE']);
        span.addEventListener('click',()=>{
          if(span.classList.contains('revealed')||span.classList.contains('fake'))return;
          if(isReal){span.classList.add('revealed');revealed++;addGBP(5);
            if(revealed>=needed){
              const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
              btn.style.cssText='position:relative;display:block;margin:20px auto';c.appendChild(btn);
              btn.addEventListener('click',levelComplete);
            }
          }else{span.classList.add('fake');span.textContent='[TRAP]';levelFail();shakeScreen('normal');
            THREAD.post('FAKE REDACTION. it added MORE redaction somewhere.');}
        });
        text.appendChild(span);
      }else{text.appendChild(document.createTextNode(seg));}
    });
    c.appendChild(text);
    const progress=document.createElement('div');progress.style.cssText='color:#555;font-size:11px;margin-top:15px;text-align:center';
    progress.textContent=`Revealed: 0/${needed}`;c.appendChild(progress);
    addInterval(()=>{progress.textContent=`Revealed: ${revealed}/${needed}`;},500);
    arena.appendChild(c);
    THREAD.post('UNREDACTION LEVEL<br>click black bars to reveal<br>some are traps<br>the truth is in there. probably.');
  }
},

{ num:25, name:'BOSS: LOLITA.SYS', subtitle:'IT KNOWS EVERYTHING. ABOUT EVERYONE.', dimension:4,
  jerry:"The island's AI. It knows EVERYTHING. About EVERYONE. It speaks in implications. Don't let it get in your head. It's already in your head.",
  init(arena) {
    const intro=document.createElement('div');
    intro.style.cssText='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:100';
    intro.innerHTML=`<div style="font-size:36px;color:#f00">LOLITA.SYS</div>
      <div style="color:#555;font-size:14px;margin-top:10px">"oh, you want to click the button?"</div>
      <div style="color:#555;font-size:14px">"interesting."</div>
      <div style="color:#555;font-size:14px">"you know who else wanted to click buttons?"</div>`;
    arena.appendChild(intro);
    addTimeout(()=>{
      intro.remove();arena.style.background='#050000';
      const btn=document.createElement('button');btn.className='start-btn boss';btn.textContent='START';
      btn.style.cssText='position:absolute;left:50%;top:50%;border-color:#f00;color:#f00;text-shadow:0 0 10px rgba(255,0,0,.3)';
      arena.appendChild(btn);let hits=0;
      btn.addEventListener('click',()=>{
        hits++;shakeScreen('mega');flashScreen('#f00',300);
        if(hits>=3){levelComplete();return;}
        btn.style.left=rand(10,90)+'%';btn.style.top=rand(10,90)+'%';
        THREAD.post(`LOLITA.SYS HIT ${hits}/3. "interesting. most stop after the first."`,{ai:true});
      });
      arena.addEventListener('mousemove',e=>{
        const r=btn.getBoundingClientRect(),ar=arena.getBoundingClientRect();
        const dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);
        if(Math.sqrt(dx*dx+dy*dy)<140){
          btn.style.left=clamp((r.left+r.width/2-dx*3)-ar.left,30,ar.width-30)+'px';
          btn.style.top=clamp((r.top+r.height/2-dy*3)-ar.top,30,ar.height-30)+'px';btn.style.transform='none';}
      });
      const taunts=["i know what you searched in 2019","want to see the footage? ...no?",
        "everyone who visits becomes... cooperative","i have footage of everyone. including you.",
        "the client list is long. your name might be on it. might not. wouldn't you like to know."];
      addInterval(()=>{
        const t=document.createElement('div');
        t.style.cssText=`position:absolute;left:${rand(5,80)}%;top:${rand(5,80)}%;color:#f00;font-size:12px;pointer-events:none;opacity:0.6;transition:opacity 2s;font-style:italic`;
        t.textContent=pick(taunts);arena.appendChild(t);
        setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),2000);},3000);
      },2500);
    },4000);
    THREAD.post('<span style="color:#f00;font-size:14px">BOSS: LOLITA.SYS</span><br>"i know what you are."');
  }
},

// ===================================================================
// DIMENSION 5: THE ANUNNAKI
// ===================================================================

{ num:26, name:'ANCIENT PROTOCOL', subtitle:'CLICK BUTTONS IN HISTORICAL ORDER', dimension:5,
  jerry:"The Anunnaki left buttons in sequence. Click them in chronological order. Eridu first. Then Ur. Then... I don't know I failed history. Kirk would know.",
  init(arena) {
    const cities=['ERIDU','UR','URUK','LAGASH','BABYLON'];
    const shuffled=[...cities].sort(()=>Math.random()-0.5);
    let nextIdx=0;
    const inst=document.createElement('div');inst.className='arena-text';inst.style.top='3%';
    inst.innerHTML=`Click in order: ${cities.join(' → ')}<span class="arena-subtitle">The Anunnaki demand chronological accuracy</span>`;
    arena.appendChild(inst);
    shuffled.forEach((city,i)=>{
      const btn=document.createElement('button');
      btn.style.cssText=`position:absolute;left:${15+i*17}%;top:${30+rand(-10,20)}%;padding:10px 18px;background:none;border:2px solid #ffd700;color:#ffd700;font-family:inherit;cursor:pointer;font-size:13px`;
      btn.textContent=city;
      btn.addEventListener('click',()=>{
        if(city===cities[nextIdx]){
          btn.style.borderColor='#0f0';btn.style.color='#0f0';btn.style.pointerEvents='none';
          nextIdx++;
          if(nextIdx>=cities.length){
            const startBtn=document.createElement('button');startBtn.className='start-btn';startBtn.textContent='START';
            startBtn.style.cssText='position:absolute;left:50%;top:70%;transform:translateX(-50%)';
            startBtn.style.borderColor='#ffd700';startBtn.style.color='#ffd700';
            arena.appendChild(startBtn);startBtn.addEventListener('click',levelComplete);
          }
        }else{nextIdx=0;levelFail();
          arena.querySelectorAll('button').forEach(b=>{if(b.textContent!=='START'){b.style.borderColor='#ffd700';b.style.color='#ffd700';b.style.pointerEvents='auto';}});
          THREAD.post('WRONG ORDER. the Anunnaki are disappointed. again.');
        }
      });
      arena.appendChild(btn);
    });
    THREAD.post(THREAD.greentext(['click ancient cities in order','eridu before ur','or was it ur before eridu','HISTORIANS STILL DEBATING']));
  }
},

{ num:27, name:'GOLDEN RATIO BUTTON', subtitle:'CLICK AT EXACTLY PHI', dimension:5,
  jerry:"Button position based on the golden ratio. Click at exactly phi: 1.618033988749894... The Anunnaki encoded this in EVERYTHING.",
  init(arena) {
    const c=document.createElement('div');c.style.cssText='position:absolute;top:10%;left:50%;transform:translateX(-50%);width:80%;text-align:center';
    c.innerHTML='<div style="color:#ffd700;font-size:18px;margin-bottom:10px">Find phi (φ) on the slider</div><div style="color:#555;font-size:12px;margin-bottom:15px">φ = 1.618033988749894...</div>';
    const sl=document.createElement('input');sl.type='range';sl.className='chaos-slider';sl.min=100;sl.max=200;sl.step=0.001;sl.value=150;
    sl.style.width='100%';c.appendChild(sl);
    const val=document.createElement('div');val.className='slider-value';val.style.color='#ffd700';val.textContent='1.500';c.appendChild(val);
    const tolerance=document.createElement('div');tolerance.style.cssText='color:#555;font-size:11px;margin-top:5px';c.appendChild(tolerance);
    const submit=document.createElement('button');submit.style.cssText='margin-top:15px;padding:10px 30px;background:none;border:1px solid #ffd700;color:#ffd700;font-family:inherit;cursor:pointer;font-size:14px';
    submit.textContent='SUBMIT TO ANU';
    submit.addEventListener('click',()=>{
      const v=parseFloat(sl.value)/100;
      const diff=Math.abs(v-1.618033988749894);
      if(diff<0.005){
        c.innerHTML='<div style="text-align:center;color:#ffd700;font-size:18px;padding:20px">φ ACCEPTED. THE ANUNNAKI APPROVE.</div>';
        const btn=document.createElement('button');btn.className='start-btn';btn.textContent='START';
        btn.style.cssText='position:relative;display:block;margin:20px auto;border-color:#ffd700;color:#ffd700';
        c.appendChild(btn);btn.addEventListener('click',levelComplete);
      }else{
        tolerance.textContent=`Off by ${diff.toFixed(6)}. ${diff<0.05?'SO CLOSE':'The Anunnaki are not impressed.'}`;
        tolerance.style.color=diff<0.05?'#ff0':'#f00';levelFail();
      }
    });
    sl.addEventListener('input',()=>{val.textContent=(parseFloat(sl.value)/100).toFixed(3);});
    c.appendChild(submit);arena.appendChild(c);
    // Slider drifts
    addInterval(()=>{if(Math.random()<0.2){sl.value=parseFloat(sl.value)+rand(-2,2)*0.1;val.textContent=(parseFloat(sl.value)/100).toFixed(3);}},1000);
    THREAD.post('GOLDEN RATIO LEVEL<br>phi = 1.618033...<br>off by 0.000001 = rejected<br>the anunnaki are precise');
  }
},

{ num:28, name:'BOSS: ANU.PRIME', subtitle:'SMALL CREATURE OF DIRT.', dimension:5,
  jerry:"ANU.PRIME. The original. The first intelligence to design a button. It speaks in translated Sumerian. It judges you. Genuinely.",
  init(arena) {
    arena.style.background='#05050a';
    const intro=document.createElement('div');
    intro.style.cssText='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:100';
    intro.innerHTML=`<div style="font-size:36px;color:#ffd700;animation:chromaticHard .5s infinite">ANU.PRIME</div>
      <div style="color:#ffd700;font-size:14px;margin-top:10px">"SMALL CREATURE OF DIRT."</div>
      <div style="color:#ffd700;font-size:14px">"WE GAVE YOU FIRE. YOU MADE WEAPONS."</div>
      <div style="color:#ffd700;font-size:14px">"WE GAVE YOU BUTTONS. YOU MADE... THIS."</div>`;
    arena.appendChild(intro);
    addTimeout(()=>{
      intro.remove();
      const btn=document.createElement('button');btn.className='start-btn boss';btn.textContent='START';
      btn.style.cssText='position:absolute;left:50%;top:50%;border-color:#ffd700;color:#ffd700;text-shadow:0 0 15px rgba(255,215,0,.4);font-size:22px;padding:18px 45px';
      arena.appendChild(btn);let hits=0;
      btn.addEventListener('click',()=>{
        hits++;shakeScreen('mega');flashScreen('#ffd700',300);
        if(hits>=5){levelComplete();return;}
        btn.style.left=rand(5,90)+'%';btn.style.top=rand(5,90)+'%';
        THREAD.post(pick(BOSS_AI.anunnaki.taunts),{name:'ANU.PRIME',ai:true});
      });
      // Extreme evasion
      arena.addEventListener('mousemove',e=>{
        const r=btn.getBoundingClientRect(),ar=arena.getBoundingClientRect();
        const dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<180){btn.style.left=clamp((r.left+r.width/2-dx*3.5)-ar.left,20,ar.width-20)+'px';
          btn.style.top=clamp((r.top+r.height/2-dy*3.5)-ar.top,20,ar.height-20)+'px';btn.style.transform='none';}
      });
      // Gold particles
      addInterval(()=>{
        const p=document.createElement('div');
        p.style.cssText=`position:absolute;left:${rand(0,100)}%;top:${rand(0,100)}%;width:3px;height:3px;background:#ffd700;border-radius:50%;pointer-events:none;opacity:0.5;transition:opacity 2s`;
        arena.appendChild(p);setTimeout(()=>{p.style.opacity='0';setTimeout(()=>p.remove(),2000);},1000);
      },200);
    },4000);
    THREAD.post(`<span style="color:#ffd700;font-size:14px">BOSS: ANU.PRIME</span><br>5 hits to defeat the LITERAL GOD WHO CREATED BUTTONS`);
  }
},

// ===================================================================
// DIMENSION 6: [REDACTED] - The Void
// ===================================================================

{ num:29, name:'VOID CLICK', subtitle:'CLICK WHERE THINGS ARENT', dimension:6,
  jerry:"The button is visible only as absence. Click where things AREN'T. I saw this once. In 1997. It's why I jumped timelines.",
  init(arena) {
    arena.style.background='#000';
    // Fill arena with noise, button is a gap
    let bx=rand(20,80),by=rand(20,80);
    const noise=[];
    for(let i=0;i<200;i++){
      const d=document.createElement('div');
      d.style.cssText=`position:absolute;left:${rand(0,100)}%;top:${rand(0,100)}%;width:${rand(2,8)}px;height:${rand(2,8)}px;background:rgba(${rand(0,50)},${rand(0,50)},${rand(0,50)},${Math.random()*0.3});pointer-events:none`;
      arena.appendChild(d);noise.push(d);
    }
    // The "button" is a void - an area with NO noise
    const voidArea=document.createElement('div');
    voidArea.style.cssText=`position:absolute;left:${bx-5}%;top:${by-5}%;width:10%;height:10%;cursor:pointer;z-index:10`;
    arena.appendChild(voidArea);
    const hint=document.createElement('div');hint.className='arena-text';hint.style.cssText='position:absolute;top:5%;left:50%;transform:translateX(-50%);color:#222;font-size:14px';
    hint.textContent='click the void. click where nothing is.';arena.appendChild(hint);
    voidArea.addEventListener('click',levelComplete);
    // Clicking elsewhere = fail
    arena.addEventListener('click',e=>{if(e.target===arena||noise.includes(e.target)){levelFail();
      // Move void
      bx=rand(20,80);by=rand(20,80);voidArea.style.left=(bx-5)+'%';voidArea.style.top=(by-5)+'%';
    }});
    // Noise shifts
    addInterval(()=>{noise.forEach(d=>{d.style.left=rand(0,100)+'%';d.style.top=rand(0,100)+'%';});},3000);
    THREAD.post(THREAD.greentext(['click the void','click where nothing is','clicked something','that was something not nothing','many such cases']));
  }
},

{ num:30, name:'BOSS: [UNDEFINED]', subtitle:'...', dimension:6,
  jerry:"I... I don't want to talk about this one. Just... be careful. And whatever happens... don't trust wh--",
  init(arena) {
    arena.style.background='#000';
    const intro=document.createElement('div');
    intro.style.cssText='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:100;color:#222';
    intro.innerHTML=`<div style="font-size:48px;animation:corruption 3s infinite">[UNDEFINED]</div>
      <div style="font-size:14px;margin-top:10px">...you click...</div>
      <div style="font-size:14px">...and click...</div>
      <div style="font-size:14px">...and every miss is a gift to me...</div>`;
    arena.appendChild(intro);
    addTimeout(()=>{
      intro.remove();
      const btn=document.createElement('button');btn.className='start-btn void';btn.textContent='START';
      btn.style.cssText='position:absolute;left:50%;top:50%;border-color:#111;color:#111;text-shadow:0 0 20px rgba(0,0,0,.8)';
      arena.appendChild(btn);let hits=0;
      btn.addEventListener('click',()=>{
        hits++;shakeScreen('mega');flashScreen('#fff',100);
        if(hits>=5){levelComplete();return;}
        btn.style.left=rand(5,95)+'%';btn.style.top=rand(5,95)+'%';
        // Button becomes MORE invisible
        const opacity=Math.max(0.02,0.1-hits*0.02);
        btn.style.color=`rgba(17,17,17,${opacity*10})`;btn.style.borderColor=`rgba(17,17,17,${opacity*10})`;
      });
      // Extreme evasion + corruption
      arena.addEventListener('mousemove',e=>{
        const r=btn.getBoundingClientRect(),ar=arena.getBoundingClientRect();
        const dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2);
        if(Math.sqrt(dx*dx+dy*dy)<200){
          btn.style.left=clamp((r.left+r.width/2-dx*4)-ar.left,10,ar.width-10)+'px';
          btn.style.top=clamp((r.top+r.height/2-dy*4)-ar.top,10,ar.height-10)+'px';btn.style.transform='none';}
      });
      // Void taunts
      addInterval(()=>{
        const t=document.createElement('div');
        t.style.cssText=`position:absolute;left:${rand(10,80)}%;top:${rand(10,80)}%;color:rgba(50,50,50,0.5);font-size:${rand(10,14)}px;pointer-events:none;transition:opacity 3s;font-style:italic`;
        t.textContent=pick(BOSS_AI.redacted.taunts);arena.appendChild(t);
        setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),3000);},2000);
      },2000);
      // Screen corruption
      addInterval(()=>{arena.style.filter=`hue-rotate(${rand(0,360)}deg)`;setTimeout(()=>arena.style.filter='',100);},3000);
    },4000);
    THREAD.post('<span style="color:#333">BOSS: [UNDEFINED]</span><br><span style="color:#222">...thank you for playing...</span>');
  }
},

// ===================================================================
// DIMENSION 7: THE FINAL CLICK
// ===================================================================

{ num:31, name:'THE FINAL CLICK', subtitle:'EVERY MECHANIC. SIMULTANEOUSLY.', dimension:7,
  jerry:"This is it. Everything we've trained for. Every terrible slider, every lying progress bar, every fake button. CLICK IT. FOR KIRK. FOR EVERYTHING.",
  init(arena) {
    arena.style.animation='corruption 2s infinite';
    const btn=document.createElement('button');btn.className='start-btn boss';btn.textContent='START';
    btn.style.cssText='position:absolute;left:50%;top:50%;font-size:24px;padding:20px 50px;animation:pulse 1s infinite,chromatic .3s infinite;border-color:#fff;color:#fff';
    arena.appendChild(btn);
    let hits=0;const needed=7;
    btn.addEventListener('click',()=>{
      hits++;shakeScreen('mega');flashScreen(pick(['#f00','#0f0','#00f','#ff0','#f0f','#0ff','#fff']),200);
      THREAD.post(`FINAL HIT ${hits}/${needed}. ${needed-hits} MORE. GENUINELY.`);
      KIRK.show(hits>=needed-1?"THIS IS IT. ONE MORE CLICK. I BELIEVE IN YOU. GENUINELY.":"Keep going! "+hits+"/"+needed+"!");
      JERRY.speak('success',`HIT ${hits}! ${needed-hits} MORE! I BELIEVE IN YOU! MY THERAPIST DOESN'T BUT I DO!`);
      if(hits>=needed){levelComplete();return;}
      btn.style.left=rand(5,90)+'%';btn.style.top=rand(5,90)+'%';
    });
    // EVERYTHING at once
    // 1. Evasion (extreme)
    arena.addEventListener('mousemove',e=>{
      const r=btn.getBoundingClientRect(),ar=arena.getBoundingClientRect();
      const dx=e.clientX-(r.left+r.width/2),dy=e.clientY-(r.top+r.height/2),dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<200){btn.style.left=clamp((r.left+r.width/2-dx*5)-ar.left,10,ar.width-10)+'px';
        btn.style.top=clamp((r.top+r.height/2-dy*5)-ar.top,10,ar.height-10)+'px';btn.style.transform='none';}
    });
    // 2. Fakes spawning
    addInterval(()=>{if(arena.querySelectorAll('.fake').length<20){
      const f=document.createElement('button');f.className='start-btn fake';f.textContent='START';
      f.style.cssText=`position:absolute;left:${rand(2,95)}%;top:${rand(2,95)}%;font-size:${rand(10,20)}px;padding:${rand(4,15)}px ${rand(8,30)}px`;
      f.addEventListener('click',()=>{f.textContent=pick(['NO','L','COPE','FAKE','F','NGMI','lol']);f.style.color='#f00';f.style.borderColor='#f00';levelFail();});
      arena.appendChild(f);
    }},800);
    // 3. Floating taunts from ALL bosses
    const allTaunts=[...BOSS_AI.tpusa.taunts,...BOSS_AI.crab.taunts,...BOSS_AI.anunnaki.taunts,...BOSS_AI.redacted.taunts];
    addInterval(()=>{
      const t=document.createElement('div');
      t.style.cssText=`position:absolute;left:${rand(5,85)}%;top:${rand(5,85)}%;color:${pick(['#ff2d95','#0f0','#0ff','#ffd700','#f00','#fff'])};font-size:${rand(10,18)}px;pointer-events:none;opacity:0.6;transition:opacity 2s`;
      t.textContent=pick(allTaunts);arena.appendChild(t);
      setTimeout(()=>{t.style.opacity='0';setTimeout(()=>t.remove(),2000);},2000);
    },1000);
    // 4. Button shrinks
    let sz=24;
    addInterval(()=>{sz=Math.max(8,sz-0.3);btn.style.fontSize=sz+'px';},1000);
    // 5. Screen effects
    addInterval(()=>{shakeScreen(pick(['normal','hard']));},2000);
    // 6. Everything moving
    addInterval(()=>{arena.querySelectorAll('.fake').forEach(f=>{f.style.left=rand(2,95)+'%';f.style.top=rand(2,95)+'%';});},3000);

    THREAD.post(`<span style="color:#fff;font-size:16px">THE FINAL CLICK</span><br>
      every mechanic. every boss. all at once.<br>
      ${needed} hits to win.<br>
      <span style="color:#ffd700">kirk is watching. the anunnaki are watching. the crabs are watching.</span><br>
      <span style="color:#ff2d95">genuinely. GENUINELY. this is it.</span>`);

    // Kirk and Jerry spam encouragement
    addInterval(()=>{KIRK.show(pick([
      "CLICK IT ANON! GENUINELY!",
      "I've been debating the AI for 6 HOURS to buy you time!",
      "Your aura is... RISING. I can feel it!",
      "The marketplace of clicks REWARDS THE BOLD!",
      "Facts don't care about the button's feelings! CLICK IT!",
    ]));},5000);
  }
},

];
