# React Multilingual App

This repository contains a simple multilingual React application built with Vite, React 18, and `react-i18next`.

## What it is

- A minimal React app located in `src/`
- Uses `i18next` and `react-i18next` for English / French translation support
- Includes a language switcher that toggles between `en` and `fr`
- Built with Vite for fast development and production bundling

## Key files

- `src/main.tsx` — React app bootstrap
- `src/App.tsx` — main application component
- `src/i18n.ts` — i18n initialization and language resources
- `src/index.css` — app styling
- `src/locales/en/translation.json` — English translations
- `src/locales/fr/translation.json` — French translations
- `vite.config.ts` — Vite config
- `tsconfig.json` / `tsconfig.node.json` — TypeScript config

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## Notes

- This project follows the rules in `RULES.md`.
- No Git commands were executed unless explicitly requested.
- The app was successfully installed and built in the current directory.
- A dependency audit warning was present after install, so run `npm audit` if you want to inspect package security issues.

## Security / dependency notice

- The repository is scoped to this directory (`d:\Projects\CV_web`).
- If additional dependency or security concerns are found, they should be documented and addressed separately.
