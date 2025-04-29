import type { Metadata } from "next";
import "./globals.css";
import { Mona_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Perpwise",
  description: "An AI-powered interview preparation platform",
};

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
