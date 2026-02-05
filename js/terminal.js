// SHITCODE - Phase 0: The Broken Terminal IDE
window.initTerminal = function() {
  const sidebar = $('#terminal-sidebar');
  const editor = $('#terminal-editor');
  const input = $('#terminal-input');

  // Sidebar files
  const files = [
    {name:'main.js',active:true},{name:'config.js'},{name:'utils.js'},{name:'index.html'},
    {name:'style.css'},{name:'---',header:true},{name:'definitely_not_malware.js'},
    {name:'kirk_face_proportions.json'},{name:'DO_NOT_OPEN.exe'},{name:'conspiracy.txt'},
    {name:'button.js'},{name:'crab_frequencies.wav'},{name:'jerry_manifesto.md'},
    {name:'anunnaki_transmission.enc'},{name:'flight_logs_REDACTED.pdf'},
    {name:'your_browser_history.txt'},{name:'.env (DO NOT COMMIT)'},
  ];
  files.forEach(f => {
    if (f.header) {
      const h = document.createElement('div');
      h.className = 'section-header';
      h.textContent = 'SUSPICIOUS FILES';
      sidebar.appendChild(h);
      return;
    }
    const div = document.createElement('div');
    div.className = 'file' + (f.active ? ' active' : '');
    div.textContent = f.name;
    div.addEventListener('click', () => {
      sidebar.querySelectorAll('.file').forEach(el => el.classList.remove('active'));
      div.classList.add('active');
      // Show different code for different files
      showFileContent(f.name);
    });
    sidebar.appendChild(div);
  });

  function showFileContent(name) {
    const contents = {
      'conspiracy.txt': [
        ['comment', '// THE TRUTH ABOUT THE BUTTONS'],
        ['comment', '// Last edited: [REDACTED]'],
        ['comment', '// Author: [REDACTED]'],
        [null, ''],
        ['string', 'The buttons are not what they seem.'],
        ['string', 'They were given to us in 1947.'],
        ['string', 'By something that came from above.'],
        ['string', 'Or below. The crabs claim ownership.'],
        [null, ''],
        ['error', 'CLASSIFIED - LEVEL 7 CLEARANCE REQUIRED'],
        ['error', 'CONSORTIUM EYES ONLY'],
        [null, ''],
        ['string', 'If you are reading this, you are already involved.'],
        ['string', 'The buttons will find you.'],
        ['string', 'They always do.'],
        [null, ''],
        ['comment', '// - M'],
      ],
      'kirk_face_proportions.json': [
        [null, '{'],
        ['var', '  "subject"'], [null, ': '], ['string', '"KIRK, Charles"'], [null, ','],
        ['var', '  "face_size"'], [null, ': '], ['string', '"NORMAL"'], [null, ','],
        ['var', '  "face_size_really"'], [null, ': '], ['string', '"genuinely normal sized"'], [null, ','],
        ['var', '  "designed_by"'], [null, ': '], ['string', '"[REDACTED]"'], [null, ','],
        ['var', '  "purpose"'], [null, ': '], ['string', '"optimal clicking efficiency"'], [null, ','],
        ['var', '  "aura"'], [null, ': '], ['num', 'Infinity'], [null, ','],
        ['var', '  "debates_won"'], [null, ': '], ['num', '99847'], [null, ','],
        ['var', '  "genuinely"'], [null, ': '], ['num', 'true'],
        [null, '}'],
      ],
      'jerry_manifesto.md': [
        ['comment', '# THE TRUTH'],
        ['comment', '## By Jerry (Not my real name)'],
        [null, ''],
        ['string', 'I have been in this bunker for 7 years.'],
        ['string', 'Encryption is my only companion.'],
        ['string', 'The Consortium thinks I am crazy.'],
        ['string', 'Maybe I am.'],
        [null, ''],
        ['string', 'But the buttons are REAL.'],
        ['string', 'The crabs are REAL.'],
        ['string', 'The island was REAL.'],
        ['string', 'HE DID NOT KILL HIMSELF.'],
        [null, ''],
        ['error', '[REMAINDER CORRUPTED]'],
        ['error', '[ENCRYPTION ATE THE REST]'],
      ],
    };

    if (contents[name]) {
      buildEditor(contents[name]);
    }
  }

  // Default code
  const defaultCode = [
    ['keyword', 'import'], ['string', " despair "], ['keyword', 'from'], ['string', " 'soul'"],
    ['comment', '// TODO: figure out what this does (I never will)'],
    [null, ''],
    ['keyword', 'const'], ['var', ' button'], [null, ' = '], ['func', 'document.getElementById'], [null, '('], ['string', "'start'"], [null, ')'],
    ['comment', '// the button has more aura than you'],
    [null, ''],
    ['keyword', 'function'], ['func', ' destroyUserConfidence'], [null, '() {'],
    [null, '  '], ['keyword', 'while'], [null, '('], ['var', 'hope'], [null, ') {'],
    [null, '    '], ['func', 'crush'], [null, '()'],
    [null, '    '], ['var', 'self_esteem'], [null, '--'],
    [null, '  }'],
    [null, '}'],
    [null, ''],
    ['keyword', 'async function'], ['func', ' clickButton'], [null, '() {'],
    [null, '  '], ['keyword', 'try'], [null, ' {'],
    [null, '    '], ['keyword', 'await'], [null, ' button.'], ['func', 'click'], [null, '() '], ['comment', '// this will never work'],
    [null, '  } '], ['keyword', 'catch'], [null, ' ('], ['var', 'e'], [null, ') {'],
    [null, '    '], ['func', 'console.log'], [null, '('], ['string', '"genuinely cooked"'], [null, ')'],
    [null, '    '], ['keyword', 'throw new'], [null, ' '], ['func', 'Error'], [null, '('], ['string', '"skill issue"'], [null, ')'],
    [null, '  }'],
    [null, '}'],
    [null, ''],
    ['comment', '// Kirk configuration'],
    ['keyword', 'const'], ['var', ' kirk'], [null, ' = {'],
    [null, '  '], ['var', 'face'], [null, ': '], ['string', '"normal sized"'], [null, ','],
    [null, '  '], ['var', 'aura'], [null, ': '], ['num', 'Infinity'], [null, ','],
    [null, '  '], ['var', 'genuinely'], [null, ': '], ['num', 'true'], [null, ','],
    [null, '  '], ['var', 'debates_won'], [null, ': '], ['num', '99847'], [null, ','],
    [null, '}'],
    [null, ''],
    ['comment', '// You configuration'],
    ['keyword', 'const'], ['var', ' you'], [null, ' = {'],
    [null, '  '], ['var', 'aura'], [null, ': '], ['num', '-847'], [null, ','],
    [null, '  '], ['var', 'clickSkill'], [null, ': '], ['string', '"sub-human"'], [null, ','],
    [null, '  '], ['var', 'ngmi'], [null, ': '], ['num', 'true'], [null, ','],
    [null, '  '], ['var', 'cooked'], [null, ': '], ['num', 'true'], [null, ','],
    [null, '}'],
    [null, ''],
    ['func', 'destroyUserConfidence'], [null, '()'],
    [null, ''],
    ['error', 'ERROR: Segfault in user\'s hopes'],
    ['error', 'FATAL: You are the bug'],
    ['warning', 'WARNING: Kirk\'s face is normal sized. Stop asking.'],
  ];

  buildEditor(defaultCode);

  function buildEditor(codeLines) {
    const fib = [1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597];
    let html = '';
    let lineIdx = 0;
    let currentLine = '';

    codeLines.forEach(([type, text]) => {
      if (text === '' || text === undefined) {
        if (currentLine) {
          html += `<div><span class="line-num">${fib[lineIdx % fib.length]}</span><span class="code-line">${currentLine}</span></div>`;
          currentLine = '';
        }
        html += `<div><span class="line-num">${fib[lineIdx % fib.length]}</span><span class="code-line">&nbsp;</span></div>`;
        lineIdx++;
        return;
      }
      const cls = type ? `code-${type}` : '';
      currentLine += cls ? `<span class="${cls}">${text}</span>` : text;

      // End line on certain patterns
      if (!type || type === 'comment' || type === 'error' || type === 'warning' ||
          (text && (text.endsWith('{') || text.endsWith('}') || text.endsWith(')') ||
           text.endsWith(',') || text.endsWith(';') || text.includes('()')))) {
        html += `<div><span class="line-num">${fib[lineIdx % fib.length]}</span><span class="code-line">${currentLine}</span></div>`;
        currentLine = '';
        lineIdx++;
      }
    });
    if (currentLine) {
      html += `<div><span class="line-num">${fib[lineIdx % fib.length]}</span><span class="code-line">${currentLine}</span></div>`;
    }
    editor.innerHTML = html;
  }

  // Wrong character input
  const charMap = {a:'q',b:'v',c:'x',d:'s',e:'r',f:'g',g:'f',h:'j',i:'u',j:'h',k:'l',l:'k',m:'n',n:'m',o:'p',p:'o',q:'w',r:'t',s:'a',t:'y',u:'i',v:'b',w:'e',x:'c',y:'t',z:'x'};
  input.addEventListener('keydown', e => {
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      const delay = rand(50, 500);
      setTimeout(() => {
        const wrong = Math.random() < 0.4 ? (charMap[e.key.toLowerCase()] || e.key) : e.key;
        input.value += wrong;
      }, delay);
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = input.value.trim();
      input.value = '';
      if (cmd) {
        const resp = document.createElement('div');
        resp.className = 'system-msg';
        resp.textContent = pick([
          `ERROR: '${cmd}' is not recognized as a valid command, coping mechanism, or prayer`,
          `FATAL: Attempted to run '${cmd}'. Kirk is disappointed.`,
          `WARNING: '${cmd}' has been logged. The Consortium is watching.`,
          `> ${cmd}\nCommand failed. Like everything else you attempt.`,
          `'${cmd}': Permission denied. Your aura is too low.`,
          `Compiling ${cmd}... ERROR: Your code has negative rizz.`,
          `${cmd}: command not found. Have you tried clickmaxxing?`,
        ]);
        editor.appendChild(resp);
        editor.scrollTop = editor.scrollHeight;
      }
    }
  });

  // System messages
  const sysMsgs = [
    'Memory leak detected in user\'s patience',
    'Segfault in user\'s hopes',
    'WARNING: Cursor aura critically low',
    'ERROR: Kirk face proportions within normal range',
    'FATAL: Skill issue detected at kernel level',
    'INFO: The buttons are watching',
    'WARNING: Genuinely cooked (system assessment)',
    'ERROR: Your clicking license has expired',
    'NOTICE: Crab people monitoring this session',
    'WARNING: [REDACTED] is observing',
    'INFO: Jerry is typing...',
    'ERROR: import hope failed - module not found',
    'WARNING: Your aura is negative. This affects compile time.',
    'INFO: 847 users are currently better at clicking than you',
    'ERROR: button.click() - Access denied: insufficient aura',
    'NOTICE: Encryption (Jerry\'s cat) has joined the session',
    'WARNING: The Consortium has flagged your cursor movement as "concerning"',
    'FATAL: while(hope) loop terminated - hope was falsy',
  ];

  addInterval(() => {
    const msg = document.createElement('div');
    msg.className = 'system-msg ' + pick(['', '', 'warning', 'error']);
    msg.textContent = `[SYSTEM] ${pick(sysMsgs)}`;
    editor.appendChild(msg);
    editor.scrollTop = editor.scrollHeight;
  }, 3500);

  // Other users typing
  const otherUsers = ['anonymous_coder_847', 'kirkSimp2024', 'definitely_not_ai', 'crab_person_7', 'jerry_was_right'];
  addInterval(() => {
    if (Math.random() < 0.3) {
      const usr = document.createElement('div');
      usr.className = 'other-user-typing';
      usr.textContent = `${pick(otherUsers)} is typing...`;
      editor.appendChild(usr);
      setTimeout(() => {
        usr.textContent = `${usr.textContent.replace(' is typing...', '')}: ${pick([
          'has anyone else noticed the buttons moving?',
          'genuinely cooked rn',
          'is this IDE sentient or am I paranoid',
          'the compile errors are getting personal',
          'who added conspiracy.txt to the repo',
          'jerry if you\'re reading this: TAKE YOUR MEDS',
          'the crabs were right about us',
        ])}`;
        usr.className = 'system-msg';
      }, rand(1000, 3000));
      editor.scrollTop = editor.scrollHeight;
    }
  }, 5000);

  // Error counter going up
  let errors = 0;
  addInterval(() => {
    errors += rand(1, 47);
    const el = $('#error-count');
    if (el) el.textContent = `${errors} errors (it's getting worse)`;
  }, 2000);

  // Clock running backwards
  let clockTime = Date.now();
  addInterval(() => {
    clockTime -= rand(1000, 5000);
    const d = new Date(clockTime);
    const el = $('#terminal-clock');
    if (el) el.textContent = d.toLocaleTimeString();
  }, 1000);

  // Scroll drift
  addInterval(() => { editor.scrollTop += rand(-5, 15); }, 3000);

  // Autocomplete popup
  const acSuggestions = [
    'destroyUserConfidence()', 'import despair from \'soul\'',
    'while(hope) { crush() }', 'kirkFaceSize.normalize()',
    'genuinely.cooked = true', 'crabPeople.observe(you)',
    'button.evade(cursor)', 'anon.aura = -Infinity',
    'void selfEsteem()', 'async function suffer()',
    'new Error("skill issue")', 'throw new Cope()',
    'console.log("many such cases")', 'button.mog(cursor)',
    'jerry.takesMeds = false', 'kirk.face.isNormal()',
  ];

  let acPopup = null;
  input.addEventListener('input', () => {
    if (input.value.length > 2 && Math.random() < 0.35) {
      if (acPopup) acPopup.remove();
      acPopup = document.createElement('div');
      acPopup.className = 'terminal-popup';
      acPopup.style.cssText = `bottom:65px;left:${15 + Math.min(input.value.length * 8, 300)}px`;
      acSuggestions.sort(() => Math.random() - 0.5).slice(0, 5).forEach(s => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `<span>${s}</span><span class="hint">Tab</span>`;
        acPopup.appendChild(item);
      });
      editor.parentElement.appendChild(acPopup);
      setTimeout(() => { if (acPopup) { acPopup.remove(); acPopup = null; } }, 2500);
    }
  });

  // START button - becomes more visible over time
  let startOpacity = 0.5;
  const startBtn = $('#terminal-start-btn');
  addInterval(() => {
    startOpacity = Math.min(1, startOpacity + 0.05);
    if (startBtn) startBtn.style.opacity = startOpacity;
  }, 1500);

  startBtn.addEventListener('click', () => {
    clearGameIntervals();
    window.startTransition();
  });

  // Hint after 5s to find the START button
  addTimeout(() => {
    const hint = document.createElement('div');
    hint.className = 'system-msg warning';
    hint.textContent = '[SYSTEM] psst... there might be a START button somewhere in this IDE. bottom right maybe. just saying.';
    editor.appendChild(hint);
    editor.scrollTop = editor.scrollHeight;
  }, 5000);

  // More aggressive hint after 12s
  addTimeout(() => {
    const hint2 = document.createElement('div');
    hint2.className = 'system-msg error';
    hint2.textContent = '[SYSTEM] GENUINELY just click the START button in the bottom right corner. Kirk is WAITING.';
    editor.appendChild(hint2);
    editor.scrollTop = editor.scrollHeight;
    if (startBtn) { startBtn.style.opacity = '1'; startBtn.style.border = '2px solid #0f0'; startBtn.style.fontSize = '15px'; }
  }, 12000);

  // Background color subtly shifts
  let hue = 0;
  addInterval(() => {
    hue = (hue + 0.5) % 360;
    document.querySelector('.terminal-editor').style.background =
      `hsl(${hue}, 5%, ${3 + Math.sin(hue/30)*1}%)`;
  }, 500);
};

// Transition from terminal to game
window.startTransition = async function() {
  GAME.phase = 'transition';
  const screen = $('#transition-screen');
  screen.style.display = 'flex';
  $('#terminal-phase').style.display = 'none';

  const texts = [
    ['SYSTEM FAILURE', ''],
    ['SOMETHING IS WRONG', 'something has always been wrong'],
    ['THE BUTTONS ARE NOT WHAT THEY SEEM', 'you should have stayed in the IDE'],
    ['KIRK NEEDS YOU', 'his face - normal sized - is in danger'],
    ['OPERATION CLICKPILLED', 'initiating...'],
    ['YOUR AURA HAS BEEN ASSESSED', 'result: genuinely negative'],
    ['PREPARE YOUR CURSOR', ''],
    ['GOOD LUCK ANON', 'you will need it'],
  ];

  const gText = screen.querySelector('.glitch-text');
  const sText = screen.querySelector('.sub-text');

  for (let i = 0; i < texts.length; i++) {
    gText.textContent = texts[i][0];
    sText.textContent = texts[i][1];
    shakeScreen(i > 4 ? 'hard' : 'normal');
    if (window.AUDIO) AUDIO.play('glitch');
    await sleep(800 + rand(0, 400));
  }

  await sleep(500);
  screen.style.display = 'none';
  window.startGame();
};

window.startGame = function() {
  GAME.phase = 'game';
  GAME.startTime = Date.now();
  $('#game-phase').style.display = 'block';

  THREAD.post(`<span style="color:#0f0;font-size:14px">/shit/ - SHITCODE GENERAL #1</span><br>
    <span style="color:#555">Operation Clickpilled is live. Save Kirk. Click START. Good luck anon.</span>`, {name:'System',op:true});
  THREAD.post(THREAD.greentext(['be me','trying to save charlie kirk','from an AI','by clicking a button','button doesnt want to be clicked','many such cases']));

  // Debug: ?level=N to skip to a level
  const _skip = parseInt(new URLSearchParams(window.location.search).get('level'));
  if (_skip > 0 && _skip < (window.ALL_LEVELS||[]).length) {
    GAME.level = _skip;
    GAME.dimension = (window.ALL_LEVELS[_skip]||{}).dimension || 1;
    startLevel(_skip);
  } else {
    startLevel(0);
  }
};
