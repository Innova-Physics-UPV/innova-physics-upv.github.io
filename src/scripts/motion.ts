// The motion module: every scroll-linked movement of the site in one passive,
// requestAnimationFrame-throttled scroll loop. Positions are measured once
// (on load, resize and when fonts arrive), with the scenes' transforms
// switched off; each frame only reads scrollY and writes custom properties
// and classes. The HTML is always the finished state: start states hang on
// html[data-motion], which the head script sets only when the reader allows
// motion, and drops again if this module never runs.
//
//   M2  the masthead tightens once the cover has gone by
//   M4  the story's beam runs down the rail and holds on each marker
//   M8  a season lights up when the beam reaches it
//   M3  (phones) the team photo's hatched veil withdraws, once
//   M12 the scroll cue leaves at the first scroll
//   S1  the cover: the words leave, the figure grows, the beam switches on
//   S2  (desktop) the team photo is restored beside the text, then grows
//   S3  (wide screens) the story's pictures in a centred sticky column
//   S4  the team statement lights up word by word
//
// Scroll-driven CSS animations would cover only part of this (holds at
// measured markers, jumps and latches need code) and Firefox lacks them, so
// one JavaScript path serves every browser.

const root = document.documentElement;
root.setAttribute('data-motion-ready', '');
const moving = root.hasAttribute('data-motion');

const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
const docTop = (el: Element) => el.getBoundingClientRect().top + window.scrollY;
const READ = 0.62; // the reading line, as a fraction of the window height
const ANCHOR = 48; // a station's title line below its top (S3; --anchor in motion.css)

interface Scene {
  measure(): void;
  frame(y: number, vh: number): void;
}

const scenes: Scene[] = [];
let headerH = 0; // the masthead's full height: the cover runs under it
let headerCompactH = 0; // its tightened height: S2 and S3 run under that

// ── M2: the masthead ─────────────────────────────────────────────────────
const masthead = document.querySelector<HTMLElement>('[data-masthead]');
const coverFoot = document.querySelector<HTMLElement>('[data-cover-foot]');
if (masthead) {
  let fullH = 0;
  let delta = 0;
  let footTop = Infinity;
  let compact = false;
  scenes.push({
    measure() {
      // Measure both states with transitions off, then put the band back
      // exactly as it was, so a re-measure never makes it flicker.
      masthead.classList.add('is-measuring');
      const was = masthead.classList.contains('is-compact');
      masthead.classList.remove('is-compact');
      masthead.style.marginBottom = '0px';
      fullH = masthead.offsetHeight;
      masthead.classList.add('is-compact');
      delta = fullH - masthead.offsetHeight;
      masthead.classList.toggle('is-compact', was);
      masthead.style.marginBottom = was ? `${delta}px` : '0px';
      void masthead.offsetHeight;
      masthead.classList.remove('is-measuring');
      compact = was;
      headerH = fullH;
      headerCompactH = fullH - delta;
      root.style.setProperty('--header-h', `${fullH}px`);
      root.style.setProperty('--header-h-compact', `${headerCompactH}px`);
      // The band's height plus its margin is constant, so the foot's place
      // does not depend on the band's state.
      footTop = coverFoot ? docTop(coverFoot) : Infinity;
    },
    frame(y) {
      const next = y + fullH > footTop;
      if (next === compact) return;
      compact = next;
      masthead.classList.toggle('is-compact', compact);
      // The page must not jump: what the band loses in height, its margin gives back.
      masthead.style.marginBottom = compact ? `${delta}px` : '0px';
    },
  });
}

// ── M12: the scroll cue leaves at the first scroll past 40px ──────────────
const cues = document.querySelectorAll<HTMLElement>('[data-scroll-cue]');
if (cues.length) {
  let gone = false;
  scenes.push({
    measure() {},
    frame(y) {
      if (gone || y <= 40) return;
      gone = true;
      cues.forEach((cue) => cue.classList.add('is-gone'));
    },
  });
}

if (moving) {
  // ── M4 + M8: the story's beam ─────────────────────────────────────────
  document.querySelectorAll<HTMLElement>('[data-rail]').forEach((rail) => {
    const beam = rail.querySelector<HTMLElement>('[data-rail-beam]');
    if (!beam) return;
    const stations = [...rail.querySelectorAll<HTMLElement>('[data-station]')];
    const nowIndex = stations.findIndex((s) => s.classList.contains('station--now'));
    const lit = stations.slice(0, nowIndex + 1);
    let top = 0;
    let height = 1;
    let marks: number[] = [];
    let last = -1;
    scenes.push({
      measure() {
        top = docTop(beam);
        height = Math.max(1, beam.offsetHeight);
        marks = lit.map((s) => {
          const marker = s.querySelector('[data-marker]');
          return marker ? clamp((docTop(marker) + 8 - top) / height) : 0;
        });
        // The beam ends 12px into NOW: its last marker is the end of the beam.
        if (marks.length) marks[marks.length - 1] = 1;
        last = -1;
      },
      frame(y, vh) {
        const p = clamp((y + vh * READ - top) / height);
        // Hold bands around each marker (35% of the gap); between them the
        // head travels linearly, a little faster than the scroll.
        let v = marks[0] ?? 0;
        for (let i = 0; i < marks.length - 1; i++) {
          const m0 = marks[i];
          const m1 = marks[i + 1];
          const h = 0.175 * (m1 - m0);
          if (p <= m0 + h) break;
          if (p >= m1 - h) {
            v = m1;
            continue;
          }
          v = m0 + ((p - (m0 + h)) / (m1 - h - (m0 + h))) * (m1 - m0);
          break;
        }
        if (p < (marks[0] ?? 0)) v = marks[0] ?? 0;
        const q = Math.round(v * 1000) / 1000;
        if (q === last) return;
        last = q;
        beam.style.setProperty('--y', String(q));
        lit.forEach((s, i) => s.classList.toggle('is-lit', q >= marks[i] - 0.001));
      },
    });
  });

  // ── S3: the story's pictures in a sticky column (wide screens) ──────────
  const wide = window.matchMedia('(min-width: 1024px)');
  document.querySelectorAll<HTMLElement>('[data-projector]').forEach((projector) => {
    const rail = projector.closest<HTMLElement>('[data-rail]');
    if (!rail) return;
    const stations = [...rail.querySelectorAll<HTMLElement>('[data-station]')];
    const slides = [...projector.querySelectorAll<HTMLElement>('[data-slide]')];
    let tops: number[] = [];
    let active = -1;
    scenes.push({
      measure() {
        tops = stations.map(docTop);
        active = -1;
      },
      frame(y, vh) {
        if (!wide.matches) return;
        // The centre of the window below the (tightened) masthead, where the
        // column sits. A picture switches when its station's title line
        // (ANCHOR below the station's top, as --anchor in motion.css) reaches
        // it. The column is aria-hidden: the stations carry the pictures' text.
        const centre = y + headerCompactH + (vh - headerCompactH) / 2;
        let next = 0;
        tops.forEach((t, i) => {
          if (t + ANCHOR <= centre) next = i;
        });
        if (next === active) return;
        active = next;
        slides.forEach((slide, i) => slide.classList.toggle('is-active', i === active));
      },
    });
  });

  // ── S1: the cover scene ───────────────────────────────────────────────
  const s1 = document.querySelector<HTMLElement>('[data-scene="s1"]');
  // Below 360px the render is too small for its labels: the cover stays its
  // finished frame (the same query is in motion.css).
  const s1Room = window.matchMedia('(min-width: 360px)');
  if (s1) {
    const track = s1.querySelector<HTMLElement>('[data-track]')!;
    const stage = s1.querySelector<HTMLElement>('[data-stage]')!;
    const frameEl = s1.querySelector<HTMLElement>('[data-source-frame]');
    const caption = s1.querySelector<HTMLElement>('.source__caption');
    const words = [...s1.querySelectorAll<HTMLElement>('[data-words]')];
    let top = 0;
    let range = 1;
    let state = '';
    let wordsOut = 0;
    scenes.push({
      measure() {
        if (!frameEl || !s1Room.matches) return;
        root.classList.add('is-measuring');
        // Read the caption in its hold layout too: on a phone it sits above
        // the render, and the render must start below it.
        const before = stage.dataset.caption;
        stage.dataset.caption = 'hold';
        const st = stage.getBoundingClientRect();
        const fr = frameEl.getBoundingClientRect();
        const capH = caption ? caption.getBoundingClientRect().height : 0;
        const wordsBottom = Math.max(...words.map((w) => w.getBoundingClientRect().bottom)) - st.top;
        if (before === undefined) delete stage.dataset.caption;
        else stage.dataset.caption = before;
        root.classList.remove('is-measuring');
        // Full bleed, as long as at least 80% of the render's height stays on
        // the stage (wide, short screens would otherwise crop the electrodes'
        // labels); then quiet ultramarine margins at the sides, where the
        // render's own ground melts into the cover. On a phone the whole
        // render fits below the caption.
        const phone = st.width < 720;
        const reserve = phone ? 16 + capH + 16 : 0;
        const room = st.height - reserve - (phone ? 16 : 0);
        const scale = Math.min(st.width / fr.width, phone ? room / fr.height : room / (0.8 * fr.height));
        const finalW = fr.width * scale;
        const finalH = fr.height * scale;
        const finalTop = phone ? Math.max(reserve, (st.height - finalH) / 2) : (st.height - finalH) / 2;
        stage.style.setProperty('--s1-s', String(scale));
        stage.style.setProperty('--s1-inv', String(1 / scale));
        stage.style.setProperty('--s1-tx', `${(st.width - finalW) / 2 - (fr.left - st.left)}px`);
        stage.style.setProperty('--s1-ty', `${finalTop - (fr.top - st.top)}px`);
        stage.style.setProperty('--s1-out', `${-(wordsBottom + 40)}px`);
        top = docTop(track);
        range = Math.max(1, track.offsetHeight - stage.offsetHeight);
        state = '';
      },
      frame(y) {
        if (!s1Room.matches) {
          if (state !== 'still') {
            state = 'still';
            wordsOut = 0;
            delete stage.dataset.caption;
            delete stage.dataset.step;
          }
          return;
        }
        const p = clamp((y + headerH - top) / range);
        // 0 to 20%: the words leave the stage. 20 to 40%: then the figure
        // grows, so it never runs over a word or a button on its way.
        const w = clamp(p / 0.2);
        wordsOut = w;
        const a = clamp((p - 0.2) / 0.2);
        const reveal = p < 0.4 ? 0 : 0.21 + 0.79 * clamp((p - 0.4) / 0.5);
        const step = reveal >= 0.85 ? 3 : reveal >= 0.46 ? 2 : reveal >= 0.22 ? 1 : 0;
        // The caption (with the status, SIMULATED IN COMSOL) is back as soon
        // as the figure has grown, before any number shows on it.
        const cap = p < 0.02 ? 'start' : p >= 0.4 ? 'hold' : 'off';
        const key = `${w.toFixed(3)}|${a.toFixed(3)}|${reveal.toFixed(3)}|${step}|${cap}`;
        if (key === state) return;
        state = key;
        stage.style.setProperty('--w', w.toFixed(4));
        stage.style.setProperty('--a', a.toFixed(4));
        stage.style.setProperty('--reveal', reveal.toFixed(4));
        stage.dataset.step = String(step);
        stage.dataset.caption = cap;
      },
    });
    // Keyboard focus on a word that has left the stage (a button reached with
    // Shift+Tab) brings the cover back to its start, where it can be seen.
    s1.addEventListener('focusin', (event) => {
      if (wordsOut > 0 && (event.target as Element).closest('[data-words]')) {
        window.scrollTo({ top: top - headerH, behavior: 'instant' });
      }
    });
  }

  // ── S2 (wide, tall windows) and M3 (elsewhere): the team photo ─────────
  // S2 pins only where the text and the photo sit side by side and the
  // pinned window can hold them; the same query is in motion.css.
  const s2 = document.querySelector<HTMLElement>('[data-scene="s2"]');
  const desktop = window.matchMedia('(min-width: 1024px) and (min-height: 700px)');
  let s2Started = false;
  if (s2) {
    const track = s2.querySelector<HTMLElement>('[data-track]')!;
    const stage = s2.querySelector<HTMLElement>('[data-stage]')!;
    const photo = s2.querySelector<HTMLElement>('[data-team-photo]')!;
    const teamCaption = s2.querySelector<HTMLElement>('.team__figure > figcaption');
    let top = 0;
    let range = 1;
    let last = '';
    let veilObserver: IntersectionObserver | null = null;
    scenes.push({
      measure() {
        if (!desktop.matches) {
          // M3: the veil withdraws once, when the photo's top crosses 78% of the window.
          if (!veilObserver && !photo.classList.contains('is-restored')) {
            veilObserver = new IntersectionObserver(
              (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                  photo.classList.add('is-restored');
                  veilObserver?.disconnect();
                }
              },
              { rootMargin: '0px 0px -22% 0px' },
            );
            veilObserver.observe(photo);
          }
          return;
        }
        root.classList.add('is-measuring');
        const st = stage.getBoundingClientRect();
        const ph = photo.getBoundingClientRect();
        const cap = teamCaption?.getBoundingClientRect();
        root.classList.remove('is-measuring');
        // At the hold the caption moves down to 16px below the stage.
        if (cap) stage.style.setProperty('--s2-cap-y', `${st.bottom - cap.top + 16}px`);
        // Grow to cover the whole stage, centred; clip what spills over.
        const scale = Math.max(st.width / ph.width, st.height / ph.height);
        const spillY = (ph.height * scale - st.height) / 2 / scale;
        const spillX = (ph.width * scale - st.width) / 2 / scale;
        stage.style.setProperty('--s2-s', String(scale));
        stage.style.setProperty('--s2-tx', `${(st.width - ph.width * scale) / 2 - (ph.left - st.left)}px`);
        stage.style.setProperty('--s2-ty', `${(st.height - ph.height * scale) / 2 - (ph.top - st.top)}px`);
        stage.style.setProperty('--s2-cy', `${Math.max(0, spillY)}px`);
        stage.style.setProperty('--s2-cx', `${Math.max(0, spillX)}px`);
        top = docTop(track);
        range = Math.max(1, track.offsetHeight - stage.offsetHeight);
        last = '';
      },
      frame(y) {
        if (!desktop.matches) return;
        // The masthead is tightened by now: the stage pins under its compact height.
        const p = clamp((y + headerCompactH - top) / range);
        s2Started = p > 0;
        // 0 to 25%: the veil withdraws in place, beside the text. 25 to 50%:
        // hold, the whole photo next to the text. 50 to 82%: it grows to full
        // bleed. 82 to 100%: hold, then the page moves on.
        const veil = Math.round(clamp(p / 0.25) * 1000) / 1000;
        const a = Math.round(clamp((p - 0.5) / 0.32) * 1000) / 1000;
        const key = `${veil}|${a}`;
        if (key === last) return;
        last = key;
        stage.style.setProperty('--veil', String(veil));
        stage.style.setProperty('--a', String(a));
        stage.toggleAttribute('data-hold', a >= 1);
      },
    });
  }

  // ── S4: the team statement, word by word ───────────────────────────────
  const statement = document.querySelector<HTMLElement>('[data-statement]');
  if (statement) {
    const words = [...statement.querySelectorAll<HTMLElement>('.w')];
    // The statement sits inside S2's stage, which may be stuck when this
    // measures: take its place from the track (the stage's unstuck top) plus
    // its offset within the stage, which sticking does not change.
    const stage = statement.closest<HTMLElement>('[data-stage]');
    const track = stage?.closest<HTMLElement>('[data-track]');
    let top = 0;
    let height = 1;
    let lit = -1;
    scenes.push({
      measure() {
        top =
          stage && track
            ? docTop(track) + (statement.getBoundingClientRect().top - stage.getBoundingClientRect().top)
            : docTop(statement);
        height = Math.max(1, statement.offsetHeight);
        lit = -1;
      },
      frame(y, vh) {
        const q = s2Started ? 1 : clamp((y + vh * READ - top) / height);
        const count = words.filter((_, i) => q >= ((i + 1) / words.length) * 0.95).length;
        if (count === lit) return;
        lit = count;
        words.forEach((w, i) => w.classList.toggle('is-lit', i < count));
      },
    });
  }
}

// ── The loop ────────────────────────────────────────────────────────────
let ticking = false;
const frame = () => {
  ticking = false;
  const y = window.scrollY;
  const vh = window.innerHeight;
  for (const scene of scenes) scene.frame(y, vh);
};
const request = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(frame);
};
const measure = () => {
  for (const scene of scenes) scene.measure();
  frame();
};

measure();
window.addEventListener('scroll', request, { passive: true });
let resizeQueued = false;
const remeasure = () => {
  if (resizeQueued) return;
  resizeQueued = true;
  requestAnimationFrame(() => {
    resizeQueued = false;
    measure();
  });
};
window.addEventListener('resize', remeasure, { passive: true });
document.fonts?.ready.then(remeasure);
window.addEventListener('load', remeasure);
// Anything that changes the page's size after load (a font that arrives
// late and rewraps the masthead, an image) moves what was measured.
if ('ResizeObserver' in window) new ResizeObserver(remeasure).observe(document.body);
