# Going live

The new site replaces the old one when `new-web` is merged into `main`: the
merge deploys it. Until then everything stays on `new-web`, which is not pushed
while the content is placeholder and the consents are pending.

## 1. Before the merge

- **Content.** Everything in the team's go-live list is in (the shared doc
  "New website: what we need before launch",
  https://claude.ai/code/artifact/37f3dcc3-6b6f-4bac-8f18-c7d3f2616dd7), the
  placeholders in `docs/content-todo.md` are replaced, and every page has been
  read once more by the person responsible for it.
- **Legal.** A legal notice and a privacy notice are linked from every footer,
  and the application form carries its own privacy text.
- **Consent.** Everyone visible in a photo on the site (the team photo, the CERN
  photos, the bench photo, the Join cover) has agreed, and every team member
  with a card has `consent: true` in their file. Partners appear only with
  their agreement.
- **Checks on the branch** (`npm run check` and `npm run build` pass; then
  `npm run preview`):
  - every page at about 390 px and at 1440 px, by day and by night, and with
    the system's reduced motion turned on;
  - the Join page in English, Spanish and Valencian;
  - every link leads somewhere: no `#`, no placeholder address.

## 2. The merge

1. Push `new-web` to GitHub and open a pull request into `main`. The workflow
   checks and builds the branch on the pull request, without deploying it.
2. When the build is green and the team agrees, merge it. The push to `main`
   deploys the site in about two minutes (Actions › "Deploy Astro site to
   GitHub Pages").

GitHub Pages must be set to deploy from GitHub Actions (Settings › Pages ›
Source), as it already is for the current site.

## 3. After the deploy

On https://innova-physics-upv.github.io/:

- every page loads, and an address that does not exist shows the 404 page;
- the addresses used outside the site still work: `/email/marc-sanchis.jpg`,
  `/email/strip.png`, `/email/mark-tile.png`, `/dossier.pdf`, `/partners/`;
- `/sitemap-index.xml` and `/robots.txt` are there;
- a link shared on LinkedIn or Instagram shows the site's picture and title
  (LinkedIn's Post Inspector refreshes its copy);
- optionally, add the site to Google Search Console and submit the sitemap.

## If something goes wrong

Revert the merge commit on `main` (`git revert -m 1 <merge commit>`) and push:
the workflow deploys the previous site again.
