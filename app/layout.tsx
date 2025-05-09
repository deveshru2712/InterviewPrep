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
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body className={`${monaSans.className} antialiased pattern`} suppressHydrationWarning={true}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

