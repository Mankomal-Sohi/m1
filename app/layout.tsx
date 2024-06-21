import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Portfolio | M1",
  description: "Created by M1 and _",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#171321] text-white`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
