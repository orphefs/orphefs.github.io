# orphefs.github.io

Personal site for **Orfeas Kypris** — Senior ML Platform Engineer · Electromagnetism & FEM simulation.
Built with Vite + React + TypeScript, terminal/dark-mode aesthetic. Three pages: bio, projects, contact.

## Develop with Docker (recommended)

```bash
docker compose up --build
```

Open <http://localhost:5173>. Source is bind-mounted, so edits hot-reload.

Stop with `Ctrl-C`; tear down with `docker compose down`.

## Develop without Docker

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build / preview production output

```bash
npm run build    # outputs to dist/ (+ copies index.html -> 404.html for SPA routing)
npm run preview  # serve the production build locally
```

## Deploy

Pushing to `main` (or `master`) triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. Enable it once in the repo settings:
**Settings → Pages → Build and deployment → Source: GitHub Actions.**

## Structure

```
src/
  data/        profile, projects, research (publications, patents, timeline) — edit content here
  pages/       Bio.tsx, Projects.tsx, Contact.tsx
  components/  Layout.tsx (nav + shell)
  index.css    terminal theme (CSS variables at top)
public/
  images/      project thumbnails + avatar
  assets/      resume pdf
```

## Editing content

All copy lives in `src/data/*.ts` — no need to touch components to update projects, the
publication list, patents, or the role/tagline.
