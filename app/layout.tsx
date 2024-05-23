import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/utils";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-gray-100 p-5", font.className)}>{children}</body>
    </html>
  );
}
