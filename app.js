"use strict";

const LEVELS = [
  {
    id: 1, world: "Fundamentos", title: "El umbral de las raíces", subtitle: "Primeros pasos", functionText: "f(x) = x² − 4",
    derivativeText: "f′(x) = 2x", formula: x => x * x - 4, derivative: x => 2 * x, x0: 3,
    root: 2, tolerance: 0.0001, hint: "La raíz positiva está cerca de 2. La pendiente inicial es 6.",
    difficulty: "INICIACIÓN"
  },
  {
    id: 2, world: "Fundamentos", title: "El cristal cúbico", subtitle: "La cámara de los cristales", functionText: "f(x) = x² − 9",
    derivativeText: "f′(x) = 2x", formula: x => x * x - 9, derivative: x => 2 * x, x0: 5,
    root: 3, tolerance: 0.0001, hint: "La derivada de x² − 9 es 2x. Evalúa en x₀ = 5.",
    difficulty: "APRENDIZ"
  },
  {
    id: 3, world: "Derivadas", title: "La cámara de la órbita", subtitle: "Aproximaciones sucesivas", functionText: "f(x) = x² − 16",
    derivativeText: "f′(x) = 2x", formula: x => x * x - 16, derivative: x => 2 * x, x0: 5,
    root: 4, tolerance: 0.0001, hint: "Desde x₀ = 5, una tangente te acerca a la raíz positiva 4.",
    difficulty: "EXPLORADOR"
  },
  {
    id: 4, world: "Derivadas", title: "El enigma cuadrático", subtitle: "La cámara de los polinomios", functionText: "f(x) = x² − 2x − 3",
    derivativeText: "f′(x) = 2x − 2", formula: x => x * x - 2 * x - 3,
    derivative: x => 2 * x - 2, x0: 2, root: 3, tolerance: 0.0001,
    hint: "Deriva cada término: la derivada de −2x es −2 y la constante desaparece.",
    difficulty: "MAESTRO"
  },
  {
    id: 5, world: "Iteraciones", title: "La puerta de las raíces", subtitle: "La cámara de convergencia", functionText: "f(x) = x² + x − 6",
    derivativeText: "f′(x) = 2x + 1", formula: x => x * x + x - 6,
    derivative: x => 2 * x + 1, x0: 3, root: 2, tolerance: 0.0001,
    hint: "La derivada es 2x + 1. Mantén todos los términos al evaluar.",
    difficulty: "EXPERTO"
  },
  {
    id: 6, world: "Iteraciones", title: "El guardián cúbico", subtitle: "El laboratorio de polinomios", functionText: "f(x) = x³ − 2x − 5",
    derivativeText: "f′(x) = 3x² − 2", formula: x => x * x * x - 2 * x - 5,
    derivative: x => 3 * x * x - 2, x0: 2, root: 2.0945514815, tolerance: 0.00001,
    hint: "Deriva x³ − 2x − 5 término a término: 3x² − 2.",
    difficulty: "EXPLORADOR"
  },
  {
    id: 7, world: "Funciones complejas", title: "El enigma cúbico", subtitle: "La cámara de polinomios", functionText: "f(x) = x³ − x − 2",
    derivativeText: "f′(x) = 3x² − 1", formula: x => x * x * x - x - 2,
    derivative: x => 3 * x * x - 1, x0: 1.5, root: 1.5213797068, tolerance: 0.0001,
    hint: "Al derivar x³ − x − 2 obtienes 3x² − 1. Evalúa con cuidado en x₀ = 1,5.",
    difficulty: "MAESTRO"
  },
  {
    id: 8, world: "Funciones complejas", title: "La función racional", subtitle: "La cámara de las asíntotas", functionText: "f(x) = 1/x − 2",
    derivativeText: "f′(x) = −1/x²", formula: x => 1 / x - 2,
    derivative: x => -1 / (x * x), x0: .75, root: .5, tolerance: 0.0001,
    hint: "La derivada de x⁻¹ es −x⁻². No empieces en x₀ = 0, donde la función no existe.",
    difficulty: "EXPERTO"
  },
  {
    id: 9, world: "Desafío avanzado", title: "La cámara de Newton", subtitle: "Práctica de convergencia", functionText: "f(x) = x² − 2",
    derivativeText: "f′(x) = 2x", formula: x => x * x - 2, derivative: x => 2 * x, x0: 1,
    root: Math.SQRT2, tolerance: 0.0001, hint: "Desde x₀ = 1, las tangentes convergen a la raíz positiva.",
    difficulty: "EXPERTO"
  },
  {
    id: 10, world: "Desafío avanzado", title: "La puerta cúbica", subtitle: "Reto de precisión", functionText: "f(x) = x³ − 2x − 5",
    derivativeText: "f′(x) = 3x² − 2", formula: x => x * x * x - 2 * x - 5,
    derivative: x => 3 * x * x - 2, x0: 2, root: 2.0945514815, tolerance: 0.0001,
    hint: "Con x₀ = 2, f(x₀) = −1 y f′(x₀) = 10.",
    difficulty: "MAESTRO"
  },
  {
    id: 11, world: "Jefe final", title: "El núcleo del laboratorio", subtitle: "Preparación para el desafío", functionText: "f(x) = x⁴ − 10",
    derivativeText: "f′(x) = 4x³", formula: x => x ** 4 - 10,
    derivative: x => 4 * x ** 3, x0: 2, root: 10 ** .25, tolerance: 0.0001,
    hint: "La derivada de x⁴ − 10 es 4x³.",
    difficulty: "ÉLITE"
  },
  {
    id: 12, world: "Jefe final", title: "La raíz perdida", subtitle: "El Maestro de las raíces", functionText: "f(x) = x³ − 2x − 5",
    derivativeText: "f′(x) = 3x² − 2", formula: x => x * x * x - 2 * x - 5,
    derivative: x => 3 * x * x - 2, x0: 2, root: 2.0945514815, tolerance: 0.00001,
    hint: "Deriva x³ − 2x − 5 término a término: 3x² − 2.",
    difficulty: "JEFE FINAL", boss: true
  }
];

const ACHIEVEMENTS = [
  { id: "first-root", name: "¡Primera raíz!", icon: "✦", description: "Completa tu primer nivel." },
  { id: "combo-3", name: "Racha brillante", icon: "⚡", description: "Consigue un combo de 3." },
  { id: "no-hints", name: "Mente despejada", icon: "🧠", description: "Completa un nivel sin ayudas." },
  { id: "all-levels", name: "Explorador legendario", icon: "🏆", description: "Supera todos los niveles." },
  { id: "speed-run", name: "A contrarreloj", icon: "⏱", description: "Completa un desafío contra el tiempo." },
  { id: "boss", name: "Núcleo conquistado", icon: "👑", description: "Derrota al jefe final." }
  ,{ id: "combo-5", name: "Combo x5", icon: "🔥", description: "Consigue cinco aciertos seguidos." }
  ,{ id: "ten-exercises", name: "Mente matemática", icon: "🧠", description: "Completa diez ejercicios." }
  ,{ id: "precision", name: "Precisión", icon: "🎯", description: "Completa un nivel sin errores." }
];
const CHARACTERS = ["👨‍🔬", "👩‍💻", "🧙", "🤖"];
const WORLDS = [
  { name: "Fundamentos", icon: "🌱" },
  { name: "Derivadas", icon: "⚙️" },
  { name: "Iteraciones", icon: "🚀" },
  { name: "Funciones complejas", icon: "🧠" },
  { name: "Desafío avanzado", icon: "🔥" },
  { name: "Jefe final", icon: "👑" }
];
const RANKS = [
  { name: "Novato", icon: "🌱", xp: 0 },
  { name: "Aprendiz", icon: "📘", xp: 200 },
  { name: "Matemático", icon: "🧠", xp: 500 },
  { name: "Experto", icon: "⚡", xp: 900 },
  { name: "Maestro", icon: "🔥", xp: 1400 },
  { name: "Maestro Newton", icon: "👑", xp: 2200 }
];
const STORAGE_KEY = "raiz-perdida-save-v1";
const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");
const toastEl = document.querySelector("#toast");
let toastTimer;
let soundEnabled = false;
let state = null;
let current = null;
let eventTimer = null;
let selectedCharacter = CHARACTERS[0];
let candidateName = "";

function freshSave() {
  return {
    unlocked: 1, completed: [], score: 0, achievements: [], bestCombo: 0,
    xp: 0, name: "", character: CHARACTERS[0], sound: false, leaderboard: [],
    shield: 1, trainingDone: 0
  };
}
function loadSave() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return freshSave();
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.completed) || !Array.isArray(parsed.achievements)) return freshSave();
    const stored = { ...freshSave(), ...parsed };
    stored.unlocked = Math.max(1, Math.min(LEVELS.length, Number(stored.unlocked) || 1));
    stored.leaderboard = Array.isArray(stored.leaderboard) ? stored.leaderboard : [];
    stored.achievements = Array.isArray(stored.achievements) ? stored.achievements : [];
    stored.completed = Array.isArray(stored.completed) ? stored.completed : [];
    return stored;
  } catch (error) {
    console.warn("No se pudo leer el progreso guardado.", error);
    return freshSave();
  }
}
function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("No se pudo guardar el progreso.", error);
    showToast("No se pudo guardar el progreso en este navegador.");
  }
}
function fmt(n, digits = 6) {
  if (!Number.isFinite(n)) return "no definido";
  if (Math.abs(n) < 1e-12) return "0";
  return Number(n.toPrecision(digits)).toString();
}
function prettyNumber(n, digits = 5) { return fmt(n, digits); }
function expectedIterations(level) {
  let x = level.x0;
  const values = [x];
  for (let i = 0; i < 50; i++) {
    const slope = level.derivative(x);
    if (!Number.isFinite(slope) || Math.abs(slope) < 1e-12) break;
    const next = x - level.formula(x) / slope;
    if (!Number.isFinite(next)) break;
    values.push(next);
    if (Math.abs(next - x) <= level.tolerance && Math.abs(level.formula(next)) <= level.tolerance * 10) break;
    x = next;
  }
  return values;
}
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
}
function playTone(type = "good") {
  if (!soundEnabled) return;
  try {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = type === "bad" ? 210 : type === "victory" ? 880 : 660;
    gain.gain.setValueAtTime(.07, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .16);
    oscillator.connect(gain); gain.connect(context.destination);
    oscillator.start(); oscillator.stop(context.currentTime + .17);
    oscillator.onended = () => context.close();
  } catch (error) {
    console.warn("No se pudo reproducir el sonido.", error);
  }
}
function getUnlockedAchievements() { return new Set(state.achievements); }
function getRank(xp = state.xp) {
  return [...RANKS].reverse().find(rank => xp >= rank.xp) || RANKS[0];
}
function rankProgress() {
  const rank = getRank();
  const index = RANKS.indexOf(rank);
  const next = RANKS[index + 1];
  if (!next) return { rank, next: null, progress: 100 };
  return { rank, next, progress: Math.max(0, Math.min(100, (state.xp - rank.xp) / (next.xp - rank.xp) * 100)) };
}
function safeText(value) {
  const span = document.createElement("span");
  span.textContent = String(value ?? "");
  return span.innerHTML;
}

function renderHome() {
  current = null;
  const rank = rankProgress();
  app.innerHTML = `
    <section class="home-view">
      <div class="home-copy">
        <div class="eyebrow">◈ &nbsp; NEWTON-RAPHSON CHALLENGE</div>
        <h1>La raíz<br><span>perdida.</span></h1>
        <p>Encuentra la raíz. Domina el método. Conviértete en Maestro Newton. Explora mundos matemáticos, aprende con gráficas interactivas y supera el desafío final.</p>
        <div class="home-actions">
          <button class="btn btn-primary" data-action="adventure">${state.completed.length ? "🚀 Continuar aventura" : "🚀 Comenzar aventura"} <span>→</span></button>
          <button class="btn btn-quiet" data-action="training">🧠 Entrenamiento</button>
        </div>
        <div class="home-actions home-secondary-actions">
          <button class="btn btn-quiet btn-small" data-action="laboratory">🧪 Laboratorio</button>
          <button class="btn btn-quiet btn-small" data-action="find-root-menu">🎯 Encuentra la raíz</button>
          <button class="btn btn-quiet btn-small" data-action="battle-menu">⚔️ Batalla</button>
          <button class="btn btn-quiet btn-small" data-action="achievements">🏆 Logros</button>
          <button class="btn btn-quiet btn-small" data-action="settings">⚙️ Configuración</button>
          <button class="btn btn-quiet btn-small" data-action="leaderboard">📊 Clasificación</button>
        </div>
        <div class="home-note"><span>✦</span><span>6 mundos · gráficas interactivas · jefe final</span></div>
        <div class="feature-row">
          <div class="feature-item"><span class="feature-icon">∿</span>Visualiza cada tangente</div>
          <div class="feature-item"><span class="feature-icon">⚡</span>Aprende jugando</div>
        </div>
        <div class="rank-mini"><span>${rank.rank.icon} ${rank.rank.name}</span><div class="progress-track"><div class="progress-fill" style="width:${rank.progress}%"></div></div><small>${state.xp} XP</small></div>
      </div>
      <div class="hero-visual" aria-label="Ilustración de una raíz matemática brillante">
        <span class="orbit-label orbit-one">f(x) = 0</span><span class="orbit-label orbit-two">xₙ₊₁</span><span class="orbit-label orbit-three">x₀ → raíz</span>
        <div class="orb">√</div><div class="hero-caption">${safeText(state.name ? `${state.character} ${state.name.toUpperCase()} · ` : "")}LABORATORIO 07 · SISTEMA DE RAÍCES</div>
      </div>
    </section>`;
}

function renderMap() {
  current = null;
  const rank = rankProgress();
  const badges = getUnlockedAchievements();
  const levelsHtml = LEVELS.map(level => {
    const completed = state.completed.includes(level.id);
    const unlocked = level.id <= state.unlocked;
    const cls = [!unlocked ? "locked" : "", completed ? "completed" : "", level.boss ? "boss" : ""].filter(Boolean).join(" ");
    const subtitle = `${level.functionText} · ${unlocked ? (completed ? "Completado" : "Desbloqueado") : "Bloqueado"}`;
    return `<button class="level-card ${cls}" data-action="start-level" data-level="${level.id}" ${unlocked ? "" : "disabled"}>
      <span class="level-number">${completed ? "⭐" : level.boss ? "♛" : String(level.id).padStart(2, "0")}</span>
      <span class="level-info"><strong>${level.title}</strong><small>${safeText(level.world)} · ${subtitle}</small></span>
      <span class="level-trailing">${completed ? "⭐ Completado" : unlocked ? "🔓" : "🔒"}</span>
    </button>`;
  }).join("");
  const achievementHtml = ACHIEVEMENTS.map(badge => `<div class="achievement-row ${badges.has(badge.id) ? "" : "locked"}">
      <span class="achievement-badge">${badge.icon}</span><span><strong>${badge.name}</strong><br><span class="muted">${badge.description}</span></span>
    </div>`).join("");
  const completedWorlds = WORLDS.filter(world => LEVELS.filter(level => level.world === world.name).every(level => state.completed.includes(level.id))).length;
  app.innerHTML = `
    <section class="map-heading"><div><div class="eyebrow">◈ &nbsp; Expedición en curso</div><h1>Mapa de aventura</h1><p>Seis mundos. Una raíz perdida. Tu leyenda matemática comienza aquí.</p></div>
      <div class="map-stats"><span class="stat-chip"><strong>${completedWorlds}</strong> / 6 mundos</span><span class="stat-chip"><strong>${state.completed.length}</strong> / 12 niveles</span><span class="stat-chip"><strong>${state.score}</strong> pts</span><span class="stat-chip">${rank.rank.icon} <strong>${rank.rank.name}</strong> · ${state.xp} XP</span></div>
    </section>
    <section class="map-layout">
      <div class="map-panel card"><div class="map-route" aria-hidden="true"></div><div class="world-route">${WORLDS.map((world, index) => `<div class="world-node ${LEVELS.find(level => level.world === world.name).id <= state.unlocked ? "open" : "locked"}">${world.icon}<small>${safeText(world.name)}</small></div>`).join("")}</div><div class="level-list">${levelsHtml}</div></div>
      <aside class="map-sidebar card"><h3>Insignias de explorador</h3>${state.achievements.length ? `<div class="achievement-list">${achievementHtml}</div>` : `<div class="achievement-empty">Tus medallas aparecerán aquí.<br>¡Completa objetivos para ganarlas!</div>`}<div class="badge-progress"></div><div class="muted" style="font-size:10px">Puntuación total</div><div style="font:600 24px 'Space Grotesk';color:var(--mint);margin-top:5px">${state.score} <small style="font:10px 'DM Mono';color:var(--muted)">PTS</small></div><button class="btn btn-quiet btn-small map-reset" data-action="training">Modo entrenamiento</button><button class="btn btn-quiet btn-small map-reset" data-action="leaderboard">Clasificación</button><button class="btn btn-quiet btn-small map-reset" data-action="home">Volver al inicio</button></aside>
    </section>`;
}

function beginLevel(id, timed = false, mode = "adventure") {
  const level = LEVELS.find(item => item.id === id);
  if (!level || (id > state.unlocked && mode !== "training")) return;
  const values = expectedIterations(level);
  current = {
    level, values, phase: "function", iteration: 0,
    lives: 3, score: 0, combo: 0, maxCombo: 0, hints: 1, retries: 1, shield: state.shield, shieldActive: false,
    usedHint: false, eliminatedOptions: new Set(), timed, startTime: Date.now(), timeLeft: timed ? 150 : null,
    timer: null, locked: false, earned: [], errors: 0, mode, experience: 0,
    enemyEnergy: values.length + 2, enemyMaxEnergy: values.length + 2, doublePoints: false, fury: false, eventLabel: "", typedMode: mode === "find-root"
  };
  if (mode === "training") {
    current.lives = 3;
    current.timed = false;
  }
  if (timed) current.timer = setInterval(tickTimer, 1000);
  current.lastQuestionAt = Date.now();
  if (mode === "battle" && level.id >= 3 && Math.random() < .4) triggerRandomEvent();
  renderGame();
}
function beginAdventure() {
  openModal(
    "La expedición comienza",
    `<p>El laboratorio ha perdido las raíces de sus funciones. Newton-Raphson permite aproximarlas trazando tangentes sucesivas.</p>
    <div class="formula-box"><div class="formula-label">La regla de la aventura</div><div class="formula">xₙ₊₁ = xₙ − f(xₙ) / f′(xₙ)</div><div class="formula-detail">xₙ: aproximación actual · f(xₙ): altura de la función · f′(xₙ): pendiente de la tangente · xₙ₊₁: nueva aproximación.</div></div>
    <div class="tangent-demo" aria-label="Animación conceptual de una tangente que se aproxima a una raíz"><span>f(x)</span><i></i><b>raíz</b></div>`,
    [{ label: "Elegir explorador →", action: "character", primary: true }]
  );
}
function renderCharacterSelection() {
  openModal(
    "Elige tu explorador",
    `<p>El personaje te acompañará por las cámaras del laboratorio.</p><div class="character-picker">${CHARACTERS.map((character, index) => `<button type="button" class="character-option ${selectedCharacter === character ? "selected" : ""}" data-action="select-character" data-character="${character}" aria-pressed="${selectedCharacter === character}"><span>${character}</span><small>${["Científico", "Programadora", "Matemático", "Robot"][index]}</small></button>`).join("")}</div><label class="field-label">Nombre del explorador<input id="player-name" maxlength="24" value="${safeText(candidateName)}" placeholder="Tu nombre" autocomplete="given-name"></label>`,
    [{ label: "Volver", action: "close" }, { label: "¡A la aventura!", action: "save-character", primary: true }]
  );
}
function renderModeChooser(mode) {
  current = null;
  const isTraining = mode === "training";
  app.innerHTML = `<section class="map-heading"><div><div class="eyebrow">◈ &nbsp; ${isTraining ? "MODO TRANQUILO" : "CAMPO DE ENTRENAMIENTO"}</div><h1>${isTraining ? "Entrenamiento" : "Elige tu desafío"}</h1><p>${isTraining ? "Practica sin vidas ni temporizador, a tu propio ritmo." : "Elige cómo quieres poner a prueba tus habilidades."}</p></div><button class="btn btn-quiet btn-small" data-action="home">← Inicio</button></section>
    <section class="card mode-levels"><h3>Elige una cámara</h3>${LEVELS.map(level => `<button class="level-card ${level.id > state.unlocked && mode !== "training" ? "locked" : ""}" data-action="mode-level" data-level="${level.id}" data-mode="${isTraining ? "training" : mode}" ${level.id > state.unlocked && mode !== "training" ? "disabled" : ""}><span class="level-number">${level.id > state.unlocked && mode !== "training" ? "🔒" : level.id}</span><span class="level-info"><strong>${level.title}</strong><small>${level.functionText}</small></span><span class="level-trailing">${safeText(level.difficulty)}</span></button>`).join("")}</section>`;
}
function renderAchievements() {
  current = null;
  app.innerHTML = `<section class="map-heading"><div><div class="eyebrow">◈ &nbsp; COLECCIÓN</div><h1>Logros de explorador</h1><p>${state.achievements.length} de ${ACHIEVEMENTS.length} medallas desbloqueadas.</p></div><button class="btn btn-quiet btn-small" data-action="home">← Inicio</button></section>
    <section class="achievement-grid">${ACHIEVEMENTS.map(item => `<article class="card achievement-card ${state.achievements.includes(item.id) ? "earned" : "locked"}"><span>${item.icon}</span><h3>${item.name}</h3><p>${item.description}</p><small>${state.achievements.includes(item.id) ? "✓ DESBLOQUEADO" : "🔒 POR DESCUBRIR"}</small></article>`).join("")}</section>
    <section class="rank-card card"><div><div class="eyebrow">RANGO ACTUAL</div><h2>${rankProgress().rank.icon} ${rankProgress().rank.name}</h2><p>${state.xp} XP acumulados</p></div><div class="rank-bar"><div class="progress-track"><div class="progress-fill" style="width:${rankProgress().progress}%"></div></div><small>${rankProgress().next ? `${rankProgress().next.xp - state.xp} XP para ${rankProgress().next.name}` : "Rango máximo"}</small></div></section>`;
}
function renderLeaderboard() {
  current = null;
  const entries = [...state.leaderboard].sort((a, b) => b.score - a.score).slice(0, 10);
  app.innerHTML = `<section class="map-heading"><div><div class="eyebrow">◈ &nbsp; HALL OF FAME</div><h1>Clasificación local</h1><p>Los mejores resultados guardados en este navegador.</p></div><button class="btn btn-quiet btn-small" data-action="home">← Inicio</button></section>
    <section class="card leaderboard-card"><div class="leader-row leader-head"><span>#</span><span>Explorador</span><span>Resultado</span><span>Rango</span></div>${entries.length ? entries.map((entry, index) => `<div class="leader-row"><span>${index === 0 ? "👑" : index + 1}</span><span>${safeText(entry.character || "🧭")} ${safeText(entry.name || "Explorador")}</span><strong>${entry.score} pts</strong><span>${safeText(entry.rank || "Novato")}</span></div>`).join("") : `<div class="achievement-empty">Aún no hay resultados.<br>¡Completa una aventura para inaugurar la tabla!</div>`}</section>`;
}
function renderSettings() {
  current = null;
  app.innerHTML = `<section class="map-heading"><div><div class="eyebrow">◈ &nbsp; PREFERENCIAS</div><h1>Configuración</h1><p>Personaliza tu expedición.</p></div><button class="btn btn-quiet btn-small" data-action="home">← Inicio</button></section>
    <section class="card settings-card"><label class="setting-row"><span><strong>Sonidos</strong><small>Efectos generados localmente al responder</small></span><input id="sound-setting" type="checkbox" ${soundEnabled ? "checked" : ""}></label><label class="setting-row"><span><strong>Nombre del explorador</strong><small>Se muestra en tu perfil</small></span><input id="setting-name" maxlength="24" value="${safeText(state.name)}" placeholder="Tu nombre"></label><button class="btn btn-primary" data-action="save-settings">Guardar preferencias</button><button class="btn btn-quiet" data-action="reset-save">Reiniciar todo el progreso</button></section>`;
}
function renderLaboratory() {
  current = null;
  app.innerHTML = `<section class="map-heading"><div><div class="eyebrow">◈ &nbsp; ESPACIO DE EXPERIMENTACIÓN</div><h1>🧪 Laboratorio de Newton</h1><p>Prueba un polinomio propio; la función y su derivada se calculan sin evaluar código.</p></div><button class="btn btn-quiet btn-small" data-action="home">← Inicio</button></section>
    <section class="laboratory-layout"><form class="card lab-form" data-action="calculate-lab"><label class="field-label">Función f(x)<input id="lab-function" name="expression" value="x^2 - 9" maxlength="100" required><small>Polinomios con x y potencias enteras: x^3 - 2x - 5</small></label><label class="field-label">Aproximación inicial x₀<input id="lab-x0" name="x0" type="number" step="any" value="5" required></label><button class="btn btn-primary" type="submit">CALCULAR ITERACIONES →</button><p class="muted">Límite de 30 iteraciones. No se admiten divisiones ni funciones no polinómicas.</p></form><aside class="card lab-help"><h3>Reglas del laboratorio</h3><p>Escribe términos como <code>x^2</code>, <code>-3x</code> y <code>+ 7</code>. Acepta exponentes hasta 8 y coeficientes decimales.</p><div class="formula-box"><div class="formula">xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)</div></div></aside></section>`;
}
function parsePolynomial(source) {
  let expression = source.toLowerCase().replace(/f\s*\(\s*x\s*\)\s*=/g, "").replace(/[−–]/g, "-").replace(/²/g, "^2").replace(/³/g, "^3").replace(/⁴/g, "^4").replace(/\s+/g, "");
  if (!expression || expression.length > 100) throw new Error("Escribe un polinomio de hasta 100 caracteres.");
  if (!/^[0-9x.^+*-]+$/.test(expression)) throw new Error("Usa solo números, x, potencias, + y −.");
  if (/[*]{2}|\^\D|\^\d{2,}/.test(expression)) throw new Error("Solo se admiten potencias enteras de x entre 0 y 8.");
  if (expression[0] !== "-" && expression[0] !== "+") expression = `+${expression}`;
  const terms = expression.match(/[+-][^+-]+/g);
  if (!terms || terms.join("") !== expression) throw new Error("No se pudo interpretar el polinomio.");
  const coefficients = Array(9).fill(0);
  for (const term of terms) {
    if (term.endsWith("*") && !term.includes("x")) throw new Error(`Término no válido: ${term}`);
    const match = term.match(/^([+-])(?:(\d*\.?\d+)?\*?)?(x(?:\^(\d+))?)?$/);
    if (!match || (!match[2] && !match[3])) throw new Error(`Término no válido: ${term}`);
    const sign = match[1] === "-" ? -1 : 1;
    const coefficient = match[2] ? Number(match[2]) : match[3] ? 1 : NaN;
    const power = match[3] ? Number(match[4] || 1) : 0;
    if (!Number.isFinite(coefficient) || power > 8) throw new Error("Usa potencias enteras entre 0 y 8.");
    coefficients[power] += sign * coefficient;
  }
  if (coefficients.every(value => value === 0)) throw new Error("La función no puede ser cero en todos sus términos.");
  return coefficients;
}
function polynomialValue(coefficients, x) {
  return coefficients.reduceRight((value, coefficient) => value * x + coefficient, 0);
}
function polynomialText(coefficients) {
  const terms = [];
  for (let power = coefficients.length - 1; power >= 0; power--) {
    const coefficient = coefficients[power];
    if (!coefficient) continue;
    const sign = coefficient < 0 ? "−" : terms.length ? "+" : "";
    const abs = Math.abs(coefficient);
    const factor = power > 0 && abs === 1 ? "" : fmt(abs);
    terms.push(`${sign}${factor}${power ? "x" : ""}${power > 1 ? `^${power}` : ""}`);
  }
  return terms.join(" ") || "0";
}
function createPolynomialLevel(expression, x0, id = 100) {
  const coefficients = parsePolynomial(expression);
  const derivativeCoefficients = coefficients.slice(1).map((coefficient, index) => coefficient * (index + 1));
  const formula = x => polynomialValue(coefficients, x);
  const derivative = x => polynomialValue(derivativeCoefficients, x);
  const level = { id, world: "Laboratorio", title: "Experimento libre", difficulty: "LABORATORIO", functionText: `f(x) = ${polynomialText(coefficients)}`, derivativeText: `f′(x) = ${polynomialText(derivativeCoefficients)}`, formula, derivative, x0, tolerance: 1e-8, boss: false };
  const values = [x0];
  let x = x0;
  for (let step = 0; step < 30; step++) {
    const slope = derivative(x);
    if (!Number.isFinite(slope) || Math.abs(slope) < 1e-12) throw new Error(`La derivada es cero o indefinida en x = ${fmt(x)}; el método no puede continuar.`);
    const next = x - formula(x) / slope;
    if (!Number.isFinite(next) || Math.abs(next) > 1e8) throw new Error("Las iteraciones divergen para este punto inicial.");
    values.push(next);
    if (Math.abs(next - x) < 1e-8 && Math.abs(formula(next)) < 1e-7) break;
    x = next;
  }
  if (Math.abs(formula(values[values.length - 1])) > 1e-5) throw new Error("No hubo convergencia en 30 pasos. Prueba otro x₀.");
  level.root = values[values.length - 1];
  return { level, values };
}
function renderLabResults(level, values, expression) {
  current = { level, values, iteration: values.length - 1, mode: "lab", phase: "root", lives: 3, score: 0, combo: 0, maxCombo: 0, startTime: Date.now(), earned: [], locked: false, timed: false, typedMode: false, eliminatedOptions: new Set(), shield: 0 };
  app.innerHTML = `<section class="map-heading"><div><div class="eyebrow">◈ &nbsp; ITERACIONES CALCULADAS</div><h1>Resultado del laboratorio</h1><p>${safeText(level.functionText)} · ${safeText(level.derivativeText)}</p></div><button class="btn btn-quiet btn-small" data-action="laboratory">← Nuevo experimento</button></section>
    <section class="lab-results-grid"><div class="card iteration-table"><h3>Procedimiento de Newton-Raphson</h3><div class="leader-row leader-head"><span>n</span><span>xₙ</span><span>f(xₙ)</span><span>f′(xₙ)</span></div>${values.map((x, index) => `<div class="leader-row"><span>x${index}</span><span>${fmt(x, 9)}</span><span>${fmt(level.formula(x), 6)}</span><span>${fmt(level.derivative(x), 6)}</span></div>`).join("")}<div class="lab-root">Raíz aproximada: <strong>${fmt(values[values.length - 1], 10)}</strong></div></div><section class="graph-card card"><div class="graph-head"><div><h3>Gráfica interactiva</h3><p>${safeText(expression)}</p></div></div><div class="graph-canvas-wrap"><canvas id="graph" aria-label="Gráfica del polinomio del laboratorio"></canvas><div id="graph-tooltip" class="graph-tooltip">Aproximaciones x₀ … xₙ</div></div><p class="graph-caption">Curva, raíz estimada y aproximaciones sucesivas.</p></section></section>`;
  drawGraph();
}
function triggerRandomEvent() {
  const events = ["double", "hint", "fury"];
  const event = events[Math.floor(Math.random() * events.length)];
  if (event === "double") {
    current.doublePoints = true; current.eventLabel = "DOBLE PUNTUACIÓN durante 20 segundos";
    eventTimer = setTimeout(() => { if (current && !["reward", "over"].includes(current.phase)) { current.doublePoints = false; current.eventLabel = ""; renderGame(); } }, 20000);
  } else if (event === "hint") {
    current.hints += 1; current.eventLabel = "¡PISTA GRATIS! Tienes una pista extra.";
    setTimeout(() => { if (current && !["reward", "over"].includes(current.phase)) { current.eventLabel = ""; renderGame(); } }, 6000);
  } else {
    current.fury = true; current.eventLabel = "MODO FURIA: tus aciertos mantienen el combo encendido.";
    eventTimer = setTimeout(() => { if (current && !["reward", "over"].includes(current.phase)) { current.fury = false; current.eventLabel = ""; renderGame(); } }, 10000);
  }
}
function tickTimer() {
  if (!current || !current.timed || !Number.isFinite(current.timeLeft)) return;
  current.timeLeft -= 1;
  if (current.timeLeft <= 0) {
    clearInterval(current.timer);
    current.timer = null;
    showGameOver(true);
  } else {
    const timer = document.querySelector("#timer");
    if (timer) timer.textContent = `${String(Math.floor(current.timeLeft / 60)).padStart(2, "0")}:${String(current.timeLeft % 60).padStart(2, "0")}`;
  }
}
function phaseProgress() {
  const total = 4 + Math.max(1, current.values.length - 1);
  const done = current.phase === "function" ? 0
    : current.phase === "derivative" ? 1
      : current.phase === "fvalue" ? 2
        : current.phase === "dvalue" ? 3
          : current.phase === "iteration" ? 4 + current.iteration
          : total;
  return Math.min(100, Math.round(done / total * 100));
}
function renderGame() {
  if (!current) return;
  const level = current.level;
  const heartText = "♥".repeat(current.lives) + "♡".repeat(3 - current.lives);
  const timeHtml = current.timed ? `<span class="hud-pill">⏱ <b id="timer">${String(Math.floor(current.timeLeft / 60)).padStart(2, "0")}:${String(current.timeLeft % 60).padStart(2, "0")}</b></span>` : "";
  const modeName = { adventure: "AVENTURA", training: "ENTRENAMIENTO", "find-root": "ENCUENTRA LA RAÍZ", battle: "BATALLA" }[current.mode] || "LABORATORIO";
  const livesHud = current.mode === "training" ? `<span class="hud-pill">🧠 <b>Sin vidas</b></span>` : `<span class="hud-pill">♥ <b class="heart">${heartText}</b></span>`;
  const battleHud = current.mode === "battle" ? `<span class="hud-pill">👹 <b>${current.enemyEnergy} HP</b></span>` : "";
  let quiz = "";
  let phaseIndex;
  let phaseTitle;
  let intro;
  let formula = "";
  let detail = "";
  let prompt = "";
  let options = [];
  if (current.phase === "function") {
    phaseTitle = "La función del nivel"; phaseIndex = "PASO 1 · FUNCIÓN";
    intro = `Todo empieza con una función cuya raíz buscamos: el valor de x donde la curva cruza el eje horizontal.`;
    formula = level.functionText; detail = `Aproximación inicial: x₀ = ${fmt(level.x0)} · Precisión objetivo: ${level.tolerance}`;
    quiz = `<div class="lesson-actions"><button class="btn btn-primary" data-action="next-phase">Analizar la función <span>→</span></button></div>`;
  } else if (current.phase === "derivative") {
    phaseTitle = "Encuentra la pendiente"; phaseIndex = "PASO 2 · DERIVADA";
    intro = "La tangente necesita la pendiente de la curva. Elige la derivada correcta para continuar.";
    formula = "Regla de la potencia"; detail = "d/dx (xⁿ) = n · xⁿ⁻¹";
    prompt = `¿Cuál es la derivada de ${level.functionText}?`;
    options = derivativeOptions(level);
  } else if (current.phase === "fvalue") {
    const x0 = level.x0;
    phaseTitle = "Evalúa la función"; phaseIndex = "PASO 3 · f(x₀)";
    intro = "Sustituye x₀ en la función original. Esta altura indica cuánto falta para llegar al eje x.";
    formula = `${level.functionText}`;
    detail = `x₀ = ${fmt(x0)}`;
    prompt = `¿Cuánto vale f(${fmt(x0)})?`;
    options = numericOptions(level.formula(x0), [level.formula(x0) + level.x0, level.formula(x0) - 2 * level.x0], level.id * 29);
  } else if (current.phase === "dvalue") {
    const x0 = level.x0;
    phaseTitle = "Evalúa la pendiente"; phaseIndex = "PASO 4 · f′(x₀)";
    intro = "Ahora evalúa la derivada en el mismo punto inicial para conocer la pendiente de la tangente.";
    formula = `${level.derivativeText}`;
    detail = `x₀ = ${fmt(x0)}`;
    prompt = `¿Cuánto vale f′(${fmt(x0)})?`;
    options = numericOptions(level.derivative(x0), [level.derivative(x0) + 2, level.derivative(x0) - 2], level.id * 41);
  } else if (current.phase === "iteration") {
    const i = current.iteration;
    const x = current.values[i];
    const next = current.values[i + 1];
    phaseTitle = `Aproximación x${i + 1}`; phaseIndex = `PASO 5 · ITERACIÓN ${i + 1}`;
    intro = "La recta tangente corta el eje x en la siguiente aproximación. Calcula dónde llega.";
    formula = `x${i + 1} = x${i} − f(x${i}) / f′(x${i})`;
    detail = `x${i} = ${fmt(x)} &nbsp;·&nbsp; f(x${i}) = ${fmt(level.formula(x))} &nbsp;·&nbsp; f′(x${i}) = ${fmt(level.derivative(x))}<br>x${i + 1} = ${fmt(x)} − (${fmt(level.formula(x))}) / (${fmt(level.derivative(x))})`;
    prompt = `¿Cuál es el valor de x${i + 1}?`;
    if (!current.typedMode) options = iterationOptions(current, next);
  } else {
    phaseTitle = "¡La raíz está encontrada!"; phaseIndex = "OBJETIVO ALCANZADO";
    const rootApprox = current.values[current.values.length - 1];
    intro = current.enemyDefeated
      ? "💥 ¡ENEMIGO DERROTADO! Has recuperado una raíz perdida."
      : `La secuencia converge: f(x) ≈ 0 con la precisión requerida. ¡La cámara se ha estabilizado!`;
    formula = `raíz ≈ ${fmt(rootApprox, 9)}`;
    detail = `f(raíz) ≈ ${fmt(level.formula(rootApprox), 5)} &nbsp;·&nbsp; ${current.values.length - 1} iteraciones`;
    quiz = `<div class="lesson-actions"><button class="btn btn-primary" data-action="${current.mode === "training" ? "finish-training" : "claim-reward"}">${current.mode === "training" ? "Terminar entrenamiento" : "Reclamar recompensa"} <span>✦</span></button></div>`;
  }
  if (current.phase === "iteration" && current.typedMode) {
    quiz = `<div class="quiz-prompt">${prompt}</div><form class="typed-answer" data-action="typed-submit"><label for="typed-value">Tu aproximación numérica</label><div><input id="typed-value" name="value" type="number" step="any" inputmode="decimal" placeholder="Ej. 2.5" required><button class="btn btn-primary btn-small" type="submit">Comprobar</button></div></form><div id="feedback" class="feedback" aria-live="polite"></div><div class="lesson-actions"><button class="help-btn" data-action="math-help">∑ Ayuda matemática</button><button class="help-btn" data-action="shield" ${current.shield <= 0 ? "disabled" : ""}>🛡 Escudo (${current.shield})</button></div>`;
  } else if (options.length) {
    quiz = `<div class="quiz-prompt">${prompt}</div><div class="answers">${options.map((option, index) => {
      const eliminated = current.eliminatedOptions.has(index);
      return `<button class="answer-btn ${eliminated ? "eliminated" : ""}" data-action="answer" data-answer="${index}" ${eliminated ? "disabled" : ""}>${option.label}</button>`;
    }).join("")}</div><div id="feedback" class="feedback" aria-live="polite"></div>
      <div class="lesson-actions">
        <button class="help-btn" data-action="hint" ${current.hints <= 0 || current.locked ? "disabled" : ""}>✦ Pista <span>(${current.hints})</span></button>
        <button class="help-btn" data-action="retry" ${current.retries <= 0 || current.locked ? "disabled" : ""}>↻ Segundo intento <span>(${current.retries})</span></button>
        <button class="help-btn" data-action="shield" ${current.shield <= 0 || current.locked ? "disabled" : ""}>🛡 Escudo (${current.shield})</button>
        <button class="help-btn" data-action="math-help">∑ Ayuda matemática</button>
      </div>`;
  }
  const doneSteps = Math.max(1, current.values.length - 1);
  const stepText = current.phase === "iteration" ? `${current.iteration + 1} / ${doneSteps}` : `${phaseProgress()}%`;
  app.innerHTML = `
    <div class="game-top">
      <button class="back-link" data-action="map">← Mapa</button>
      <div class="game-level-name"><strong>${current.mode === "battle" ? "👹 Guardián de las derivadas" : level.title}</strong><small>${safeText(state.character)} ${safeText(state.name)} · ${modeName} · ${level.difficulty} ${level.boss ? "· ⚑ JEFE FINAL" : ""}</small></div>
      <div class="hud">${livesHud}<span class="hud-pill">✦ <b>${current.score}</b></span><span class="hud-pill">⚡ <b>${current.combo}×</b></span>${battleHud}${timeHtml}</div>
    </div>
    <div class="progress-wrap"><div class="progress-track"><div class="progress-fill" style="width:${phaseProgress()}%"></div></div><span class="progress-caption">${stepText} · PROGRESO</span></div>
    <div class="game-grid">
      <section class="lesson-card card">
        <div class="lesson-meta"><span class="phase-tag">${phaseIndex}</span><span class="step-count">${current.mode === "training" ? "ENTRENAMIENTO SIN LÍMITE" : `VIDAS ${heartText}`}</span></div>
        <h2>${phaseTitle}</h2><p class="lesson-intro">${intro}</p>
        <div class="formula-box"><div class="formula-label">${current.phase === "iteration" ? "Fórmula de Newton-Raphson" : current.phase === "root" ? "Raíz aproximada" : "En tu cuaderno"}</div><div class="formula">${formula}</div>${detail ? `<div class="formula-detail">${detail}</div>` : ""}</div>
        ${quiz}
        ${current.mode === "battle" ? `<div class="enemy-meter"><span>ENERGÍA DEL GUARDIÁN</span><div class="progress-track"><div class="progress-fill" style="width:${current.enemyEnergy / current.enemyMaxEnergy * 100}%"></div></div></div>` : ""}
        ${current.eventLabel ? `<div class="event-banner">⚡ ${safeText(current.eventLabel)}</div>` : ""}
        ${current.phase === "function" && current.timed ? `<div class="timed-toggle">⏱ Desafío activo: 2:30</div>` : ""}
      </section>
      <section class="graph-card card">
        <div class="graph-head"><div><h3>Laboratorio de gráficas</h3><p>${level.functionText} · x₀ = ${fmt(level.x0)}</p></div>
          <div class="graph-legend"><span class="legend-item"><i class="legend-curve"></i> f(x)</span><span class="legend-item"><i class="legend-line"></i> tangente</span><span class="legend-item"><i class="legend-dot"></i> iteraciones</span></div>
        </div>
        <div class="graph-canvas-wrap"><canvas id="graph" aria-label="Gráfica interactiva de la función y las aproximaciones de Newton-Raphson"></canvas><div id="graph-tooltip" class="graph-tooltip">x₀ = ${fmt(level.x0)}</div></div>
        <p class="graph-caption">Cada tangente proyecta la siguiente aproximación sobre el eje x. Pasa el cursor para explorar la curva.</p>
      </section>
    </div>`;
  current.options = options;
  drawGraph();
}

function derivativeOptions(level) {
  const incorrect = [
    level.derivativeText.replace("2x", "x").replace("3x²", "x²").replace("2x + 1", "2x - 1"),
    level.derivativeText.replace("2x", "2").replace("3x²", "3x").replace("2x + 1", "2x + 2")
  ];
  const unique = [...new Set([level.derivativeText, ...incorrect])];
  while (unique.length < 3) unique.push(`f′(x) = ${unique.length}x + 1`);
  const shuffled = stableShuffle(unique.slice(0, 3), level.id * 17);
  return shuffled.map(label => ({ label, correct: label === level.derivativeText }));
}
function numericOptions(correct, distractors, seed) {
  const labels = [...new Set([correct, ...distractors])].map(value => fmt(value));
  return stableShuffle(labels, seed).map(label => ({ label, correct: label === fmt(correct) }));
}
function iterationOptions(run, answer) {
  const level = run.level;
  const places = level.id >= 11 ? 7 : 6;
  const correct = answer;
  const wrongs = [
    answer + (answer >= 0 ? 0.18 : -0.18),
    answer - (answer >= 0 ? 0.11 : -0.11),
    run.values[run.iteration] + (run.values[run.iteration] >= 0 ? 0.24 : -0.24)
  ];
  const candidates = [correct, ...wrongs].map(value => fmt(value, places));
  const unique = [...new Set(candidates)];
  let delta = .37;
  while (unique.length < 3) {
    unique.push(fmt(answer + delta, places));
    delta += .23;
  }
  return stableShuffle(unique.slice(0, 3), level.id * 31 + run.iteration * 13)
    .map(label => ({ label: `x${run.iteration + 1} ≈ ${label}`, correct: label === fmt(correct, places) }));
}
function stableShuffle(items, seed) {
  const arr = [...items];
  let x = seed;
  for (let i = arr.length - 1; i > 0; i--) {
    x = (x * 9301 + 49297) % 233280;
    const j = Math.floor(x / 233280 * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function handleAnswer(index) {
  if (!current || current.locked) return;
  const option = current.options[index];
  if (!option) return;
  const btn = document.querySelectorAll(".answer-btn")[index];
  if (option.correct) {
    handleCorrectStep(btn);
  } else {
    current.errors += 1;
    if (!current.fury) current.combo = 0;
    if (btn) { btn.classList.add("wrong"); btn.disabled = true; }
    playTone("bad");
    const fb = document.querySelector("#feedback");
    if (current.mode === "training") {
      if (fb) { fb.className = "feedback bad"; fb.textContent = `❌ No exactamente. ${explainWrongAnswer()}`; }
      return;
    }
    if (current.shieldActive) {
      current.shieldActive = false;
      if (fb) { fb.className = "feedback bad"; fb.textContent = `🛡 El escudo bloqueó el golpe. ${explainWrongAnswer()}`; }
      updateHud();
      return;
    }
    current.lives -= 1;
    if (current.lives <= 0) {
      if (fb) { fb.className = "feedback bad"; fb.textContent = `Se agotaron tus vidas. ${explainWrongAnswer()}`; }
      setTimeout(() => showGameOver(false), 700);
    } else if (fb) {
      fb.className = "feedback bad";
      fb.textContent = `❌ Respuesta incorrecta. ${explainWrongAnswer()} Te quedan ${current.lives} vidas.`;
    }
    updateHud();
  }
}
function handleCorrectStep(btn) {
  if (!current || current.locked) return;
  current.locked = true;
  current.combo += 1;
  current.maxCombo = Math.max(current.maxCombo, current.combo);
  state.bestCombo = Math.max(state.bestCombo || 0, current.combo);
  const speedBonus = current.lastQuestionAt && Date.now() - current.lastQuestionAt < 10000 ? 50 : 0;
  const points = current.mode === "training" ? 0 : (100 + Math.min(current.combo - 1, 5) * 25 + speedBonus) * (current.doublePoints ? 2 : 1);
  current.score += points;
  current.experience += current.mode === "training" ? 0 : 25;
  if (current.mode === "battle") current.enemyEnergy = Math.max(0, current.enemyEnergy - 1);
  const feedback = document.querySelector("#feedback");
  if (btn) btn.classList.add("correct");
  if (feedback) {
    feedback.className = "feedback good";
    feedback.textContent = current.mode === "training"
      ? `✅ ¡Correcto! ${explainCorrectAnswer()}`
      : `✅ ¡Correcto! +${points} puntos${speedBonus ? " (bono de rapidez)" : ""}${current.combo > 1 ? ` · COMBO x${current.combo}` : ""}. ${explainCorrectAnswer()}`;
  }
  playTone("good");
  if (current.mode === "battle" && current.enemyEnergy === 0) current.enemyDefeated = true;
  if (current.phase === "iteration") {
    const newIndex = current.iteration + 1;
    animateGraph(current.values[newIndex], () => {
      current.iteration += 1;
      current.eliminatedOptions = new Set();
      if (current.iteration >= current.values.length - 1 || current.enemyDefeated) current.phase = "root";
      current.locked = false;
      renderGame();
    });
  } else {
    setTimeout(() => {
      if (!current) return;
      current.phase = current.phase === "derivative" ? "fvalue"
        : current.phase === "fvalue" ? "dvalue" : "iteration";
      if (current.phase === "iteration") current.iteration = 0;
      current.eliminatedOptions = new Set();
      current.lastQuestionAt = Date.now();
      current.locked = false;
      renderGame();
    }, current.mode === "training" ? 350 : 700);
  }
}
function explainCorrectAnswer() {
  const level = current.level;
  if (current.phase === "derivative") return `${level.derivativeText} porque derivamos término a término.`;
  if (current.phase === "fvalue") return `f(${fmt(level.x0)}) = ${fmt(level.formula(level.x0))}.`;
  if (current.phase === "dvalue") return `f′(${fmt(level.x0)}) = ${fmt(level.derivative(level.x0))}.`;
  if (current.phase === "iteration") return `La tangente en x${current.iteration} proyecta la aproximación sobre el eje x.`;
  return "Sustituiste correctamente en el método.";
}
function explainWrongAnswer() {
  const level = current.level;
  if (current.phase === "derivative") return `La derivada correcta es ${level.derivativeText}.`;
  if (current.phase === "fvalue") return `f(${fmt(level.x0)}) = ${fmt(level.formula(level.x0))}.`;
  if (current.phase === "dvalue") return `f′(${fmt(level.x0)}) = ${fmt(level.derivative(level.x0))}.`;
  if (current.phase === "iteration") return `La aproximación correcta es x${current.iteration + 1} ≈ ${fmt(current.values[current.iteration + 1], 7)}.`;
  return "Revisa los valores y vuelve a intentarlo.";
}
function updateHud() {
  const hearts = document.querySelector(".heart");
  const pills = document.querySelectorAll(".hud-pill");
  if (hearts) hearts.textContent = "♥".repeat(current.lives) + "♡".repeat(3 - current.lives);
  if (pills[1]) pills[1].innerHTML = `✦ <b>${current.score}</b>`;
  if (pills[2]) pills[2].innerHTML = `⚡ <b>${current.combo}×</b>`;
  const count = document.querySelector(".step-count");
  if (count) count.textContent = `VIDAS ${"♥".repeat(current.lives)}${"♡".repeat(3 - current.lives)}`;
}
function useHint() {
  if (!current || current.hints <= 0 || current.locked) return;
  const incorrect = [...document.querySelectorAll(".answer-btn")].filter((button, index) => !current.options[index].correct && !button.disabled);
  if (!incorrect.length) return;
  const btn = incorrect[Math.floor(Math.random() * incorrect.length)];
  const index = Number(btn.dataset.answer);
  current.eliminatedOptions.add(index);
  btn.disabled = true;
  btn.classList.add("eliminated");
  current.hints -= 1; current.usedHint = true;
  const hintButton = document.querySelector('[data-action="hint"]');
  if (hintButton) {
    hintButton.querySelector("span").textContent = `(${current.hints})`;
    hintButton.disabled = current.hints <= 0;
  }
  showToast("Pista usada: se eliminó una respuesta incorrecta.");
}
function useRetry() {
  if (!current || current.retries <= 0 || current.locked) return;
  const wrong = document.querySelector(".answer-btn.wrong");
  if (!wrong) { showToast("Responde primero para activar tu segundo intento."); return; }
  current.retries -= 1; current.lives = Math.min(3, current.lives + 1);
  if (!current.fury) current.combo = 0;
  renderGame();
  showToast("Segundo intento activado: recuperaste una vida. ¡Tú puedes!");
}
function showMathHelp() {
  if (!current) return;
  const level = current.level;
  const i = current.iteration;
  let explanation = `<p>El método de Newton-Raphson genera aproximaciones con <strong>xₙ₊₁ = xₙ − f(xₙ) / f′(xₙ)</strong>. En cada paso, usa la intersección con el eje x de la recta tangente en xₙ.</p>`;
  if (current.phase === "derivative") {
    explanation += `<div class="formula-box"><div class="formula-label">Regla de la potencia</div><div class="formula">${level.functionText} &nbsp; → &nbsp; ${level.derivativeText}</div><div class="formula-detail">Deriva término a término. La derivada de una constante es cero.</div></div>`;
  } else if (current.phase === "fvalue" || current.phase === "dvalue") {
    explanation += `<div class="formula-box"><div class="formula-label">Sustitución en x₀ = ${fmt(level.x0)}</div><div class="formula">f(x₀) = ${fmt(level.formula(level.x0))}<br>f′(x₀) = ${fmt(level.derivative(level.x0))}</div><div class="formula-detail">Evalúa f y f′ con el mismo valor inicial.</div></div>`;
  } else if (current.phase === "iteration") {
    const x = current.values[i], next = current.values[i + 1];
    explanation += `<div class="formula-box"><div class="formula-label">Sustitución de la iteración ${i + 1}</div><div class="formula">x${i + 1} = ${fmt(x)} − (${fmt(level.formula(x))}) / (${fmt(level.derivative(x))}) ≈ ${fmt(next, 8)}</div><div class="formula-detail">Divide f(xₙ) entre f′(xₙ) y réstalo de xₙ.</div></div>`;
  } else if (current.phase === "function") {
    explanation += `<div class="formula-box"><div class="formula-label">Tu misión</div><div class="formula">${level.functionText}</div><div class="formula-detail">Busca el valor de x para el que f(x) = 0. Empezaremos desde x₀ = ${fmt(level.x0)}.</div></div>`;
  }
  openModal("Ayuda matemática", explanation, [{ label: "Entendido", action: "close", primary: true }]);
}
function openModal(title, body, buttons) {
  modalRoot.innerHTML = `<div class="modal-backdrop" data-action="backdrop"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><h2 id="modal-title">${title}</h2>${body}<div class="modal-actions">${buttons.map(button => `<button class="btn ${button.primary ? "btn-primary" : "btn-quiet"} btn-small" data-action="${button.action}">${button.label}</button>`).join("")}</div></section></div>`;
}

function completeLevel() {
  if (!current) return;
  clearInterval(current.timer);
  clearTimeout(eventTimer);
  const level = current.level;
  const elapsed = Math.floor((Date.now() - current.startTime) / 1000);
  if (current.mode === "training") {
    state.trainingDone += 1;
    unlock("ten-exercises", state.trainingDone + state.completed.length >= 10);
    current.earned = current.earned.slice();
    state.xp += 0;
    save();
    renderVictory({ elapsed, award: 0 });
    return;
  }
  const wasComplete = state.completed.includes(level.id);
  const award = current.score + (current.mode === "battle" ? 0 : current.lives * 75) + (current.timed && current.timeLeft > 0 ? 150 : 0);
  state.score += award;
  current.experience += Math.max(50, current.lives * 25) + (current.maxCombo >= 5 ? 50 : 0);
  state.xp += current.experience;
  if (!wasComplete) state.completed.push(level.id);
  state.unlocked = Math.max(state.unlocked, Math.min(LEVELS.length, level.id + 1));
  unlock("first-root", state.completed.length >= 1);
  unlock("combo-3", current.maxCombo >= 3);
  unlock("combo-5", current.maxCombo >= 5);
  unlock("no-hints", !current.usedHint);
  unlock("precision", current.errors === 0);
  unlock("ten-exercises", state.completed.length + state.trainingDone >= 10);
  unlock("all-levels", LEVELS.every(item => state.completed.includes(item.id)));
  unlock("speed-run", current.timed && elapsed < 60 && current.timeLeft > 0);
  unlock("boss", level.boss);
  const playerName = state.name || "Explorador";
  state.leaderboard.push({ name: playerName, character: state.character, score: award, rank: getRank().name, date: Date.now() });
  state.leaderboard = state.leaderboard.sort((a, b) => b.score - a.score).slice(0, 20);
  current.earned = current.earned.slice();
  save();
  renderVictory({ elapsed, award });
  playTone("victory");
}
function unlock(id, condition) {
  if (condition && !state.achievements.includes(id)) {
    state.achievements.push(id);
    const achievement = ACHIEVEMENTS.find(item => item.id === id);
    if (achievement) current.earned.push(achievement);
  }
}
function renderVictory(result) {
  current.phase = "reward";
  const level = current.level;
  const mins = Math.floor(result.elapsed / 60);
  const secs = result.elapsed % 60;
  const earned = current.earned.length
    ? current.earned.map(item => `<span class="earned-badge">${item.icon} ${item.name}</span>`).join("")
    : `<span class="muted" style="font-size:11px">Sigue explorando para desbloquear más medallas.</span>`;
  app.innerHTML = `<section class="victory-view">
      <div class="victory-mark">${level.boss ? "👑" : "✦"}</div>
      <div class="eyebrow">◈ &nbsp; ${level.boss ? "LABORATORIO SALVADO" : "CÁMARA COMPLETADA"}</div>
      <h1>${level.boss ? "¡Raíz recuperada!" : "¡Nivel superado!"}</h1>
      <p>Encontraste la raíz de <strong>${level.functionText}</strong>. ¡Tu expedición sigue adelante!</p>
      <div class="score-card">
        <div class="score-cell"><strong>${result.award}</strong><small>Puntos de esta partida</small></div>
        <div class="score-cell"><strong>${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}</strong><small>Tiempo</small></div>
        <div class="score-cell"><strong>${current.mode === "training" ? "∞" : "♥".repeat(current.lives) + "♡".repeat(3 - current.lives)}</strong><small>${current.mode === "training" ? "Modo tranquilo" : "Vidas restantes"}</small></div>
        <div class="score-cell"><strong>${current.maxCombo}×</strong><small>Combo máximo</small></div>
        <div class="score-cell"><strong>${current.errors}</strong><small>Errores</small></div>
        <div class="score-cell"><strong>+${current.experience} XP</strong><small>Experiencia</small></div>
        <div class="score-cell"><strong>${"⭐".repeat(getStars(current))}${"☆".repeat(3 - getStars(current))}</strong><small>Desempeño</small></div>
        <div class="score-cell"><strong>${current.values.length - 1}</strong><small>Iteraciones</small></div>
      </div>
      <p class="eyebrow">MEDALLAS DESBLOQUEADAS</p><div class="earned-achievements">${earned}</div>
      <div class="victory-actions"><button class="btn btn-primary" data-action="next-level">${level.id < LEVELS.length ? "Siguiente nivel →" : "Volver al mapa →"}</button><button class="btn btn-quiet" data-action="restart-level">↻ Jugar de nuevo</button><button class="btn btn-quiet" data-action="map">Volver al mapa</button></div>
    </section>`;
  celebrate();
}
function getStars(run) {
  if (run.mode === "training") return 3;
  if (run.errors === 0 && run.lives === 3) return 3;
  if (run.lives >= 2) return 2;
  return 1;
}
function celebrate() {
  const layer = document.createElement("div");
  layer.className = "celebration";
  const colors = ["#85f0c2", "#a899ff", "#ffd27b", "#83b9ff", "#ff887f"];
  for (let i = 0; i < 85; i++) {
    const confetti = document.createElement("i");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.background = colors[i % colors.length];
    confetti.style.animationDelay = `${Math.random() * 1.1}s`;
    confetti.style.setProperty("--drift", `${Math.random() * 150 - 75}px`);
    layer.append(confetti);
  }
  document.body.append(layer);
  setTimeout(() => layer.remove(), 4500);
}
function showGameOver(timeout) {
  if (!current) return;
  clearInterval(current.timer);
  clearTimeout(eventTimer);
  current.timer = null;
  app.innerHTML = `<section class="game-over"><div><div class="victory-mark">${timeout ? "⏱" : "↻"}</div><div class="eyebrow">${timeout ? "TIEMPO AGOTADO" : "FIN DEL INTENTO"}</div><h1>${timeout ? "¡Se acabó el tiempo!" : "¡No te rindas!"}</h1><p>${timeout ? "El laboratorio ha cerrado por ahora, pero puedes volver a intentarlo sin límite de veces." : "Las vidas se agotaron, pero cada intento te acerca más a la raíz. Revisa la ayuda matemática y vuelve a probar."}</p><div class="victory-actions"><button class="btn btn-primary" data-action="restart-level">↻ Reintentar nivel</button><button class="btn btn-quiet" data-action="map">Volver al mapa</button></div></div></section>`;
}

function drawGraph(animatedX = null) {
  if (!current) return;
  const canvas = document.querySelector("#graph");
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.round(rect.width * ratio);
  canvas.height = Math.round(rect.height * ratio);
  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  const width = rect.width, height = rect.height;
  const level = current.level;
  const values = current.values.slice(0, Math.max(1, current.iteration + 1));
  const minVal = Math.min(...current.values, level.root, level.x0);
  const maxVal = Math.max(...current.values, level.root, level.x0);
  const span = Math.max(1.2, maxVal - minVal);
  const xMin = minVal - span * .65, xMax = maxVal + span * .65;
  let maxY = 0;
  for (let i = 0; i <= 90; i++) {
    const x = xMin + (xMax - xMin) * i / 90;
    maxY = Math.max(maxY, Math.abs(level.formula(x)));
  }
  const yMax = Math.max(2.2, Math.min(12, maxY * 1.16));
  const xPix = x => 37 + (x - xMin) / (xMax - xMin) * (width - 55);
  const yPix = y => 18 + (yMax - y) / (2 * yMax) * (height - 43);
  ctx.clearRect(0, 0, width, height);
  ctx.font = "9px DM Mono, monospace";
  ctx.strokeStyle = "rgba(176,195,223,.075)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = 18 + i * (height - 43) / 4;
    ctx.beginPath(); ctx.moveTo(37, y); ctx.lineTo(width - 18, y); ctx.stroke();
  }
  const zeroX = xPix(0), zeroY = yPix(0);
  ctx.strokeStyle = "rgba(190,205,225,.32)";
  ctx.beginPath(); ctx.moveTo(37, zeroY); ctx.lineTo(width - 18, zeroY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(zeroX, 15); ctx.lineTo(zeroX, height - 23); ctx.stroke();
  ctx.fillStyle = "#79869b"; ctx.fillText("x", width - 18, zeroY - 7); ctx.fillText("f(x)", zeroX + 6, 18);

  ctx.beginPath();
  let drawing = false;
  for (let i = 0; i <= 200; i++) {
    const x = xMin + (xMax - xMin) * i / 200;
    const y = level.formula(x);
    if (!Number.isFinite(y) || Math.abs(y) > yMax * 3) { drawing = false; continue; }
    if (!drawing) { ctx.moveTo(xPix(x), yPix(y)); drawing = true; }
    else ctx.lineTo(xPix(x), yPix(y));
  }
  ctx.strokeStyle = "#83b9ff"; ctx.lineWidth = 2.4; ctx.stroke();

  const tangentAt = values[values.length - 1];
  const tangentSlope = level.derivative(tangentAt);
  if (Number.isFinite(tangentSlope)) {
    const tangentIntercept = tangentAt - level.formula(tangentAt) / tangentSlope;
    const y1 = level.formula(tangentAt) + tangentSlope * (xMin - tangentAt);
    const y2 = level.formula(tangentAt) + tangentSlope * (xMax - tangentAt);
    ctx.beginPath(); ctx.moveTo(xPix(xMin), yPix(y1)); ctx.lineTo(xPix(xMax), yPix(y2));
    ctx.strokeStyle = "rgba(168,153,255,.78)"; ctx.lineWidth = 1.5; ctx.setLineDash([6, 5]); ctx.stroke(); ctx.setLineDash([]);
    if (Number.isFinite(tangentIntercept) && tangentIntercept >= xMin && tangentIntercept <= xMax) {
      ctx.beginPath(); ctx.moveTo(xPix(tangentIntercept), yPix(0)); ctx.lineTo(xPix(tangentIntercept), height - 23);
      ctx.strokeStyle = "rgba(133,240,194,.28)"; ctx.setLineDash([3, 5]); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = "#85f0c2"; ctx.fillText(`x${values.length} ≈ ${fmt(tangentIntercept, 4)}`, Math.min(width - 100, xPix(tangentIntercept) + 5), height - 9);
    }
  }
  values.forEach((x, index) => {
    const y = level.formula(x);
    ctx.beginPath(); ctx.arc(xPix(x), yPix(y), index === 0 ? 5 : 4, 0, Math.PI * 2);
    ctx.fillStyle = index === 0 ? "#ffd27b" : "#85f0c2"; ctx.fill();
    ctx.strokeStyle = "#162130"; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = index === 0 ? "#ffd27b" : "#a8f4d0";
    ctx.fillText(`x${index}`, xPix(x) + 7, yPix(y) - 8);
  });
  const rootX = xPix(level.root);
  ctx.beginPath(); ctx.arc(rootX, zeroY, 3, 0, Math.PI * 2); ctx.fillStyle = "#ff887f"; ctx.fill();
  ctx.fillStyle = "#ff9e96"; ctx.fillText("raíz", Math.min(width - 45, rootX + 6), zeroY + 15);

  if (Number.isFinite(animatedX)) {
    const markerX = xPix(animatedX);
    ctx.beginPath(); ctx.arc(markerX, zeroY, 10, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(133,240,194,.15)"; ctx.fill();
    ctx.beginPath(); ctx.arc(markerX, zeroY, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#a8f4d0"; ctx.fill();
    ctx.strokeStyle = "#162130"; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = "#a8f4d0";
    ctx.fillText(`x${current.iteration + 1}`, Math.min(width - 32, markerX + 7), zeroY - 12);
  }

  canvas.onmousemove = event => {
    const box = canvas.getBoundingClientRect();
    const x = xMin + (event.clientX - box.left - 37) / (width - 55) * (xMax - xMin);
    const tooltip = document.querySelector("#graph-tooltip");
    if (tooltip) {
      tooltip.textContent = `x = ${fmt(x, 4)} · f(x) = ${fmt(level.formula(x), 4)}`;
      tooltip.style.left = `${Math.max(7, Math.min(width - 175, event.clientX - box.left + 10))}px`;
      tooltip.style.top = `${Math.max(7, Math.min(height - 35, event.clientY - box.top - 20))}px`;
    }
  };
}
function animateGraph(next, done) {
  const canvas = document.querySelector("#graph");
  const tooltip = document.querySelector("#graph-tooltip");
  if (!canvas) { done(); return; }
  const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 700;
  const start = current.values[current.iteration];
  const startedAt = performance.now();
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    clearTimeout(fallback);
    done();
  };
  const fallback = setTimeout(() => {
    if (!finished) { drawGraph(next); finish(); }
  }, duration + 100);
  function advance(now) {
    if (!current || finished) return;
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - (1 - progress) ** 3;
    const approximation = start + (next - start) * eased;
    if (tooltip) tooltip.textContent = `x${current.iteration + 1} ≈ ${fmt(approximation, 6)}`;
    drawGraph(approximation);
    if (progress < 1) window.requestAnimationFrame(advance);
    else finish();
  }
  window.requestAnimationFrame(advance);
}

function handleAction(action, target) {
  if (action === "home") { if (current?.timer) clearInterval(current.timer); renderHome(); }
  if (action === "map") { if (current?.timer) clearInterval(current.timer); current = null; renderMap(); }
  if (action === "adventure") beginAdventure();
  if (action === "character") {
    selectedCharacter = CHARACTERS.includes(state.character) ? state.character : CHARACTERS[0];
    candidateName = state.name;
    renderCharacterSelection();
  }
  if (action === "select-character") {
    candidateName = document.querySelector("#player-name")?.value || candidateName;
    if (CHARACTERS.includes(target.dataset.character)) selectedCharacter = target.dataset.character;
    renderCharacterSelection();
    const nameInput = document.querySelector("#player-name");
    if (nameInput) { nameInput.value = candidateName; nameInput.focus(); }
  }
  if (action === "save-character") {
    const name = document.querySelector("#player-name")?.value.trim();
    state.name = name || "Explorador";
    if (CHARACTERS.includes(selectedCharacter)) state.character = selectedCharacter;
    save(); modalRoot.innerHTML = ""; renderMap();
  }
  if (action === "training") renderModeChooser("training");
  if (action === "find-root-menu") renderModeChooser("find-root");
  if (action === "battle-menu") renderModeChooser("battle");
  if (action === "mode-level") beginLevel(Number(target.dataset.level), false, target.dataset.mode);
  if (action === "laboratory") renderLaboratory();
  if (action === "achievements") renderAchievements();
  if (action === "leaderboard") renderLeaderboard();
  if (action === "settings") renderSettings();
  if (action === "save-settings") {
    const checkbox = document.querySelector("#sound-setting");
    const nameInput = document.querySelector("#setting-name");
    soundEnabled = Boolean(checkbox?.checked);
    state.sound = soundEnabled;
    if (nameInput) state.name = nameInput.value.trim().slice(0, 24) || "Explorador";
    save(); showToast("Preferencias guardadas."); renderSettings();
  }
  if (action === "reset-save") openModal("¿Reiniciar la expedición?", "<p>Se borrarán el progreso, la puntuación, el rango, la clasificación y las medallas de este navegador. Esta acción no se puede deshacer.</p>", [{ label: "Cancelar", action: "close" }, { label: "Borrar progreso", action: "confirm-reset", primary: true }]);
  if (action === "confirm-reset") {
    state = freshSave(); soundEnabled = false; save(); modalRoot.innerHTML = ""; renderHome();
  }
  if (action === "howto") showHowTo();
  if (action === "sound") { soundEnabled = !soundEnabled; state.sound = soundEnabled; save(); target.setAttribute("aria-label", soundEnabled ? "Desactivar sonido" : "Activar sonido"); showToast(soundEnabled ? "Sonido activado." : "Sonido desactivado."); }
  if (action === "start-level") {
    const id = Number(target.dataset.level);
    const level = LEVELS.find(item => item.id === id);
    const body = `<p>¿Listo para explorar <strong>${level.title}</strong>? Tendrás 3 vidas, una pista, un segundo intento y un escudo para encontrar la raíz.</p><label class="timed-toggle"><input type="checkbox" id="timed-mode"> Activar reto contra el tiempo <span>(2:30)</span></label>`;
    openModal("Entrar en la cámara", body, [{ label: "Volver", action: "close" }, { label: "¡A explorar!", action: `confirm-level-${id}`, primary: true }]);
  }
  if (action.startsWith("confirm-level-")) {
    const id = Number(action.split("-").pop());
    const timed = Boolean(document.querySelector("#timed-mode")?.checked);
    modalRoot.innerHTML = "";
    beginLevel(id, timed);
  }
  if (action === "mode-start") renderModeChooser(target.dataset.mode);
  if (action === "next-phase") {
    if (current?.phase === "function") {
      current.phase = "derivative";
      renderGame();
    }
  }
  if (action === "answer") handleAnswer(Number(target.dataset.answer));
  if (action === "typed-submit") submitTypedAnswer();
  if (action === "hint") useHint();
  if (action === "retry") useRetry();
  if (action === "shield") useShield();
  if (action === "math-help") showMathHelp();
  if (action === "claim-reward") completeLevel();
  if (action === "finish-training") completeLevel();
  if (action === "restart-level" && current) { const id = current.level.id; const timed = current.timed; const mode = current.mode; clearInterval(current.timer); beginLevel(id, timed, mode); }
  if (action === "next-level" && current) {
    const next = current.level.id + 1;
    if (next <= LEVELS.length && (next <= state.unlocked || current.mode === "training")) beginLevel(next, false, current.mode);
    else renderMap();
  }
  if (action === "close") modalRoot.innerHTML = "";
}
function useShield() {
  if (!current || current.shield <= 0) return;
  current.shield = 0;
  current.shieldActive = true;
  state.shield = 0;
  save();
  showToast("Escudo activado. El próximo error no te quitará una vida.");
  const button = document.querySelector('[data-action="shield"]');
  if (button) { button.disabled = true; button.textContent = "🛡 Escudo activo"; }
}
function submitTypedAnswer() {
  if (!current || current.locked) return;
  const input = document.querySelector("#typed-value");
  const value = Number(input?.value);
  if (!input || input.value.trim() === "" || !Number.isFinite(value)) {
    showToast("Escribe una aproximación numérica válida.");
    input?.focus();
    return;
  }
  const correct = current.values[current.iteration + 1];
  if (Math.abs(value - correct) < 0.01) {
    handleCorrectStep(null);
    return;
  }
  current.errors += 1;
  if (!current.fury) current.combo = 0;
  const feedback = document.querySelector("#feedback");
  if (current.mode === "training") {
    if (feedback) { feedback.className = "feedback bad"; feedback.textContent = `No todavía. Revisa la tangente: x${current.iteration + 1} ≈ ${fmt(correct, 7)}.`; }
    return;
  }
  if (current.shieldActive) {
    current.shieldActive = false;
    state.shield = 0; save();
    if (feedback) { feedback.className = "feedback bad"; feedback.textContent = `El escudo bloqueó el golpe. La aproximación es ${fmt(correct, 7)}.`; }
    return;
  }
  current.lives -= 1;
  if (feedback) { feedback.className = "feedback bad"; feedback.textContent = `Aproximación incorrecta. x${current.iteration + 1} ≈ ${fmt(correct, 7)}. Vidas restantes: ${current.lives}.`; }
  if (current.lives <= 0) setTimeout(() => showGameOver(false), 700);
  else updateHud();
}
function submitLaboratory(form) {
  const expression = form.elements.expression.value.trim();
  const x0 = Number(form.elements.x0.value);
  if (!Number.isFinite(x0)) { showToast("El punto inicial debe ser un número finito."); return; }
  try {
    const result = createPolynomialLevel(expression, x0);
    renderLabResults(result.level, result.values, expression);
  } catch (error) {
    openModal("No se pudo calcular", `<p>${safeText(error.message)}</p><p>Prueba, por ejemplo, <code>x^2 - 9</code> con x₀ = 5.</p>`, [{ label: "Corregir función", action: "close", primary: true }]);
  }
}
function showHowTo() {
  const body = `<p>Explora las cámaras en orden: cada nivel desbloquea el siguiente. En cada uno encontrarás la función, elegirás su derivada y evaluarás el punto inicial antes de calcular las iteraciones.</p>
    <div class="formula-box"><div class="formula-label">El método</div><div class="formula">xₙ₊₁ = xₙ − f(xₙ) / f′(xₙ)</div><div class="formula-detail">La raíz se alcanza cuando f(x) ≈ 0. La gráfica dibuja la curva y la tangente en cada paso.</div></div>
    <p>Empiezas con 3 vidas. Una respuesta incorrecta consume una; la pista elimina una opción y el segundo intento restaura una vida después de fallar. Las respuestas consecutivas aumentan tu combo.</p>`;
  openModal("Guía de explorador", body, [{ label: "¡Entendido!", action: "close", primary: true }]);
}

document.addEventListener("click", event => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  if (target.classList.contains("modal-backdrop") && event.target !== target) return;
  handleAction(action, target);
});
document.addEventListener("submit", event => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  event.preventDefault();
  if (form.matches('[data-action="typed-submit"]')) submitTypedAnswer();
  if (form.matches('[data-action="calculate-lab"]')) submitLaboratory(form);
});
document.addEventListener("change", event => {
  if (event.target.id === "sound-setting") {
    soundEnabled = event.target.checked;
    state.sound = soundEnabled;
    save();
  }
});
document.addEventListener("input", event => {
  if (event.target.id === "player-name") candidateName = event.target.value;
});
window.addEventListener("resize", () => { if (current && !["reward", "over"].includes(current.phase)) drawGraph(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modalRoot.firstChild) modalRoot.innerHTML = "";
});

state = loadSave();
soundEnabled = Boolean(state.sound);
renderHome();
