import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maham Wajid | Full-Stack Developer & UI/UX Designer',
  description: 'Professional portfolio of Maham Wajid - Full-Stack Developer specializing in React, Next.js, Python, and modern web technologies. Explore my projects, experience, and skills.',
  keywords: ['Maham Wajid', 'Full-Stack Developer', 'Software Engineer', 'React', 'Next.js', 'Python', 'UI/UX Designer', 'Web Developer'],
  authors: [{ name: 'Maham Wajid' }],
  creator: 'Maham Wajid',
  openGraph: {
    type: 'website',
    title: 'Maham Wajid | Full-Stack Developer & UI/UX Designer',
    description: 'Professional portfolio showcasing my work in full-stack development and UI/UX design',
    siteName: 'Maham Wajid Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
