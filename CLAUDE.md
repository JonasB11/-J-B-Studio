# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` (runs on port 5173)
- **Build**: `npm run build` (runs TypeScript check then Vite build)
- **Lint**: `npm run lint`
- **Preview production build**: `npm run preview` (runs on port 4173)

## Architecture

This is a React 19 + TypeScript + Vite single-page application for JB Studio, a music/concert showcase website.

### Tech Stack
- React 19 with React Router 7 for client-side routing
- Vite 5 as build tool with Babel for Fast Refresh
- TypeScript 5.9 with strict mode enabled
- CSS Modules for component styling (`.module.css` files)
- ESLint 9 flat config with TypeScript and React hooks plugins

### Project Structure
- `src/pages/` - Route-level components (Home, Concerts, ConcertDetailPage, NotFound)
- `src/components/` - Reusable components organized by feature:
  - `common/` - Shared components (Header, Footer, ErrorBoundary, ImageWithFallback, SafeText)
  - `home/` - Homepage sections (Hero, About, Projects, Events, Music, Partners, Connect)
  - `concerts/` - Concert-related components (Timeline, TimelineItem, ConcertDetail)
- `src/data/` - Static data files (concerts, partners, projects, events, music, social)
- `src/hooks/` - Custom React hooks (useIntersectionObserver, useScrollToHash, useDocumentTitle)
- `src/types/` - TypeScript type definitions
- `src/styles/` - Global CSS

### Key Patterns
- **Code splitting**: Pages are lazy-loaded via `React.lazy()` in `App.tsx`
- **Path alias**: `@/` maps to `src/` directory
- **CSS Modules**: Each component has a co-located `.module.css` file
- **Barrel exports**: Index files in component folders re-export all components
- **Build chunks**: Vendor code (react, react-dom) and router are split into separate bundles
