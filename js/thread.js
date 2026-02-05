// SHITCODE - 4chan Board Thread System

window.THREAD = {
  post(body, opts = {}) {
    const panel = $('#thread-panel');
    if (!panel) return;
    const id = GAME.threadPostId++;
    const name = opts.name || 'Anonymous';
    const isGlowie = opts.glowie || false;
    const nameClass = opts.jerry ? 'jerry' : opts.kirk ? 'kirk' : opts.sc ? 'sc' : opts.ai ? 'ai' : opts.op ? 'op' : '';

    const div = document.createElement('div');
    div.className = 'thread-post';
    div.innerHTML = `
      <div class="post-header">
        <span class="post-name ${nameClass} ${isGlowie ? 'glowie' : ''}">${name}</span>
        <span class="post-date">${new Date().toLocaleTimeString()}</span>
        <span class="post-id">No.${id}</span>
      </div>
      ${opts.file ? `<div class="file-info">File: ${opts.file}</div>` : ''}
      ${opts.meme ? `<div class="meme-img">${opts.meme}</div>` : ''}
      <div class="post-body">${body}</div>
    `;
    panel.appendChild(div);
    panel.scrollTop = panel.scrollHeight;

    // Keep thread from getting too long
    const posts = panel.querySelectorAll('.thread-post');
    if (posts.length > 50) posts[0].remove();
  },

  greentext(lines) {
    return lines.map(l => `<span class="greentext">&gt;${l}</span>`).join('');
  },

  replyToFail() {
    const responses = [
      'skill issue', 'ngmi', 'genuinely cooked', 'many such cases', 'lmao',
      'the absolute state of this anon', 'just click better 4head',
      'have you tried not being bad',
      this.greentext(['he missed', 'again', 'many such cases']),
      this.greentext(['be anon', 'try to click button', 'button dodges', 'mfw']),
      'actual NPC behavior', 'your cursor has negative canthal tilt',
      'clicklet cope', 'this is the dark souls of clicking',
      'L + ratio + skill issue + ngmi',
      'sub-5 cursor control detected',
      'the button mogs you in every dimension',
      'bro got outplayed by a div element ' + String.fromCodePoint(0x1F480),
      'your mouse has the bone structure of a 3/10',
      this.greentext(['he tried', 'he failed', 'the button didnt even flinch', 'its so over']),
      'imagine being outplayed by css. genuinely.',
      '>47 attempts still cant click. probably blames the game.',
      'at this point the button is dodging you out of PITY',
      'genuine question: have you considered buttons arent for you? as a life path?',
    ];
    this.post(pick(responses));

    // Occasional glowie
    if (Math.random() < 0.12) {
      addTimeout(() => {
        this.post("hey fellow anons have you tried clicking AWAY from the button? works for me", { glowie: true, name: 'Anonymous' });
      }, 1500);
    }
    // Occasional Jerry in thread
    if (Math.random() < 0.08) {
      addTimeout(() => {
        this.post(pick([
          "Don't listen to them anon. You're doing... adequately. Maybe.",
          "THE GLOWIES IN THIS THREAD I CAN SEE THEM GLOWING",
          "I believe in you anon. My therapist doesn't. But I DO.",
          "Encryption says you can do this. He's a cat but he's SMART.",
        ]), { name: 'Jerry [Handler]', jerry: true });
      }, 2000);
    }
    // Rare Apu
    if (Math.random() < 0.05) {
      addTimeout(() => {
        this.post("fren... buton is... ober there... yu can do it fren... " + String.fromCodePoint(0x1F438), { name: 'Apu' });
      }, 3000);
    }
    // Spurdo
    if (Math.random() < 0.04) {
      addTimeout(() => {
        this.post("jus gligg the buton :DDDD itz nod hard :DDD", { name: 'Spurdo' });
      }, 2500);
    }
  },

  replyToSuccess() {
    const responses = [
      'he actually did it, the absolute madman',
      'wait that worked??',
      'kek based',
      this.greentext(['he clicked it', 'impossible', 'the prophecy']),
      'genuinely impressed ngl',
      'rare W from anon', 'the aura... I can feel it',
      'kirkenuinely saved', 'WAGMI??',
      this.greentext(['be button', 'exist for years', 'no one can click me', 'anon appears', 'gets clicked', 'its so over for buttons']),
      'based and clickpilled',
      'the cursor... it has AURA now',
    ];
    this.post(pick(responses));

    // Kirk in thread
    if (Math.random() < 0.3) {
      addTimeout(() => {
        this.post("Genuinely. " + pick([
          "That click had more aura than most debates I've won.",
          "The marketplace of clicks rewards the bold.",
          "My face - normal sized - just smiled.",
        ]), { name: 'Kirk [Hostage]', kirk: true });
      }, 1500);
    }
  },

  // Dimension-specific board posts
  postDimensionFlavor() {
    const dim = GAME.dimension;
    const flavors = {
      1: [ // /v/ energy
        'this is genuinely harder than elden ring',
        'git gud scrub',
        'controller > mouse for this level dont @ me',
        'speedrun when?',
      ],
      2: [ // /g/ energy
        'have you tried installing gentoo',
        '>using a mouse in 2026\njust write a script',
        'works on my machine',
        'just sudo click the button bro',
      ],
      3: [ // /x/ energy
        'guys I think the crabs are trying to communicate',
        'the vibrations match crop circles. IM NOT CRAZY.',
        'has anyone else seen the eyes in the static',
        '>inb4 take meds\nTHE MEDS ARE HOW THEY CONTROL YOU',
      ],
      4: [ // /pol/ energy
        'HAPPENING???',
        'follow the money. follow the buttons.',
        this.greentext(['check flight logs', 'names everywhere', 'cant say them', 'you know who']),
        'THE LOGS CONTAIN EVERYTHING',
      ],
      5: [ // /his/ energy
        'Sumerians were just early astronauts',
        'the Anunnaki evidence is actually compelling if you--',
        'BUTTONS IN ANCIENT CUNEIFORM CONFIRMED',
        '>he doesnt know about the Eridu tablets\nngmi',
      ],
      6: [ // /trash/ + /b/
        'help h' + 'ow do I cl' + String.fromCharCode(0x0336) + 'ick',
        'the void is loo' + String.fromCharCode(0x0336) + 'king at me',
        '...something is wrong with this thread...',
        '>post number from THE FUTURE\nhow',
      ],
      7: [ // ALL
        'ITS ALL HAPPENING AT ONCE',
        'EVERY BOARD IS HERE',
        'genuinely the final thread',
        'if this is the last post anyone ever makes: it was an honor shitposting with you',
      ],
    };
    if (flavors[dim] && Math.random() < 0.3) {
      this.post(pick(flavors[dim]));
    }
  },
};
