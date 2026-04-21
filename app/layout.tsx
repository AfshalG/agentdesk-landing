import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgentDesk — Agents ship. AgentDesk verifies.",
  description:
    "The verification layer for AI coding agents. Every push, a real browser drives your production URL end-to-end and tells you what broke. Native macOS, free to download.",
  metadataBase: new URL("https://agentdesk.vercel.app"),
  openGraph: {
    title: "AgentDesk — Agents ship. AgentDesk verifies.",
    description:
      "A real browser verifies every push against your production URL. For Claude Code, Cursor, Copilot.",
    type: "website",
    images: ["/assets/dashboard.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentDesk — Agents ship. AgentDesk verifies.",
    description:
      "A real browser verifies every push against your production URL.",
    images: ["/assets/dashboard.png"],
  },
  icons: {
    icon: "/assets/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${jetbrains.variable} antialiased grain`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
