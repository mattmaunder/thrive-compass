# Thrive Compass

Couples financial planning web app for Thrive Bank, built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Login with password and passkey tabs
- Home landing page with product overview
- Household dashboard with animated charts
- Vision alignment map, shared goals, goal-based roadmap, and connected accounts
- Notifications modal and add-goal form

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Design

UI is based on the Thrive Bank Figma file. Design tokens live in `src/index.css` (navy, teal, surface, and gradient utilities).

### Design library (Figma)

The Thrive Compass design system lives in [Thrive Compass — Design Library](https://www.figma.com/design/efo2UYBzjOvMRZuP4IWLM6) within the Twigma Enterprise project.

It includes:

- **Tokens:** Primitives, Color, Spacing, and Radius variable collections aligned to `src/index.css`
- **Text styles:** Heading and Body scale (Inter)
- **Components:** Button, Badge, Input, Card, Nav Link, Stat Card, Page Header

Shared UI primitives live in `src/components/ui/` and map to the Figma components via Code Connect templates in `src/figma/*.figma.ts`.

### Code Connect

Code Connect templates are configured in `figma.config.json`. To activate Dev Mode snippets:

1. Open the design library file in Figma and **publish it as a team library** (required before mappings apply)
2. Install the CLI: `npm install --save-dev @figma/code-connect`
3. Publish mappings: `npx figma connect publish --token $FIGMA_ACCESS_TOKEN`
