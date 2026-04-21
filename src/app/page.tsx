import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ProductCards from "@/components/sections/ProductCards";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

/* ── Page - Server Component (no "use client") ────────────── */
export default function Home() {
  return (
    <>
      {/* Fixed navigation - always on top */}
      <Navbar />

      {/* Main page content */}
      <main
        id="main-content"
        style={{ flex: 1, backgroundColor: "#FFFFFF" }}
      >
        {/* ── Hero ────────────────────────────────────────── */}
        <section id="hero" aria-label="Hero">
          <Hero />
        </section>

        {/* ── Products ────────────────────────────────────── */}
        <section id="products" aria-label="Our Products">
          <ProductCards />
        </section>

        {/* ── Contact ─────────────────────────────────────── */}
        <section id="contact" aria-label="Contact Us">
          <ContactForm />
        </section>
      </main>

      {/* Site footer */}
      <Footer />
    </>
  );
}
