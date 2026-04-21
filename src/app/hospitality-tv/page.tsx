import type { Metadata } from "next";
import NavbarProduct from "@/components/sections/NavbarProduct";
import Footer from "@/components/sections/Footer";
import HTVHero from "@/components/hospitalitytv/HTVHero";
import HTVFeatures from "@/components/hospitalitytv/HTVFeatures";
import HTVShowcase from "@/components/hospitalitytv/HTVShowcase";
import HTVExperience from "@/components/hospitalitytv/HTVExperience";
import HTVBenefits from "@/components/hospitalitytv/HTVBenefits";
import HTVFAQ from "@/components/hospitalitytv/HTVFAQ";
import HTVCTABanner from "@/components/hospitalitytv/HTVCTABanner";
import HTVContact from "@/components/hospitalitytv/HTVContact";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Hospitality TV | Bionics",
  description:
    "Transform every hotel room into a personalized guest experience. Bionics Hospitality TV delivers entertainment, music, hotel guides, and nearby discovery through one beautifully integrated in-room TV platform.",
  keywords: [
    "Hospitality TV",
    "Bionics Hospitality TV",
    "In-Room Entertainment",
    "Hotel TV System",
    "Guest Experience Platform",
    "Hotel Digital Signage",
    "In-Room Technology",
    "Smart Hotel TV",
    "Hotel Guest Experience",
    "Personalized Welcome Screen",
  ],
  authors: [{ name: "Bionics" }],
  robots: "index, follow",
  openGraph: {
    title: "Hospitality TV | Bionics",
    description:
      "Transform every hotel room into a personalized guest experience with entertainment, music, hotel guides, and local discovery on one seamless TV platform.",
    type: "website",
    locale: "en_US",
    siteName: "Bionics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality TV | Bionics",
    description:
      "Transform every hotel room into a personalized guest experience with entertainment, music, hotel guides, and local discovery on one seamless TV platform.",
  },
};

/* ── Page ─────────────────────────────────────────────────── */
export default function HospitalityTVPage() {
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
        <HTVHero />
        <HTVFeatures />
        <HTVShowcase />
        <HTVExperience />
        <HTVBenefits />
        <HTVFAQ />
        <HTVCTABanner />
        <HTVContact />
      </main>
      <Footer />
    </>
  );
}
