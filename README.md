# Airbridge Devs website

Source for [airbridgedevs.com](https://airbridgedevs.com/).

Built with Vite, TypeScript, React, shadcn-ui and Tailwind CSS.

## Local development

Requires Node.js and npm.

```sh
npm i
npm run dev
```

## Deployment

Pushing to `main` builds the site and deploys `dist/` to cPanel over FTP via GitHub Actions (`.github/workflows/deploy.yml`).
