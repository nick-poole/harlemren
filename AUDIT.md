# Codebase Audit: The New Harlem Renaissance

**Date:** 2026-02-02
**Branch:** `claude/codebase-audit-Tdhod`
**Project:** Static HTML/SCSS/JS website for a barbershop brand
**Total size:** ~101MB (30MB images, 21MB video, rest is code/assets)
**Pages:** `index.html`, `ausome-cuts.html`, plus legal pages

---

## RANKED ISSUES (Critical → Low)

---

### #1 — CRITICAL BUG: Open Graph / Twitter URLs have `.com.com` typo

**Files:** `index.html:20`, `index.html:25`, `index.html:29`, `index.html:36`

All four OG and Twitter meta tag URLs contain `newharlemrenaissance.com.com` — a double `.com`. This means:

- Social media share previews (Facebook, Twitter/X, LinkedIn, iMessage, Slack) will show **no image, no title, and no description** because the URLs resolve to nothing.
- This directly impacts discoverability and brand presentation on every share.

```html
<!-- BROKEN -->
<meta property="og:url" content="https://www.newharlemrenaissance.com.com/" />
<!-- SHOULD BE -->
<meta property="og:url" content="https://www.newharlemrenaissance.com/" />
```

All four affected tags: `og:url`, `og:image`, `twitter:url`, `twitter:image`.

---

### #2 — CRITICAL BUG: Missing OG preview image for AUSOME CUTS

**File:** `ausome-cuts.html:20`, `ausome-cuts.html:31`

Both `og:image` and `twitter:image` reference `ausome-cuts-preview.jpg` which **does not exist** in the repository. Sharing the AUSOME CUTS page on any platform will show a broken/missing preview image.

---

### #3 — HIGH: Massive unoptimized images destroying page load

**Directory:** `assets/images/`

Multiple JPG files are uncompressed originals shipped directly to production:

| File | Size |
|------|------|
| `harlem-new-york-public-library.jpg` | **5.4 MB** |
| `rdne-stock-project.jpg` | **4.1 MB** |
| `kaysha-125-lenox.jpg` | **2.1 MB** |
| `pexels-elziroy-porter-jr-1674666 (1).jpg` | **1.3 MB** |
| `agustin-fernandez.jpg` | **1.2 MB** |

The hero background image (`kaysha-125-lenox_ave.jpg`, 578KB) is loaded on every page visit without lazy loading. Total images directory is **30MB**. Most of these should be converted to WebP (as was done for the `ausome/` directory) and resized to display dimensions.

Additionally, **no `<img>` tags use `loading="lazy"`** — only the Google Maps iframe does. All below-fold images should be lazy-loaded.

---

### #4 — HIGH: JavaScript crash on `ausome-cuts.html`

**File:** `assets/js/main.js:38`, `assets/js/main.js:56`

`main.js` runs on both pages. Line 38 does `document.querySelector(".vip")` and line 56 calls `.getBoundingClientRect()` on the result. The `.vip` section **does not exist** on `ausome-cuts.html`. This will throw a `TypeError: Cannot read properties of null` on every scroll event, breaking scroll-up button behavior and active link detection.

Same issue with `Swiper` initialization (line 72) — no `.swiper-container` on the AUSOME CUTS page.

Lines 165-166 get the form `#fs-frm` and call `.querySelectorAll()` on it. This form doesn't exist on `ausome-cuts.html`, causing another crash at page load.

---

### #5 — HIGH: `robots.txt` sitemap URL uses HTTP instead of HTTPS

**File:** `robots.txt:6`

```
Sitemap: http://www.newharlemrenaissance.com/sitemap.xml
```

Should be `https://`. Crawlers may fail to find the sitemap or index it under the wrong protocol.

---

### #6 — HIGH: Inconsistent URL patterns across pages

**Files:** `index.html`, `ausome-cuts.html`

`index.html` uses **relative paths** (`assets/css/...`, `assets/js/...`), while `ausome-cuts.html` uses **root-relative paths** (`/assets/css/...`, `/dist/css/...`). If the site is deployed to a subdirectory, `ausome-cuts.html` will break. The CSS link on `ausome-cuts.html` (line 33) uses `/dist/css/main.output.css` while `index.html` (line 54) uses `dist/css/main.output.css`.

---

### #7 — HIGH: `name` field in contact form is not `required`

**File:** `index.html:846-852`

The name input has no `required` attribute, unlike phone, email, subject, and message. The JS validation loops through all inputs and checks `checkValidity()`. Since `name` is `type="text"` without `required`, it always passes validation, allowing form submission without a name.

---

### #8 — HIGH (A11y): 12+ images have empty `alt=""` attributes

**File:** `index.html` (lines 425, 605, 618, 631, 728, 742, 775, 779, 783, 787, 793), `ausome-cuts.html:71`

Empty `alt` tags tell screen readers to skip these images entirely. Some are decorative (acceptable), but many convey meaningful content:

- Service card images (The Classic, Renaissance Man, Self Care Sanctuary)
- Royalty Club logo and membership card
- Affiliate brand logos (TNHR, BLVK, Nile Style, Royalty Club)
- Service header image
- Contact banner image
- AUSOME CUTS logo in the gallery

---

### #9 — MEDIUM: `sitemap.xml` URL inconsistencies

**File:** `sitemap.xml`

- Sitemap uses `https://newharlemrenaissance.com/` (no `www`).
- Canonical tag uses `https://www.newharlemrenaissance.com` (with `www`).
- Robots.txt uses `http://www.newharlemrenaissance.com` (HTTP + www).

Three different origins. Search engines may treat them as separate sites.

---

### #10 — MEDIUM: `sitemap.xml` references `ausome-cuts` without `.html` extension

**File:** `sitemap.xml:13`

```xml
<loc>https://newharlemrenaissance.com/ausome-cuts</loc>
```

The actual file is `ausome-cuts.html`. Unless the server rewrites this URL, the sitemap entry is a 404.

---

### #11 — MEDIUM: Deprecated `frameborder` attribute on YouTube iframe

**File:** `index.html:357`

`frameborder` is deprecated in HTML5. Use CSS `border: none` instead.

---

### #12 — MEDIUM: CSS `background-size: fill` is invalid

**File:** `assets/scss/main.scss:1896`

```scss
background-size: fill;
```

`fill` is not a valid value for `background-size`. Valid values are `cover`, `contain`, `auto`, or explicit dimensions. The browser will ignore this, falling back to `auto`.

---

### #13 — MEDIUM: Broken CSS transition shorthand

**File:** `assets/scss/main.scss:385`

```scss
transition: 0.2 ease-in-out;
```

Missing the `s` unit. `0.2` is unitless and invalid — the browser will ignore this transition. Should be `0.2s ease-in-out`.

---

### #14 — MEDIUM: Malformed `box-shadow` in `.scroll-header`

**File:** `assets/scss/main.scss:383`

```scss
box-shadow: 0 0 4px hsla(var(--hue-color), 64%, 0.1);
```

`hsla()` requires 4 arguments (hue, saturation, lightness, alpha). Only 3 provided — missing lightness. The browser will discard this shadow.

---

### #15 — MEDIUM: Duplicate `color` property in `.button`

**File:** `assets/scss/main.scss:586-587`

```scss
color: var(--first-color);
color: #0c7d78;
```

Second declaration overrides the first. Likely a debugging leftover.

---

### #16 — MEDIUM (SEO): `<title>` is generic and not keyword-optimized

**File:** `index.html:6`

```html
<title>New Harlem Renaissance</title>
```

Lacks key terms like "barbershop," "Baltimore," or "Kennard Perry." A title like "New Harlem Renaissance | Master Barber Kennard Perry | Baltimore" would improve search CTR.

---

### #17 — MEDIUM (SEO): Legal pages missing canonical tags

**Files:** `legal/privacy-policy.html`, `legal/terms.html`

Both pages have `noindex` but no `<link rel="canonical">`.

---

### #18 — MEDIUM: Web manifest icon paths are wrong

**File:** `favicon.ico/site.webmanifest:6-7`

```json
"src": "/android-chrome-192x192.png",
"src": "/android-chrome-512x512.png"
```

Icons are inside `/favicon.ico/` but paths reference root level. Add-to-homescreen on Android will show a broken icon.

---

### #19 — MEDIUM (UX): No `<noscript>` fallback

**Files:** `index.html`, `ausome-cuts.html`

Mobile navigation requires JS. The `nav__menu` starts off-screen (`right: -100%`) and requires JS to toggle `.show-menu`. Users with JS disabled see no navigation links.

---

### #20 — MEDIUM (A11y): `nav__toggle` and `nav__close` lack accessible roles

**File:** `index.html:98-103`

Hamburger toggle and close button use `<i>` and `<div>` elements with click handlers but no `role="button"`, `tabindex="0"`, or keyboard event handlers. Not accessible via keyboard or screen reader.

---

### #21 — MEDIUM (A11y): No skip navigation link

**Files:** `index.html`, `ausome-cuts.html`

No "Skip to main content" link. Keyboard/screen reader users must tab through entire navigation before reaching content.

---

### #22 — MEDIUM (A11y): `select` dropdown has custom appearance with no visual indicator

**File:** `assets/scss/main.scss:1309-1311`

Native dropdown arrow removed with `appearance: none` but no custom arrow replaces it. Users may not recognize it as a dropdown.

---

### #23 — MEDIUM: Contradictory `width` declarations on html/body

**File:** `assets/scss/main.scss:90-106`

```scss
html { width: 100vw; }
body { width: 100vw; overflow-x: hidden; }
html, body { width: auto !important; }
```

`100vw` includes scrollbar width causing horizontal overflow, then `auto !important` overrides both. Dead code and `!important` hack.

---

### #24 — LOW: No build tooling or minification pipeline

No `package.json`, no bundler, no CSS/JS minification. CSS (33KB) and JS (5.7KB) served unminified. No cache-busting mechanism.

---

### #25 — LOW: Unused CSS for Acuity Scheduling

**File:** `assets/scss/main.scss:1046-1056`

`.acuity` styles remain despite migration to Booksy in Nov 2023.

---

### #26 — LOW: Commented-out HTML blocks left in production

**Files:** `index.html`, `ausome-cuts.html`

Large blocks of commented-out HTML remain, including an entire deprecated AUSOME CUTS page (40+ lines).

---

### #27 — LOW: Videos in repo but not referenced in HTML

**Directory:** `assets/videos/` (21MB)

Four MP4 files exist but none are referenced in HTML. These inflate the repository significantly.

---

### #28 — LOW: Many unused images in the repo

**Directory:** `assets/images/`

Multiple large images not referenced in any HTML file, including `harlem-new-york-public-library.jpg` (5.4MB).

---

### #29 — LOW: `nilestylebarbershop.com` links use HTTP

**Files:** `index.html:315`, `index.html:1000`, `ausome-cuts.html:283`

Links point to `http://` instead of `https://`.

---

### #30 — LOW: Footer copyright year hardcoded to 2025

**Files:** `index.html:1036`, `ausome-cuts.html:309`

Will become stale. Consider dynamic year or removing it.

---

### #31 — LOW: `disabled="true"` is non-standard boolean attribute usage

**File:** `index.html:907`

Boolean attributes should just be present (`disabled`) without a value.

---

### #32 — LOW (Perf): Render-blocking external CDN resources

**File:** `index.html:48`

Remixicon CSS loaded synchronously in `<head>`. Consider `<link rel="preload">`.

---

### #33 — LOW: `this.scrollY` usage is fragile

**File:** `assets/js/main.js:42`, `assets/js/main.js:99`

`this.scrollY` works in non-arrow functions but is fragile. `window.scrollY` is more explicit and robust.

---

## SUMMARY BY CATEGORY

| Category | Critical | High | Medium | Low |
|----------|----------|------|--------|-----|
| **Bugs** | 2 | 2 | 3 | 1 |
| **SEO** | — | 1 | 3 | — |
| **Performance** | — | 1 | — | 2 |
| **Accessibility** | — | 1 | 3 | — |
| **UX** | — | — | 1 | — |
| **Code Quality** | — | 1 | 2 | 5 |
| **Total** | **2** | **6** | **12** | **8** |

## WHAT'S DONE WELL

- Semantic HTML5 structure (`<header>`, `<main>`, `<footer>`, `<article>`, `<section>`)
- `.visually-hidden` class correctly implemented for screen reader content
- ARIA labels on social links and interactive elements
- `aria-live="polite"` region for the appointment accessibility notice
- Form fieldset/legend usage for proper form grouping
- Responsive design with well-structured breakpoints (340px → 1200px)
- CSS custom properties for consistent theming
- WebP format adoption for the AUSOME CUTS images (75-80% size reduction)
- `rel="noopener"` on all `target="_blank"` links (prevents reverse tabnapping)
- Proper `<label>`/`for` associations on form inputs
- Lazy loading on the Google Maps iframe
- Clean BEM-like naming convention throughout SCSS
