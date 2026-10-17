// MENU on narrow screens (Header.astro): opens and closes the masthead's
// links in a panel under the band. Escape, a click outside or on a link, or
// a window wide enough for the full band closes it again.
const masthead = document.querySelector<HTMLElement>('[data-masthead]');
const button = masthead?.querySelector<HTMLButtonElement>('[data-menu-button]');

if (masthead && button) {
  const panel = document.getElementById(button.getAttribute('aria-controls') ?? '');
  const isOpen = () => button.getAttribute('aria-expanded') === 'true';
  const set = (open: boolean) => {
    button.setAttribute('aria-expanded', String(open));
    masthead.toggleAttribute('data-open', open);
  };

  button.addEventListener('click', () => set(!isOpen()));
  panel?.addEventListener('click', (event) => {
    if ((event.target as Element | null)?.closest('a')) set(false);
  });
  document.addEventListener('click', (event) => {
    if (isOpen() && !masthead.contains(event.target as Node)) set(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      set(false);
      button.focus();
    }
  });
  window.matchMedia('(min-width: 1120px)').addEventListener('change', (event) => {
    if (event.matches) set(false);
  });
}
