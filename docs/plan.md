# Portfolio Rebuild – Project Plan

Last updated: 2025-08-12

## Goals
- Premium, minimalist, fast personal site inspired by: brittanychiang.com, mattfarley.ca, lauren-waller.com/work, olaolu.dev, gavinnegron.dev
- Showcase your real experience (from CV) with crisp case studies and metrics
- Smooth micro-interactions and tasteful motion (no jittery/overdone effects)
- Excellent Lighthouse scores (Perf/SEO/Best Practices/Accessibility)

## Requirements (from user)
- Use your CV content and profile photo
- Modern, premium look with flowing animations
- Highlight projects and work experience; easy to skim, easy to dig deeper
- Start fresh (previous project deleted)

## Design Direction
- Art direction: dark-first with subtle color accents + elegant gradients; spacious layout; strong typography
- Patterns: sticky header, sectioned long-scroll, spotlight project cards, timeline experience, contact/footer with social
- Motion language: gentle fade/slide on enter, staggered lists, parallax hero accent; reduced motion respected

## Information Architecture
- Home (single-page with section anchors):
  - Hero (name, role, short value prop, CTA to Contact/Email, profile photo)
  - About (concise bio, key skills from CV)
  - Experience (timeline with 3–5 roles; impacts + metrics)
  - Projects (2–6 highlight cards; each with role, stack, links)
  - Contact (direct email CTA; socials)
  - Footer (copyright, theme toggle)
- Optional: /projects/[slug] for detailed case studies; /resume (PDF)

## Tech Stack – Options
1) Astro + Islands (Chosen)
   - UI: Astro + React islands
   - Styling: Tailwind CSS + CSS variables for theming
   - Motion: Motion One (small, declarative) or CSS-powered
   - Content: MDX for projects; JSON/YAML for timeline
   - Pros: Blazing fast, SSR/SSG flexibility, minimal JS
   - Cons: Slightly different mental model than full SPA

2) Next.js (App Router, static export)
   - UI: React/TypeScript
   - Styling: Tailwind CSS
   - Motion: Framer Motion (or Motion One to keep bundle small)
   - Pros: Familiar, first-class routing, easy API routes for forms
   - Cons: More client JS by default (we’ll optimize)

Decision locked: Astro + Tailwind + Motion One. If form backend is needed without server, we’ll use Formspree or Resend + Vercel.

## Accessibility & Performance
- WCAG AA color contrast; semantic HTML; skip links; focus styles
- Reduced motion via prefers-reduced-motion
- Image optimization (responsive, AVIF/WebP); prefetch/respect priorities
- Content lazy-loading; code-splitting islands (Astro) or dynamic imports (Next)

## Branding & Visual System
- Typography (example):
  - Headings: Inter Tight or Satoshi
  - Body: Inter or Geist
- Palette: dark gray background; accent gradient (e.g., teal → purple)
- Components: buttons, chips, cards, timeline, badges, code-like tags

## Content Mapping (from CV)
- Hero: name, title, 1–2-line value prop
- About: 4–6 sentences + key skills (top 8–12)
- Experience: 3–5 roles; 3 bullet impacts each, with metrics
- Projects: 2–6; each: problem → approach → result; stack; links
- Resume: link to PDF (we’ll place your CV in /public/resume.pdf)

## Pages/Sections & Components
- Layout: Header (sticky), Footer, ThemeToggle
- Sections: Hero, About, Experience, Projects, Contact
- Reusable: Badge, Button, Card, TimelineItem, SectionHeading

## SEO & Analytics
- Meta tags, Open Graph/Twitter cards, JSON-LD profile
- Sitemap, robots.txt, canonical URLs
- Analytics: Vercel Analytics or Plausible

## Contact Form
- Option A (static): Formspree (no backend)
- Option B (Next.js): API route + SMTP/Resend

## Delivery Milestones
1) Confirm stack + visual direction (palette + type)
2) Scaffold project, baseline layout, theme, and components
3) Implement sections with placeholder copy
4) Integrate CV content; add your photo; link resume PDF
5) Motion polish + responsive QA
6) SEO/Perf/Accessibility pass; Lighthouse + Wave
7) Deploy to Vercel/Netlify; set custom domain

## Open Decisions
- Choose stack: Astro or Next.js
- Accent color/gradient preference
- Analytics provider (None/Vercel/Plausible)
- Form handling (Formspree vs API)

## Assets Needed
- Profile photo (hi-res, square preferred); file name/path
- Confirm CV PDF for /resume
- Social links (GitHub, LinkedIn, X, email)

## Task Checklist
- [x] Stack selected (Astro + Tailwind + Motion One)
- [ ] Brand palette & typography locked
- [x] Project scaffolded
- [x] Layout + Theme toggle done
- [x] Sections built (Hero/About/Experience/Projects/Contact) – placeholders
- [ ] Content migrated from CV
- [x] Motion baseline (reveal on scroll)
- [ ] SEO/Perf/Accessibility
- [ ] Deploy & domain
