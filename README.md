# Emilola & Oluwole — Wedding Program

A single-page React site for the reception program, built with Vite.

## Structure

```
wedding-program/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # The whole page (hero, program, thank-you)
│   ├── index.css       # Font import + resets
│   └── assets/
│       ├── couple1.jpg # Color portrait (hero background)
│       └── couple2.jpg # Black-and-white photo (closing background)
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The build output goes to `dist/`, which you can deploy anywhere that serves static files (Vercel, Netlify, GitHub Pages, etc.).

## Customizing

- **Colors** — edit the `WINE`, `WINE_DEEP`, `CREAM`, `GOLD`, `GOLD_SOFT` constants at the top of `src/App.jsx`.
- **Program items** — edit the `PROGRAM_ITEMS` array in `src/App.jsx`.
- **Photos** — replace `src/assets/couple1.jpg` and `src/assets/couple2.jpg` with your own images (same filenames, or update the imports at the top of `src/App.jsx`).
- **Fonts** — the page uses Cormorant Garamond, Marcellus, and Jost from Google Fonts, imported in `src/index.css`.
