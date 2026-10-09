<script lang="ts">
  // Two readings, the signature interaction (M5, M11). Above the line,
  // energy: the X-ray lines of the stratum the probe stands on. Below it,
  // depth: the strata of a panel painting, each a button. The probe moves at
  // constant speed, 48px every 480ms, and the spectrum swaps only once it has
  // stopped: data jumps, it never morphs. The server renders the vermilion
  // stratum, read, so without JavaScript the figure is finished and still.
  import { strata as allStrata, readingsCopy, DEFAULT_STRATUM, ENERGY_MIN, ENERGY_MAX } from '../../data/readings';
  import { inLang, type Lang } from '../../i18n';

  interface Props {
    lang?: Lang;
    initial?: number;
  }

  let { lang = 'en', initial = DEFAULT_STRATUM }: Props = $props();
  // The page's language never changes while it is open.
  // svelte-ignore state_referenced_locally
  const strata = inLang(allStrata, lang);
  // svelte-ignore state_referenced_locally
  const t = inLang(readingsCopy, lang);
  type XrayLine = (typeof strata)[number]['lines'][number];

  const STEP = 48; // a stratum's height, px
  const MS_PER_PX = 480 / STEP;
  const TALLEST = 180;
  const CHAR = 8.8; // a Fragment Mono label at 13px with its tracking
  const WIDE_AXIS = 1160; // the axis on a wide screen, until it is measured

  // `initial` is only the stratum the reading starts on: later changes to the
  // prop are not meant to move the probe.
  // svelte-ignore state_referenced_locally
  let target = $state(initial); // the pressed stratum: where the probe goes
  // svelte-ignore state_referenced_locally
  let read = $state(initial); // the stratum the spectrum shows
  let named = $state<number | null>(null); // the line under the pointer or focus
  let duration = $state(0);
  let axis = $state(0);
  let figure = $state<HTMLElement>();
  let probe = $state<HTMLElement>();
  let timer: ReturnType<typeof setTimeout> | undefined;

  const stratum = $derived(strata[read]);
  const frac = (keV: number) => (keV - ENERGY_MIN) / (ENERGY_MAX - ENERGY_MIN);
  const at = (keV: number, offset: number) =>
    `calc(var(--rail) + (100% - var(--rail)) * ${frac(keV).toFixed(4)} - ${offset}px)`;
  const tall = (l: XrayLine) => Math.round(l.height * TALLEST);
  const ticks = Array.from({ length: ENERGY_MAX - ENERGY_MIN + 1 }, (_, k) => ENERGY_MIN + k);

  // Labels name the element once, then the line alone (Hg Lα, Lβ, Lγ). A
  // label that would run into the next, taller line, or start inside the
  // last one, is shared: those lines are not resolved at this width.
  const labels = $derived.by(() => {
    const span = axis || WIDE_AXIS;
    const seen = new Set<string>();
    const out: { keV: number; h: number; text: string }[] = [];
    let last: { x: number; h: number } | undefined;
    for (const l of stratum.lines) {
      const name = seen.has(l.element) ? l.line : `${l.element} ${l.line}`;
      seen.add(l.element);
      const x = frac(l.keV) * span;
      const h = tall(l);
      const label = out.at(-1);
      if (label && last) {
        const labelEnd = frac(label.keV) * span - 3 + label.text.length * CHAR + 8;
        const runsInto = x - 3 < labelEnd && h + 36 > label.h + 12;
        const startsInside = x - 3 < last.x + 5 && h + 12 < last.h;
        if (runsInto || startsInside) {
          label.text += ` · ${name}`;
          label.h = Math.max(label.h, h);
          last = { x, h };
          continue;
        }
      }
      out.push({ keV: l.keV, h, text: name });
      last = { x, h };
    }
    return out;
  });

  const strongest = $derived(
    stratum.lines.length ? stratum.lines.reduce((a, b) => (b.height > a.height ? b : a)) : undefined,
  );
  const legendLine = $derived(named !== null ? stratum.lines[named] : strongest);

  function pick(i: number) {
    if (i === target || !figure || !probe) return;
    clearTimeout(timer);
    const moving = document.documentElement.hasAttribute('data-motion');
    const to = figure.clientHeight - 20 + STEP * i;
    duration = moving ? Math.round(Math.abs(to - probe.getBoundingClientRect().height) * MS_PER_PX) : 0;
    target = i;
    const arrive = () => {
      read = i;
      named = null;
    };
    if (duration === 0) arrive();
    else timer = setTimeout(arrive, duration);
  }
</script>

<div class="readings">
  <div class="readings__figure" bind:this={figure}>
    <div class="readings__now">
      <p class="label muted">{t.probeOn} · <span class="readings__ink">{stratum.name}</span></p>
      <!-- Every aside sits in one cell, so the figure keeps the height of the
           longest and nothing below it moves when the reading changes. -->
      <div class="readings__asides">
        <p class="aside" aria-live="polite">{stratum.aside}</p>
        {#each strata as s (s.name)}
          <p class="aside readings__sizer" aria-hidden="true">{s.aside}</p>
        {/each}
      </div>
    </div>

    <div class="readings__plot" role="group" aria-label={t.spectrum}>
      {#each ticks as k (k)}
        <span class="readings__tick" style:left={at(k, 1)} aria-hidden="true"></span>
      {/each}
      {#each stratum.lines as l, i (l.element + l.line)}
        <button
          type="button"
          class="readings__line"
          style:left={at(l.keV, 12)}
          style:height="{Math.max(24, tall(l))}px"
          aria-label="{l.element} {l.line}, {l.keV.toFixed(2)} keV"
          onpointerenter={() => (named = i)}
          onpointerleave={() => (named = null)}
          onfocus={() => (named = i)}
          onblur={() => (named = null)}
        >
          <span style:height="{tall(l)}px"></span>
        </button>
      {/each}
      {#each labels as t (t.text)}
        <span class="label readings__tag" style:left={at(t.keV, 3)} style:bottom="{t.h + 12}px" aria-hidden="true"
          >{t.text}</span
        >
      {/each}
      {#if !stratum.lines.length}
        <p class="label muted readings__none">{t.noLines}</p>
      {/if}
      <span class="readings__axis" bind:clientWidth={axis} aria-hidden="true"></span>
    </div>

    <!-- From 24px below the top of the figure, through the 4px painting
         surface, to the top of the pressed stratum. -->
    <span
      class="readings__probe"
      bind:this={probe}
      style:height="calc(100% - 20px + {STEP * target}px)"
      style:transition-duration="{duration}ms"
      aria-hidden="true"
    ></span>
  </div>

  <div class="readings__strata" role="group" aria-label={t.strata}>
    {#each strata as s, i (s.name)}
      <button
        type="button"
        class="readings__stratum"
        style:--stratum-ground={s.ground}
        style:--stratum-ink={s.ink}
        aria-pressed={i === target}
        onclick={() => pick(i)}
      >
        <span>{s.label}</span>
        {#if i === target}<span class="readings__mark" aria-hidden="true">{t.reading}</span>{/if}
      </button>
    {/each}
  </div>

  <p class="label readings__legend" aria-live="polite">
    <span class="muted">{t.line} ·</span>
    {legendLine ? `${legendLine.element} ${legendLine.line} · ${legendLine.keV.toFixed(2)} keV · ${legendLine.from}` : t.none}
  </p>
  <p class="caption readings__note">
    <strong>{t.caption.lead}</strong> {t.caption.text}<span class="js-only"> {t.caption.how}</span>
  </p>
</div>

<style>
  .readings {
    margin-top: clamp(56px, 6.4vw, 96px);
  }

  .readings__figure {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: clamp(272px, calc(560px - 20vw), 420px);
  }

  .readings__now {
    padding-left: var(--rail);
  }

  .readings__ink {
    color: var(--ink);
  }

  .readings__asides {
    display: grid;
    max-width: 640px;
    margin-top: 6px;
  }

  .readings__asides > * {
    grid-area: 1 / 1;
  }

  .readings__sizer {
    visibility: hidden;
  }

  /* The lines stand on the axis: up to 180px, their labels 12px above. */
  .readings__plot {
    position: relative;
    flex: 1 0 232px;
    margin-top: 16px;
  }

  .readings__axis {
    position: absolute;
    left: var(--rail);
    right: 0;
    bottom: 0;
    height: var(--rule);
    background: var(--ink);
  }

  .readings__tick {
    position: absolute;
    bottom: var(--rule);
    width: var(--hair);
    height: 8px;
    background: var(--muted);
  }

  /* A 24px target around each 6px line. */
  .readings__line {
    position: absolute;
    bottom: var(--rule);
    width: 24px;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
  }

  .readings__line > span {
    position: absolute;
    left: 9px;
    bottom: 0;
    width: 6px;
    background: var(--ink);
  }

  .readings__tag {
    position: absolute;
    white-space: nowrap;
  }

  .readings__none {
    position: absolute;
    left: var(--rail);
    bottom: 24px;
  }

  .readings__probe {
    position: absolute;
    z-index: 3;
    left: calc(var(--rail-line) - var(--beam) / 2);
    top: 24px;
    width: var(--beam);
    background: var(--vermilion);
    pointer-events: none;
    transition-property: height;
    transition-timing-function: linear;
  }

  /* The cross-section under the 4px painting surface. The strata keep their
     own colours at night. */
  .readings__strata {
    border-top: var(--rule) solid var(--ink);
  }

  .readings__stratum {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    height: 48px;
    margin: 0;
    padding: 0 16px 0 var(--rail);
    border: 0;
    border-bottom: var(--hair) solid var(--bone-black);
    background: var(--stratum-ground);
    color: var(--stratum-ink);
    font-family: var(--mono);
    font-size: var(--fs-label);
    line-height: var(--lh-label);
    letter-spacing: 0.06em;
    text-align: left;
    cursor: pointer;
  }

  .readings__stratum:last-child {
    border-bottom: 0;
  }

  .readings__stratum:focus-visible {
    position: relative;
    z-index: 2;
  }

  .readings__mark {
    flex-shrink: 0;
  }

  .readings__legend {
    margin-top: 16px;
  }

  .readings__note {
    margin-top: 8px;
    max-width: 720px;
    color: var(--muted);
  }

  .readings__note strong {
    font-weight: 700;
    color: var(--ink);
  }

  /* On the narrowest phones the longest stratum label still fits two lines
     beside READING. */
  @media (max-width: 374px) {
    .readings__stratum {
      gap: 8px;
      padding-right: 8px;
      font-size: 12px;
      letter-spacing: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .readings__probe {
      transition: none;
    }
  }
</style>
