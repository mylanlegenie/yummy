import type { Metadata } from "next";

import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "./component/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Yummy! FastFood",
  description: "Burgers, snacks et formules préparés rapidement avec passion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="flex min-h-screen flex-col bg-[#FFF6E8] overscroll-none">
        {children}
        <Footer />
      </body>
    </html>
  );
}
