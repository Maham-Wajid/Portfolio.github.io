# Deployment Guide

This portfolio can be deployed on multiple platforms including GitHub Pages and Netlify with automatic deployment from your GitHub repository.

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

## Netlify Deployment (Recommended)

Netlify provides automatic deployments with continuous integration directly from your GitHub repository.

### Quick Setup

1. **Connect to Netlify**
   - Sign up at [netlify.com](https://www.netlify.com) (use GitHub for easy connection)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your `Portfolio.github.io` repository

2. **Configure Build Settings**
   - Netlify will automatically detect the `netlify.toml` configuration
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 20 (configured in netlify.toml)

3. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy automatically
   - Your site will be live at a custom Netlify URL (e.g., `your-site.netlify.app`)

### Continuous Deployment

Once connected, Netlify automatically:
- Deploys on every push to your main branch
- Creates deploy previews for pull requests
- Provides instant rollback capability
- Includes built-in HTTPS/SSL certificates
- Offers custom domain support

### Custom Domain Setup (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration instructions
4. Netlify provides automatic HTTPS for custom domains

### Deploy Previews

Netlify automatically creates deploy previews for:
- Pull requests (test changes before merging)
- Branch deploys (test feature branches)
- Each preview gets a unique URL

### Environment Variables (Optional)

If you need environment variables:
1. Go to Site settings → Environment variables
2. Add variables (e.g., API keys for contact form)
3. Variables are automatically available during build

### Netlify Features

- **Instant Cache Invalidation**: Changes go live immediately
- **Global CDN**: Fast loading worldwide
- **Automatic HTTPS**: Free SSL certificates
- **Form Handling**: Built-in form processing (alternative to Formspree)
- **Analytics**: Optional visitor analytics
- **Functions**: Serverless functions if needed in future

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

### GitHub Pages Issues

#### Build Fails

- Check Node.js version (requires Node 18+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

#### 404 Errors on Pages

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

### Netlify-Specific Issues

#### Build Command Not Found

- **Issue**: Netlify can't find `npm run build`
- **Solution**: Check that `package.json` has the build script
- **Verify**: `netlify.toml` specifies correct build command

#### Publish Directory Error

- **Issue**: "No publish directory found"
- **Solution**: Ensure build completes successfully and creates `out` directory
- **Check**: Verify `output: 'export'` is set in `next.config.ts`

#### Build Timeout

- **Issue**: Build takes too long and times out
- **Solution**: 
  - Check for memory issues in build logs
  - Optimize dependencies
  - Contact Netlify support for build time increase

#### Environment Variables Not Working

- **Issue**: Site builds but features don't work
- **Solution**: 
  - Add required environment variables in Netlify dashboard
  - Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
  - Redeploy after adding variables

#### Assets Not Loading

- **Issue**: Images or CSS files return 404
- **Solution**:
  - Verify files are in `public` directory
  - Check file paths are absolute (start with `/`)
  - Clear Netlify cache and redeploy

#### Redirect Issues

- **Issue**: Routes return 404
- **Solution**:
  - Check `netlify.toml` redirects configuration
  - Verify `trailingSlash: true` in next.config.ts
  - Test locally with `npm run build` first

#### Deploy Previews Not Working

- **Issue**: Pull requests don't generate previews
- **Solution**:
  - Check GitHub app permissions
  - Verify Netlify has access to repository
  - Check deploy settings in Netlify dashboard

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
- **GitHub Pages**: Check GitHub Actions logs and GitHub Pages documentation
- **Netlify**: Check Netlify deploy logs and Netlify documentation
- Review Next.js documentation for static export issues
- Check repository Issues section
