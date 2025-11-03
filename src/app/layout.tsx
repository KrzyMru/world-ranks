import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
