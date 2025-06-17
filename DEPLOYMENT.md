# Cloudflare Pages Deployment Guide

This project is optimized for deployment on Cloudflare Pages.

## Build Configuration

The project is configured for static export with the following optimizations:
- `output: 'export'` - Generates static HTML files
- `trailingSlash: true` - Adds trailing slashes for better routing
- `images: { unoptimized: true }` - Disables Next.js Image Optimization for static export
- Custom `_routes.json` for Cloudflare Pages routing

## Deployment Steps

### Option 1: Connect Git Repository (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: `18` or higher

### Option 2: Direct Upload

1. Run the build locally:
   ```bash
   npm run build
   ```
2. Upload the `out` directory to Cloudflare Pages

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Lint check
npm run lint
```

## Environment Variables

No environment variables are required for this project.

## Custom Domain

After deployment, you can configure a custom domain in the Cloudflare Pages dashboard.

## Notes

- All images are included in the static export
- The project uses modern CSS with Tailwind CSS 4
- Dark mode is implemented with `next-themes`
- All pages are pre-rendered as static HTML