import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mighty Patch Product Analysis',
  description: 'CEO-friendly titles, SEO tags, AI image prompts, and a full blog article for Hero Cosmetics Mighty Patch Original.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          {children}
        </main>
        <footer className="footer">
          <span>? {new Date().getFullYear()} Product Intelligence</span>
        </footer>
      </body>
    </html>
  );
}
