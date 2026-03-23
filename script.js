const PLATES = [
  { id: 1, file: 'assets/images/plates/plate_01.jpg', label: 'Plate 01', answers: { normal: ['12'], protan: ['12'], deutan: ['12'] } },
  { id: 2, file: 'assets/images/plates/plate_02.jpg', label: 'Plate 02', answers: { normal: ['8'], protan: ['3'], deutan: ['3'] } },
  { id: 3, file: 'assets/images/plates/plate_03.jpg', label: 'Plate 03', answers: { normal: ['6'], protan: ['5'], deutan: ['5'] } },
  { id: 4, file: 'assets/images/plates/plate_04.jpg', label: 'Plate 04', answers: { normal: ['29'], protan: ['70'], deutan: ['70'] } },
  { id: 5, file: 'assets/images/plates/plate_05.jpg', label: 'Plate 05', answers: { normal: ['57'], protan: ['35'], deutan: ['35'] } },
  { id: 6, file: 'assets/images/plates/plate_06.jpg', label: 'Plate 06', answers: { normal: ['5'], protan: ['2'], deutan: ['2'] } },
  { id: 7, file: 'assets/images/plates/plate_07.jpg', label: 'Plate 07', answers: { normal: ['3'], protan: ['5'], deutan: ['5'] } },
  { id: 8, file: 'assets/images/plates/plate_08.jpg', label: 'Plate 08', answers: { normal: ['15'], protan: ['17'], deutan: ['17'] } },
  { id: 9, file: 'assets/images/plates/plate_09.jpg', label: 'Plate 09', answers: { normal: ['74'], protan: ['21'], deutan: ['21'] } },
  { id: 10, file: 'assets/images/plates/plate_10.jpg', label: 'Plate 10', answers: { normal: ['2'], protan: ['none'], deutan: ['none'] } },
  { id: 11, file: 'assets/images/plates/plate_11.jpg', label: 'Plate 11', answers: { normal: ['6'], protan: ['none'], deutan: ['none'] } },
  { id: 12, file: 'assets/images/plates/plate_12.jpg', label: 'Plate 12', answers: { normal: ['97'], protan: ['none'], deutan: ['none'] } },
  { id: 13, file: 'assets/images/plates/plate_13.jpg', label: 'Plate 13', answers: { normal: ['45'], protan: ['none'], deutan: ['none'] } },
  { id: 14, file: 'assets/images/plates/plate_14.jpg', label: 'Plate 14', answers: { normal: ['5'], protan: ['none'], deutan: ['none'] } },
  { id: 15, file: 'assets/images/plates/plate_15.jpg', label: 'Plate 15', answers: { normal: ['7'], protan: ['none'], deutan: ['none'] } },
  { id: 16, file: 'assets/images/plates/plate_16.jpg', label: 'Plate 16', answers: { normal: ['16'], protan: ['none'], deutan: ['none'] } },
  { id: 17, file: 'assets/images/plates/plate_17.jpg', label: 'Plate 17', answers: { normal: ['73'], protan: ['none'], deutan: ['none'] } },
  { id: 18, file: 'assets/images/plates/plate_18.jpg', label: 'Plate 18', answers: { normal: ['none'], protan: ['5'], deutan: ['5'] } },
  { id: 19, file: 'assets/images/plates/plate_19.jpg', label: 'Plate 19', answers: { normal: ['none'], protan: ['2'], deutan: ['2'] } },
  { id: 20, file: 'assets/images/plates/plate_20.jpg', label: 'Plate 20', answers: { normal: ['none'], protan: ['45'], deutan: ['45'] } },
  { id: 21, file: 'assets/images/plates/plate_21.jpg', label: 'Plate 21', answers: { normal: ['none'], protan: ['73'], deutan: ['73'] } },
  { id: 22, file: 'assets/images/plates/plate_22.jpg', label: 'Plate 22', diagnostic: true, answers: { normal: ['26'], protan: ['6'], deutan: ['2'] } },
  { id: 23, file: 'assets/images/plates/plate_23.jpg', label: 'Plate 23', diagnostic: true, answers: { normal: ['42'], protan: ['2'], deutan: ['4'] } },
  { id: 24, file: 'assets/images/plates/plate_24.jpg', label: 'Plate 24', diagnostic: true, answers: { normal: ['35'], protan: ['5'], deutan: ['3'] } }
];

const MODE_META = {
  quick: {
    label: 'Quick',
    title: 'Быстрый',
    ids: [1, 2, 4, 5, 8, 9, 12, 18, 22, 23]
  },
  full: {
    label: 'Full',
    title: 'Полный',
    ids: PLATES.map((plate) => plate.id)
  }
};

const PLATE_MAP = new Map(PLATES.map((plate) => [plate.id, plate]));
const TIMER_SECONDS = 7;
const MIN_PRELOAD_MS = 1200;

const screens = {
  home: document.getElementById('homeScreen'),
  preload: document.getElementById('preloadScreen'),
  test: document.getElementById('testScreen'),
  result: document.getElementById('resultScreen')
};

const elements = {
  startButton: document.getElementById('startButton'),
  soundToggle: document.getElementById('soundToggle'),
  themeToggle: document.getElementById('themeToggle'),
  preloadCopy: document.getElementById('preloadCopy'),
  plateLabel: document.getElementById('plateLabel'),
  platePrompt: document.getElementById('platePrompt'),
  plateTag: document.getElementById('plateTag'),
  plateImage: document.getElementById('plateImage'),
  platePanel: document.getElementById('platePanel'),
  answerInput: document.getElementById('answerInput'),
  submitButton: document.getElementById('submitButton'),
  noAnswerButton: document.getElementById('noAnswerButton'),
  clearAnswerButton: document.getElementById('clearAnswerButton'),
  skipButton: document.getElementById('skipButton'),
  progressBar: document.getElementById('progressBar'),
  progressText: document.getElementById('progressText'),
  modeBadge: document.getElementById('modeBadge'),
  timerRing: document.getElementById('timerRing'),
  timerValue: document.getElementById('timerValue'),
  resultPill: document.getElementById('resultPill'),
  resultSummary: document.getElementById('resultSummary'),
  resultRing: document.getElementById('resultRing'),
  resultRingValue: document.getElementById('resultRingValue'),
  normalMatchValue: document.getElementById('normalMatchValue'),
  profileValue: document.getElementById('profileValue'),
  confidenceText: document.getElementById('confidenceText'),
  modeResultValue: document.getElementById('modeResultValue'),
  scoreNormal: document.getElementById('scoreNormal'),
  scoreProtan: document.getElementById('scoreProtan'),
  scoreDeutan: document.getElementById('scoreDeutan'),
  barNormal: document.getElementById('barNormal'),
  barProtan: document.getElementById('barProtan'),
  barDeutan: document.getElementById('barDeutan'),
  resultExplanation: document.getElementById('resultExplanation'),
  restartButton: document.getElementById('restartButton'),
  switchModeButton: document.getElementById('switchModeButton')
};

const state = {
  theme: 'dark',
  sound: false,
  mode: 'quick',
  session: [],
  records: [],
  index: 0,
  timerId: null,
  timerEndsAt: 0,
  audioContext: null,
  isTransitioning: false
};

init();

function init() {
  hydratePreferences();
  bindEvents();
  updateModeBadge();
  renderToolbarState();
  showScreen('home');
}

function bindEvents() {
  elements.startButton.addEventListener('click', () => {
    resumeAudio();
    startTest();
  });

  elements.soundToggle.addEventListener('click', () => {
    state.sound = !state.sound;
    persistPreferences();
    renderToolbarState();
    if (state.sound) {
      resumeAudio();
      playTone('tap');
    }
  });

  elements.themeToggle.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    persistPreferences();
    renderToolbarState();
  });

  document.querySelectorAll('input[name="mode"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      state.mode = getSelectedMode();
      updateModeBadge();
    });
  });

  elements.submitButton.addEventListener('click', () => submitCurrentAnswer('manual'));
  elements.noAnswerButton.addEventListener('click', () => submitCurrentAnswer('none'));
  elements.clearAnswerButton.addEventListener('click', () => {
    elements.answerInput.value = '';
    elements.answerInput.focus();
  });
  elements.skipButton.addEventListener('click', () => submitCurrentAnswer('skip'));

  elements.answerInput.addEventListener('input', () => {
    elements.answerInput.value = elements.answerInput.value.replace(/[^0-9]/g, '').slice(0, 3);
  });

  elements.answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submitCurrentAnswer('manual');
    }
  });

  elements.restartButton.addEventListener('click', () => {
    resumeAudio();
    startTest(state.mode);
  });

  elements.switchModeButton.addEventListener('click', () => {
    const nextMode = state.mode === 'quick' ? 'full' : 'quick';
    const nextRadio = document.querySelector(`input[name="mode"][value="${nextMode}"]`);
    if (nextRadio) {
      nextRadio.checked = true;
    }
    state.mode = nextMode;
    updateModeBadge();
    showScreen('home');
  });

  document.addEventListener('click', createRipple);
}

function hydratePreferences() {
  const savedTheme = localStorage.getItem('dvl-theme');
  const savedSound = localStorage.getItem('dvl-sound');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    state.theme = savedTheme;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    state.theme = 'light';
  }
  state.sound = savedSound === 'on';
  applyTheme();
}

function persistPreferences() {
  localStorage.setItem('dvl-theme', state.theme);
  localStorage.setItem('dvl-sound', state.sound ? 'on' : 'off');
}

function applyTheme() {
  document.body.dataset.theme = state.theme;
}

function renderToolbarState() {
  elements.themeToggle.setAttribute('aria-pressed', String(state.theme === 'light'));
  elements.soundToggle.setAttribute('aria-pressed', String(state.sound));
  elements.themeToggle.querySelector('.icon-button-label').textContent = `Theme · ${state.theme === 'dark' ? 'Dark' : 'Light'}`;
  elements.soundToggle.querySelector('.icon-button-label').textContent = `Sound · ${state.sound ? 'On' : 'Off'}`;
}

function updateModeBadge() {
  const mode = getSelectedMode();
  state.mode = mode;
  const meta = MODE_META[mode];
  elements.modeBadge.textContent = `${meta.label} · ${meta.ids.length}`;
}

function getSelectedMode() {
  return document.querySelector('input[name="mode"]:checked')?.value || 'quick';
}

function showScreen(screenKey) {
  Object.values(screens).forEach((screen) => screen.classList.remove('is-active'));
  screens[screenKey].classList.add('is-active');
}

async function startTest(forceMode = null) {
  state.mode = forceMode || getSelectedMode();
  state.session = MODE_META[state.mode].ids.map((id) => PLATE_MAP.get(id));
  state.records = [];
  state.index = 0;
  clearTimer();
  updateModeBadge();
  elements.preloadCopy.textContent = `Подготавливаем ${state.session.length} локальных изображений для режима «${MODE_META[state.mode].title}».`;
  showScreen('preload');

  const preloadStartedAt = performance.now();
  await preloadImages(state.session);
  const elapsed = performance.now() - preloadStartedAt;
  if (elapsed < MIN_PRELOAD_MS) {
    await wait(MIN_PRELOAD_MS - elapsed);
  }

  playTone('start');
  showScreen('test');
  renderCurrentPlate();
}

function preloadImages(session) {
  return Promise.all(session.map((plate) => new Promise((resolve) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = plate.file;
  })));
}

function renderCurrentPlate() {
  const plate = state.session[state.index];
  if (!plate) {
    finishTest();
    return;
  }

  state.isTransitioning = false;
  elements.platePanel.classList.add('is-switching');
  elements.plateLabel.textContent = plate.label;
  elements.platePrompt.textContent = 'Введите число, которое различаете на таблице.';
  elements.plateTag.textContent = `#${String(plate.id).padStart(2, '0')}`;
  elements.progressText.textContent = `${state.index + 1} / ${state.session.length}`;
  elements.progressBar.style.width = `${((state.index + 1) / state.session.length) * 100}%`;
  elements.answerInput.value = '';
  elements.answerInput.placeholder = 'Например, 12';
  elements.plateImage.alt = `${plate.label}`;

  requestAnimationFrame(() => {
    elements.plateImage.src = plate.file;
    setTimeout(() => {
      elements.platePanel.classList.remove('is-switching');
      elements.answerInput.focus();
      startTimer();
    }, 120);
  });
}

function startTimer() {
  clearTimer();
  state.timerEndsAt = Date.now() + TIMER_SECONDS * 1000;
  updateTimer();
  state.timerId = window.setInterval(updateTimer, 100);
}

function updateTimer() {
  const remainingMs = Math.max(0, state.timerEndsAt - Date.now());
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  const ratio = remainingMs / (TIMER_SECONDS * 1000);
  elements.timerValue.textContent = String(Math.max(0, remainingSeconds));
  elements.timerRing.style.setProperty('--progress', String(Math.max(0, ratio)));
  if (remainingMs <= 0) {
    clearTimer();
    submitCurrentAnswer('timeout');
  }
}

function clearTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function submitCurrentAnswer(trigger) {
  if (state.isTransitioning) {
    return;
  }

  const plate = state.session[state.index];
  if (!plate) {
    return;
  }

  let normalized;
  if (trigger === 'manual') {
    const value = normalizeAnswer(elements.answerInput.value);
    if (!value) {
      elements.answerInput.focus();
      return;
    }
    normalized = value;
  } else if (trigger === 'none') {
    normalized = 'none';
  } else if (trigger === 'skip') {
    normalized = 'skip';
  } else {
    normalized = normalizeAnswer(elements.answerInput.value) || 'timeout';
  }

  clearTimer();
  state.isTransitioning = true;
  state.records.push({
    plateId: plate.id,
    answer: normalized,
    at: Date.now()
  });

  playTone(trigger === 'timeout' ? 'timeout' : 'tap');

  elements.platePanel.classList.add('is-switching');
  window.setTimeout(() => {
    state.index += 1;
    renderCurrentPlate();
  }, 260);
}

function normalizeAnswer(value) {
  const digits = String(value || '').replace(/[^0-9]/g, '');
  if (!digits) {
    return '';
  }
  return String(Number(digits));
}

function finishTest() {
  clearTimer();
  const summary = scoreSession();
  renderResults(summary);
  playTone('success');
  showScreen('result');
}

function scoreSession() {
  const totals = { normal: 0, protan: 0, deutan: 0 };
  const diagnostic = { protan: 0, deutan: 0, normal: 0 };
  let answeredCount = 0;
  let normalMatches = 0;
  let redGreenSignals = 0;

  for (const record of state.records) {
    const plate = PLATE_MAP.get(record.plateId);
    if (!plate || record.answer === 'skip' || record.answer === 'timeout') {
      continue;
    }

    answeredCount += 1;

    const matched = {
      normal: plate.answers.normal.includes(record.answer),
      protan: plate.answers.protan.includes(record.answer),
      deutan: plate.answers.deutan.includes(record.answer)
    };

    if (matched.normal) {
      totals.normal += 1;
      normalMatches += 1;
    }
    if (matched.protan) {
      totals.protan += 1;
    }
    if (matched.deutan) {
      totals.deutan += 1;
    }

    if ((matched.protan || matched.deutan) && !matched.normal) {
      redGreenSignals += 1;
    }

    if (plate.diagnostic) {
      if (matched.normal) {
        diagnostic.normal += 1;
      } else if (matched.protan && !matched.deutan) {
        diagnostic.protan += 1;
      } else if (matched.deutan && !matched.protan) {
        diagnostic.deutan += 1;
      }
    }
  }

  const totalQuestions = state.session.length;
  const ratios = {
    normal: totals.normal / totalQuestions,
    protan: totals.protan / totalQuestions,
    deutan: totals.deutan / totalQuestions
  };

  const ranked = Object.entries(ratios)
    .map(([key, value]) => ({ key, value }))
    .sort((a, b) => b.value - a.value);

  const top = ranked[0];
  const second = ranked[1];
  const answeredRatio = answeredCount / totalQuestions;

  let classification = 'inconclusive';
  if (answeredRatio < 0.6) {
    classification = 'inconclusive';
  } else if (top.key === 'normal' && top.value >= 0.62 && redGreenSignals <= 1) {
    classification = 'normal';
  } else if (diagnostic.protan >= 2 && diagnostic.protan > diagnostic.deutan) {
    classification = 'protan';
  } else if (diagnostic.deutan >= 2 && diagnostic.deutan > diagnostic.protan) {
    classification = 'deutan';
  } else if (Math.max(ratios.protan, ratios.deutan) >= 0.28 || redGreenSignals >= 2) {
    classification = 'redgreen';
  }

  const gap = top.value - second.value;
  let confidence = 'Низкая уверенность';
  if (classification === 'normal' && top.value >= 0.8) {
    confidence = 'Высокая уверенность';
  } else if (gap >= 0.16 && answeredRatio >= 0.8) {
    confidence = 'Высокая уверенность';
  } else if (gap >= 0.08 && answeredRatio >= 0.7) {
    confidence = 'Средняя уверенность';
  }

  return {
    totalQuestions,
    answeredCount,
    normalMatches,
    ratios,
    classification,
    confidence,
    bestFitPercent: Math.round(top.value * 100),
    redGreenSignals
  };
}

function renderResults(summary) {
  const textByClass = {
    normal: {
      pill: 'Нормальное цветовосприятие',
      profile: 'Normal-like pattern',
      summary: 'Ответы ближе всего к паттерну нормального восприятия на bundled Ishihara plates.',
      explanation: 'Ваши ответы в основном совпали с нормальными reading-patterns. При этом Ishihara не оценивает blue-yellow дефициты, поэтому тританопия этим набором не подтверждается и не исключается.'
    },
    protan: {
      pill: 'Паттерн ближе к протанопии',
      profile: 'Protan pattern',
      summary: 'В диагностических plates ответы чаще совпадали с протан-профилем.',
      explanation: 'Есть устойчивый red-leaning signal в пользу протан-паттерна. Для клинического подтверждения нужен очный тест у специалиста и дополнительные таблицы, не ограниченные только Ishihara.'
    },
    deutan: {
      pill: 'Паттерн ближе к дейтеранопии',
      profile: 'Deutan pattern',
      summary: 'В диагностических plates ответы чаще совпадали с деутан-профилем.',
      explanation: 'Есть устойчивый green-leaning signal в пользу деутан-паттерна. Для подтверждения лучше пройти профессиональный HRR / Farnsworth тест у офтальмолога.'
    },
    redgreen: {
      pill: 'Есть сигналы red-green deficiency',
      profile: 'Red-green signal',
      summary: 'Скрининг показывает признаки нарушения красно-зелёного различения, но профиль разделился не до конца.',
      explanation: 'Ответы указывают на red-green дефицит, но текущего набора недостаточно для чистого разделения между протан- и деутан-типом с высокой уверенностью.'
    },
    inconclusive: {
      pill: 'Недостаточно данных',
      profile: 'Inconclusive',
      summary: 'Часть вопросов была пропущена или ответы не сложились в устойчивый диагностический профиль.',
      explanation: 'Повторите тест в спокойном освещении и без спешки. Если есть сомнения, этот результат не заменяет консультацию врача.'
    }
  };

  const resultText = textByClass[summary.classification];
  elements.resultPill.textContent = resultText.pill;
  elements.profileValue.textContent = resultText.profile;
  elements.resultSummary.textContent = resultText.summary;
  elements.resultExplanation.textContent = resultText.explanation;
  elements.resultRing.style.setProperty('--ratio', String(Math.max(0.08, summary.bestFitPercent / 100)));
  elements.resultRingValue.textContent = `${summary.bestFitPercent}%`;
  elements.normalMatchValue.textContent = `${summary.normalMatches} / ${summary.totalQuestions}`;
  elements.confidenceText.textContent = `${summary.confidence} · ответов: ${summary.answeredCount} / ${summary.totalQuestions}`;
  elements.modeResultValue.textContent = `${MODE_META[state.mode].title} · ${summary.totalQuestions}`;

  setProfileBar(elements.barNormal, elements.scoreNormal, summary.ratios.normal);
  setProfileBar(elements.barProtan, elements.scoreProtan, summary.ratios.protan);
  setProfileBar(elements.barDeutan, elements.scoreDeutan, summary.ratios.deutan);
}

function setProfileBar(bar, label, value) {
  const percent = Math.round(value * 100);
  bar.style.width = `${percent}%`;
  label.textContent = `${percent}%`;
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function createRipple(event) {
  const button = event.target.closest('.ripple');
  if (!button) {
    return;
  }
  const ripple = document.createElement('span');
  ripple.className = 'ripple-dot';
  const rect = button.getBoundingClientRect();
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  button.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

function resumeAudio() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) {
    return;
  }
  if (!state.audioContext) {
    state.audioContext = new AudioCtx();
  }
  if (state.audioContext.state === 'suspended') {
    state.audioContext.resume().catch(() => {});
  }
}

function playTone(kind) {
  if (!state.sound || !state.audioContext) {
    return;
  }

  const frequencyMap = {
    tap: 420,
    start: 520,
    timeout: 260,
    success: 640
  };

  const oscillator = state.audioContext.createOscillator();
  const gain = state.audioContext.createGain();
  oscillator.type = kind === 'success' ? 'triangle' : 'sine';
  oscillator.frequency.value = frequencyMap[kind] || 420;
  gain.gain.setValueAtTime(0.0001, state.audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.06, state.audioContext.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, state.audioContext.currentTime + 0.18);
  oscillator.connect(gain);
  gain.connect(state.audioContext.destination);
  oscillator.start();
  oscillator.stop(state.audioContext.currentTime + 0.2);
}
