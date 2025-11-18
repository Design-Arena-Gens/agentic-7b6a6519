import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { content } from "@/data/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: content.name || "Clever Ventures",
  description:
    content.title ||
    "Venture studio and digital product partner crafting cinematic, 3D-first web experiences.",
  metadataBase: new URL("https://agentic-7b6a6519.vercel.app"),
  openGraph: {
    title: content.name || "Clever Ventures",
    description:
      content.title ||
      "Venture studio and digital product partner crafting cinematic, 3D-first web experiences.",
    url: "https://agentic-7b6a6519.vercel.app",
    siteName: content.name || "Clever Ventures",
  },
  twitter: {
    card: "summary_large_image",
    title: content.name || "Clever Ventures",
    description:
      content.title ||
      "Venture studio and digital product partner crafting cinematic, 3D-first web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(800px_400px_at_10%_80%,rgba(34,197,94,0.08),transparent_50%)]`}
      >
        {children}
      </body>
    </html>
  );
}
