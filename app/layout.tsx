import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import { AosProvider } from "@/components/AosProvider";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteSettings } from "@/lib/settings/site";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: `${siteSettings.name} - Modern Portfolio`,
  description: siteSettings.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${poppins.variable} font-body antialiased`}>
        <AosProvider>
          <Navbar />
          {children}
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
