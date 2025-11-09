
# Dennis Mwangi — Portfolio

Modern, animated portfolio built with React, Vite, Tailwind CSS, and Motion to showcase clean, scalable software architecture work.

## Preview

- Live demo (coming soon)
- Figma design: <https://www.figma.com/design/li0F962mlDYhKWjdHnBH9R/Animated-Portfolio-Website-Design>

## Features

- Responsive, dark-mode first UI with smooth page transitions
- Custom loader, cursor, and navigation interactions
- Sections for About, Work, Projects, Skills, Blog, and Contact
- Scroll-to-top behavior for both desktop and mobile route changes
- Reusable Shadcn UI components and Radix primitives

## Getting Started

```bash
npm install
npm run dev
```

Open the dev server URL shown in your terminal (defaults to <http://localhost:5173>).

## Project Structure

- `src/components` – shared UI like navigation, loader, timeline, cursor
- `src/pages` – individual route views rendered through React Router
- `src/assets` – images and favicons used across the site
- `src/styles` – global Tailwind layer and custom styles

## Available Scripts

- `npm run dev` – start the Vite dev server
- `npm run build` – generate a production build

## Customization

1. Update text and imagery inside the `src/pages` directory.
2. Replace assets under `src/assets` to match your personal branding.
3. Adjust Tailwind tokens in `src/index.css` or extend `tailwind.config`.

## Deployment

1. Build: `npm run build`
2. Deploy the contents of the `dist` folder to your preferred static host (Vercel, Netlify, GitHub Pages, etc.).

---

Built by Dennis Mwangi — clean, modern software architecture.
