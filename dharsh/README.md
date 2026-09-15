# DHARSH — E-commerce Storefront

A static, client-side e-commerce storefront built with plain HTML, CSS, and JavaScript. Features category browsing, live search, price/discount sorting, a shopping cart with quantity controls, a login modal, and a flash-sale countdown timer.

## Project structure

```
dharsh-shop/
├── index.html          # Main page (markup + product data)
├── css/
│   └── style.css       # All styling
├── js/
│   └── dharsh.js       # Cart, search, sort, filter, timer, login logic
├── image/              # Product images (see note below)
├── package.json
└── README.md
```

## ⚠️ Before you deploy: add product images

`index.html` references image files such as `image/a.jpeg`, `image/b.jpeg`, `image/e1.jpeg`, etc. (40 products total). These files are **not included** — drop your actual product photos into the `image/` folder using the exact filenames referenced in `index.html`, or do a find-and-replace on the `src="image/..."` paths to point at your own asset names / a CDN.

## Running locally

No build step is required — it's a static site. Pick any one of these:

**Option 1 — Node (recommended, included in package.json):**
```bash
npm install
npm start
```
This uses the `serve` package and opens the site at `http://localhost:3000`.

**Option 2 — Python (no install needed if Python is present):**
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

**Option 3 — VS Code:** install the "Live Server" extension, right-click `index.html`, and choose "Open with Live Server."

## Deploying

This is a static site (no server/backend code), so any static host works. A few common options:

### Netlify (drag-and-drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `dharsh-shop` folder in
3. Done — Netlify gives you a live URL instantly

### Netlify / Vercel (via Git)
1. Push this folder to a GitHub repository
2. Import the repo in Netlify or Vercel
3. Leave the build command empty and set the publish/output directory to `.` (project root)

### GitHub Pages
1. Push this folder to a GitHub repository
2. In the repo, go to **Settings → Pages**
3. Set the source branch to `main` and the folder to `/ (root)`
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

### Any static file host (S3, Cloudflare Pages, Firebase Hosting, etc.)
Upload the contents of this folder as-is — `index.html` must sit at the root of whatever directory the host serves.

## Notes / known limitations

- The cart, login, and product catalog are all client-side only — nothing persists after a page refresh, and there's no real backend, payment processing, or authentication. This is fine for a demo/portfolio piece, but production use would need a real backend for auth, inventory, and checkout.
- Product data lives directly in `index.html` as static markup. For anything beyond a small fixed catalog, consider generating the product grid from a JSON/JS data file or a CMS/API instead of hand-written HTML.
- Google Fonts are loaded from `fonts.googleapis.com` — the page requires an internet connection for fonts to render as intended (Baloo 2, Inter, IBM Plex Mono).
