import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});


export const metadata: Metadata = {
  title: "Developer X - Webflow",
  description:
    "This a portfolio website for Developer X, showcasing skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className}`}
         data-new-gr-c-s-check-loaded="14.1242.0"
        // data-new-gr-c-s-check-loaded="14.1242.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}
