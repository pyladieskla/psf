# PSF Grant: Refugee Python Skills Workshop

The event website for the PyLadies Kampala Refugee Python Skills Workshop in Arua, Uganda, a
program funded through its own Python Software Foundation grant application, separate from the
main PyLadies Kampala chapter site ([pyladies-kampala-netlify](../pyladies-kampala-netlify)).
This site fulfills that grant's "Event website" requirement.

Content is sourced directly from the chapter's PSF grant application for this program and its
accompanying web copy. The objective, curriculum, mentor ratio, and supporter credits all come
from that source.

## Stack

- Next.js 16 (App Router, JavaScript, static export)
- Tailwind CSS v4
- Deploy target: GitHub Pages, via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying to GitHub Pages

This repo is set up to deploy automatically on every push to `main`, via
`.github/workflows/deploy.yml`.

One-time setup in the GitHub repo settings: go to **Settings → Pages** and set **Source** to
**GitHub Actions**. After that, pushing to `main` builds the site and publishes it to
`https://pyladieskla.github.io/psf/`.

The build uses `next build` with `output: "export"` (see `next.config.mjs`) to produce a fully
static site in `out/`, with `basePath`/`assetPrefix` set to `/psf` only during the GitHub
Actions build, since this is a project page rather than the repo root.

To build the static export locally for a manual check:

```bash
GITHUB_ACTIONS=true npm run build
```

The output lands in `out/`.

## Structure

```
app/
  layout.js      # fonts, metadata
  page.js         # the whole one-page site
  globals.css     # brand color tokens (Tailwind v4 @theme)
components/
  Nav.js          # sticky nav with mobile menu (client component)
  BackToTop.js    # scroll-to-top button (client component)
.github/workflows/
  deploy.yml      # build and deploy to GitHub Pages on push to main
```

## Updating content

Everything lives in `app/page.js` as plain JSX. The `STATS`, `CURRICULUM`, `WHO_ITS_FOR`, and
`SUPPORTERS` arrays near the top of the file are the easiest places to make small edits without
touching layout markup.
