# DynamicFix IT Solutions Website

A responsive customer-facing IT solutions website for DynamicFix Tech Innovation, built with React and Vite. It introduces web and mobile application development, data analytics, Salesforce CRM solutions and IT staffing, and includes illustrative business-needs examples, the company's delivery approach, connected capabilities, stated commitments, FAQs, an interactive solution finder, a project-readiness checklist, WhatsApp click-to-chat and a light/dark theme toggle that remembers the visitor's choice.

The registered office address is included from the supplied company profile. The company mark displayed in the header and favicon is the image opened from the supplied Google Maps link, stored locally at `frontend/public/dynamicfix-logo.jpg`; a simple monogram appears if the image cannot load. WhatsApp click-to-chat is linked to the supplied number using the standard `wa.me` URL; it does not use or expose a WhatsApp API token.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Getting started

```bash
npm install
npm run dev:backend
```

In a second terminal, start the frontend:

```bash
npm run dev
```

Open the local URL printed by Vite.

## Other commands

- `npm run build` - build the frontend for production
- `npm start` - start the backend API
- `npm run dev:backend` - start the Express API

The website is maintained in `frontend/src/pages/ServiceWebsite.jsx`. The backend API is not required to run the website. Configure its port with `PORT` in `.env` if you use it.

## Publish with GitHub Pages

The `.github/workflows/pages.yml` workflow builds the frontend and publishes it to GitHub Pages whenever changes are pushed to `main`. In the repository settings, enable **Pages** with **GitHub Actions** as the build and deployment source. The Vite base path is set from the repository name during the workflow build, so the site and logo work from a project Pages URL.

The backend is not deployed to GitHub Pages; Pages hosts the static frontend only. Keep `.env` files local and configure any required secrets separately in GitHub Actions settings.
