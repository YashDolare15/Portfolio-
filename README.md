# Yash Dolare — Cloud & DevOps Portfolio

Original React + Vite portfolio design preserved. GitHub Pages deployment is configured with GitHub Actions for the `YashDolare15/Portfolio-` repository.

## Run locally

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds `dist/` and deploys it to GitHub Pages when code is pushed to `main`. In repository Settings → Pages, select **GitHub Actions** as the source.

The existing resume PDF is retained under `public/cv/`.
