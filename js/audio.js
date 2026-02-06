// SHITCODE - Audio System (Web Audio API oscillators + background music)
window.AUDIO = {
  ctx: null,
  bgMusic: null,
  bgMusicPlaying: false,

  init() {
    try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  },

  // Background music - O Fortuna (Carmina Burana)
  startBGMusic() {
    if (this.bgMusicPlaying) return;
    this.bgMusicPlaying = true; // Set immediately to prevent double calls
    var self = this;
    try {
      this.bgMusic = new Audio('audio/o-fortuna.mp3');
      this.bgMusic.loop = true;
      this.bgMusic.volume = 0.5;
      this.bgMusic.play().then(function() {
        console.log('O FORTUNA ACTIVATED');
      }).catch(function(e) {
        console.log('Music play failed:', e);
        self.bgMusicPlaying = false;
      });
    } catch(e) {
      console.log('Music error:', e);
      this.bgMusicPlaying = false;
    }
  },

  stopBGMusic() {
    if (this.bgMusic) {
      this.bgMusic.pause();
      this.bgMusic.currentTime = 0;
      this.bgMusicPlaying = false;
    }
  },

  setBGMusicVolume(vol) {
    if (this.bgMusic) this.bgMusic.volume = clamp(vol, 0, 1);
  },
  _osc(freq, type, dur, vol) {
    if (!this.ctx) return;
    try {
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = type || 'square';
      o.frequency.value = freq;
      g.gain.value = vol || 0.05;
      g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + (dur || 0.2));
      o.connect(g); g.connect(this.ctx.destination);
      o.start(); o.stop(this.ctx.currentTime + (dur || 0.2));
    } catch(e) {}
  },
  play(sound) {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    switch(sound) {
      case 'fail':
        this._osc(200, 'sawtooth', 0.15, 0.04);
        setTimeout(() => this._osc(150, 'sawtooth', 0.2, 0.03), 100);
        break;
      case 'win':
        this._osc(440, 'square', 0.1, 0.03);
        setTimeout(() => this._osc(554, 'square', 0.1, 0.03), 100);
        setTimeout(() => this._osc(659, 'square', 0.15, 0.03), 200);
        break;
      case 'levelComplete':
        [440,554,659,880].forEach((f,i) => setTimeout(() => this._osc(f, 'square', 0.15, 0.03), i*120));
        break;
      case 'achievement':
        [523,659,784,1047].forEach((f,i) => setTimeout(() => this._osc(f, 'sine', 0.2, 0.04), i*100));
        break;
      case 'glitch':
        for(let i=0;i<5;i++) setTimeout(() => this._osc(rand(100,2000), 'sawtooth', 0.05, 0.02), i*30);
        break;
      case 'click':
        this._osc(800, 'square', 0.03, 0.02);
        break;
      case 'hover':
        this._osc(600, 'sine', 0.02, 0.01);
        break;
      case 'nuke':
        // Victory nuke sound
        for(let i=0;i<20;i++) {
          setTimeout(() => {
            this._osc(rand(50,3000), pick(['sine','square','sawtooth','triangle']), rand(1,5)/10, 0.03);
          }, i*100);
        }
        break;
      case 'dialup':
        // Fake dialup
        [1070,1270,2025,2250,1800,1000].forEach((f,i) =>
          setTimeout(() => this._osc(f, 'sine', 0.3, 0.02), i*200)
        );
        break;
      case 'error':
        this._osc(300, 'square', 0.1, 0.03);
        setTimeout(() => this._osc(200, 'square', 0.3, 0.03), 100);
        break;
    }
  },
  // Continuous chaos for victory
  startNukeAudio() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    this._nukeOscs = [];
    for(let i=0;i<5;i++) {
      try {
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.type = pick(['sine','square','sawtooth','triangle']);
        o.frequency.value = rand(100,2000);
        g.gain.value = 0.02;
        o.connect(g); g.connect(this.ctx.destination);
        o.start();
        this._nukeOscs.push({o,g});
        // Modulate
        setInterval(() => { o.frequency.value = rand(50,3000); }, rand(100,500));
      } catch(e) {}
    }
  }
};
