// SHITCODE - Victory Sequence (Browser Nuke)

window.startVictory = function() {
  GAME.phase = 'victory';
  clearGameIntervals();
  if (window.AUDIO) { AUDIO.play('nuke'); AUDIO.startNukeAudio(); }

  // Hide game UI
  const gamePhase = $('#game-phase');
  if (gamePhase) gamePhase.style.display = 'none';

  // Show victory container
  const vic = $('#victory-phase');
  if (vic) vic.style.display = 'block';

  // Achievement
  unlockAchievement('winner', 'YOU GENUINELY DID IT', 'Kirk is saved. Your aura is infinite.');

  // Thread eruption
  THREAD.post('<span style="color:#ffd700;font-size:1.4em">HE ACTUALLY DID IT</span>');
  setTimeout(() => THREAD.post(THREAD.greentext(['be anon', 'click impossible button', 'save kirk', 'absolute madman'])), 800);
  setTimeout(() => THREAD.post('WAGMI WAGMI WAGMI WAGMI'), 1600);
  setTimeout(() => THREAD.post('the absolute aura of this anon right now', { name: 'Anonymous' }), 2400);
  setTimeout(() => THREAD.post('genuinely unprecedented. genuinely.', { name: 'Kirk [SAVED]', kirk: true }), 3200);

  // Jerry final message
  setTimeout(() => {
    JERRY.speak('success', "ANON. GENUINELY. You did it. Kirk is saved. My face - wet with TEARS. Encryption is PURRING. The Consortium is SHAKING. You're the most BASED clicker in the history of clicking. I'm going to need a moment. Several moments. Possibly therapy. GENUINELY.");
  }, 1000);

  // Stats overlay
  const elapsed = Math.floor((Date.now() - GAME.startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const statsDiv = document.createElement('div');
  statsDiv.className = 'victory-stats';
  statsDiv.innerHTML = `
    <div class="stat-line">MISSION COMPLETE</div>
    <div class="stat-line">Time: ${mins}m ${secs}s</div>
    <div class="stat-line">Total Attempts: ${GAME.totalAttempts}</div>
    <div class="stat-line">GBP Earned: ${GAME.gbp}</div>
    <div class="stat-line">Kirk Health: ${GAME.kirkHealth}%</div>
    <div class="stat-line">Achievements: ${GAME.achievements.size}</div>
    <div class="stat-line">SC Encounters: ${GAME.scEncounters}</div>
    <div class="stat-line aura-line">AURA LEVEL: INFINITE</div>
  `;
  vic.appendChild(statsDiv);

  // Phase 1: Text rain
  setTimeout(() => startTextRain(vic), 500);

  // Phase 2: YOU WON spam
  setTimeout(() => startYouWonSpam(vic), 2000);

  // Phase 3: Console nuke
  setTimeout(() => consoleNuke(), 1000);

  // Phase 4: Color strobe
  setTimeout(() => startColorStrobe(), 3000);

  // Phase 5: History spam
  setTimeout(() => historySpam(), 4000);

  // Phase 6: iframes
  setTimeout(() => iframeNuke(vic), 5000);

  // Phase 7: LocalStorage spam
  setTimeout(() => localStorageSpam(), 3500);

  // Phase 8: Alert sequence (delayed)
  setTimeout(() => alertSequence(), 15000);

  // Phase 9: Meme rain
  setTimeout(() => memeRain(vic), 2000);

  // Phase 10: Cursor explosion
  setTimeout(() => cursorExplosion(vic), 4000);

  // Kirk saved animation
  setTimeout(() => kirkSaved(vic), 6000);

  // Final genuinely
  setTimeout(() => finalGenuinely(vic), 20000);
};

function startTextRain(container) {
  const words = [
    'GENUINELY', 'BASED', 'KIRKPILLED', 'WAGMI', 'CLICKMAXXED',
    'SAVED', 'AURA', 'W', 'KINO', 'SIGMA', 'CHAD', 'NGMI (them not you)',
    'GENUINELY', 'GENUINELY', 'GENUINELY', 'MOGGED', 'ASCENDED',
    'BASED', 'REDPILLED', 'CLICKPILLED', 'YOU DID IT', 'KIRK IS SAFE'
  ];
  const iv = setInterval(() => {
    const el = document.createElement('div');
    el.className = 'victory-text-rain';
    el.textContent = pick(words);
    el.style.left = rand(0, window.innerWidth - 100) + 'px';
    el.style.top = '-40px';
    el.style.fontSize = rand(14, 48) + 'px';
    el.style.color = `hsl(${rand(0,360)},100%,70%)`;
    el.style.position = 'fixed';
    el.style.zIndex = '9999';
    el.style.fontFamily = 'monospace';
    el.style.fontWeight = 'bold';
    el.style.pointerEvents = 'none';
    el.style.textShadow = '0 0 10px currentColor';
    el.style.animation = 'victory-fall 3s linear forwards';
    container.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }, 100);
  // slow down after 10s
  setTimeout(() => { clearInterval(iv); }, 10000);
}

function startYouWonSpam(container) {
  const messages = [
    'YOU WON', 'YOU ACTUALLY WON', 'GENUINELY WON', 'KIRK IS SAVED',
    'THE BUTTON HAS BEEN CLICKED', 'OPERATION CLICKPILLED: SUCCESS',
    'AURA: MAXIMUM', 'GBP: OVERFLOWING', 'COPE LEVEL: ZERO',
    'SEETHE LEVEL: ZERO', 'DILATE: NOT REQUIRED',
  ];
  let count = 0;
  const iv = setInterval(() => {
    if (count++ > 30) { clearInterval(iv); return; }
    const el = document.createElement('div');
    el.className = 'you-won-text';
    el.textContent = pick(messages);
    el.style.cssText = `
      position:fixed;z-index:10000;pointer-events:none;
      left:${rand(5,80)}%;top:${rand(5,80)}%;
      font-size:${rand(20,72)}px;font-family:monospace;font-weight:bold;
      color:hsl(${rand(0,360)},100%,60%);
      text-shadow:0 0 20px currentColor, 0 0 40px currentColor;
      transform:rotate(${rand(-30,30)}deg);
      animation:victory-pulse 0.5s ease-in-out infinite alternate;
    `;
    container.appendChild(el);
    setTimeout(() => el.remove(), rand(3000, 8000));
  }, 300);
}

function consoleNuke() {
  const art = [
    '%c GENUINELY. ',
    '%c KIRK IS SAVED. ',
    '%c YOU CLICKED THE BUTTON. ',
    '%c THE ABSOLUTE MADMAN. ',
    '%c WAGMI ',
  ];
  const styles = [
    'background:#ffd700;color:#000;font-size:30px;font-weight:bold;padding:10px',
    'background:#0f0;color:#000;font-size:24px;padding:8px',
    'background:#f0f;color:#fff;font-size:20px;padding:6px',
    'background:#00f;color:#fff;font-size:28px;padding:10px',
    'background:#f00;color:#fff;font-size:32px;font-weight:bold;padding:12px',
  ];
  art.forEach((a, i) => {
    setTimeout(() => {
      try { console.log(a, styles[i % styles.length]); } catch(e) {}
    }, i * 500);
  });
  // Spam
  let count = 0;
  const iv = setInterval(() => {
    if (count++ > 50) { clearInterval(iv); return; }
    try {
      console.log(
        '%c' + pick(['GENUINELY','BASED','KIRK','WAGMI','W','CLICKPILLED','AURA']),
        `color:hsl(${rand(0,360)},100%,50%);font-size:${rand(12,30)}px`
      );
    } catch(e) {}
  }, 200);
}

function startColorStrobe() {
  let count = 0;
  const iv = setInterval(() => {
    if (count++ > 40) { clearInterval(iv); return; }
    flashScreen(`hsl(${rand(0,360)},100%,50%)`, 150);
  }, 200);
}

function historySpam() {
  const msgs = ['GENUINELY','BASED','CLICKPILLED','WAGMI','KIRKISEQUINELYEDSAVED','YOU_WON','AURA_INFINITE'];
  for (let i = 0; i < 50; i++) {
    try { history.pushState({}, '', '#' + pick(msgs) + '_' + rand(1,9999)); } catch(e) {}
  }
}

function iframeNuke(container) {
  // Create a few harmless iframes with data URIs
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const iframe = document.createElement('iframe');
      const hue = rand(0, 360);
      const msg = pick(['GENUINELY', 'KIRK SAVED', 'WAGMI', 'BASED', 'YOU WON', 'CLICKPILLED']);
      iframe.srcdoc = `<body style="background:hsl(${hue},80%,20%);color:hsl(${hue},100%,80%);display:flex;align-items:center;justify-content:center;height:100vh;margin:0;font-family:monospace;font-size:3vw;text-align:center;overflow:hidden"><div style="animation:spin 2s linear infinite">
        <style>@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style>
        ${msg}</div></body>`;
      iframe.style.cssText = `
        position:fixed;z-index:9998;border:3px solid hsl(${hue},100%,50%);
        width:${rand(150,350)}px;height:${rand(100,250)}px;
        left:${rand(0,70)}%;top:${rand(0,60)}%;
        opacity:0.85;pointer-events:none;
        animation:victory-drift ${rand(3,8)}s ease-in-out infinite alternate;
      `;
      container.appendChild(iframe);
    }, i * 800);
  }
}

function localStorageSpam() {
  const keys = ['genuinely','based','kirkSaved','wagmi','clickpilled','aura','cope','seethe','dilate'];
  for (let i = 0; i < 30; i++) {
    try {
      localStorage.setItem(
        'shitcode_' + pick(keys) + '_' + rand(1,999),
        pick(['genuinely','GENUINELY','genuinely.','genuinely genuinely genuinely']) + ' '.repeat(rand(1,100))
      );
    } catch(e) {}
  }
}

function alertSequence() {
  const msgs = [
    'GENUINELY.',
    'Kirk has been saved.',
    'Your aura level: INFINITE',
    'The Consortium has been defeated.',
    'Jerry is crying. Happy tears.',
    'Encryption (the cat) is purring.',
    'You clicked the button.',
    'You actually clicked it.',
    'genuinely.',
  ];
  // Only show 2-3 alerts to not be too annoying
  const count = rand(2, 3);
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      try { alert(msgs[i] || 'genuinely.'); } catch(e) {}
    }, i * 2000);
  }
}

function memeRain(container) {
  const memes = [
    String.fromCodePoint(0x1F438), // frog
    String.fromCodePoint(0x1F451), // crown
    String.fromCodePoint(0x1F4AA), // flexed biceps
    String.fromCodePoint(0x1F525), // fire
    String.fromCodePoint(0x2B50), // star
    String.fromCodePoint(0x1F680), // rocket
    String.fromCodePoint(0x1F3C6), // trophy
    String.fromCodePoint(0x1F48E), // gem
    '(^_^)', '( ' + String.fromCodePoint(0x0361) + String.fromCodePoint(0xB0) + ' ' + String.fromCodePoint(0x035C) + String.fromCodePoint(0x0296) + ' ' + String.fromCodePoint(0x0361) + String.fromCodePoint(0xB0) + ')',
    'W', 'GG', 'KINO',
  ];
  let count = 0;
  const iv = setInterval(() => {
    if (count++ > 60) { clearInterval(iv); return; }
    const el = document.createElement('div');
    el.textContent = pick(memes);
    el.style.cssText = `
      position:fixed;z-index:10001;pointer-events:none;
      left:${rand(0, window.innerWidth - 40)}px;top:-50px;
      font-size:${rand(20,60)}px;
      animation:victory-fall ${rand(2,5)}s linear forwards;
    `;
    container.appendChild(el);
    setTimeout(() => el.remove(), 5500);
  }, 150);
  setTimeout(() => clearInterval(iv), 12000);
}

function cursorExplosion(container) {
  document.addEventListener('mousemove', function nukeTrail(e) {
    const el = document.createElement('div');
    el.textContent = pick(['genuinely', String.fromCodePoint(0x2728), 'W', String.fromCodePoint(0x1F525), String.fromCodePoint(0x1F451)]);
    el.style.cssText = `
      position:fixed;z-index:10002;pointer-events:none;
      left:${e.clientX}px;top:${e.clientY}px;
      font-size:${rand(10,24)}px;
      color:hsl(${rand(0,360)},100%,70%);
      transition:all 1s ease-out;opacity:1;
    `;
    container.appendChild(el);
    requestAnimationFrame(() => {
      el.style.transform = `translate(${rand(-80,80)}px, ${rand(-80,80)}px) scale(0)`;
      el.style.opacity = '0';
    });
    setTimeout(() => el.remove(), 1200);
  });
  // Remove trail after 30s
  setTimeout(() => {
    document.removeEventListener('mousemove', arguments.callee);
  }, 30000);
}

function kirkSaved(container) {
  const kirk = document.createElement('div');
  kirk.className = 'kirk-saved-overlay';
  kirk.innerHTML = `
    <div class="kirk-saved-text">KIRK HAS BEEN SAVED</div>
    <div class="kirk-saved-sub">His face - normal sized - is SAFE.</div>
    <div class="kirk-saved-sub">Genuinely.</div>
    <div class="kirk-portrait">
      <pre style="font-size:8px;line-height:1;color:#ffd700">
   .-"""-.
  /        \\
 |  O    O  |
 |    __    |
 |   /  \\   |
  \\  '=='  /
   '-....-'
  NORMAL SIZED
      </pre>
    </div>
  `;
  kirk.style.cssText = `
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    z-index:10005;text-align:center;
    background:rgba(0,0,0,0.9);border:3px solid #ffd700;
    padding:30px 50px;font-family:monospace;
    animation:victory-pulse 1s ease-in-out infinite alternate;
    box-shadow:0 0 30px #ffd700, 0 0 60px #ffd700;
  `;
  container.appendChild(kirk);

  // Fade after 8s
  setTimeout(() => {
    kirk.style.transition = 'opacity 3s';
    kirk.style.opacity = '0';
    setTimeout(() => kirk.remove(), 3500);
  }, 8000);
}

function finalGenuinely(container) {
  // Clear most of the chaos
  container.querySelectorAll('.you-won-text, .victory-text-rain, iframe').forEach(el => {
    el.style.transition = 'opacity 2s';
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 2200);
  });

  // Final message
  setTimeout(() => {
    const final = document.createElement('div');
    final.innerHTML = `
      <div style="font-size:48px;color:#ffd700;text-shadow:0 0 20px #ffd700;margin-bottom:20px;animation:victory-pulse 2s ease-in-out infinite alternate">
        genuinely.
      </div>
      <div style="font-size:16px;color:#0f0;margin-bottom:30px">
        OPERATION CLICKPILLED: COMPLETE
      </div>
      <div style="font-size:12px;color:#888;max-width:500px;line-height:1.6">
        You clicked through ${GAME.levelsCompleted} levels across ${GAME.dimension} dimensions.
        You failed ${GAME.totalAttempts} times. Kirk's health: ${GAME.kirkHealth}%.
        ${GAME.achievements.size} achievements unlocked. ${GAME.gbp} GBP earned.
        <br><br>
        Jerry is sobbing. Kirk is debating. Encryption is purring.
        The Consortium is dissolved. The crabs have retreated.
        The Anunnaki are... genuinely impressed.
        <br><br>
        <span style="color:#ffd700">Thank you for playing SHITCODE.</span>
        <br><br>
        <span style="color:#555">press F5 to suffer again</span>
      </div>
    `;
    final.style.cssText = `
      position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
      z-index:10010;text-align:center;font-family:monospace;
      background:rgba(0,0,0,0.95);padding:40px 60px;
      border:1px solid #333;
    `;
    container.appendChild(final);
  }, 3000);
}
