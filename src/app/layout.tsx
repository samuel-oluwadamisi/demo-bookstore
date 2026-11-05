import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";
import Navbar from "@/features/website/components/Navbar";
import Footer from "@/features/website/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = { title: site.name, description: site.tagline };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[var(--bg)] text-neutral-900 antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
