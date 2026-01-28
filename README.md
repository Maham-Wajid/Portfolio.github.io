# Maham Wajid - Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS featuring a beautiful soft pink and green pastel aesthetic.

![Portfolio Preview](https://github.com/user-attachments/assets/3329600e-37e9-4634-ab52-fe708e9ea8fa)

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15, React, TypeScript, and Tailwind CSS
- **Beautiful Design**: Soft pink and green pastel color palette with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Static site generation for blazing fast load times
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant design

## 🎨 Sections

- **Hero**: Eye-catching introduction with social links
- **About**: Professional background and highlights
- **Skills**: Comprehensive technical and soft skills showcase
- **Experience**: Detailed professional journey timeline
- **Projects**: Featured projects with descriptions and links
- **Contact**: Interactive contact form with direct email integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will start at `http://localhost:3000`

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Inter, Playfair Display)

### Tools & Services
- **Form Handling**: Formspree
- **Deployment**: Netlify, GitHub Pages, or any static host
- **Version Control**: Git & GitHub
- **CI/CD**: GitHub Actions, Netlify Deploy

## 📦 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles and Tailwind
├── components/            # React components
│   ├── layout/           # Layout components (Nav, Footer)
│   └── sections/         # Section components (Hero, About, etc.)
├── lib/                   # Utilities and data
│   └── data.ts           # Portfolio content and data
├── public/               # Static assets
│   ├── images/          # Images and photos
│   └── resume/          # Resume PDF
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Color Palette

The design features a beautiful soft pink and green pastel theme:

- **Primary Pink**: `#FFD6E8` - `#FF6BA8`
- **Secondary Green**: `#D4F4DD` - `#22c55e`
- **Pastel Accents**: Cream, Lavender, Mint, Sage
- **Neutrals**: Gray scale for text and backgrounds

## 📝 Content Management

All portfolio content is managed in `lib/data.ts`:

- Personal information and contact details
- About section content
- Skills and expertise
- Work experience
- Project showcases
- Services offered

Update this file to customize your portfolio content.

## 🚀 Deployment

This portfolio supports multiple deployment platforms:

### Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Maham-Wajid/Portfolio.github.io)

1. Click the button above or connect your repository to Netlify
2. Netlify will automatically detect the configuration
3. Your site will be live with automatic deployments on every push

### GitHub Pages

```bash
# Build for production
npm run build

# The static files will be in the 'out' directory
```

For GitHub Pages:
1. Push changes to your repository
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as the source
4. Your site will be live at `https://[username].github.io/[repo-name]`

### Other Platforms

The site can be deployed to any static hosting service (Vercel, Cloudflare Pages, etc.):
- Build command: `npm run build`
- Publish directory: `out`
- Node version: 20+

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 📄 License

MIT License - feel free to use this portfolio as inspiration for your own!

## 👤 Author

**Maham Wajid**
- GitHub: [@Maham-Wajid](https://github.com/Maham-Wajid)
- LinkedIn: [maham-wajid](https://www.linkedin.com/in/maham-wajid/)
- Email: maham07workmail@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Color palette inspired by soft pastel aesthetics
- Built with love and passion for clean, modern web design

---

⭐️ If you like this portfolio, please give it a star on GitHub!
