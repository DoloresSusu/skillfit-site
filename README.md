# SkillFit MVP

SkillFit is a lightweight task-to-Skill advisor. This MVP is intentionally static:

- Next.js App Router
- Local curated data in `data/content.ts`
- No database
- No login
- No admin panel
- Submit page points to `NEXT_PUBLIC_SUBMIT_URL` or fallback email

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Deploy to Vercel and set:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
NEXT_PUBLIC_SUBMIT_URL=https://your-tally-form.example
```

