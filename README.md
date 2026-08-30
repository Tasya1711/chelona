<div align="center">

# CHELÓNA

**A luxury handcrafted ceramics studio — concept e-commerce website**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No Framework](https://img.shields.io/badge/Framework-None-lightgrey?style=flat-square)
![Responsive](https://img.shields.io/badge/Design-Responsive-success?style=flat-square)

</div>

---

## About the project

CHELÓNA is a fictional, concept ceramic studio brand — a fully static, front‑end‑only website built to showcase a modern, editorial‑style product presentation for a handmade tableware collection. It was built as a **portfolio / demonstration project** to show front‑end craftsmanship: layout composition, typography, motion, accessibility and on‑page SEO, implemented with plain HTML, CSS and JavaScript and **no framework, build step, or backend**.

The site presents a nine‑piece ceramic tableware collection (plates, bowls, and a mug & saucer set), each with its own dedicated product page, alongside a brand story, a studio/workshop narrative, and a contact/newsletter footer.

> **Note:** CHELÓNA is not a real business. Product names, prices, the studio address, and the Instagram handle are placeholder content created for this project and should not be treated as real contact information.

---

## What the website is for

The project simulates a small, design‑led e‑commerce brand site — the kind of experience an independent ceramics studio might use to present its catalog, tell its story, and drive traffic to its Instagram/social presence rather than a full checkout flow. It focuses on:

- A strong first impression (hero section, brand voice, typography)
- A clean, browsable product catalog with individual product pages
- Storytelling around craftsmanship and materials
- Search‑engine and social‑sharing readiness (metadata, structured data, sitemap)

---

## Key features

- **9 individually crafted product detail pages**, each with its own imagery, description, price, and "More from CHELÓNA" related‑products strip
- **Homepage sections**: hero, product grid, a three‑panel value/highlights band (Price / Instagram / Workshop), an alternating image‑and‑text storytelling section, an "About" section, a final call‑to‑action band, and a footer
- **Native View Transitions API** (`@view-transition`) with shared `view-transition-name`s on product cards, images, and titles — animated transitions between the product grid and a product's detail page in supporting browsers, with a normal navigation fallback everywhere else
- **Scroll‑reveal animations** for content sections via `IntersectionObserver`
- **Sticky header** that gains a shadow/border once the page is scrolled
- **Scroll‑position restoration**: returning from a product page to the homepage restores the exact scroll position in the product grid (via the History API, with a `sessionStorage` fallback)
- **Client‑side newsletter form** — validates the email field and shows a "Subscribed" confirmation state; this is a front‑end‑only interaction with no backend or email service connected
- **On‑page SEO**: unique `<title>` and meta description per page, canonical URLs, Open Graph and Twitter Card metadata, JSON‑LD structured data (`Organization` and `ItemList` on the homepage, `Product` on every product page), plus `robots.txt` and `sitemap.xml`
- **Accessibility touches**: a "skip to content" link, semantic landmarks, descriptive `alt` text throughout, and full support for `prefers-reduced-motion`
- **Performance‑minded image delivery**: WebP images, explicit `width`/`height` on every image to prevent layout shift, `loading="lazy"` on below‑the‑fold images, `fetchpriority="high"` and `<link rel="preload">` for the largest above‑the‑fold images, and asynchronously loaded Google Fonts so they never block first paint
- **Fully responsive layout** across nine breakpoints, from small phones up to desktop, using fluid typography and spacing (`clamp()`) rather than a fixed grid

---

## Technologies used

| Category | Details |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Plain CSS3 — custom properties (design tokens), Flexbox & Grid, `clamp()` for fluid type/spacing, the View Transitions API, `prefers-color-scheme` and `prefers-reduced-motion` media queries |
| Scripting | Vanilla JavaScript (no dependencies) — a single small IIFE handling scroll state, reveal animations, scroll restoration, and the newsletter form |
| Structured data | JSON‑LD (`Organization`, `ItemList`, `Product`) |
| Fonts | Google Fonts — **Inter** (body copy), **Poppins** (navigation, UI, most headings), **Unbounded** (hero display headline) |
| Images | WebP, optimized and served with responsive loading strategies |
| Tooling | None — no framework, bundler, package manager, or build step |

---

## Project structure

```
.
├── index.html                 # Homepage
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css              # Single stylesheet — design tokens + all page styles
├── js/
│   └── main.js                # Vanilla JS — scroll UI, reveals, view-transition helpers, form
├── product/                   # One folder per product, each a self-contained page
│   ├── krinos/index.html
│   ├── krinos-soup/index.html
│   ├── apotypomata/index.html
│   ├── koukkida/index.html
│   ├── lorida/index.html
│   ├── pitachagia/index.html
│   ├── thalassa/index.html
│   ├── limni/index.html
│   └── lemoni/index.html
└── assets/
    ├── hero/                  # Hero imagery
    ├── products/              # Full-size product photography (+ thumb/ for grid cards)
    ├── lifestyle/              # Styled/lifestyle shots used on product pages
    ├── about/                  # Studio, material and workshop imagery
    ├── backgrounds/            # Decorative section backgrounds
    ├── decor/                  # Small decorative/branding imagery
    └── footer/                 # Footer imagery
```

Each product page is a standalone HTML document (not templated at build time), with its own metadata, structured data, and content — the project has no templating engine or CMS.

---

## Responsive design

The layout is fully responsive and was built mobile‑first in spirit, with fluid breakpoints at **380px, 480px, 640px, 780px, 820px, 860px, 900px, 980px and 1024px**. Typography and spacing scale continuously via CSS `clamp()` rather than jumping between a small set of fixed sizes, and every major section (hero, product grid, value band, storytelling rows, about, footer) has its own tailored mobile layout rather than simply shrinking the desktop version.

---

## Main pages / sections

**Homepage (`/`)**
1. Hero — split imagery with the brand headline
2. Products — a filterable‑feeling grid of all 9 pieces with price and short description
3. Value band — "Price", "Instagram", and "Workshop" highlight panels
4. Storytelling — three alternating image/text rows on material and craft
5. About — studio story and imagery
6. Final CTA — a closing call‑to‑action band
7. Footer — newsletter signup, contact details, and social links

**Product pages (`/product/<slug>/`)** — one per piece (Krínos, Apotypómata, Koukkída, Lorída, Krínos Soup, Pitachágia, Thálassa, Límni, Lemóni)
1. Product hero — large image, name, category, and price
2. Detail copy — material/story description with a link out to Instagram
3. "More from CHELÓNA" — three related products
4. Shared footer

---

## Running the website locally

This is a static site with **root‑relative asset paths** (e.g. `/css/style.css`, `/assets/...`), so it must be served from the project root by a local web server — opening `index.html` directly via `file://` will break navigation and asset loading.

Any static file server works. For example:

**Python (built in on most systems):**
```bash
python3 -m http.server 4173
```
Then open **http://localhost:4173**

**Node.js:**
```bash
npx serve .
```

**VS Code:** the "Live Server" extension also works out of the box.

There is no install step, dependency list, or build command required — the repository is served exactly as it is.

---

## Deployment

No build process is needed. Because the site is 100% static HTML/CSS/JS, the contents of this repository can be deployed as‑is to any static hosting provider that serves files from the repository root, for example:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any standard static file host / CDN

Simply point the host at this repository's root (where `index.html` lives) — there is nothing to compile or bundle.

---

## Credits

Designed and built as a **concept / portfolio project**. CHELÓNA is a fictional ceramics studio; all product names, prices, imagery, and contact details exist for demonstration purposes only.
