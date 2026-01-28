# Old Version Files - ARCHIVED

**Note:** The old static files have been moved to the `old-version/` directory to prevent deployment conflicts.

## Why Files Were Moved

The presence of `index.html` in the repository root was causing web servers (including Netlify) to serve the old static interface instead of the new Next.js application. Moving these files resolves this issue.

## Archived Files Location

All old files are now in the `old-version/` directory:

- `old-version/index.html` - Old main HTML file
- `old-version/style.css` - Old custom styles
- `old-version/bootstrap.css` - Old Bootstrap CSS
- `old-version/main.js` - Old JavaScript file
- `old-version/resume.html` - Old resume page
- `old-version/webwork.html` - Old work showcase page
- `old-version/sweetAlert.js` - Old alert library
- `old-version/forms/` - Old form files
- `assets/` - Old assets directory (images - kept for reference)

## Migration

All functionality from these files has been reimplemented in the new Next.js application:

- **index.html** → `app/page.tsx` + various components
- **style.css** → `app/globals.css` + Tailwind CSS
- **JavaScript** → React components with TypeScript
- **Assets** → Copied to `public/` directory

## Do Not Delete

These files are kept in the `old-version/` directory for:
1. Historical reference
2. Asset backup (images in `assets/` directory)
3. Potential data recovery
4. Comparison with new version

## New Version (v2.0)

The current portfolio uses:
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Modern component architecture

**The new interface is now properly deployed!** The repository root no longer contains conflicting static HTML files.

See the main README.md for details about the new version.
