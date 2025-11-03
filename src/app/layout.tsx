import type { Metadata } from "next";
import { Be_Vietnam_Pro } from 'next/font/google';
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-be-vietnam-pro',
})

export const metadata: Metadata = {
  title: "world-ranks",
  icons: "/icon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={beVietnamPro.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
