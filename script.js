const moodMap = {
  happy: { label: 'happy', weightGood: 1.12, weightNightmare: 0.86 },
  relaxed: { label: 'relaxed', weightGood: 1.2, weightNightmare: 0.82 },
  sleepy: { label: 'sleepy', weightGood: 1.15, weightNightmare: 0.8 },
  excited: { label: 'excited', weightGood: 1.22, weightNightmare: 0.9 },
  romantic: { label: 'romantic', weightGood: 1.18, weightNightmare: 0.76 },
  curious: { label: 'curious', weightGood: 1.1, weightNightmare: 0.9 },
  normal: { label: 'normal', weightGood: 1.0, weightNightmare: 1.0 },
  sad: { label: 'sad', weightGood: 1.05, weightNightmare: 0.95 },
  anxious: { label: 'anxious', weightGood: 0.86, weightNightmare: 1.4 },
  angry: { label: 'angry', weightGood: 0.88, weightNightmare: 1.24 },
  chaotic: { label: 'chaotic', weightGood: 0.84, weightNightmare: 1.35 },
  exhausted: { label: 'exhausted', weightGood: 1.0, weightNightmare: 1.1 }
};

const goodDreams = [
  { text: 'Tonight, you will fly over a magical city made of clouds.', type: 'flying', category: 'flying', moods: ['happy', 'relaxed', 'excited'] },
  { text: 'Tonight, you will swim through a galaxy with glittering fish friends.', type: 'space', category: 'space', moods: ['curious', 'excited', 'normal'] },
  { text: 'Tonight, you will meet a giant friendly cat who writes poetry for the moon.', type: 'cat', category: 'cat', moods: ['happy', 'romantic', 'curious'] },
  { text: 'Tonight, you will eat unlimited pizza on the moon and become mayor of cheese.', type: 'pizza', category: 'pizza', moods: ['happy', 'chaotic', 'relaxed'] },
  { text: 'Tonight, you will become the ruler of a kingdom of ducks with excellent manners.', type: 'flying', category: 'ducks', moods: ['happy', 'chaotic', 'excited'] },
  { text: 'Tonight, you will ride a dragon to college and pass every subject with fire.', type: 'dragon', category: 'dragon', moods: ['excited', 'happy', 'curious'] },
  { text: 'Tonight, you will discover a secret chocolate planet and become very important.', type: 'pizza', category: 'chocolate', moods: ['romantic', 'happy', 'excited'] },
  { text: 'Tonight, you will walk through a glowing enchanted forest that smells like snacks.', type: 'flying', category: 'forest', moods: ['relaxed', 'curious', 'happy'] },
  { text: 'Tonight, you will find a mysterious treasure chest that only contains good ideas.', type: 'curious', category: 'treasure', moods: ['curious', 'normal', 'romantic'] },
  { text: 'Tonight, you will live inside a cartoon where your problems are just punchlines.', type: 'flying', category: 'cartoon', moods: ['chaotic', 'happy', 'curious'] },
  { text: 'Tonight, you will meet your future self and receive a very stylish career plan.', type: 'space', category: 'timeTravel', moods: ['curious', 'normal', 'excited'] },
  { text: 'Tonight, you will explore an underwater city where everyone speaks in bubbles.', type: 'space', category: 'ocean', moods: ['relaxed', 'curious', 'romantic'] },
  { text: 'Tonight, you will dance with aliens who use jazz hands and perfect rhythm.', type: 'space', category: 'alien', moods: ['excited', 'romantic', 'happy'] },
  { text: 'Tonight, you will have unlimited Wi-Fi forever and every door opens instantly.', type: 'space', category: 'magic', moods: ['normal', 'excited', 'chaotic'] },
  { text: 'Tonight, you will become famous for absolutely no reason and it is amazing.', type: 'flying', category: 'superhero', moods: ['happy', 'chaotic', 'curious'] },
  { text: 'Tonight, you will discover a train that only goes to places where everyone is kind.', type: 'flying', category: 'adventure', moods: ['sad', 'relaxed', 'normal'] },
  { text: 'Tonight, you will find a tiny music box that dreams of being a volcano.', type: 'space', category: 'magic', moods: ['excited', 'chaotic', 'curious'] },
  { text: 'Tonight, you will become the guardian of whispering clouds and snack diplomacy.', type: 'flying', category: 'cloud', moods: ['relaxed', 'romantic', 'happy'] }
];

const nightmareDreams = [
  { text: 'Tonight, you will forget to attend an exam you never studied for.', type: 'exam', category: 'exam', moods: ['anxious', 'normal', 'sad'] },
  { text: 'Tonight, a giant alarm clock will chase you through a hallway of deadlines.', type: 'alarm', category: 'alarm', moods: ['anxious', 'exhausted', 'angry'] },
  { text: 'Tonight, your phone battery will be permanently stuck at 1%.', type: 'phone', category: 'phone', moods: ['anxious', 'chaotic', 'normal'] },
  { text: 'Tonight, you will be chased by 100 angry ducks with strict opinions.', type: 'ducks', category: 'ducks', moods: ['chaotic', 'angry', 'happy'] },
  { text: 'Tonight, you arrive at college and remember you forgot everything.', type: 'classroom', category: 'classroom', moods: ['anxious', 'normal', 'sad'] },
  { text: 'Tonight, your Wi-Fi disappears during the most important moment of your life.', type: 'wifi', category: 'wifi', moods: ['anxious', 'curious', 'normal'] },
  { text: 'Tonight, your entire class knows you did not do the assignment and they are disappointed.', type: 'assignment', category: 'assignment', moods: ['sad', 'anxious', 'normal'] },
  { text: 'Tonight, a giant talking potato will judge every decision you have ever made.', type: 'potato', category: 'potato', moods: ['angry', 'chaotic', 'curious'] },
  { text: 'Tonight, you will be trapped inside an endless loading screen that judges you.', type: 'loading', category: 'loading', moods: ['chaotic', 'exhausted', 'anxious'] },
  { text: 'Tonight, your laptop starts updating when you urgently need it.', type: 'loading', category: 'loading', moods: ['angry', 'chaotic', 'anxious'] },
  { text: 'Tonight, you press Submit Assignment and the button disappears from existence.', type: 'assignment', category: 'assignment', moods: ['anxious', 'sad', 'angry'] },
  { text: 'Tonight, you wake up inside a giant calculator that is counting your mistakes.', type: 'calculation', category: 'calculation', moods: ['anxious', 'exhausted', 'normal'] },
  { text: 'Tonight, your alarm clock has learned your location and is personally offended.', type: 'alarm', category: 'alarm', moods: ['angry', 'anxious', 'sleepy'] },
  { text: 'Tonight, every door leads back to the same classroom and the classroom has opinions.', type: 'classroom', category: 'classroom', moods: ['normal', 'sad', 'anxious'] },
  { text: 'Tonight, you are late for an event that does not exist but everyone is still waiting.', type: 'late', category: 'late', moods: ['anxious', 'chaotic', 'excited'] },
  { text: 'Tonight, the moon sends you a message: Your dream has been successfully broken.', type: 'glitch', category: 'glitch', moods: ['sad', 'curious', 'relaxed'] },
  { text: 'Tonight, your backpack is a backpack again and also a goose.', type: 'ducks', category: 'ducks', moods: ['chaotic', 'happy', 'angry'] },
  { text: 'Tonight, every cloud has a deadline and every deadline has teeth.', type: 'chase', category: 'chase', moods: ['anxious', 'exhausted', 'normal'] }
];

const funnyMessages = [
  'Moon connection established.',
  'Your brain is being suspicious.',
  'This seems scientifically questionable.',
  'Dream signal detected.',
  'Reality.exe has stopped responding.',
  'Our AI has absolutely no idea what it\'s doing.',
  'Dream accuracy: probably 0%.',
  'This prediction is legally meaningless.',
  'Your brain has refused to cooperate.',
  'Please don\'t sue us if you dream about ducks.',
  'Dream loading... please wait until unconscious.',
  'Scientists hate this website.',
  'This technology should not exist.',
  'We have successfully wasted electricity.',
  'Congratulations. You are about to sleep.',
  'Reality is temporarily unavailable.',
  'Your dream has been microwaved.',
  'Subconscious connection unstable.'
];

const loadingMessages = [
  'Connecting to subconscious...',
  'Scanning brain waves...',
  'Entering dream database...',
  'Consulting the moon...',
  'Analyzing your mood...',
  'Checking suspicious dreams...',
  'Consulting 3 tired neurons...',
  'Calculating sleep destiny...',
  'Your subconscious has entered the chat.',
  'Prediction almost complete...'
];

let selectedMood = '';
let currentMoodName = '';
let currentName = '';
let currentMessage = '';
let predictionResult = null;
let predictionTimer = null;
let animationTimer = null;
let activeAnimationTimers = [];

function showScreen(screenId) {
  const screens = Array.from(document.querySelectorAll('.screen'));
  screens.forEach(screen => {
    screen.classList.toggle('active', screen.id === screenId);
  });

  if (screenId !== 'good-dream-screen' && screenId !== 'nightmare-screen') {
    clearDreamAnimation();
  }

  if (typeof updateGuideTip === 'function') {
    updateGuideTip(screenId);
  }
}

function selectMood(mood) {
  selectedMood = mood;
  currentMoodName = moodMap[mood] ? moodMap[mood].label : mood;
  document.querySelectorAll('#moodGrid .mood-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.mood === mood);
  });
  validateForm();
}

function validateForm() {
  const name = nameInput.value.trim();
  const mood = selectedMood;
  if (name.length > 0 && mood) {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
  }
}

function showError(type) {
  if (type === 'name') {
    nameError.textContent = 'Even your dreams need a name 😭';
  } else if (type === 'mood') {
    moodError.textContent = 'Your subconscious needs a mood first.';
  }
}

function clearErrors() {
  nameError.textContent = '';
  moodError.textContent = '';
}

function startPrediction() {
  clearErrors();
  const name = nameInput.value.trim();
  const mood = selectedMood;

  if (!name) {
    showError('name');
    return;
  }

  if (!mood) {
    showError('mood');
    return;
  }

  currentName = name;
  currentMoodName = moodMap[mood].label;
  currentMessage = messageInput.value.trim();

  showScreen('loading-screen');
  runPredictionAnimation();
}

function runPredictionAnimation() {
  let progress = 0;
  let messageIndex = 0;
  const interval = setInterval(() => {
    progress += 2;
    if (progress >= 100) {
      progress = 100;
      progressBar.style.width = progress + '%';
      progressText.textContent = progress + '%';
      loadingMessage.textContent = 'Prediction almost complete...';
      clearInterval(interval);
      window.setTimeout(() => {
        predictionResult = generatePrediction();
        if (predictionResult.type === 'good') {
          showGoodDream(predictionResult);
        } else {
          showNightmare(predictionResult);
        }
      }, 500);
      return;
    }

    progressBar.style.width = progress + '%';
    progressText.textContent = progress + '%';

    if (messageIndex < loadingMessages.length && progress % 12 < 2) {
      loadingMessage.textContent = loadingMessages[messageIndex % loadingMessages.length];
      messageIndex++;
    }

    if (Math.random() > 0.84) {
      loadingMessage.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    }
  }, 140);
}

function generatePrediction() {
  let baseChance = 0.7;
  const mood = moodMap[selectedMood] || moodMap.normal;
  if (mood.label === 'anxious') baseChance -= 0.1;
  if (mood.label === 'angry') baseChance -= 0.04;
  if (mood.label === 'chaotic') baseChance -= 0.035;
  if (mood.label === 'relaxed') baseChance += 0.04;
  if (mood.label === 'happy') baseChance += 0.07;
  if (mood.label === 'excited') baseChance += 0.05;
  if (mood.label === 'romantic') baseChance += 0.03;
  if (mood.label === 'sad') baseChance += 0.03;
  if (mood.label === 'excited') baseChance += 0.03;

  const goodOdds = clamp(baseChance * mood.weightGood, 0.35, 0.84);
  const isGood = Math.random() < goodOdds;

  if (isGood) {
    const chooses = goodDreams.filter(d => d.moods.includes(selectedMood)).length || goodDreams.length;
    const dream = goodDreams[Math.floor(Math.random() * goodDreams.length)];
    const alternative = goodDreams[Math.floor(Math.random() * chooses) % goodDreams.length];
    const chosen = currentMessage && Math.random() > 0.6 ? alternative : dream;
    return { type: 'good', dream: chosen, probability: randomInt(72, 99) };
  }

  const dream = nightmareDreams[Math.floor(Math.random() * nightmareDreams.length)];
  return { type: 'nightmare', dream, probability: randomInt(65, 98) };
}

function generateGoodDream() {
  return randomItem(goodDreams);
}

function generateNightmare() {
  return randomItem(nightmareDreams);
}

function showGoodDream(result) {
  const resultCard = document.getElementById('goodDreamText');
  resultCard.textContent = result.dream.text;

  const probability = Math.min(99, Math.max(72, result.probability));
  probabilityBar.style.width = probability + '%';
  document.getElementById('dreamProbability').textContent = probability + '%';

  const depth = clamp(Math.round(result.probability + randomInt(-6, 15)), 25, 100);
  const goodDepthMeter = document.getElementById('goodDepthMeter');
  const goodDepthLevel = document.getElementById('goodDepthLevel');
  goodDepthMeter.style.width = depth + '%';
  goodDepthLevel.textContent = depth + '%';
  goodDepthMeter.animate([
    { opacity: 0.85, filter: 'blur(1px)' },
    { opacity: 1, filter: 'blur(0)' }
  ], { duration: 280, iterations: 1 });

  const zone = document.querySelector('#good-dream-screen .dream-animation-zone');
  zone.className = 'dream-animation-zone dream-animation-zone-' + (result.dream.category || 'flying');

  createDreamAnimation(result);
  showScreen('good-dream-screen');
}

function showNightmare(result) {
  const resultText = document.getElementById('nightmareText');
  resultText.textContent = result.dream.text;

  const intensity = Math.min(98, Math.max(65, result.probability));
  nightmareBar.style.width = intensity + '%';
  document.getElementById('nightmareIntensity').textContent = intensity + '%';

  const depth = clamp(Math.round(result.probability + randomInt(5, 20)), 30, 100);
  const nightmareDepthMeter = document.getElementById('nightmareDepthMeter');
  const nightmareDepthLevel = document.getElementById('nightmareDepthLevel');
  nightmareDepthMeter.style.width = depth + '%';
  nightmareDepthLevel.textContent = depth + '%';
  nightmareDepthMeter.animate([
    { opacity: 0.8, filter: 'blur(1px)', transform: 'scaleX(0.86)' },
    { opacity: 1, filter: 'blur(0)', transform: 'scaleX(1)' }
  ], { duration: 280, iterations: 1 });

  const zone = document.querySelector('#nightmare-screen .dream-animation-zone');
  zone.className = 'dream-animation-zone nightmare-animation-zone nightmare-zone-' + (result.dream.category || 'ducks');

  createDreamAnimation(result);
  showScreen('nightmare-screen');
}

function createDreamAnimation(result) {
  const goodScreen = document.querySelector('#good-dream-screen .dream-animation');
  const nightmareScreen = document.querySelector('#nightmare-screen .dream-animation');
  const sceneType = result.type === 'good' ? 'good' : 'nightmare';
  const category = (result.dream && result.dream.category) || (result.dream && result.dream.type) || 'flying';
  const dreamState = getDreamState(category);
  const target = sceneType === 'good' ? goodScreen : nightmareScreen;
  const zone = sceneType === 'good' ? document.querySelector('#good-dream-screen .dream-animation-zone') : document.querySelector('#nightmare-screen .dream-animation-zone');

  if (!target || !zone) {
    return;
  }

  const className = sceneType === 'good'
    ? 'dream-animation-zone dream-animation-zone-' + category + ' dream-state-' + dreamState + ' good-dream-zone'
    : 'dream-animation-zone nightmare-animation-zone nightmare-zone-' + category + ' dream-state-' + dreamState + ' nightmare-dream-zone';

  zone.className = className;
  target.className = 'dream-animation dream-animation-' + sceneType + ' dream-state-' + dreamState;
  target.innerHTML = getSceneMarkup(category, sceneType);

  if (Math.random() > 0.55) {
    addRandomEffects(target);
  }
}

function getDreamState(category) {
  const stateMap = {
    flying: 'flying',
    space: 'lucid',
    cat: 'lucid',
    pizza: 'daydream',
    dragon: 'lucid',
    ocean: 'water',
    forest: 'daydream',
    ducks: 'flying',
    alien: 'lucid',
    cartoon: 'daydream',
    treasure: 'daydream',
    timeTravel: 'lucid',
    cloud: 'flying',
    chocolate: 'daydream',
    adventure: 'daydream',
    romantic: 'daydream',
    mystery: 'lucid',
    exam: 'nightmare',
    wifi: 'nightmare',
    alarm: 'nightmare',
    loading: 'nightmare',
    assignment: 'nightmare',
    classroom: 'nightmare',
    phone: 'nightmare',
    potato: 'nightmare',
    elevator: 'falling',
    late: 'falling',
    glitch: 'nightmare',
    chase: 'nightmare',
    chaos: 'nightmare',
    calculation: 'nightmare',
    falling: 'falling'
  };

  return stateMap[category] || 'flying';
}

function clearDreamAnimation() {
  const zones = [
    '#good-dream-screen .dream-animation-zone',
    '#nightmare-screen .dream-animation-zone'
  ];

  zones.forEach(selector => {
    const zone = document.querySelector(selector);
    if (zone) {
      zone.className = 'dream-animation-zone';
      if (selector.includes('nightmare')) {
        zone.className += ' nightmare-zone';
      }
    }
  });

  document.querySelectorAll('#good-dream-screen .dream-animation, #nightmare-screen .dream-animation').forEach(el => {
    el.innerHTML = '';
  });

  activeAnimationTimers.forEach(timer => window.clearTimeout(timer));
  activeAnimationTimers = [];
}

function getSceneMarkup(category, sceneType) {
  if (sceneType === 'good') {
    return getGoodSceneMarkup(category);
  }
  return getNightmareSceneMarkup(category);
}

function getGoodSceneMarkup(category) {
  return getCinematicScene(category, 'good');
}

function getNightmareSceneMarkup(category) {
  return getCinematicScene(category, 'nightmare');
}

function getCinematicScene(category, sceneType) {
  const dreamState = getDreamState(category);
  const base = {
    flying: {
      className: 'scene-flying cinematic-ascent',
      html: '<span class="dream-layer dream-sky"></span><span class="dream-layer dream-cloud cloud-one">☁</span><span class="dream-layer dream-cloud cloud-two">☁</span><span class="dream-layer dream-cloud cloud-three">☁</span><span class="dream-layer dream-castle">♞</span><span class="dream-layer dream-sun">☼</span><span class="dream-layer dream-birds">✦✦✦</span>'
    },
    falling: {
      className: 'scene-falling cinematic-descent',
      html: '<span class="dream-layer dream-crack">✤</span><span class="dream-layer dream-streak streak-one">✦</span><span class="dream-layer dream-streak streak-two">✦</span><span class="dream-layer dream-streak streak-three">✦</span><span class="dream-layer dream-portal">✧</span><span class="dream-layer dream-debris">✥</span>'
    },
    water: {
      className: 'scene-water cinematic-depths',
      html: '<span class="dream-layer dream-light-shaft">✦</span><span class="dream-layer dream-jellyfish">✺</span><span class="dream-layer dream-jellyfish jelly-two">✺</span><span class="dream-layer dream-fish fish-one">◌</span><span class="dream-layer dream-fish fish-two">◌</span><span class="dream-layer dream-bubbles">○ ○ ○</span>'
    },
    nightmare: {
      className: 'scene-nightmare cinematic-nightmare',
      html: '<span class="dream-layer dream-corridor">║</span><span class="dream-layer dream-light light-one">✦</span><span class="dream-layer dream-light light-two">✦</span><span class="dream-layer dream-shadow">♞</span><span class="dream-layer dream-eyes">✦✦</span><span class="dream-layer dream-noise">✕</span>'
    },
    lucid: {
      className: 'scene-lucid cinematic-epiphany',
      html: '<span class="dream-layer dream-glyph glyph-one">✦</span><span class="dream-layer dream-glyph glyph-two">✤</span><span class="dream-layer dream-glyph glyph-three">✧</span><span class="dream-layer dream-glyph glyph-four">✺</span><span class="dream-layer dream-galaxy">✦</span><span class="dream-layer dream-ripple">◌</span>'
    },
    daydream: {
      className: 'scene-daydream cinematic-wanderer',
      html: '<span class="dream-layer dream-tree">♧</span><span class="dream-layer dream-tree tree-two">♧</span><span class="dream-layer dream-bug bug-one">✦</span><span class="dream-layer dream-bug bug-two">✦</span><span class="dream-layer dream-mist">☁</span><span class="dream-layer dream-path">✧</span>'
    }
  };

  const mapped = base[dreamState] || base.flying;
  const categoryClass = 'scene-' + category;
  const categoryMarkup = getCategorySceneElements(category, sceneType);
  const safeSceneType = sceneType === 'good' ? 'good' : 'nightmare';
  const scene = '<div class="dream-scene ' + mapped.className + ' dream-scene-' + dreamState + ' ' + categoryClass + ' scene-' + safeSceneType + '">' + mapped.html + categoryMarkup + '</div>';
  const happyScene = sceneType === 'good'
    ? '<div class="happy-video-scene">' +
        '<span class="happy-video-moon">☽</span>' +
        '<span class="happy-video-cloud cloud-left">☁</span>' +
        '<span class="happy-video-cloud cloud-right">☁</span>' +
        '<span class="happy-video-city"><span></span><span></span><span></span><span></span></span>' +
        '<span class="happy-video-dreamer">♬</span>' +
        '<span class="happy-video-particle particle-one">✦</span>' +
        '<span class="happy-video-particle particle-two">✦</span>' +
        '<span class="happy-video-particle particle-three">✦</span>' +
        '<span class="happy-video-flare">✦</span>' +
      '</div>'
    : '';
  const frameClass = sceneType === 'good' ? 'dream-video-frame dream-video-good' : 'dream-video-frame dream-video-nightmare';
  const generatorIntro = sceneType === 'good'
    ? 'Dream Video Generator · Dream Mode'
    : 'Dream Video Generator · Nightmare Mode';
  const generatorPhase = sceneType === 'good'
    ? 'signal: sky library engaged'
    : 'signal: shadow hallway engaged';
  const generatorPrompt = buildDreamPrompt(category, sceneType);
  const generator = '<div class="dream-video-generator ' + (sceneType === 'good' ? 'dream-video-generator-good' : 'dream-video-generator-nightmare') + '">' +
    '<div class="generator-head"><span class="generator-title">' + generatorIntro + '</span><span class="generator-orb">✦</span></div>' +
    '<div class="generator-phase"><span class="generator-phase-label">phase</span><span class="generator-phase-text">' + generatorPhase + '</span></div>' +
    '<div class="generator-bars"><span></span><span></span><span></span><span></span></div>' +
    '<div class="generator-prompt">' + generatorPrompt + '</div>' +
  '</div>';
  const videoFrame = '<div class="' + frameClass + ' dream-video-' + dreamState + '">' +
    '<span class="video-frame-top"></span>' +
    '<span class="video-frame-left"></span>' +
    '<span class="video-frame-right"></span>' +
    '<span class="video-frame-bottom"></span>' +
    '<span class="video-scanline"></span>' +
    '<span class="video-grain"></span>' +
    scene +
    happyScene +
    generator +
    '<span class="video-play-icon">✦</span>' +
    '</div>';

  if (sceneType === 'nightmare' && dreamState === 'nightmare') {
    return videoFrame;
  }

  return videoFrame;
}

function buildDreamPrompt(category, sceneType) {
  const happyPromptBase = {
    flying: 'moonlit skyline with soft cloud kingdoms',
    space: 'cosmic garden floating through violet light',
    cat: 'gentle cat poet whispering across moonlight',
    pizza: 'cheese comet drifting through a golden night',
    ducks: 'ducks governing a royal sky parade',
    dragon: 'dragon fire tracing a bright path home',
    forest: 'quiet forest with fireflies and warm bells',
    ocean: 'water city with glowing jellyfish and slow waves',
    alien: 'soft alien jazz band crossing the quiet orbit',
    cartoon: 'cartoon hill where every problem turns playful',
    treasure: 'hidden crystal garden opening a lucky door',
    timeTravel: 'time tunnel lifting color into tomorrow',
    cloud: 'floating cloud choir singing through silver fog',
    chocolate: 'chocolate garden melting into stardust',
    adventure: 'kind path opening toward a better version of morning',
    romantic: 'heart map glowing under the dream bell'
  };

  const nightmarePromptBase = {
    exam: 'paper ghosts counting every forgotten answer',
    wifi: 'signal collapse inside a room full of static',
    alarm: 'clock heartbeat shaking every window open',
    loading: 'endless loader refusing to sleep',
    assignment: 'missing page walking through a dark classroom',
    classroom: 'classroom eyes staring from the second floor',
    phone: 'battery warning whispering through the wall',
    potato: 'judging potato watching from the edge of the room',
    glitch: 'broken data moon pulling the night apart',
    chase: 'running shadows closing in with no exit',
    late: 'doors that close before the event begins',
    calculation: 'numbers breathing with too much red light'
  };

  const map = sceneType === 'good' ? happyPromptBase : nightmarePromptBase;
  return 'creating ' + (map[category] || 'dream motion') + ' · dream feed online';
}

function getCategorySceneElements(category, sceneType) {
  const categoryMarkup = {
    flying: '<span class="flying-silhouette">♞</span><span class="moon-sky">☽</span><span class="fantasy-city"></span><span class="spark sparkle-one">✦</span><span class="spark sparkle-two">✦</span>',
    space: '<span class="planet planet-one">☄</span><span class="planet planet-two">☼</span><span class="shooting-star">✦</span><span class="orbit-signal">✧</span>',
    cat: '<span class="cat-scene">🐈</span><span class="heart heart-one">♥</span><span class="heart heart-two">♥</span><span class="cat-text">poetry night</span>',
    pizza: '<span class="pizza-slice pizza-one">🍕</span><span class="pizza-slice pizza-two">🍕</span><span class="pizza-slice pizza-three">🍕</span><span class="cheese">✦</span>',
    ducks: '<span class="castle">♞</span><span class="duck-king">♞</span><span class="duck duck-a">🦆</span><span class="duck duck-b">🦆</span><span class="duck-kingdom-text">duck court</span>',
    dragon: '<span class="dragon-scene">🐉</span><span class="mountains">♧</span><span class="fire fire-one">✦</span><span class="fire fire-two">✦</span>',
    forest: '<span class="tree tree-one">♧</span><span class="tree tree-two">♧</span><span class="firefly">✦</span><span class="fog">☁</span>',
    ocean: '<span class="fish fish-one">◌</span><span class="fish fish-two">◌</span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span><span class="coral">✧</span>',
    alien: '<span class="ufo">✦</span><span class="alien">👽</span><span class="alien-planet">☄</span><span class="beam"></span>',
    cartoon: '<span class="cartoon-shape">✤</span><span class="cartoon-cloud">☁</span><span class="cartoon-cloud cloud2">☁</span><span class="cartoon-sprinkle">✦</span>',
    treasure: '<span class="cave">♧</span><span class="treasure-chest">✦</span><span class="coin coin-one">●</span><span class="coin coin-two">●</span><span class="crystal">✧</span>',
    timeTravel: '<span class="clock-scene">☼</span><span class="tunnel">✦</span><span class="time-number n1">24</span><span class="time-number n2">07</span>',
    cloud: '<span class="cloud cloud-left">☁</span><span class="cloud cloud-right">☁</span><span class="spark sparkle-one">✦</span><span class="spark sparkle-two">✦</span>',
    chocolate: '<span class="choco-chunk">●</span><span class="choco-chunk">●</span><span class="choco-chunk">✦</span>',
    adventure: '<span class="travel-path">✦</span><span class="map-pin">✧</span><span class="path-star">✤</span>',
    romantic: '<span class="heart heart-one">♥</span><span class="heart heart-two">♥</span><span class="spark sparkle-one">✦</span>',
    mystery: '<span class="glyph glyph-one">✧</span><span class="glyph glyph-two">✦</span><span class="glyph glyph-three">✤</span>',
    magic: '<span class="magic-book">✦</span><span class="spell-dot">✧</span><span class="spell-dot">✦</span>',
    superhero: '<span class="hero-cape">♞</span><span class="hero-mask">✦</span><span class="hero-spark">✧</span>',
    exam: '<span class="exam-paper">✎</span><span class="desk">▣</span><span class="clock-fast">☼</span><span class="exam-word">EXAM</span><span class="exam-reminder">RUN</span>',
    wifi: '<span class="router-scene">◌</span><span class="wifi-bars">▥▥▥</span><span class="wifi-text">NO WIFI</span><span class="wifi-warning">signal</span>',
    alarm: '<span class="alarm-scene">☼</span><span class="wake-text">ALARM</span><span class="just-kidding">wake</span><span class="five-min">05:00</span>',
    loading: '<span class="loader-circle">○</span><span class="loading-bars">▥ ▥ ▥</span><span class="loading-notify">LOADING</span>',
    assignment: '<span class="laptop">▣</span><span class="assign-doc">?</span><span class="button-vanish">✕</span><span class="where-did-it-go">missing</span>',
    classroom: '<span class="classroom-scene">▣</span><span class="teacher-silhouette">♞</span><span class="blackboard-text">class</span><span class="except-you">✕</span>',
    phone: '<span class="phone-scene">☎</span><span class="battery-low">1%</span><span class="phone-glitch">signal</span>',
    potato: '<span class="potato-scene">●</span><span class="potato-eyes">✦✦</span><span class="potato-text">judge</span>',
    glitch: '<span class="glitch-symbol">✕</span><span class="glitch-text">glitch</span><span class="broken-data">data</span>',
    chase: '<span class="running-scene">➤</span><span class="chase-warning">RUN</span><span class="chase-sign">✦</span>',
    late: '<span class="late-clock">☼</span><span class="late-text">late</span><span class="late-event">event</span>',
    calculation: '<span class="calculator-scene">▣</span><span class="calculator-warning">?</span>'
  };

  return categoryMarkup[category] || '';
}

function addRandomEffects(target) {
  const effects = ['✦', '☄', '✧', '✦', '✤'];
  const effect = document.createElement('span');
  effect.className = 'random-effect';
  effect.textContent = effects[Math.floor(Math.random() * effects.length)];
  effect.style.left = randomInt(14, 84) + '%';
  effect.style.top = randomInt(20, 68) + '%';
  target.appendChild(effect);

  const timer = window.setTimeout(() => {
    if (effect.parentNode) {
      effect.parentNode.removeChild(effect);
    }
  }, 1200);
  activeAnimationTimers.push(timer);
}

function predictAgain() {
  showScreen('loading-screen');
  runPredictionAnimation();
}

function sleepNow() {
  const greeting = document.getElementById('sleepGreeting');
  greeting.textContent = '🌙 Goodnight, ' + currentName + '!';
  showScreen('sleep-screen');

  const percent = randomInt(80, 98);
  const install = document.getElementById('dreamInstallPercent');
  install.textContent = percent + '%';

  let index = 0;
  const msg = ['Entering dream mode...', 'Dream installation: ' + percent + '%...', 'Please do not disturb the subconscious.'];
  const rows = document.querySelectorAll('.sleep-status-row');
  rows[0].textContent = msg[0];
  rows[1].textContent = msg[1];
  rows[2].textContent = msg[2];
}

function wakeUp() {
  selectedMood = '';
  currentMoodName = '';
  currentName = '';
  currentMessage = '';
  predictionResult = null;
  nameInput.value = '';
  messageInput.value = '';
  moodError.textContent = '';
  nameError.textContent = '';
  document.querySelectorAll('#moodGrid .mood-card').forEach(card => card.classList.remove('selected'));
  startButton.disabled = true;
  showScreen('landing-screen');
}

function showAbout() {
  modalBackdrop.classList.add('open');
}

function closeAbout() {
  modalBackdrop.classList.remove('open');
}

function buildGuide() {
  const guide = document.getElementById('dreamGuide');
  const guidePanel = document.getElementById('dreamGuidePanel');
  const guideOpen = document.getElementById('guideRestore');
  const guideClose = document.getElementById('guideClose');
  const guideSpeech = document.getElementById('guideSpeech');
  const guideReplyButtons = Array.from(document.querySelectorAll('[data-guide-reply]'));
  const storageKey = 'dreamGuideFirstVisitShown';

  const tips = {
    'landing-screen': 'The moon is whispering: tap Predict My Dream.',
    'setup-screen': 'Tell the orb your name, mood, and a tiny whisper.',
    'loading-screen': 'The subconscious is sorting the stars.',
    'good-dream-screen': 'A lucky little dream is floating in.',
    'nightmare-screen': 'The nightmare has a red-alert sparkle.',
    'sleep-screen': 'Dreams are being installed with a sleepy hum.'
  };

  function speak(message) {
    const text = message || 'I am listening for dream signals.';
    let char = 0;
    guideSpeech.textContent = '';
    const type = setInterval(() => {
      char += 1;
      guideSpeech.textContent = text.slice(0, char);
      if (char >= text.length) {
        clearInterval(type);
      }
    }, 16);
  }

  function showFirstGreeting() {
    const known = localStorage.getItem(storageKey);
    if (!known) {
      localStorage.setItem(storageKey, 'true');
      speak('Welcome, dream scout. The cloud is awake ✦');
    } else {
      speak('The cloud remembers your dream trail.');
    }
  }

  function updateGuideTip(screenId) {
    const tip = tips[screenId] || 'The dream cloud is ready for your next question.';
    speak(tip);
  }

  guideClose.addEventListener('click', () => {
    guide.classList.add('is-closed');
    guidePanel.setAttribute('aria-hidden', 'true');
    guideOpen.setAttribute('aria-expanded', 'false');
    guideOpen.style.display = 'flex';
    speak('I am resting in a little cloud nap.');
  });

  guideOpen.addEventListener('click', () => {
    guide.classList.remove('is-closed');
    guidePanel.setAttribute('aria-hidden', 'false');
    guideOpen.setAttribute('aria-expanded', 'true');
    guideOpen.style.display = 'none';
    speak('The dream cloud is ready again.');
  });

  guideReplyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const reply = button.dataset.guideReply;
      if (reply === 'What is this?') {
        speak('This is a tiny dream oracle for your sleepy ideas.');
      } else if (reply === 'Show dreams') {
        speak('Dreams are drifting in. Let’s make one together.');
      } else if (reply === 'Help') {
        speak('Pick a mood, choose your name, then let the moon predict.');
      }
    });
  });

  const contextById = {
    'landing-screen': 'The moon is whispering: tap Predict My Dream.',
    'setup-screen': 'Tell the orb your name, mood, and a tiny whisper.',
    'loading-screen': 'The subconscious is sorting the stars.',
    'good-dream-screen': 'A lucky little dream is floating in.',
    'nightmare-screen': 'The nightmare has a red-alert sparkle.',
    'sleep-screen': 'Dreams are being installed with a sleepy hum.'
  };

  const activeSections = Array.from(document.querySelectorAll('#landing-screen, #setup-screen, #loading-screen, #good-dream-screen, #nightmare-screen, #sleep-screen'));
  let scrollTick = false;

  function scrollTipUpdate() {
    if (!activeSections.length) return;

    const scrollY = window.scrollY || window.pageYOffset;
    let best = 'landing-screen';
    let bestDistance = Infinity;

    activeSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - (window.innerHeight * 0.22));
      if (rect.top >= -window.innerHeight && distance < bestDistance) {
        best = section.id;
        bestDistance = distance;
      }
    });

    if (contextById[best]) {
      speak(contextById[best]);
    }
  }

  window.addEventListener('scroll', () => {
    if (!scrollTick) {
      scrollTick = true;
      requestAnimationFrame(() => {
        scrollTipUpdate();
        scrollTick = false;
      });
    }
  }, { passive: true });

  guide.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      guide.classList.add('is-closed');
      guidePanel.setAttribute('aria-hidden', 'true');
      guideOpen.style.display = 'flex';
      guideOpen.focus();
    }
  });

  guideOpen.setAttribute('aria-expanded', 'true');
  showFirstGreeting();
  return { speak, updateGuideTip };
}

const guideRuntime = buildGuide();

function updateGuideTip(screenId) {
  if (guideRuntime && guideRuntime.updateGuideTip) {
    guideRuntime.updateGuideTip(screenId);
  }
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

const nameInput = document.getElementById('nameInput');
const startButton = document.getElementById('startPrediction');
const predictLanding = document.getElementById('predictLanding');
const predictAgainGood = document.getElementById('predictAgainGood');
const predictAgainNightmare = document.getElementById('predictAgainNightmare');
const sleepNowGood = document.getElementById('sleepNowGood');
const sleepNowNightmare = document.getElementById('sleepNowNightmare');
const sleepButtonNightmare = document.getElementById('sleepNowNightmare');
const messageInput = document.getElementById('messageInput');
const loadingMessage = document.getElementById('loadingMessage');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const probabilityBar = document.getElementById('probabilityBar');
const nightmareBar = document.getElementById('nightmareBar');
const aboutButton = document.getElementById('aboutButton');
const aboutModal = document.getElementById('aboutModal');
const closeModal = document.getElementById('closeModal');
const modalBackdrop = document.getElementById('aboutModal');
const nameError = document.getElementById('nameError');
const moodError = document.getElementById('moodError');
const wakeButton = document.getElementById('wakeButton');
const themeButtons = Array.from(document.querySelectorAll('[data-theme-option]'));

function applyTheme(themeName) {
  const chosenTheme = themeName === 'cozy' ? 'cozy' : 'nightly';
  document.body.setAttribute('data-theme', chosenTheme);

  themeButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.themeOption === chosenTheme);
  });

  try {
    localStorage.setItem('dreamPredictorTheme', chosenTheme);
  } catch (e) {
    // localStorage can be blocked in some browser contexts.
  }
}

try {
  const savedTheme = localStorage.getItem('dreamPredictorTheme') || 'nightly';
  applyTheme(savedTheme);
} catch (e) {
  applyTheme('nightly');
}

themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    applyTheme(button.dataset.themeOption);
  });
});

predictLanding.addEventListener('click', () => {
  clearErrors();
  showScreen('setup-screen');
});

startButton.addEventListener('click', startPrediction);

nameInput.addEventListener('input', validateForm);

Array.from(document.querySelectorAll('#moodGrid .mood-card')).forEach(card => {
  card.addEventListener('click', () => {
    clearErrors();
    selectMood(card.dataset.mood);
  });
});

predictAgainGood.addEventListener('click', predictAgain);
predictAgainNightmare.addEventListener('click', predictAgain);
sleepNowGood.addEventListener('click', sleepNow);
sleepNowNightmare.addEventListener('click', sleepNow);

aboutButton.addEventListener('click', showAbout);
closeModal.addEventListener('click', closeAbout);

wakeButton.addEventListener('click', wakeUp);

if (aboutModal) {
  aboutModal.addEventListener('click', event => {
    if (event.target === aboutModal) closeAbout();
  });
}

showScreen('landing-screen');
