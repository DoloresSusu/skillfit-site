# SkillFit

SkillFit is an open-source task-to-Skill advisor and lightweight Skill Arena.
It helps users answer one practical question:

> Which AI Agent Skill should I use for this concrete task?

Live site: https://skillfit-site.vercel.app
Submit a Skill or task: https://tally.so/r/D4X1AZ

This MVP is intentionally static:

- Next.js App Router
- Local curated data in `data/content.ts`
- No database
- No login
- No admin panel
- Submit page points to a Tally form

## Why This Exists

AI Agent Skills are becoming easier to create, but discovery is still fragmented.
SkillFit focuses on task fit, not generic popularity:

- What task is the user trying to complete?
- Which Skill fits that task?
- What evidence do we have?
- What are the failure modes?
- Which alternative should the user compare?

## Contributing

The simplest way to contribute is to submit:

- A Skill marketplace URL or GitHub repo
- The concrete task you used it for
- What worked and what failed
- Output samples or notes
- Arena comparison ideas

Use the form: https://tally.so/r/D4X1AZ

Code and content contributions can also be proposed through GitHub issues or pull
requests.

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

## License

MIT
