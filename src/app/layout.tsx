import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { Navbar } from './components/navbar/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'A Cup of Change',
  description: 'A cup of change',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
