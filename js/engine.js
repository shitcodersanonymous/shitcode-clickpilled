// SHITCODE ENGINE - Core state & utilities
window.GAME = {
  phase:'warning', dimension:1, level:0, attempts:0, totalAttempts:0,
  gbp:0, kirkHealth:100, csd:0, failStreak:0, startTime:Date.now(),
  levelStartTime:0, achievements:new Set(), devToolsDetected:false,
  tabFocusLost:0, savedOnce:false, scEncounters:0,
  threadPostId:847382919, levelsCompleted:0, highestLevel:0,
  intervals:[], timeouts:[],
  dimNames:{1:'THE SURFACE',2:'THE CONSORTIUM',3:'THE CRAB PEOPLE',4:'THE ISLAND',5:'THE ANUNNAKI',6:'[REDACTED]',7:'THE FINAL CLICK'},
  boards:{1:'/v/',2:'/g/',3:'/x/',4:'/pol/',5:'/his/',6:'/trash/',7:'/b/'}
};
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
const rand=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=a=>a[rand(0,a.length-1)];
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

function clearGameIntervals(){
  GAME.intervals.forEach(clearInterval);
  GAME.timeouts.forEach(clearTimeout);
  GAME.intervals=[];GAME.timeouts=[];
}
function addInterval(fn,ms){const id=setInterval(fn,ms);GAME.intervals.push(id);return id;}
function addTimeout(fn,ms){const id=setTimeout(fn,ms);GAME.timeouts.push(id);return id;}

function shakeScreen(t){
  const c=['shake','shake-hard','shake-mega'];
  document.body.classList.remove(...c);void document.body.offsetWidth;
  document.body.classList.add(t==='mega'?'shake-mega':t==='hard'?'shake-hard':'shake');
  setTimeout(()=>document.body.classList.remove(...c),250);
}
function spawnL(){
  const el=document.createElement('div');el.className='l-rain';
  el.textContent=pick(['L','L','F','NGMI','L']);
  el.style.left=rand(0,window.innerWidth-20)+'px';el.style.top='-30px';
  el.style.fontSize=rand(18,36)+'px';
  document.body.appendChild(el);setTimeout(()=>el.remove(),2500);
}
function flashScreen(color,dur){
  const f=document.createElement('div');
  f.style.cssText=`position:fixed;top:0;left:0;width:100%;height:100%;background:${color};z-index:9990;pointer-events:none;opacity:.5;transition:opacity ${dur||200}ms`;
  document.body.appendChild(f);
  requestAnimationFrame(()=>{f.style.opacity='0';});
  setTimeout(()=>f.remove(),(dur||200)+50);
}
function addGBP(n){
  GAME.gbp=Math.max(0,GAME.gbp+n);
  const el=$('#gbp-display');if(!el)return;
  el.textContent='GBP: '+GAME.gbp;
  el.style.color=n>0?'#0f0':'#f00';
  setTimeout(()=>{el.style.color='#ffd700';},600);
}
function updateCSD(){
  const m=$('#csd-meter');if(!m)return;
  m.querySelectorAll('.csd-item').forEach((item,i)=>{
    item.classList.toggle('inactive',i>=GAME.csd);
  });
  if(GAME.csd>=3){
    shakeScreen('hard');flashScreen('#f00',500);
    THREAD.post('<span class="redtext">COPE SEETHE DILATE TRIGGERED</span><br>difficulty increased.');
    GAME.csd=0;updateCSD();
  }
}
function unlockAchievement(id,title,desc){
  if(GAME.achievements.has(id))return;GAME.achievements.add(id);
  const el=$('#achievement');if(!el)return;
  el.querySelector('.ach-title').textContent=title;
  el.querySelector('.ach-desc').textContent=desc;
  el.classList.add('show');addGBP(10);
  THREAD.post(`<span style="color:#ffd700">ACHIEVEMENT: ${title}</span><br><span style="color:#888">${desc}</span>`);
  if(window.AUDIO)AUDIO.play('achievement');
  setTimeout(()=>el.classList.remove('show'),4000);
}
function updateKirkMeter(){
  const fill=$('#kirk-meter-fill'),status=$('#kirk-status');
  if(!fill)return;fill.style.width=GAME.kirkHealth+'%';
  const s=[[80,'GENUINELY FINE','#0f0'],[60,'ACTUALLY CONCERNED','#ff0'],[40,'GENUINELY NERVOUS','#f80'],[25,'ACTUALLY SWEATING','#f00'],[10,'KIRK IS DISAPPOINTED','#f00'],[0,'CRITICAL: KIRK DOUBTS YOU','#f00']];
  for(const[t,txt,c]of s){if(GAME.kirkHealth>=t){if(status){status.textContent=txt;status.style.color=c;}break;}}
}

function levelFail(){
  GAME.attempts++;GAME.totalAttempts++;GAME.failStreak++;
  GAME.kirkHealth=Math.max(0,GAME.kirkHealth-rand(1,3));
  shakeScreen('normal');spawnL();
  updateKirkMeter();
  const c=$('#attempt-counter');if(c)c.textContent='Attempts: '+GAME.totalAttempts;
  if(GAME.failStreak%3===0)JERRY.speak('fail');
  THREAD.replyToFail();addGBP(-1);
  if(window.AUDIO)AUDIO.play('fail');
  if(GAME.failStreak>=5&&GAME.csd<1){GAME.csd=1;updateCSD();}
  if(GAME.failStreak>=15&&GAME.csd<2){GAME.csd=2;updateCSD();}
  if(GAME.failStreak>=30&&GAME.csd<3){GAME.csd=3;updateCSD();}
  if(GAME.totalAttempts>=50)unlockAchievement('g50','Glutton for Punishment','Failed 50 times.');
  if(GAME.totalAttempts>=100)unlockAchievement('g100','Certified Clickcel','Failed 100 times.');
  if(GAME.failStreak>=20)unlockAchievement('s20','Many Such Cases','20 fails in a row.');
}

function levelComplete(){
  clearGameIntervals();
  GAME.failStreak=0;GAME.csd=0;updateCSD();
  GAME.kirkHealth=Math.min(100,GAME.kirkHealth+15);
  GAME.levelsCompleted++;updateKirkMeter();
  shakeScreen('hard');flashScreen('#0f0',300);addGBP(20);
  JERRY.speak('success');THREAD.replyToSuccess();KIRK.show();
  if(window.AUDIO)AUDIO.play('win');
  GAME.level++;GAME.highestLevel=Math.max(GAME.highestLevel,GAME.level);
  const all=window.ALL_LEVELS||[];
  if(GAME.level>=all.length){window.startVictory();return;}
  const next=all[GAME.level],cur=all[GAME.level-1];
  if(next&&cur&&next.dimension!==cur.dimension){
    showDimTransition(next.dimension);
  }else{addTimeout(()=>startLevel(GAME.level),1500);}
}

function showDimTransition(dim){
  const s=$('#transition-screen');if(!s){addTimeout(()=>startLevel(GAME.level),1000);return;}
  s.style.display='flex';
  const g=s.querySelector('.glitch-text'),sub=s.querySelector('.sub-text');
  const seq=[['DIMENSION BREACH',''],['WORMHOLE OPENING','do not look at it'],['ENTERING: '+(GAME.dimNames[dim]||'???'),'your cursor is not ready'],['GENUINELY','genuinely']];
  let i=0;const iv=setInterval(()=>{
    if(i>=seq.length){clearInterval(iv);s.style.display='none';
      if(window.UNREDACTION&&UNREDACTION.docs[dim-1]){UNREDACTION.show(dim-1,()=>startLevel(GAME.level));}
      else startLevel(GAME.level);return;}
    g.textContent=seq[i][0];sub.textContent=seq[i][1];shakeScreen(i>1?'hard':'normal');i++;
  },1200);
}

function startLevel(idx){
  clearGameIntervals();
  const arena=$('#game-arena');if(!arena)return;arena.innerHTML='';
  const all=window.ALL_LEVELS||[];
  if(idx>=all.length){window.startVictory();return;}
  const lv=all[idx];GAME.levelStartTime=Date.now();GAME.attempts=0;
  GAME.dimension=lv.dimension||1;
  const ln=$('#level-num'),lname=$('#level-name');
  if(ln){let d=lv.num;if(Math.random()<.12&&idx>3)d=lv.num+rand(-5,20);ln.textContent='LEVEL '+d;}
  if(lname){lname.textContent=lv.name;
    let dim=lname.parentElement.querySelector('.dimension');
    if(!dim){dim=document.createElement('div');dim.className='dimension';lname.parentElement.appendChild(dim);}
    dim.textContent='DIM '+GAME.dimension+': '+(GAME.dimNames[GAME.dimension]||'???');
  }
  addTimeout(()=>JERRY.speak('levelStart',lv.jerry),500);
  if(idx>1)addTimeout(()=>KIRK.show(),3000);
  if(idx>=3&&Math.random()<.25)addTimeout(()=>showSC(),rand(5000,15000));
  THREAD.post(`<span style="color:#0f0">--- LEVEL ${lv.num}: ${lv.name} ---</span><br><span style="color:#555">${lv.subtitle||''}</span>`);
  addInterval(()=>{GAME.kirkHealth=Math.max(0,GAME.kirkHealth-.5);updateKirkMeter();
    if(GAME.kirkHealth<=0){clearGameIntervals();JERRY.speak('fail','KIRK IS DOWN. His face - NORMAL SIZED - hit zero HP.');GAME.kirkHealth=50;updateKirkMeter();addTimeout(()=>startLevel(idx),3000);}
  },5000);
  addInterval(()=>{if(Math.random()<.15)JERRY.speak('random');},20000);
  addInterval(()=>{if(Math.random()<.1)KIRK.show();},25000);
  lv.init(arena);
}

function showSC(){
  const box=$('#sc-box'),text=$('#sc-text');if(!box||!text)return;
  text.textContent=pick(["A box. Help or suffering.","oi. box here. your call cunt.","Quantum state. Observe at own risk."]);
  text.style.color='#ccc';box.style.display='block';
  $('#sc-open').onclick=()=>{GAME.scEncounters++;
    if(Math.random()<.45){text.textContent=pick(["button's near center. don't tell anyone.","I slowed it down for 5 seconds. GO.","genuine help: approach from the left."]);text.style.color='#0f0';addGBP(15);
      THREAD.post("SC HELPFUL MODE "+String.fromCodePoint(0x1F438));
    }else{text.textContent=pick(["yeah nah get fucked. 2x speed now.","haha. cunt mode. spawning 10 fakes.","I could have helped. chose not to. vibes."]);text.style.color='#f00';addGBP(-15);
      GAME.kirkHealth=Math.max(0,GAME.kirkHealth-8);updateKirkMeter();shakeScreen('hard');
      THREAD.post(THREAD.greentext(['opened box','cunt mode','many such cases']));
    }addTimeout(()=>{box.style.display='none';},4000);
  };
  $('#sc-ignore').onclick=()=>{text.textContent="coward.";text.style.color='#888';addGBP(2);addTimeout(()=>{box.style.display='none';},2000);};
}

function saveGame(){
  try{localStorage.setItem('shitcode_save',JSON.stringify({level:GAME.level,attempts:GAME.totalAttempts,gbp:GAME.gbp,achievements:[...GAME.achievements],highestLevel:GAME.highestLevel,t:Date.now()}));}catch(e){}
}
function loadGame(){
  try{const r=localStorage.getItem('shitcode_save');if(r){const s=JSON.parse(r);
    if(Math.random()<.25)s.level=Math.max(0,(s.level||0)-rand(1,3));
    GAME.level=s.level||0;GAME.totalAttempts=s.attempts||0;GAME.gbp=s.gbp||0;GAME.highestLevel=s.highestLevel||0;
    if(s.achievements)s.achievements.forEach(a=>GAME.achievements.add(a));return true;}}catch(e){}return false;
}
setInterval(()=>{if(GAME.phase==='game'&&Math.random()<.4)saveGame();},30000);

// expose globals
window.$=$;window.$$=$$;window.rand=rand;window.pick=pick;window.sleep=sleep;window.clamp=clamp;
window.clearGameIntervals=clearGameIntervals;window.addInterval=addInterval;window.addTimeout=addTimeout;
window.shakeScreen=shakeScreen;window.spawnL=spawnL;window.flashScreen=flashScreen;
window.addGBP=addGBP;window.updateCSD=updateCSD;window.unlockAchievement=unlockAchievement;
window.updateKirkMeter=updateKirkMeter;window.levelFail=levelFail;window.levelComplete=levelComplete;
window.startLevel=startLevel;window.showSC=showSC;window.saveGame=saveGame;window.loadGame=loadGame;
