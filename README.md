# Astro Islands + UnoCSS Demo

This project demonstrates how the [Astro](https://astro.build/) framework loads static and dynamic content using the island architecture, styled with [UnoCSS](https://unocss.dev/).

## Features

- **Static Content**: Markdown blog posts and static sections rendered at build time for fast load and SEO.
- **Dynamic Islands**: Interactive React components ("islands") hydrated only on the client where needed.
- **UnoCSS Styling**: Utility-first CSS with UnoCSS for modern, responsive design.
- **Visual Cues**: Badges and hydration indicators show which parts are static and which are dynamic/hydrated.

## Visual Guide

- ![Green badge] Static: Rendered at build time (SSR/SSG)
- ![Blue badge] Dynamic Island: Hydrated on the client (interactive)
- ![Green Hydrated badge] Hydrated!: Indicates the island is now interactive on the client

## Getting Started

### 1. Install dependencies
```sh
npm install
```

### 2. Start the development server
```sh
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to view the demo.

## Project Structure

```
src/
  components/
    LiveClock.jsx           # Dynamic island (shows hydration)
    PricingCalculator.jsx   # Dynamic island (shows hydration)
  pages/
    index.astro             # Main demo page with static & dynamic content
    blog/
      first-post.md         # Static Markdown blog post
      [slug].astro          # Renders Markdown posts
  layouts/
  content/
uno.config.ts               # UnoCSS config
astro.config.mjs            # Astro config
```

## How It Works

- **Static Content**: Blog posts and most sections are rendered as static HTML at build time.
- **Dynamic Islands**: React components are loaded as islands and hydrated only on the client (see blue badges and "Hydrated!" status).
- **UnoCSS**: All styling is done with utility classes, powered by UnoCSS.

## Customization
- Add more Markdown files to `src/pages/blog/` for more static content.
- Add more interactive components to `src/components/` and use them as islands.
- Tweak UnoCSS config in `uno.config.ts` for custom styles.

## License
MIT 