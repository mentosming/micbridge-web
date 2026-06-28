import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://micbridge-web.vercel.app"),
  title: "MicBridge — Speak on iPhone, type into your Mac / Windows",
  description:
    "Dictate on your iPhone and the text is typed into the focused app on your Mac or Windows PC. Two-way encrypted file transfer. On-device, no cloud, no account.",
  keywords: [
    "MicBridge", "iPhone voice to PC", "dictation", "remote keyboard",
    "file transfer", "Mac", "Windows", "Cantonese dictation", "AES-GCM", "no account",
  ],
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "MicBridge — Speak on iPhone, type into your Mac / Windows",
    description:
      "iPhone on-device voice → keystrokes into your computer, plus two-way encrypted file transfer. No cloud, no account.",
    url: "https://micbridge-web.vercel.app",
    siteName: "MicBridge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MicBridge",
    description: "Speak on iPhone, type into your Mac / Windows. Two-way encrypted file transfer.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
