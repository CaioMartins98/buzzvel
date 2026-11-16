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

Test coverage: component tests for `Header` (brand, mobile menu,
accessibility), `Contact` (validation + success state), `Skills` (category
cards) and `CountUp` (count-up + reduced-motion). Accessibility is checked
with `jest-axe`.

### Continuous integration

A GitHub Actions workflow (`.github/workflows/ci.yml`) runs `lint`,
`typecheck`, `test` and `build` on every push and pull request.

### Lighthouse / performance

```bash
npm run build && npm start   # then, in another terminal:
npx lighthouse http://localhost:3000 --preset=desktop --output-path=./lighthouse.html --chrome-flags="--headless"
```

### Deploy (Vercel)

Push the repository to GitHub and import it on Vercel — Next.js is detected
automatically (no build config needed). `vercel.json` adds security headers.

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
    layout.tsx        # Root layout, Inter font, page metadata
    page.tsx          # Composes all sections
    globals.css       # Tailwind theme tokens + base styles
  components/
    Header.tsx        # Navigation + mobile menu
    Hero.tsx          # Hero with headline, CTAs and floating stats
    Skills.tsx        # "Find your next skill" — 4 category cards
    FeaturedCourse.tsx# Featured course (full-bleed blue panel)
    HowItWorks.tsx    # "How Luma works" — 3 steps
    Testimonial.tsx   # Quote + key numbers
    People.tsx        # "Meet students & teachers" photo grid
    Contact.tsx       # Contact info + form
    Cta.tsx           # Final call-to-action
    Footer.tsx        # Footer with link columns
    Container.tsx     # Shared max-width wrapper
    ui/Button.tsx     # Reusable typed button component
  lib/
    data.ts           # Mock data (categories, steps, stats, footer links)
public/images/        # Images extracted from the design PDFs (optimized)
```

