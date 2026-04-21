import type { Metadata } from "next";
import NavbarProduct from "@/components/sections/NavbarProduct";
import Footer from "@/components/sections/Footer";
import WFHero from "@/components/wayfinding/WFHero";
import WFFeatures from "@/components/wayfinding/WFFeatures";
import WFGallery from "@/components/wayfinding/WFGallery";
import WFUseCases from "@/components/wayfinding/WFUseCases";
import WFWorkflow from "@/components/wayfinding/WFWorkflow";
import WFBenefits from "@/components/wayfinding/WFBenefits";
import WFFAQ from "@/components/wayfinding/WFFAQ";
import WFCTABanner from "@/components/wayfinding/WFCTABanner";
import WFContact from "@/components/wayfinding/WFContact";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Wayfinding Solutions | Bionics",
  description:
    "Guide visitors through any space with elegance. Bionics Wayfinding delivers interactive, touch-friendly navigation for malls, hospitals, hotels, offices, and premium destinations.",
  keywords: [
    "Wayfinding",
    "Bionics Wayfinding",
    "Interactive Navigation",
    "Digital Kiosk",
    "Touch Screen Directory",
    "Indoor Navigation",
    "Visitor Experience",
    "Smart Navigation System",
  ],
  authors: [{ name: "Bionics" }],
  robots: "index, follow",
  openGraph: {
    title: "Wayfinding Solutions | Bionics",
    description:
      "Guide visitors through any space with elegance. Interactive, touch-friendly navigation for premium commercial environments.",
    type: "website",
    locale: "en_US",
    siteName: "Bionics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayfinding Solutions | Bionics",
    description:
      "Guide visitors through any space with elegance. Interactive, touch-friendly navigation for premium commercial environments.",
  },
};

/* ── Page ─────────────────────────────────────────────────── */
export default function WayfindingPage() {
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
        <WFHero />
        <WFFeatures />
        <WFGallery />
        <WFUseCases />
        <WFWorkflow />
        <WFBenefits />
        <WFFAQ />
        <WFCTABanner />
        <WFContact />
      </main>
      <Footer />
    </>
  );
}
