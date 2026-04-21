import type { Metadata } from "next";
import NavbarProduct from "@/components/sections/NavbarProduct";
import Footer from "@/components/sections/Footer";
import DSHero from "@/components/digitalsignage/DSHero";
import DSFeatures from "@/components/digitalsignage/DSFeatures";
import DSWorkflow from "@/components/digitalsignage/DSWorkflow";
import DSHowItWorks from "@/components/digitalsignage/DSHowItWorks";
import DSFAQ from "@/components/digitalsignage/DSFAQ";
import DSCTABanner from "@/components/digitalsignage/DSCTABanner";
import DSContact from "@/components/digitalsignage/DSContact";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Digital Signage Solutions | Bionics",
  description:
    "Transform your business communication with Bionics Digital Signage — centralized content distribution, real-time scheduling, and multi-platform support for any screen, anywhere.",
  keywords: [
    "Digital Signage",
    "Bionics Digital Signage",
    "Content Management System",
    "LED Display",
    "Screen Management",
    "Remote Display Control",
    "Signage Software",
    "Smart Display",
  ],
  authors: [{ name: "Bionics" }],
  robots: "index, follow",
  openGraph: {
    title: "Digital Signage Solutions | Bionics",
    description:
      "Transform your business communication with Bionics Digital Signage — centralized content distribution, real-time scheduling, and multi-platform support.",
    type: "website",
    locale: "en_US",
    siteName: "Bionics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage Solutions | Bionics",
    description:
      "Transform your business communication with Bionics Digital Signage — centralized content distribution, real-time scheduling, and multi-platform support.",
  },
};

/* ── Page ─────────────────────────────────────────────────── */
export default function DigitalSignagePage() {
  return (
    <>
      <NavbarProduct />
      <main
        id="main-content"
        style={{
          minHeight: "100vh",
          backgroundColor: "#FFFFFF",
          overflowX: "hidden",
        }}
      >
        <DSHero />
        <DSFeatures />
        <DSWorkflow />
        <DSHowItWorks />
        <DSFAQ />
        <DSCTABanner />
        <DSContact />
      </main>
      <Footer />
    </>
  );
}
