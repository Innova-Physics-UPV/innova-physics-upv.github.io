// The DARK switch. The head script has already applied a remembered mode
// before the first paint; this keeps the switch's state in step and lets the
// reader override the system setting. Following the system stays silent.

const root = document.documentElement;
const system = window.matchMedia('(prefers-color-scheme: dark)');

export type Mode = 'light' | 'dark';

/** The mode on screen: the reader's choice, or else the system's. */
export function currentMode(): Mode {
  const chosen = root.getAttribute('data-mode');
  if (chosen === 'light' || chosen === 'dark') return chosen;
  return system.matches ? 'dark' : 'light';
}

function syncSwitches(): void {
  const dark = String(currentMode() === 'dark');
  document.querySelectorAll<HTMLButtonElement>('[data-dark-switch]').forEach((button) => {
    button.setAttribute('aria-pressed', dark);
  });
}

export function setMode(next: Mode): void {
  root.setAttribute('data-mode', next);
  try {
    localStorage.setItem('mode', next);
  } catch {
    // Private windows may refuse storage: the switch still works for this page.
  }
  syncSwitches();
}

/** Replaced by the raster-scan transition (M7) where the browser supports it. */
export let applyMode: (next: Mode) => void = setMode;

export function setModeApplier(applier: (next: Mode) => void): void {
  applyMode = applier;
}

document.addEventListener('click', (event) => {
  const button = (event.target as Element | null)?.closest('[data-dark-switch]');
  if (!button) return;
  applyMode(currentMode() === 'dark' ? 'light' : 'dark');
});

system.addEventListener('change', syncSwitches);
syncSwitches();
