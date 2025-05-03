import { useEffect } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Mona_Sans } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Perpwise",
  description: "An AI-powered interview preparation platform",
};

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const body = document.body;
    body.removeAttribute("data-new-gr-c-s-check-loaded");
    body.removeAttribute("cz-shortcut-listen");
  }, []);
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body className={`${monaSans.className} antialiased pattern`} suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

