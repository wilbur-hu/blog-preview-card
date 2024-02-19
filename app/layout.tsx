import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const figtree = localFont({
  src: "./fonts/Figtree-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Blog Preview Card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${figtree.variable} flex flex-col bg-yellow font-figtree text-black h-full`}>{children}</body>
    </html>
  );
}
