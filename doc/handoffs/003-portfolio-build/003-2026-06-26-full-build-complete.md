# Session Handoff — 2026-06-26

> **OUT OF PREVIOUS SESSION — NEW SESSION START**
>
> Read this file first. It contains everything from the prior session.

---

## Project Overview

**يوسف (Joe)** بيبني **Flutter Developer Portfolio Website** باستخدام **Angular 21**.
الهدف: Portfolio احترافي Production-Ready لدعم Job Hunting.

**`context/me.json`** هو الـ Single Source of Truth لكل البيانات — لا تخترع أي بيانات غير موجودة فيه.

---

## What Was Done

- ✅ Angular 21 project scaffolded (`ng new portfolio --standalone --routing=false`)
- ✅ Git identity configured globally (youssefemad63.ye@gmail.com / Youssef Emad)
- ✅ Tailwind CSS v4 installed (`tailwindcss @tailwindcss/postcss postcss`)
- ✅ `.postcssrc.json` created with `@tailwindcss/postcss` plugin
- ✅ `src/styles.css` replaced with full Tailwind v4 `@import` + `@theme` design tokens + global animations
- ✅ `src/index.html` replaced with full SEO meta tags (OG, Twitter Card, Inter font, description)
- ✅ `vercel.json` created for Vercel deployment
- ✅ `angular.json` updated: added `src/assets` → `/assets` output mapping + disabled font inlining
- ✅ 23 WebP mockup assets copied to `src/assets/mockups/` (extracted from `context/portfolio-assets-webp.zip`)
- ✅ `src/app/core/data/portfolio.data.ts` — full typed data file from `me.json` (3 verified projects, 3 experience items, 4 socials)
- ✅ `src/app/shared/components/section-title/section-title.ts` — numbered header component
- ✅ `src/app/shared/components/icon/icon.ts` — SVG icon component (github, linkedin, upwork, email, external, arrow-right)
- ✅ `src/app/shared/directives/reveal.directive.ts` — IntersectionObserver scroll animation directive
- ✅ `src/app/sections/navbar/navbar.ts + navbar.css` — sticky, smooth-scroll, hamburger mobile menu
- ✅ `src/app/sections/hero/hero.ts` — full-viewport, fade-in animation, CTAs, social icons
- ✅ `src/app/sections/about/about.ts` — bio text, photo placeholder ("YE" initials), offset border decoration
- ✅ `src/app/sections/skills/skills.ts` — 4 category cards with accent chip badges
- ✅ `src/app/sections/projects/projects.ts` — 3-col grid at lg
- ✅ `src/app/sections/projects/project-card/project-card.ts` — image carousel (prev/next/dots, no lib), status badge, tech chips, links
- ✅ `src/app/sections/experience/experience.ts` — vertical timeline with spine line + accent dots
- ✅ `src/app/sections/contact/contact.ts` — centered, mailto button, social rows
- ✅ `src/app/sections/footer/footer.ts` — single-line footer
- ✅ `src/app/app.ts` — updated to import all 8 sections
- ✅ `src/app/app.html` — replaced default scaffold with section orchestration
- ✅ `src/app/app.css` — cleared
- ✅ Build verified: `npm run build` ✅ — 200KB initial bundle (under 500KB limit), no TS errors
- ✅ SSR verified: all sections (`Hi, my name is`, Books Platform, Sporton, VetLink, `Get In Touch`) present in prerendered HTML
- ✅ Git commit: `feat: complete portfolio — Angular 21 + Tailwind v4, all sections built`
- ✅ `.gitignore` updated: `context/` and `src/assets/mockups/` excluded

---

## ⚠️ Critical Issue: Assets NOT in Git

**Problem:** `src/assets/mockups/` is in `.gitignore` because git objects permission errors on Windows blocked staging large binary files. This means **Vercel will deploy without the 23 WebP images** — project cards will show broken images.

**Fix options (pick one in the new session):**

### Option A — Fix git permissions and add assets (simplest if it works)
```powershell
# Try running PowerShell as Administrator, then:
icacls "d:\Portfolio\portfolio\.git\objects" /grant "Users:(OI)(CI)F" /T
# Then:
git rm -r --cached src/assets/mockups/
# Remove the line from .gitignore
git add src/assets/mockups/
git commit -m "chore: add WebP mockup assets"
```

### Option B — Move assets to `public/` folder (Angular serves public/ automatically, no angular.json change needed)
```powershell
New-Item -ItemType Directory -Force -Path "d:\Portfolio\portfolio\public\assets\mockups"
Copy-Item "d:\Portfolio\portfolio\src\assets\mockups\*" "d:\Portfolio\portfolio\public\assets\mockups\"
# Remove src/assets/mockups/ folder
# Update angular.json: remove the src/assets entry (public/ is already served)
# Image paths in portfolio.data.ts use '/assets/mockups/...' — they stay the same
# Remove /src/assets/mockups/ from .gitignore
```

### Option C — Use Git LFS for binary files
```bash
git lfs install
git lfs track "src/assets/mockups/*.webp"
git add .gitattributes
git add src/assets/mockups/
git commit -m "chore: add WebP assets via LFS"
```

**Recommendation: Option B** — Moving to `public/` is the cleanest Angular pattern. No git permissions headache, no LFS setup. The `public/` folder is already in git (contains `favicon.ico`).

---

## Bugs Found

| # | Bug | Severity | Location | Fix |
|---|---|---|---|---|
| 1 | WebP assets missing from git (blocked by Windows permissions on `.git/objects`) | **BLOCKER for deploy** | `.gitignore` line `/src/assets/mockups/` | See "Critical Issue" section above |
| 2 | Font inlining fails (SSL cert issue on this machine) | Fixed | `angular.json` | Already fixed: `"optimization": { "fonts": { "inline": false } }` in production config |
| 3 | Navbar `hidden md:block` class for Resume button uses custom CSS, not Tailwind v4 | Minor | `navbar.css` | The `.hidden` class in `navbar.css` overrides Tailwind's utility. Since Tailwind v4 is active, this works, but it's a CSS redundancy. No functional impact. |

---

## Files Changed

| File | Change | Why |
|---|---|---|
| `src/styles.css` | Full replacement — Tailwind v4 + @theme + animations | Design system setup |
| `src/index.html` | Full replacement — SEO, OG tags, Inter font | SEO + branding |
| `src/app/app.ts` | Full replacement — imports 8 section components | App orchestration |
| `src/app/app.html` | Full replacement — renders all sections | Clean single-page layout |
| `src/app/app.css` | Cleared (comment only) | All styles in styles.css |
| `angular.json` | Added `src/assets` asset glob + disabled font inlining | Assets path + SSL workaround |
| `.gitignore` | Added `/context/` and `/src/assets/mockups/` | Exclude large binaries |
| `package.json` | Added tailwindcss, @tailwindcss/postcss, postcss | Tailwind v4 setup |
| `.postcssrc.json` | Created | Tailwind v4 PostCSS config |
| `vercel.json` | Created | Vercel deployment config |
| `src/app/core/data/portfolio.data.ts` | Created | Typed data layer |
| `src/app/shared/components/section-title/section-title.ts` | Created | Reusable section header |
| `src/app/shared/components/icon/icon.ts` | Created | SVG icon component |
| `src/app/shared/directives/reveal.directive.ts` | Created | Scroll reveal animations |
| `src/app/sections/navbar/navbar.ts` | Created | Sticky nav + hamburger |
| `src/app/sections/navbar/navbar.css` | Created | Navbar-specific styles |
| `src/app/sections/hero/hero.ts` | Created | Full-viewport hero |
| `src/app/sections/about/about.ts` | Created | Bio + photo placeholder |
| `src/app/sections/skills/skills.ts` | Created | Skills grid + chips |
| `src/app/sections/projects/projects.ts` | Created | Projects grid |
| `src/app/sections/projects/project-card/project-card.ts` | Created | Carousel + card |
| `src/app/sections/experience/experience.ts` | Created | Timeline |
| `src/app/sections/contact/contact.ts` | Created | Contact section |
| `src/app/sections/footer/footer.ts` | Created | Footer |

---

## Files Audited (no changes)

| File | Checked For | Result |
|---|---|---|
| `src/main.ts` | Compatibility with standalone app | ✅ Untouched |
| `src/main.server.ts` | SSR entry point | ✅ Untouched |
| `src/server.ts` | Express SSR server | ✅ Untouched |
| `src/app/app.config.ts` | Hydration config | ✅ Untouched — `provideClientHydration(withEventReplay())` already present |
| `src/app/app.routes.server.ts` | Prerender config | ✅ Untouched — prerendering `**` |
| `context/me.json` | All portfolio data | ✅ Read in full — all data sourced from it |

---

## Pending Tasks

- [ ] **Fix assets in git** — choose Option B (move to `public/assets/mockups/`) and push
- [ ] **Visual review in browser** — run `npm run serve:ssr:portfolio` → open `localhost:4000` → inspect every section
- [ ] **Responsive check** — DevTools at 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] **Photo** — replace About section placeholder with real photo at `src/assets/photo.webp` (or `public/photo.webp`)
- [ ] **Resume PDF** — Navbar Resume button has `href="#"` with `// TODO` comment — add PDF link when ready
- [ ] **Create GitHub repo** — `github.com/youssefemadeldn/portfolio` (currently no remote set)
- [ ] **Deploy to Vercel** — Import GitHub repo, Framework: Other, let `vercel.json` handle config
- [ ] **VetLink extra screens** — Cart/Dashboard screens don't exist yet — currently showing only 3 screens in carousel (fine for now)
- [ ] **Post-deploy verification** — check all 23 images load, no console errors, SSR HTML has content

---

## What's Next (ordered)

1. **Fix assets** — run `npm run serve:ssr:portfolio` first to see how it looks locally. If images load locally (they should, `src/assets/` is served by dev server), then fix the git issue before pushing. Move `src/assets/mockups/` to `public/assets/mockups/` — simplest path to Vercel working.

2. **Visual review** — open `localhost:4000` and go through every section. Note any design or layout issues.

3. **Push to GitHub** — create repo, set remote, push main branch.

4. **Deploy to Vercel** — import from GitHub, verify first deploy succeeds, check images load from CDN.

5. **Iterate on design** — after seeing it live, adjust colors, spacing, font sizes, or content as needed.

---

## Angular 21 Patterns Used (for the new session)

- Standalone components: `standalone: true` in all components
- Inputs: `input.required<T>()` and `input<T>(default)` (signal-based)
- Computed: `computed(() => ...)` for `statusClass` in project-card
- Template syntax: `@for`, `@if`, `@switch` (new control flow)
- DI: `inject(PLATFORM_ID)` — used everywhere instead of constructor injection
- SSR guard: `isPlatformBrowser(this.platformId)` before any DOM/window access
- No NgModules, no Router, no Services — data is a plain exported constant

---

## Design System (FIXED — never change these)

```css
@theme {
  --color-bg:      #0F1117;
  --color-surface: #161B27;
  --color-accent:  #2DD4BF;
  --color-text:    #CCD6F6;
  --color-muted:   #8892B0;
}
```

Dark theme. Teal/Cyan accent. Inspired by Brittany Chiang.

---

## Project Structure (current state)

```
src/
├── app/
│   ├── core/data/portfolio.data.ts          ← data source
│   ├── shared/
│   │   ├── components/section-title/         ← reusable
│   │   ├── components/icon/                  ← 6 SVG icons
│   │   └── directives/reveal.directive.ts    ← scroll animations
│   ├── sections/
│   │   ├── navbar/navbar.ts + navbar.css
│   │   ├── hero/hero.ts
│   │   ├── about/about.ts
│   │   ├── skills/skills.ts
│   │   ├── projects/projects.ts
│   │   ├── projects/project-card/project-card.ts
│   │   ├── experience/experience.ts
│   │   ├── contact/contact.ts
│   │   └── footer/footer.ts
│   ├── app.ts  app.html  app.css
│   ├── app.config.ts (untouched)
│   └── app.routes.server.ts (untouched)
├── assets/mockups/          ← 23 WebP files (NOT in git — see critical issue)
├── index.html
├── styles.css
└── server.ts (untouched)
.postcssrc.json
vercel.json
```

---

## Key References

- `context/me.json` — Single Source of Truth (read before editing any data)
- `context/002-2026-06-26-assets-done-angular-next.md` — previous session handoff (assets + design decisions)
- `context/portfolio-assets-webp.zip` → `webp_ready/` subfolder — 23 WebP mockups source
- `src/app/core/data/portfolio.data.ts` — current live data (typed from me.json)
- `doc/handoffs/003-portfolio-build/003-2026-06-26-full-build-complete.md` — this file

---

## Clarifications & Decisions

| Question | Answer |
|---|---|
| What should the Resume button link to? | Leave as `href="#"` placeholder — replace with PDF link later |
| Do you have a personal photo for the About section? | No photo yet — use placeholder (styled div with "YE" initials) |
| Template or from scratch? | From scratch — cleaner, faster customization |
| Routing or single page? | Single page, no Router — smooth scroll navigation |
| Deployment target? | Vercel via GitHub |
| CSS framework? | Tailwind CSS v4 (no config file, uses @theme) |
| Angular version? | Angular 21 Standalone |

---

## Notes

- Joe uses Arabic + English keywords mixed in conversation — reply in the same style
- `BublisherDetailsScreen` has a typo (Bublisher not Publisher) — keep filenames as-is, don't rename
- `ChatConversiotionScreen` also has a typo — keep as-is
- The Windows machine (MSI GF63) has a persistent `.git/objects` write permission issue with large binary files — this is why assets were excluded from git
- Sporton and VetLink are NOT live — never say they are (me.json `ai_rules` strict rule)
- Books Platform IS live on Play Store + App Store as of Jun 2026
- Project card images use `object-fit: contain; background: #0F1117` — this intentionally letterboxes portrait mobile mockups in the 16:9 carousel container
- The `context/assets-preview/` folder was created during this session as an extraction temp folder — it can be deleted
