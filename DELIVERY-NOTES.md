# Blessing Onohije Igbadume — Portfolio Site: Delivery Notes

## What was built

A production-grade personal portfolio site for Blessing Onohije Igbadume (DevOps & Cloud Infrastructure Engineer), built from her résumé.

**Stack:** Next.js 16 (App Router, TypeScript) · Tailwind CSS 4 · MDX blog (Git-based content, no CMS account needed) · Vitest + Testing Library (unit) · Playwright + axe-core (e2e + automated WCAG 2.1 AA audit) · GitHub Actions (CI + Vercel deploy) · Vercel (hosting)

**Pages:** Home · About (experience, skills, education, certifications) · Projects (two case studies built from her real work achievements) · Résumé (on-page + downloadable PDF) · Blog (one starter post) · Contact (form with honeypot + rate limiting) · Privacy Policy · auto-generated sitemap.xml / robots.txt

**Quality bar met and verified, not just claimed:**
- `npm run build` — production build passes
- `npm run typecheck` — clean
- `npm run lint` — clean
- `npm run test` — 9/9 unit tests pass (content model integrity + contact form behavior)
- `npm run test:e2e` — 16/16 Playwright tests pass across all 7 pages, including a **real axe-core WCAG 2.1 AA scan per page** (this caught and fixed two real contrast violations during the build)

## Content model (the "Git-based CMS")

All content lives in typed data at `src/content/profile.ts` (experience, skills, education, certifications, case studies) and `src/content/blog/*.mdx` (blog posts). No hosted CMS account, API keys, or subscription needed to edit content — change the file, commit, done. If a hosted headless CMS (Sanity/Contentful) is wanted later, only `src/content/profile.ts` and `src/lib/blog.ts` need to change; page components stay the same.

## Known limitation of this delivery channel

This session deployed directly from the sandbox to Vercel via API, without a GitHub repository in between. Binary assets (the résumé PDF, a custom favicon) could not be included in that direct deploy call — they are in the source package delivered separately, and the fix is one step: push this repo to GitHub, connect the existing `blessing-igbadume-portfolio` Vercel project to it (or let `.github/workflows/deploy.yml` handle it with `VERCEL_TOKEN`/`VERCEL_ORG_ID`/`VERCEL_PROJECT_ID` as repo secrets), and the PDF and favicon deploy automatically on the next push. This also lights up the CI pipeline (`.github/workflows/ci.yml`) that's already written and waiting.

I could not independently confirm the live deployment's status from this sandbox (network egress here doesn't reach vercel.app, and the Vercel API calls I used to verify status didn't resolve the deployment) — please check the link directly; if it prompts a Vercel login or 404s, that's Vercel's default Deployment Protection on new projects, turned off in **Project → Settings → Deployment Protection**.

## Timeline & suggested next steps

| Stage | Status |
|---|---|
| Content extraction from résumé | Done |
| Site build (all pages, responsive, accessible) | Done |
| Automated testing (unit, e2e, a11y) | Done |
| CI/CD pipeline definition | Done (needs a GitHub repo to run) |
| Live deploy | Submitted — verify link, connect GitHub for full pipeline + binary assets |
| Real contact form delivery (currently logs server-side) | Wire in Resend/Postmark/SES — ~30 min |
| Custom domain | Optional — add in Vercel project settings |
| Real project case studies (repos, screenshots) | Add whenever ready — the site is built to take them |

## Cost estimate (ongoing)

- **Hosting (Vercel Hobby):** $0/month — sufficient for a personal portfolio's traffic.
- **Domain (optional custom domain):** ~$10–15/year if wanted, instead of the free `*.vercel.app` subdomain.
- **Transactional email for the contact form (optional):** Resend/Postmark free tiers cover a portfolio site's volume.
- **CMS (optional upgrade path):** not needed now; Sanity/Contentful free tiers if adopted later.

Total to keep this running indefinitely: **$0/month**, or ~$1/month amortized if a custom domain is added.
