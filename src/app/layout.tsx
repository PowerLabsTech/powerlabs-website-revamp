import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Navigation } from '../components/navgation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const generalSans = localFont({
  src: [
    {
      path: './fonts/GeneralSans-Extralight.otf',
      weight: '300',
      style: 'extraLight',
    },
    {
      path: './fonts/GeneralSans-Light.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: './fonts/GeneralSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GeneralSans-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GeneralSans-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GeneralSans-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/GeneralSans-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/GeneralSans-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-general-sans',
});

export const metadata: Metadata = {
  title: 'Powerlabs',
  description: 'Minimize cost. Maximize uptime.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable}  antialiased `}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
