# engineerwithoutfear.github.io

Personal portfolio website built with Astro.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when you push to the `master` branch.

### Manual Deployment

If you need to deploy manually:

1. Build the site: `npm run build`
2. The `dist/` folder contains the static files ready for deployment

### GitHub Pages Setup

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions" (not "Deploy from a branch")
3. The workflow will automatically deploy on push to `master` or `main`

The site will be available at: https://engineerwithoutfear.github.io
