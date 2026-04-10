import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { AppProviders } from './provider';
import clsx from 'clsx';
import { Toaster } from 'sonner';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'OutletRentalCars',
  description: 'Encuentra el auto perfecto para tu próximo viaje',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='es'
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body
        className={clsx(dmSans.className, 'min-h-dvh flex flex-col py-16 px-8')}
      >
        <AppProviders>
          <div className='w-full max-w-87.5 sm:max-w-180 md:max-w-6xl mx-auto'>
            {children}
          </div>
        </AppProviders>
        <Toaster position='top-center' />
      </body>
    </html>
  );
}
