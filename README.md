# Official Web Portfolio (Astro + Tailwind)

Live: https://official-web-portfolio.vercel.app

## Requirements
- Node.js 18+
- pnpm 8+ (Corepack enabled)

## Quick start (PowerShell)
```powershell
corepack enable; corepack prepare pnpm@latest --activate
pnpm install
pnpm dev
# build & preview
pnpm build
pnpm preview --host
```
If port 4321 is used: `pnpm dev --port 4327`.

## Edit content
- Site info/socials: `src/data/site.ts`
- Experience/Projects/Skills: `src/data/*`
- Home layout: `src/pages/index.astro`
- Resume PDF: replace `public/resume.pdf`

## Contact form (email)
Runs at `/api/contact` on Vercel. Set these env vars in Vercel:
- `RESEND_API_KEY`
- `CONTACT_TO`
- `CONTACT_FROM`

## Scripts
- `pnpm dev` – start dev server
- `pnpm build` – build to `dist/`
- `pnpm preview` – preview production build

## Deploy
Push to Git → import on Vercel → set env vars → deploy. Custom domain optional (can stay on vercel.app).

## License
Personal project. All rights reserved.

