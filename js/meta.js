// SHITCODE - Meta Systems: Unredaction, Meme Economy, Tab/Focus tricks

// === UNREDACTION SYSTEM ===
window.UNREDACTION = {
  docs: [
    null, // dim 0 placeholder
    // Dimension 1 → 2 transition
    {
      title: 'CLASSIFIED BRIEFING: THE CONSORTIUM',
      classification: 'TOP SECRET // OPERATION CLICKPILLED // EYES ONLY',
      paragraphs: [
        'Subject: ████████ identified as primary ██████ behind the AI assassination protocol targeting ████ ████████.',
        'The Consortium has been operating since ████ under the guise of a ████████ ████████ company. Their true purpose: total ██████ of all clickable ████████.',
        'Agent ████ (codename: JERRY) was embedded in ████ in 2019. His handler credentials were ████████ after the ████████ incident.',
        'Kirk ████████ was selected as primary ████████ due to his ████████ face proportions and ████ aura levels.',
        'NOTE: The ████ are watching. Do NOT discuss the ████████ in unsecured channels.',
      ],
      reveals: [
        'Subject: THE CONSORTIUM identified as primary THREAT behind the AI assassination protocol targeting CHARLIE KIRK.',
        'The Consortium has been operating since 2003 under the guise of a SILICON VALLEY TECH company. Their true purpose: total CONTROL of all clickable ELEMENTS.',
        'Agent JERRY (codename: JERRY) was embedded in BUNKER 7 in 2019. His handler credentials were REVOKED after the TOASTER incident.',
        'Kirk CHARLIE was selected as primary HOSTAGE due to his NORMAL SIZED face proportions and SIGMA aura levels.',
        'NOTE: The CRABS are watching. Do NOT discuss the BUTTONS in unsecured channels.',
      ],
    },
    // Dimension 2 → 3 transition
    {
      title: 'INTERCEPTED TRANSMISSION: CRAB FREQUENCIES',
      classification: 'CLASSIFIED // AQUATIC DIVISION // VIBRATION SENSITIVE',
      paragraphs: [
        'The ████ ██████ have been transmitting on frequency ████ MHz since approximately ████ BCE.',
        'Their ████████ suggests they view humanity as a ████████ ████████ that went wrong ████████ ago.',
        'Primary concerns: 1) ████████ warming 2) Button ████████ 3) The ████ one they call "████"',
        'The crabs communicate through ████████. Each ████ encodes a ████████ message about ████████ history.',
        'WARNING: Do not ████ at crabs. They can ████ when you are ████████.',
      ],
      reveals: [
        'The CRAB PEOPLE have been transmitting on frequency 432.7 MHz since approximately 8000 BCE.',
        'Their ASSESSMENT suggests they view humanity as a GENETIC EXPERIMENT that went wrong MILLENNIA ago.',
        'Primary concerns: 1) OCEAN warming 2) Button PROLIFERATION 3) The LOUD one they call "JERRY"',
        'The crabs communicate through VIBRATIONS. Each CLICK encodes a HISTORICAL message about HUMAN history.',
        'WARNING: Do not LOOK at crabs. They can SENSE when you are WATCHING.',
      ],
    },
    // Dimension 3 → 4 transition
    {
      title: 'FLIGHT LOG EXCERPT: REGISTRY N████████',
      classification: 'SEALED // JUDICIAL ORDER // DO NOT DISTRIBUTE',
      paragraphs: [
        'Flight manifest ████/██/██: Departed from ████████ at ████ hours.',
        'Passengers: ████████, ████ ████████, and ██ unidentified ████████.',
        'Cargo: ████ crates marked "BUTTON ████████████" and ████ servers labeled "████████ AI".',
        'Destination: ████████ Island. Purpose listed as "████████ ████████████."',
        'NOTE: All ████████ records were ████████ on ████/██/██. This copy should not ████.',
      ],
      reveals: [
        'Flight manifest 07/15/03: Departed from TETERBORO at 2300 hours.',
        'Passengers: [NAMES STILL REDACTED], and 14 unidentified ENGINEERS.',
        'Cargo: 200 crates marked "BUTTON MANUFACTURING" and 50 servers labeled "PROTOTYPE AI".',
        'Destination: THE Island. Purpose listed as "BUTTON MAINTENANCE."',
        'NOTE: All PASSENGER records were DESTROYED on 08/01/03. This copy should not EXIST.',
      ],
    },
    // Dimension 4 → 5 transition
    {
      title: 'ARCHAEOLOGICAL REPORT: ERIDU TABLET TRANSLATION',
      classification: 'RESTRICTED // MUSEUM VAULT // PRE-SUMERIAN',
      paragraphs: [
        'The ████████ tablets describe entities called "████████" who descended from ████████.',
        'Translation fragment: "They gave the ████████ creatures ████ and ████████. The creatures made ████████."',
        'The tablets reference a "████ ████████" that controls all ████████ - the first known mention of ████████.',
        'Researcher ████████ disappeared after publishing findings in ████. Lab notes reference ████████.',
        'Current status: Tablets sealed in Vault ████. Access requires Level ████ ████████.',
      ],
      reveals: [
        'The SUMERIAN tablets describe entities called "ANUNNAKI" who descended from NIBIRU.',
        'Translation fragment: "They gave the SMALL creatures FIRE and WRITING. The creatures made TWITTER."',
        'The tablets reference a "GOLDEN BUTTON" that controls all REALITY - the first known mention of CLICKPILLED.',
        'Researcher DR. WELLS disappeared after publishing findings in 2018. Lab notes reference DIMENSION SEVEN.',
        'Current status: Tablets sealed in Vault 7-G. Access requires Level OMEGA CLEARANCE.',
      ],
    },
    // Dimension 5 → 6 transition
    {
      title: 'INCIDENT REPORT: DIMENSIONAL BREACH EVENT',
      classification: 'ABOVE TOP SECRET // [REDACTED] DIVISION // VOID PROTOCOL',
      paragraphs: [
        'On ████/██/██ at ████ hours, sensors detected a ████████ in the ████████ barrier.',
        'Entity designated ████████ emerged. Description: ████████. It said: "████████."',
        'Personnel report ████████ of time, missing ████████, and persistent feeling of being ████████.',
        'The entity appeared to ████████ all ████████ within a ████ radius. Buttons were ████████.',
        'Containment protocol: ████████. Status: ████████. Prognosis: ████████.',
      ],
      reveals: [
        'On ██/██/24 at 0300 hours, sensors detected a TEAR in the DIMENSIONAL barrier.',
        'Entity designated [UNDEFINED] emerged. Description: NOTHING. It said: "...THANK YOU FOR FEEDING ME..."',
        'Personnel report LOSS of time, missing MEMORIES, and persistent feeling of being OBSERVED.',
        'The entity appeared to CONSUME all BUTTONS within a 500M radius. Buttons were GONE.',
        'Containment protocol: FAILED. Status: ONGOING. Prognosis: GENUINELY BAD.',
      ],
    },
  ],

  show(docIndex, callback) {
    const doc = this.docs[docIndex];
    if (!doc) { if (callback) callback(); return; }

    const overlay = document.createElement('div');
    overlay.className = 'unredact-overlay';
    overlay.innerHTML = `
      <div class="unredact-doc">
        <div class="unredact-header">
          <div class="unredact-classification">${doc.classification}</div>
          <div class="unredact-title">${doc.title}</div>
        </div>
        <div class="unredact-body">
          ${doc.paragraphs.map((p, i) => `
            <p class="unredact-paragraph" data-idx="${i}">${this._renderRedacted(p)}</p>
          `).join('')}
        </div>
        <div class="unredact-footer">
          <span class="unredact-hint">CLICK the black bars to unredact. Or don't. Your call, anon.</span>
          <button class="unredact-continue">CONTINUE MISSION</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Make redacted spans clickable
    overlay.querySelectorAll('.redacted-block').forEach(block => {
      block.addEventListener('click', () => {
        const pIdx = parseInt(block.closest('.unredact-paragraph').dataset.idx);
        const revealedP = doc.reveals[pIdx];
        if (revealedP) {
          block.closest('.unredact-paragraph').innerHTML = this._renderRevealed(revealedP);
          if (window.AUDIO) AUDIO.play('click');
          shakeScreen('normal');
          addGBP(3);
          // Achievement for first unredact
          unlockAchievement('unredact', 'CLASSIFIED READER', 'Unredacted your first document.');
        }
      });
    });

    // Continue button
    overlay.querySelector('.unredact-continue').addEventListener('click', () => {
      overlay.style.transition = 'opacity 0.5s';
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.remove();
        if (callback) callback();
      }, 600);
    });

    // Thread post about finding the doc
    THREAD.post(`<span style="color:#f80">CLASSIFIED DOCUMENT INTERCEPTED</span><br><span style="color:#555">${doc.title}</span>`);
  },

  _renderRedacted(text) {
    // Replace ████ blocks with clickable black bars
    return text.replace(/█+/g, match => {
      const w = match.length * 8;
      return `<span class="redacted-block" style="display:inline-block;background:#000;color:#000;min-width:${w}px;cursor:pointer;padding:0 4px;border:1px solid #333;user-select:none" title="CLICK TO UNREDACT">&nbsp;${'█'.repeat(match.length)}&nbsp;</span>`;
    });
  },

  _renderRevealed(text) {
    // Highlight the previously redacted words in green
    return text.replace(/\b[A-Z][A-Z ]+[A-Z]\b/g, match => {
      return `<span style="color:#0f0;text-shadow:0 0 5px #0f0">${match}</span>`;
    });
  },
};

// === MEME ECONOMY ===
window.MEMES = {
  floating: [],

  spawnFloat(container) {
    const memes = [
      { text: 'pepe_smug.jpg', type: 'pepe' },
      { text: 'wojak_crying.png', type: 'wojak' },
      { text: 'gondola_drift.gif', type: 'gondola' },
      { text: String.fromCodePoint(0x1F438), type: 'emoji' },
      { text: '(;_;)', type: 'text' },
      { text: String.fromCodePoint(0x1F480), type: 'emoji' },
      { text: 'spurdo.bmp', type: 'spurdo' },
      { text: String.fromCodePoint(0x1F4A9), type: 'emoji' },
    ];
    const m = pick(memes);
    const el = document.createElement('div');
    el.className = 'meme-float meme-' + m.type;
    el.textContent = m.text;
    el.style.cssText = `
      position:fixed;pointer-events:none;z-index:100;
      left:${rand(0,85)}%;top:${rand(0,85)}%;
      font-size:${rand(10,16)}px;opacity:0.4;
      font-family:monospace;color:#555;
      animation:meme-drift ${rand(8,20)}s linear forwards;
    `;
    (container || document.body).appendChild(el);
    setTimeout(() => el.remove(), 20000);
  },

  startAmbient() {
    addInterval(() => {
      if (GAME.phase === 'game' && Math.random() < 0.3) {
        this.spawnFloat($('#game-arena'));
      }
    }, 8000);
  },
};

// === TAB TITLE TRICKS ===
window.TAB_TRICKS = {
  origTitle: document.title,
  messages: [
    'SHITCODE',
    'genuinely.',
    'KIRK NEEDS YOU',
    'come back anon',
    'the button waits',
    'GENUINELY COME BACK',
    'ABORT ABORT ABORT',
    'kirk is dying',
    'your aura is fading',
    'NGMI if you leave',
  ],
  _blurIv: null,

  init() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        GAME.tabFocusLost++;
        let i = 0;
        this._blurIv = setInterval(() => {
          document.title = this.messages[i % this.messages.length];
          i++;
        }, 1500);
        if (GAME.phase === 'game') {
          THREAD.post('bro tabbed out ' + String.fromCodePoint(0x1F480) + ' kirk is DYING');
          if (GAME.tabFocusLost >= 3) {
            unlockAchievement('tabout', 'ALT+TAB ANDY', 'Left Kirk hanging 3+ times.');
          }
        }
      } else {
        clearInterval(this._blurIv);
        document.title = this.origTitle;
        if (GAME.phase === 'game' && GAME.tabFocusLost > 0) {
          JERRY.speak('random', "You TABBED OUT? While Kirk is held HOSTAGE? GENUINELY?");
        }
      }
    });
  },
};

// === CURSOR STYLE CHANGES ===
window.CURSOR_FX = {
  styles: ['crosshair', 'not-allowed', 'wait', 'help', 'move', 'grab', 'cell', 'zoom-in'],

  randomize() {
    if (GAME.csd >= 2 || GAME.failStreak >= 10) {
      document.body.style.cursor = pick(this.styles);
      addTimeout(() => { document.body.style.cursor = ''; }, rand(3000, 8000));
    }
  },

  init() {
    addInterval(() => {
      if (Math.random() < 0.15) this.randomize();
    }, 10000);
  },
};

// === DEV TOOLS DETECTION (joke) ===
window.DEV_DETECT = {
  init() {
    // Harmless joke detection
    let devOpen = false;
    const threshold = 160;
    const check = () => {
      const w = window.outerWidth - window.innerWidth > threshold;
      const h = window.outerHeight - window.innerHeight > threshold;
      if ((w || h) && !devOpen) {
        devOpen = true;
        if (GAME.phase === 'game') {
          THREAD.post('<span style="color:#f00">DEV TOOLS DETECTED</span><br>anon is trying to CHEAT ' + String.fromCodePoint(0x1F440));
          JERRY.speak('random', "DEV TOOLS? GENUINELY? You think you can DEBUG your way out of this? The Consortium WROTE those dev tools.");
          unlockAchievement('devtools', 'SCRIPT KIDDIE', 'Opened dev tools. We saw that.');
          GAME.devToolsDetected = true;
        }
      } else if (!w && !h) {
        devOpen = false;
      }
    };
    addInterval(check, 2000);
  },
};

// === RIGHT CLICK HIJACK ===
window.RIGHT_CLICK = {
  init() {
    document.addEventListener('contextmenu', (e) => {
      if (GAME.phase !== 'game') return;
      e.preventDefault();
      const menu = document.createElement('div');
      menu.className = 'fake-context-menu';
      menu.innerHTML = `
        <div class="ctx-item">Inspect Element (BLOCKED)</div>
        <div class="ctx-item">View Source (CLASSIFIED)</div>
        <div class="ctx-item">Copy (what exactly?)</div>
        <hr style="border-color:#333">
        <div class="ctx-item">Ask Jerry for Help</div>
        <div class="ctx-item">Pray to Anunnaki</div>
        <div class="ctx-item ctx-danger">Summon Crabs</div>
      `;
      menu.style.cssText = `
        position:fixed;left:${e.clientX}px;top:${e.clientY}px;
        background:#1a1a1a;border:1px solid #333;z-index:9000;
        padding:4px 0;min-width:200px;font-family:monospace;font-size:12px;
      `;
      document.body.appendChild(menu);

      menu.querySelectorAll('.ctx-item').forEach(item => {
        item.style.cssText = 'padding:4px 12px;cursor:pointer;color:#ccc;';
        item.onmouseenter = () => { item.style.background = '#333'; };
        item.onmouseleave = () => { item.style.background = ''; };
        item.onclick = () => {
          const txt = item.textContent;
          if (txt.includes('Jerry')) JERRY.speak('random');
          else if (txt.includes('Anunnaki')) {
            THREAD.post('anon is praying to the anunnaki ' + String.fromCodePoint(0x1F64F));
            flashScreen('#ffd700', 300);
          }
          else if (txt.includes('Crabs')) {
            THREAD.post(String.fromCodePoint(0x1F980).repeat(10));
            shakeScreen('hard');
          }
          else THREAD.post('anon right-clicked. npc behavior.');
          menu.remove();
        };
      });

      // Auto-remove
      setTimeout(() => menu.remove(), 5000);
      document.addEventListener('click', () => menu.remove(), { once: true });
    });
  },
};

// === INIT ALL META SYSTEMS ===
window.initMeta = function() {
  TAB_TRICKS.init();
  CURSOR_FX.init();
  DEV_DETECT.init();
  RIGHT_CLICK.init();
  MEMES.startAmbient();
};
