import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Providers from "@/providers/Providers";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Click & Cut Studio",
    template: "%s | Click & Cut Studio",
  },
  description:
    "Professional Photography & Videography Booking Platform built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  suppressHydrationWarning
  className={`${inter.variable} ${poppins.variable}`}
>
      <body className="min-h-screen bg-background text-foreground font-sans">
  <Providers>
        <Navbar />

    {children}
    <Footer />
    </Providers>
</body>
    </html>
  );
}
