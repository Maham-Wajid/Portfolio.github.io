# Deployment Guide

This portfolio is designed to be deployed on GitHub Pages using GitHub Actions for automatic deployment.

## Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically builds and deploys your portfolio whenever you push to the main branch.

### Setup Steps

1. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages section
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to Main Branch**
   - Merge your changes to the main branch
   - The workflow will automatically trigger
   - Your site will be live at `https://[username].github.io/Portfolio.github.io`

3. **Monitor Deployment**
   - Go to the "Actions" tab in your repository
   - Watch the deployment progress
   - Check for any errors in the workflow logs

### Workflow Features

- Automatically builds on push to main branch
- Uses Node.js 20 for consistency
- Caches dependencies for faster builds
- Deploys static output to GitHub Pages
- Can be manually triggered from Actions tab

## Manual Deployment

If you prefer manual deployment:

### Build Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

This creates a static export in the `out` directory.

### Deploy to GitHub Pages Manually

1. **Option 1: Using gh-pages branch**

```bash
# Install gh-pages package
npm install -g gh-pages

# Deploy out directory to gh-pages branch
gh-pages -d out
```

2. **Option 2: Push out directory to gh-pages branch**

```bash
# Build the site
npm run build

# Navigate to out directory
cd out

# Initialize git and push
git init
git add -A
git commit -m "Deploy"
git push -f git@github.com:[username]/Portfolio.github.io.git main:gh-pages
```

## Environment Configuration

### Next.js Configuration

The `next.config.ts` file is configured for static export:

```typescript
const nextConfig: NextConfig = {
  output: 'export',        // Enable static export
  images: {
    unoptimized: true,    // Required for static export
  },
  basePath: '',           // Update if using custom domain
  trailingSlash: true,    // Recommended for GitHub Pages
};
```

### Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in the `public` directory with your domain
2. Configure DNS settings with your domain provider
3. Update `basePath` in `next.config.ts` if needed

## Troubleshooting

### Build Fails

- Check Node.js version (requires Node 18+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### 404 Errors on Pages

- Ensure `trailingSlash: true` in next.config.ts
- Verify all links use relative paths
- Check that assets are in the public directory

### Styles Not Loading

- Ensure Tailwind CSS is properly configured
- Check that globals.css is imported in layout.tsx
- Verify PostCSS configuration is correct

### Images Not Displaying

- Ensure images are in the `public` directory
- Use `/images/...` paths (not `./images/...`)
- Check image file extensions match code

## Deployment Checklist

Before deploying to production:

- [ ] Test build locally: `npm run build`
- [ ] Check all pages load correctly
- [ ] Verify all links work
- [ ] Test responsive design on mobile
- [ ] Update personal information in `lib/data.ts`
- [ ] Update resume PDF in `public/resume/`
- [ ] Test contact form
- [ ] Check social media links
- [ ] Verify SEO meta tags
- [ ] Test in different browsers

## Performance Optimization

The site is optimized for performance:

- Static site generation (SSG)
- Optimized images
- Minimal JavaScript bundle
- CSS purging with Tailwind
- Font optimization with Google Fonts

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Monitoring

After deployment:

1. Check Google Search Console for indexing
2. Monitor Core Web Vitals
3. Test with Lighthouse
4. Check mobile usability
5. Verify all links work

## Support

For issues with deployment:
- Check GitHub Actions logs
- Review Next.js documentation
- Consult GitHub Pages documentation
- Check repository Issues section
