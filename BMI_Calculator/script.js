/* ============================================================
   BMI Calculator – script.js
   ============================================================ */

'use strict';

/* ── DOM References ─────────────────────────────────────── */
const unitToggleBtn = document.getElementById('unitToggleBtn');
const toggleLabelMetric = document.getElementById('toggleLabelMetric');
const toggleLabelImperial = document.getElementById('toggleLabelImperial');
const metricInputs = document.getElementById('metricInputs');
const imperialInputs = document.getElementById('imperialInputs');

const userNameInput = document.getElementById('userName');
const heightCmInput = document.getElementById('heightCm');
const weightKgInput = document.getElementById('weightKg');
const heightFtInput = document.getElementById('heightFt');
const heightInInput = document.getElementById('heightIn');
const weightLbsInput = document.getElementById('weightLbs');

const calculateBtn = document.getElementById('calculateBtn');
const clearBtn = document.getElementById('clearBtn');

const resultCard = document.getElementById('resultCard');
const resultName = document.getElementById('resultName');
const resultDate = document.getElementById('resultDate');
const bmiValue = document.getElementById('bmiValue');
const bmiRing = document.getElementById('bmiRing');
const ringProgress = document.getElementById('ringProgress');
const categoryBadge = document.getElementById('categoryBadge');
const categoryDot = document.getElementById('categoryDot');
const categoryText = document.getElementById('categoryText');
const scaleMarker = document.getElementById('scaleMarker');

const historyList = document.getElementById('historyList');
const historyEmpty = document.getElementById('historyEmpty');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// Error spans
const nameError = document.getElementById('nameError');
const heightError = document.getElementById('heightError');
const weightError = document.getElementById('weightError');
const heightImperialError = document.getElementById('heightImperialError');
const weightImperialError = document.getElementById('weightImperialError');

/* ── State ───────────────────────────────────────────────── */
let isImperial = false;
const STORAGE_KEY = 'bmi_history';
const RING_CIRCUMFERENCE = 326.7; // 2 * π * 52

/* ── BMI Category Logic ──────────────────────────────────── */
const CATEGORIES = [
    { key: 'underweight', label: 'Underweight', min: 0, max: 18.5 },
    { key: 'normal', label: 'Normal Weight', min: 18.5, max: 25 },
    { key: 'overweight', label: 'Overweight', min: 25, max: 30 },
    { key: 'obese', label: 'Obese', min: 30, max: Infinity },
];

function getCategory(bmi) {
    return CATEGORIES.find(c => bmi >= c.min && bmi < c.max) || CATEGORIES[0];
}

/* ── Ring progress (BMI clamped 10–45 → 5%…100%) ─────────── */
function bmiToRingOffset(bmi) {
    const clamped = Math.min(Math.max(bmi, 10), 45);
    const pct = (clamped - 10) / 35;          // 0 → 1
    return RING_CIRCUMFERENCE * (1 - pct);
}

/* ── Scale marker position ───────────────────────────────── */
// Maps BMI → % across the scale bar segments
// Segments proportional widths: underweight 1, normal 1.3, overweight 1, obese 1.5
function bmiToScalePercent(bmi) {
    const clamped = Math.min(Math.max(bmi, 10), 50);
    // Breakpoints: 0%=BMI10, ends of segments
    // Using linear mapping within each segment
    if (clamped < 18.5) {
        return mapRange(clamped, 10, 18.5, 1, 22);
    } else if (clamped < 25) {
        return mapRange(clamped, 18.5, 25, 22, 55);
    } else if (clamped < 30) {
        return mapRange(clamped, 25, 30, 55, 76);
    } else {
        return mapRange(clamped, 30, 50, 76, 99);
    }
}

function mapRange(val, inMin, inMax, outMin, outMax) {
    return outMin + ((val - inMin) / (inMax - inMin)) * (outMax - outMin);
}

/* ── Unit Toggle ─────────────────────────────────────────── */
unitToggleBtn.addEventListener('click', () => {
    isImperial = !isImperial;

    // Swap visibility
    metricInputs.classList.toggle('hidden', isImperial);
    imperialInputs.classList.toggle('hidden', !isImperial);

    // Toggle button visual
    unitToggleBtn.classList.toggle('imperial', isImperial);
    unitToggleBtn.setAttribute('aria-pressed', isImperial.toString());

    toggleLabelMetric.classList.toggle('active-label', !isImperial);
    toggleLabelImperial.classList.toggle('active-label', isImperial);

    clearErrors();
});

/* ── Validation ──────────────────────────────────────────── */
function showError(el, msg) {
    el.textContent = msg;
}

function clearErrors() {
    [nameError, heightError, weightError, heightImperialError, weightImperialError]
        .forEach(e => (e.textContent = ''));
    [userNameInput, heightCmInput, weightKgInput, heightFtInput, heightInInput, weightLbsInput]
        .forEach(i => i.classList.remove('error'));
}

function validateMetric() {
    let valid = true;

    const h = parseFloat(heightCmInput.value);
    const w = parseFloat(weightKgInput.value);

    if (!heightCmInput.value.trim() || isNaN(h) || h <= 0) {
        showError(heightError, 'Enter a valid height (> 0 cm)');
        heightCmInput.classList.add('error');
        valid = false;
    }
    if (!weightKgInput.value.trim() || isNaN(w) || w <= 0) {
        showError(weightError, 'Enter a valid weight (> 0 kg)');
        weightKgInput.classList.add('error');
        valid = false;
    }
    if (valid && h > 300) {
        showError(heightError, 'Height seems too large (max 300 cm)');
        heightCmInput.classList.add('error');
        valid = false;
    }
    if (valid && w > 700) {
        showError(weightError, 'Weight seems too large (max 700 kg)');
        weightKgInput.classList.add('error');
        valid = false;
    }

    return valid ? { heightM: h / 100, weightKg: w } : null;
}

function validateImperial() {
    let valid = true;

    const ft = parseFloat(heightFtInput.value);
    const ins = parseFloat(heightInInput.value || 0);
    const lbs = parseFloat(weightLbsInput.value);

    if (!heightFtInput.value.trim() || isNaN(ft) || ft <= 0) {
        showError(heightImperialError, 'Enter a valid height (feet > 0)');
        heightFtInput.classList.add('error');
        valid = false;
    } else if (!isNaN(ins) && (ins < 0 || ins > 11)) {
        showError(heightImperialError, 'Inches must be between 0 and 11');
        heightInInput.classList.add('error');
        valid = false;
    }
    if (!weightLbsInput.value.trim() || isNaN(lbs) || lbs <= 0) {
        showError(weightImperialError, 'Enter a valid weight (> 0 lbs)');
        weightLbsInput.classList.add('error');
        valid = false;
    }

    if (!valid) return null;

    // Convert to metric
    const totalInches = ft * 12 + (isNaN(ins) ? 0 : ins);
    const heightM = totalInches * 0.0254;
    const weightKg = lbs * 0.453592;

    return { heightM, weightKg };
}

/* ── Calculate ───────────────────────────────────────────── */
calculateBtn.addEventListener('click', () => {
    clearErrors();

    const name = userNameInput.value.trim() || 'Anonymous';

    const data = isImperial ? validateImperial() : validateMetric();
    if (!data) return;

    const { heightM, weightKg } = data;
    const bmi = weightKg / (heightM * heightM);
    const bmiRounded = Math.round(bmi * 100) / 100;
    const category = getCategory(bmiRounded);

    displayResult(name, bmiRounded, category);
    saveToHistory({ name, bmi: bmiRounded, category: category.key, label: category.label, date: new Date().toISOString() });
    renderHistory();
});

/* ── Display Result ──────────────────────────────────────── */
function displayResult(name, bmi, category) {
    resultCard.classList.remove('hidden');

    // Name & date
    resultName.textContent = `${name}'s BMI`;
    resultDate.textContent = formatDate(new Date());

    // BMI number with count-up animation
    animateCount(bmi);

    // Ring
    bmiRing.className = `bmi-ring ring-${category.key}`;
    const offset = bmiToRingOffset(bmi);
    ringProgress.style.strokeDashoffset = offset;

    // Category badge
    categoryBadge.className = `category-badge category-${category.key}`;
    categoryText.textContent = category.label;

    // Scale marker
    const pct = bmiToScalePercent(bmi);
    scaleMarker.style.left = `${pct}%`;

    // Smooth scroll to result
    setTimeout(() => resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
}

function animateCount(target) {
    const start = 0;
    const duration = 700;
    const startTime = performance.now();

    function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
        const current = start + (target - start) * eased;
        bmiValue.textContent = current.toFixed(2);
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

/* ── Clear / Reset ───────────────────────────────────────── */
clearBtn.addEventListener('click', () => {
    [userNameInput, heightCmInput, weightKgInput, heightFtInput,
        heightInInput, weightLbsInput].forEach(i => (i.value = ''));
    clearErrors();
    resultCard.classList.add('hidden');
    bmiValue.textContent = '--';
    ringProgress.style.strokeDashoffset = RING_CIRCUMFERENCE;
    bmiRing.className = 'bmi-ring';
    categoryBadge.className = 'category-badge';
    categoryText.textContent = '--';
    scaleMarker.style.left = '0%';
});

/* ── LocalStorage History ────────────────────────────────── */
function loadHistory() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

function saveToHistory(record) {
    const history = loadHistory();
    history.unshift(record);               // newest first
    if (history.length > 20) history.pop(); // cap at 20
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function renderHistory() {
    const history = loadHistory();

    // Remove old items (keep empty placeholder)
    Array.from(historyList.querySelectorAll('.history-item')).forEach(el => el.remove());

    if (history.length === 0) {
        historyEmpty.classList.remove('hidden');
        return;
    }

    historyEmpty.classList.add('hidden');

    history.forEach(record => {
        const li = document.createElement('li');
        li.className = 'history-item';

        const initials = record.name
            .split(' ')
            .slice(0, 2)
            .map(w => w[0]?.toUpperCase() || '')
            .join('') || '?';

        const dateStr = formatDate(new Date(record.date));

        li.innerHTML = `
      <span class="history-avatar avatar-${record.category}">${initials}</span>
      <div class="history-info">
        <span class="history-name">${escapeHTML(record.name)}</span>
        <span class="history-meta">${dateStr}</span>
      </div>
      <span class="history-bmi" style="color:var(--${record.category === 'normal' ? 'normal' : record.category})">${record.bmi.toFixed(2)}</span>
      <span class="history-category cat-${record.category}">${record.label}</span>
    `;

        historyList.appendChild(li);
    });
}

/* ── Clear History ───────────────────────────────────────── */
clearHistoryBtn.addEventListener('click', () => {
    if (!confirm('Clear all BMI history?')) return;
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
});

/* ── Helpers ─────────────────────────────────────────────── */
function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/* Allow Enter key to trigger calculation */
document.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') calculateBtn.click();
    });
});

/* ── Init ────────────────────────────────────────────────── */
renderHistory();
