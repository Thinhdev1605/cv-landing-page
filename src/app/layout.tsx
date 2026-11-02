import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kpa Trần Quang Thịnh | Web Developer & Software Developer Fresher',
  description:
    'Hồ sơ cá nhân và Portfolio của Kpa Trần Quang Thịnh - Sinh viên Lớp IT24M, Đại học Đông Á. Chuyên về phát triển Web Full-Stack với Next.js, NestJS và Neon PostgreSQL.',
  keywords: [
    'Kpa Trần Quang Thịnh',
    'IT24M',
    'Đại học Đông Á',
    'Web Developer Fresher',
    'Software Developer',
    'Next.js',
    'NestJS',
    'PostgreSQL Neon',
    'Full-stack Developer',
  ],
  authors: [{ name: 'Kpa Trần Quang Thịnh' }],
};

export const viewport: Viewport = {
  themeColor: '#090d16',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark scroll-smooth">
      <body className="bg-[#090d16] text-slate-100 font-sans antialiased selection:bg-orange-500/30 selection:text-orange-300 min-h-screen">
        {children}
      </body>
    </html>
  );
}
