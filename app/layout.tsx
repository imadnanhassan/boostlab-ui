import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Baloo_Da_2 } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const baloo = Baloo_Da_2({
  subsets: ["latin", "bengali"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://boostlab.example.com"),
  title: {
    default: "BoostLab – আপনার ডিজিটাল গ্রোথ ল্যাব",
    template: "%s | BoostLab",
  },
  description: "ওয়েবসাইট, বিজ্ঞাপন ও সোশ্যাল মিডিয়া গ্রোথ – সব এক জায়গায়।",
  applicationName: "BoostLab",
  keywords: [
    "BoostLab",
    "ডিজিটাল গ্রোথ",
    "ওয়েবসাইট",
    "বিজ্ঞাপন",
    "সোশ্যাল মিডিয়া",
    "Bangla",
  ],
  openGraph: {
    title: "BoostLab – আপনার ডিজিটাল গ্রোথ ল্যাব",
    description: "ওয়েবসাইট, বিজ্ঞাপন ও সোশ্যাল মিডিয়া গ্রোথ – সব এক জায়গায়।",
    type: "website",
    url: "https://boostlab.example.com",
    siteName: "BoostLab",
    images: [{ url: "/og", width: 1200, height: 630, alt: "BoostLab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoostLab – আপনার ডিজিটাল গ্রোথ ল্যাব",
    description: "ওয়েবসাইট, বিজ্ঞাপন ও সোশ্যাল মিডিয়া গ্রোথ – সব এক জায়গায়।",
    images: ["/og"],
  },
  icons: {
    icon: [{ url: "/icon" }],
  },
  alternates: {
    canonical: "/",
  },
};

const NoFlashTheme = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    if (!saved) return;
    document.documentElement.setAttribute('data-theme', saved);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: NoFlashTheme }} />
      </head>
      <body className={`${baloo.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
