# Qais Alqaissi Portfolio

Personal portfolio for **Qais M. Alqaissi** — cybersecurity graduate, R&D acting team lead, and full-stack developer. Built with Next.js, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint

## Content

Resume copy and links live in [`src/lib/content.ts`](src/lib/content.ts). Update that file to change experience, projects, skills, or contact details.

## Deploy

Ready for [Netlify](https://app.netlify.com/start):

1. Push this repo to GitHub/GitLab.
2. In Netlify: **Add new site → Import an existing project**.
3. Use the defaults from `netlify.toml` (`npm run build`, publish `.next`).
4. Deploy. Netlify’s Next.js adapter is applied automatically.

Local production check:

```bash
npm run build
npm start
```

Also works on [Vercel](https://vercel.com/new) with default Next.js settings.
