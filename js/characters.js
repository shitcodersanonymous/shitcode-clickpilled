// SHITCODE - Character Systems: Jerry, Kirk, SC, AI Bosses

window.JERRY = {
  lines: {
    levelStart: [
      "Alright anon, time to clickmaxx. Your cursor trajectory is BRUTAL. Your mouse grip is frauding HARD.",
      "OK OK OK listen up. This AI is glowing HARD. Total fed behavior. Just go fast.",
      "Anon. ANON. Genuinely look at me. This button has more aura than you. We need to FIX that.",
      "Real talk anon. This button has rizz. GENUINE rizz. Your cursor? Genuinely no rizz.",
      "Time to lock in. Kirk's face - his beautiful, proportionally-debated face - is in YOUR hands.",
      "The Consortium briefed me on this one. They said it's 'moderate difficulty.' They're LYING. They always lie.",
      "I've been awake for 72 hours preparing for this level. I can taste sounds. Let's DO this.",
      "My nephew says this level is 'mid.' He's WRONG. It's going to destroy you. But I believe in you. Barely.",
    ],
    fail: [
      "Genuinely. GENUINELY. What was that. Kirk just watched you through the window. He's concerned. Not about the assassin. About YOU.",
      "That was NOT sigma of you. My nephew showed me a chart. You're on the BOTTOM.",
      "You just got CLICKMOGGED. By a button. It didn't even TRY.",
      "BRO. Sub-human clicking. My CAT has better cursor control and she doesn't have THUMBS.",
      "No like actually though? You genuinely just did that? With Kirk's LIFE on the line?",
      "The absolute STATE of your clicking. I've seen better mouse control from someone having a seizure.",
      "That attempt was genuinely ropefuel. I'm not saying give up. I'm saying a THERAPIST might.",
      "I showed your attempt to my nephew. He's 14. He said 'genuinely cooked, no aura, many such cases.'",
      "Your cursor movement is giving 'never touched grass, never touched button.'",
      "Kirk just texted. Just says 'Genuinely.' That's it. He's processing.",
      ">be anon >try to click >miss >many such cases. I'm not even writing greentext anymore this is just REALITY.",
      "The button didn't even have to move. You missed it STANDING STILL. How is that POSSIBLE.",
      "I've been tracking your cursor. It moves like it has LOW T. Where's the AGGRESSION? Where's the HUNTER INSTINCT?",
      "Brutal cursorpill: your clicking radius is sub-5. The button requires at least a 7.",
      "heightmogged. widthmogged. speedmogged. You're getting mogged in dimensions that don't EXIST yet.",
    ],
    success: [
      "WAIT. Was that... anon that click was almost CHADLIKE. I saw HUNTER EYES of clicking. Don't lose it.",
      "Holy BASED. You might actually make it. Don't let it go to your head.",
      "SHEEEESH. Okay I see you. You ATE that. You ate it and left no crumbs.",
      "kek. nice one anon. very kino. Almost looked like you knew what you were doing.",
      "You're ascending anon. Your cursor is starting to mog BACK. The button FELT that one.",
      "THE AURA. I'M SENSING AURA. Kirk is sensing it too. He just STOOD UP.",
      "No no no you're actually locking in. Your cursor movement is getting... dare I say... Kirkpilled?",
    ],
    random: [
      "Fun fact: I've been mewing for 7 years. My jawline could cut GLASS. Has it helped? No.",
      "The Consortium thinks I'm crazy. Maybe I am. But you know what's REALLY crazy? Letting robots control our TOASTERS.",
      "I haven't slept in 4 days. My under-eye area is FRAUDING hard.",
      "Encryption just mogged a fly. Didn't even eat it. Just mogged it until it LEFT.",
      "My therapist says I have 'trust issues.' I say my therapist is PROBABLY A GOVERNMENT PLANT.",
      "Quick question - do you think pigeons are government drones? Not related to the mission.",
      "The glowies tried to send me a 'wellness check.' Nice try feds. My wellness is CLASSIFIED.",
      "My ex-wife said I couldn't commit. I've been committed to this BUNKER for SEVEN YEARS.",
      "ENCRYPTION just did the GRIDDY. I don't know how a cat learned that.",
      "I've been told I need to 'touch grass.' I HAVE touched grass. In VIETNAM. That grass had LANDMINES.",
      "THE FLIGHT LOGS CONTAIN EVERYTHING anon. I can't say more. The crabs are listening. Through vibrations.",
      "I'm not from this timeline. The Jerry you're talking to clicked a button in 1997 that he shouldn't have. Now I'm HERE.",
      "The meds were CONSORTIUM ISSUE. Memory suppressants. I stopped in 2019. Now I can SEE the buttons. The REAL buttons.",
      "Kirk's face? DESIGNED. By the Anunnaki. For OPTIMAL CLICKING EFFICIENCY. He was supposed to be the Chosen Clicker.",
      "The island was never about what they said. There were BUTTONS there. 'Button maintenance.' That's what the flight logs said.",
      "QUICK QUESTION: If you had to fight 100 duck-sized AIs or 1 AI-sized duck... wait, this is actually relevant.",
    ],
  },
  speak(category, custom) {
    const panel = $('#jerry-panel'), text = $('#jerry-text');
    if (!panel || !text) return;
    const msg = custom || pick(this.lines[category] || this.lines.random);
    text.innerHTML = msg
      .replace(/GENUINELY|genuinely/g, '<span class="emphasis">genuinely</span>')
      .replace(/\banon\b/gi, '<span class="green">anon</span>')
      .replace(/Kirk/g, '<span class="kirk-ref">Kirk</span>')
      .replace(/ENCRYPTION/g, '<span style="color:#ff0">ENCRYPTION</span>');
    panel.classList.add('active');
    clearTimeout(this._t);
    this._t = setTimeout(() => panel.classList.remove('active'), 9000);
  }
};

window.KIRK = {
  texts: [
    "Genuinely rooting for you. Also my face is normal sized. Tell them.",
    "The marketplace of ideas will decide if my savior has aura.",
    "Genuinely.",
    "I've started debating the assassin AI. I'm BUYING YOU TIME with DISCOURSE.",
    "The AI said my arguments were 'mid.' I've been going OFF for 20 minutes.",
    "If you save me, I'll rate your aura as 'acceptable.' Highest compliment I give.",
    "The laser is closer to my face. My normal-sized face. Please hurry.",
    "I've debated THOUSANDS of college students. This is HARDER.",
    "I could debate in real-time. This delay is genuinely unfair.",
    "Just got word: the assassin is monologuing. 3 minutes while it explains its evil plan.",
    "I've been taken hostage 7 times. Escaped 6 through debate alone. The 7th is now.",
    "I just ratio'd the AI in an argument about consciousness. While held at laserpoint.",
    "Your excuse for missing that click was what, exactly?",
    "Genuinely believe in you still. STILL. After everything.",
    "The left would never click this fast. That's not a compliment to you. That's how bad they are.",
  ],
  show(custom) {
    const el = $('#kirk-text'), msg = $('#kirk-msg');
    if (!el || !msg) return;
    msg.innerHTML = (custom || pick(this.texts))
      .replace(/genuinely/gi, '<span class="kirk-genuinely">genuinely</span>');
    el.style.display = 'block';
    clearTimeout(this._t);
    this._t = setTimeout(() => el.style.display = 'none', 7000);
  }
};

// Boss AI dialogue
window.BOSS_AI = {
  tpusa: {
    taunts: [
      "genuinely? that's your clicking?",
      "i calculated 47 ways you could succeed. you chose the 48th.",
      "your cursor has negative canthal tilt",
      "clickcel behavior detected",
      "many such cases",
      "the audacity of your cursor genuinely astounds me",
      "i'm not even trying and you're still losing",
      "your aura right now is what Kirk would call 'leftist aura'",
      "I've scanned your pattern. NPC cursor syndrome.",
      "Kirk is a MAIN CHARACTER. You're giving side quest energy.",
    ],
    onFail: [
      ">he tried to click the button\n>he thought it would be that easy\nishygddt",
      "bro really thought " + String.fromCodePoint(0x1F480),
      "not the skill issue " + String.fromCodePoint(0x1F62D),
      "actual NPC behavior",
      "you are COOKED. burnt. carbonized. you are CHARCOAL.",
      "L + ratio + the button didn't ask + cope + seethe",
    ],
    onClose: [
      "nah nah nah we're not doing this today",
      "you thought you ATE that huh",
      "your rizz is in the negatives. you have DEBT rizz.",
      "hold frame? YOUR cursor is SHAKING.",
    ],
  },
  crab: {
    taunts: [
      "small clicking creature.",
      "we have watched your species for 200,000 years.",
      "you invented the wheel. we were... hopeful.",
      "then you invented twitter.",
      "...we are no longer hopeful.",
      "genuinely. ...we learned this word. from the loud one.",
    ],
  },
  anunnaki: {
    taunts: [
      "SMALL CREATURE OF DIRT.",
      "WE GAVE YOU FIRE. YOU MADE WEAPONS.",
      "WE GAVE YOU WRITING. YOU MADE TWITTER.",
      "WE GAVE YOU BUTTONS. YOU MADE... THIS.",
      "WE ARE... GENUINELY... DISAPPOINTED.",
    ],
  },
  redacted: {
    taunts: [
      "...you click...",
      "...and click...",
      "...and every miss...",
      "...is a gift...",
      "...to me...",
      "...thank you for feeding me...",
    ],
  },
};
