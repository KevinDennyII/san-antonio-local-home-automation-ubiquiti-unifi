# Private Home Network — Website

Static site for your pilot materials: shareable realtor page + full documentation library.

## Local preview

```bash
cd website
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

- **Home** `/` — brand overview, icons, architecture diagram  
- **Pilot plan** `/pilot` — share this link with your realtor  
- **All docs** `/docs` — every markdown playbook from the repo  

Docs are read live from the parent folders (`sales/`, `delivery/`, etc.) at build time — edit the `.md` files once, rebuild, done.

## Build

```bash
cd website
npm run build
npm run preview
```

Output is in `website/dist/`.

## Deploy (access from anywhere)

Any static host works. Easiest options:

### Cloudflare Pages / Netlify / Vercel
1. Connect this GitHub repo  
2. **Root directory:** `website`  
3. **Build command:** `npm run build`  
4. **Output directory:** `dist`  

You’ll get a public URL like `https://your-site.pages.dev/pilot` to share.

### GitHub Pages (project site)
1. In `astro.config.mjs`, set `site` to your Pages URL and `base` to `'/SanAntonio_Ubiquity_HomeAssistant_ForHomes/'` (or your repo name)  
2. Add a GitHub Action or push `dist/` to the `gh-pages` branch  

## Brand notes

Hill Country limestone + copper + slate (not purple-on-white). Hero image is in `public/images/hero-estate.jpg`.
