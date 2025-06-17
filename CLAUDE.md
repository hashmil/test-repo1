# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev    # Start development server at http://localhost:3000
npm run build  # Build for production (fails on ESLint errors)
npm run start  # Start production server
npm run lint   # Run ESLint checks
```

## Architecture Overview

This is a **Next.js 15.3.3 portfolio website** that must be designed as a **beautiful, modern portfolio** with stunning UI elements. The site should use a modern UI library and feature **dark mode as default** with a toggle button to switch to light mode.

### Key Technologies
- **Next.js 15** with App Router
- **TypeScript 5** with strict mode
- **Framer Motion 11** for animations
- **Tailwind CSS 4** for styling
- **Modern UI Library** (use Radix UI, Headless UI, or similar for beautiful components)
- **Geist fonts** from next/font

### Directory Structure
```
app/
├── layout.tsx              # Root layout with fonts and metadata
├── page.tsx               # Homepage (hero, projects, about, contact)
├── globals.css            # Global styles with CSS custom properties
└── projects/
    ├── page.tsx           # Projects listing page
    └── [slug]/
        ├── page.tsx       # Dynamic project pages
        ├── ProjectContent.tsx  # Project detail component
        └── loading.tsx    # Loading UI

components/
├── Header.tsx             # Fixed navigation header
├── ProjectCard.tsx        # Reusable project card
├── ImageWithFallback.tsx  # Image with error handling
└── ErrorBoundary.tsx      # Error boundary component

data/
└── projects.ts           # Static project data with TypeScript interfaces

utils/
└── motion-utils.ts       # Framer Motion utility functions
```

## Code Patterns & Conventions

### Design Requirements
- **Beautiful, modern portfolio design** with stunning visual appeal
- **Dark mode as default** with light mode toggle button
- **Modern UI components** from a professional UI library (Radix UI, Headless UI, etc.)
- **CSS custom properties** for theming system
- **Tailwind CSS** for styling with modern design tokens
- **Gradient text effects** and premium visual elements
- **Smooth animations** with Framer Motion throughout

### Component Architecture
- **Component-driven design** with reusable UI components
- **Error boundaries** for graceful error handling
- **Image optimization** with fallback handling
- **TypeScript interfaces** for all data structures

### Animation System
- Use **Framer Motion** variants for consistent animations
- **Staggered animations** for lists (see ProjectCard usage)
- **Hover effects** with scale transforms
- Import motion utilities from `utils/motion-utils.ts`

### Data Management
- **Static data** in `data/projects.ts` with TypeScript interfaces
- **Type-safe** project data structure with required fields
- **Slug-based routing** for individual project pages

## Development Notes

### ESLint Configuration
- **Strict ESLint rules** with accessibility checks enabled
- **Build fails on ESLint errors** (configured in next.config.ts)
- Use modern flat config format in `eslint.config.mjs`

### TypeScript Setup
- **Path aliases** configured (`@/*` maps to root)
- **Strict mode** enabled
- **Import/export** patterns enforced by ESLint

### Font & Asset Handling
- **Geist font family** loaded via next/font in layout.tsx
- **Optimized images** in `/public` directory
- **SVG icons** for technology logos

## Project Context

This is a **beautiful, modern portfolio website** that must showcase projects with stunning visual design and smooth animations. The portfolio should feel premium and professional. The codebase emphasizes:

### Design Philosophy
- **Dark mode by default** with elegant light mode toggle
- **Modern, beautiful UI** using professional component libraries
- **Stunning visual elements** with gradients, shadows, and premium styling
- **Smooth animations** and micro-interactions throughout

### Technical Excellence
- **Performance optimization** with Next.js Image and font loading
- **Accessibility** through ESLint rules and semantic HTML
- **Animation-first approach** using Framer Motion throughout
- **Type safety** with comprehensive TypeScript coverage
- **Modern React patterns** with App Router and server components