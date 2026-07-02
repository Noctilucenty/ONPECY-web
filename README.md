# ONPECY — Landing Page

The World's First AI-Powered One Person Company Incubator.

A single-page, dependency-free landing site (static HTML/CSS/vanilla JS).
Premium dark theme, fully responsive, accessible, reduced-motion aware.

## Files
- `index.html` — all 12 sections + nav + footer
- `styles.css` — design system, layout, animations, responsive breakpoints
- `app.js` — nav scroll state, mobile menu, model tabs (keyboard accessible), scroll reveal
- `.claude/launch.json` — local preview server config

## Run locally
No build step. Serve the folder with any static server:

```bash
python3 -m http.server 4321
# then open http://localhost:4321
```

Or just open `index.html` directly in a browser.

## Assets
- `images/image.png` — full ONPECY brand lockup (used as OG/social image)
- `images/onpecy-mark.png` — transparent ONPECY icon (nav + footer brand)
- `images/favicon.png` — favicon (cropped from the brand mark)
- `images/opt/` — optimized, background-normalized partner logos used on the site
  (`usj.png`, `allcpr.png`, `arc.png`, `aha.png`)
- Original source logos remain in `images/` (ARC/AHA/USJ/ALLCPR); `opt/` holds the web-ready versions.

## Notes
- Brand is **ONPECY** everywhere in visible copy (the source doc/folder is spelled "ONPNCY").
- Partners section shows real logos for USJ, ALLCPR, American Red Cross, and American Heart Association.
  SVIHT, SSI, and Microsoft AI are text tiles — add logo files to `images/opt/` and swap them in when available.
- `images/app.js` is a stray PNG file (mislabeled `.js`) and is not used by the site.
- CTAs currently anchor to the on-page apply/demo section; wire to real forms/URLs when ready.
