import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
// Smooth Scroll Wrapper for Lenis
import SmoothScrollWrapper from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import RouteScrollReset from "@/components/RouteScrollReset";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eminence Hair | Premium Hair Solutions",
  description: "Exquisite hair extensions, toppers, and salon services for the perfect look.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-inter bg-background text-charcoal">
        <SmoothScrollWrapper>
          <RouteScrollReset />
          {children}
          <ScrollToTop />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
