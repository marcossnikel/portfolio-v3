# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter checks
- `npm run format` - Format code with Biome

## Architecture

This is a Next.js 15 portfolio application using:

- **Framework**: Next.js 15 with App Router
- **TypeScript**: Strict TypeScript configuration
- **Styling**: Tailwind CSS v4
- **Bundler**: Turbopack for faster builds
- **Linting/Formatting**: Biome (replaces ESLint/Prettier)
- **Fonts**: Geist Sans and Geist Mono via next/font

### Project Structure

- `src/app/` - App Router pages and layouts
- `src/app/layout.tsx` - Root layout with font configuration
- `src/app/page.tsx` - Home page component
- `public/` - Static assets

### Key Configuration

- **Biome**: Configured with React and Next.js domains, automatic import organization
- **TypeScript**: Uses path mapping (`@/*` → `./src/*`) for cleaner imports
- **Next.js**: Minimal configuration, relies on framework defaults

The codebase follows Next.js 15 App Router conventions with TypeScript and uses Biome for consistent code quality.