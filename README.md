# MicBridge — landing site

Marketing / intro website for **MicBridge**: speak on your iPhone and the text is typed
into the focused app on your **Mac or Windows** PC, plus two-way end-to-end encrypted
file transfer. On-device, no cloud, no account.

- **Live:** https://micbridge.vercel.app
- **Downloads:** GitHub Releases (Windows zips; Apple-notarized macOS .dmg)

## Stack

- Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Geist
- Bilingual (繁中 / English) via a client-side toggle (`lib/copy.ts`)
- iPhone screenshots are real captures (iOS Simulator) wrapped in CSS device frames

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Hosted on Vercel (auto-deploys from `main`). Binaries are attached to the GitHub
Release `v1.0.0` and linked via `releases/latest/download/<asset>`.

---
Part of the MicBridge project. The apps themselves live in a separate repository.
