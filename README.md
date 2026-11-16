# Luma — Front-End Engineer Coding Challenge (Buzzvel, Nov 2026)

A fully responsive landing page for **Luma**, an online learning platform,
rebuilt from the supplied Figma design (desktop + mobile PDF exports).

Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

---

## Getting Started

### Requirements

- Node.js 20+ (developed on Node 26)
- npm

### Install

```bash
npm install
```

### Run (development)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build (production)

```bash
npm run build
```

### Start (production server)

```bash
npm start
```

### Lint

```bash
npm run lint
```

### Tests

```bash
npm test          # run once (vitest)
npm run test:watch  # watch mode
npm run typecheck   # tsc --noEmit
```

Test coverage: 30 unit/component tests (Vitest + Testing Library) covering
every section (`Header`…`Footer`), every UI primitive (`Button`, `CountUp`,
`Reveal`, …) and the auth components (`SocialButtons`, `UserMenu`).
Accessibility is checked with `jest-axe`.

### Continuous integration

A GitHub Actions workflow (`.github/workflows/ci.yml`) runs `lint`,
`typecheck`, `test` and `build` on every push and pull request.

### Lighthouse / performance

```bash
npm run build && npm start   # then, in another terminal:
npx lighthouse http://localhost:3000 --preset=desktop --output-path=./lighthouse.html --chrome-flags="--headless"
```

A desktop Lighthouse run is included at [`lighthouse.html`](./lighthouse.html):
Performance **100**, Accessibility **100**, Best Practices **100**, SEO **100**.

### Deploy (Vercel)

Push the repository to GitHub and import it on Vercel — Next.js is detected
automatically (no build config needed). `vercel.json` adds security headers.

Live preview: [https://buzzvel-alpha.vercel.app/](https://buzzvel-alpha.vercel.app/)

### Storybook

```bash
npm run storybook        # dev server at localhost:6006
npm run build-storybook  # static build
```

Stories: `Button` and `AvatarStack` (`src/components/ui/*.stories.tsx`).

---

## Project structure

```
src/
  app/
    layout.tsx                  # Root layout, fonts, page metadata
    page.tsx                    # Composes all sections
    globals.css                 # Tailwind theme tokens + base styles
    login/page.tsx              # Login (Better Auth)
    signup/page.tsx             # Sign up (Better Auth)
    api/auth/[...all]/route.ts  # Auth handler
  components/
    sections/                   # one folder per page section
      Header/ Hero/ Skills/ FeaturedCourse/ HowItWorks/
      Testimonial/ People/ Contact/ Cta/ Footer/
    ui/                         # reusable primitives (typed props)
      Button/ AvatarStack/ Container/ CountUp/ Eyebrow/ Reveal/
    auth/                       # auth UI
      SocialButtons/            # Google sign-in button
      UserMenu/                 # avatar + logout dropdown
  lib/
    data.ts                     # Mock data (categories, steps, stats, links)
    auth.ts                     # Better Auth instance (stateless, no DB)
    auth-client.ts              # Better Auth client
  test/setup.tsx                # Test setup (mocks, jest-dom, IntersectionObserver)
public/images/                  # Images from the design
```

## Key decisions

- **Next.js App Router + TypeScript + Tailwind CSS**, as required by the brief.
- **Colocated component folders** — each component lives in its own folder
  (`index.tsx` + `*.test.tsx`, plus `*.stories.tsx` where a story exists) so
  implementation, tests and stories stay together.
- **All copy/content centralized** in `src/lib/data.ts` — a single `content`
  object holds headings, paragraphs, button labels, emails and course meta,
  alongside the `categories`/`steps`/`stats`/`footer`/`nav`/`avatar` arrays —
  no backend/CMS, per the brief.
- **Stateless authentication** via Better Auth (Google OAuth only, JWT/cookie
  session, no database) so the "Log in" / "Sign up" CTAs actually work without
  a backend.
- **Animations** (`Reveal` scroll-in, `CountUp` numbers) use
  `IntersectionObserver` and respect `prefers-reduced-motion`.
- **Accessibility first**: semantic landmarks, skip link, keyboard-friendly
  controls, alt text and `aria-*` attributes, verified with `jest-axe`.

## Known gaps

- Footer link columns point to `#` (there are no real pages for "Careers",
  "Journal", "Terms", …).
- The "People" section renders a single collage image (`Col.svg`) — confirm it
  matches the Figma design (it is described as a photo grid).
- Authentication is an extra on top of the brief; it requires env vars
  (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `BETTER_AUTH_SECRET`) to work.

## Time spent

Approximately 8 hours (design implementation, components + tests, Storybook,
authentication and CI setup).

## AI tools used

An AI coding assistant (Cline) was used to scaffold and refactor components,
write tests, and configure authentication and CI. Every generated change was
reviewed and verified by running `npm run typecheck`, `npm run lint`,
`npm test` and `npm run build`, plus the GitHub Actions CI workflow.

