import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyCallBar from "@/components/EmergencyCallBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RoofPlanet — Professional Roofing & Restoration | Houston, TX",
  description:
    "Expert roofing, siding, windows, and gutters in Houston, TX. Free estimates and insurance claim assistance. 15+ years of quality work.",
  keywords: "roofing, Houston, roof repair, roof replacement, storm damage, insurance claims, siding, gutters, windows",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "RoofPlanet — Professional Roofing & Restoration",
    description: "Houston's trusted roofing experts since 2009. Free estimates, insurance claim assistance, and 24/7 emergency response.",
    type: "website",
    url: "https://www.theroofplanet.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-roof-charcoal`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <EmergencyCallBar />
      </body>
    </html>
  );
}
