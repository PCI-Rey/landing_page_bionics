"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ── Nav links config ─────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on desktop resize */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #E8EDF5" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        transition: "background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div
        className="container-bionics"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* ── Logo ──────────────────────────────────────── */}
        <a
          href="#"
          aria-label="Bionics home"
          style={{ display: "flex", alignItems: "center", gap: "0.875rem", textDecoration: "none" }}
        >
          <Image
            src="/assets/images/Brand_Bionics.png"
            alt="Bionics Logo"
            width={44}
            height={44}
            style={{ height: 44, width: "auto", objectFit: "contain", display: "block" }}
            priority
          />
          <span
            style={{
              fontSize: "1.75rem",
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              lineHeight: 1,
              background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              paddingTop: "0.15rem", // Visually center with icon
            }}
          >
            BIONICS
          </span>
        </a>

        {/* ── Desktop Nav Links ──────────────────────────── */}
        <div
          className="desktop-only"
          style={{ alignItems: "center", gap: "2.5rem" }}
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        {/* ── CTA + Mobile Toggle ────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            id="navbar-mobile-toggle"
            className="mobile-only"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "1px solid #E8EDF5",
              background: "#FFFFFF",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: "block", width: 18, height: 2, background: "#0D0D0D", borderRadius: 2 }}
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              style={{ display: "block", width: 12, height: 2, background: "#0D0D0D", borderRadius: 2 }}
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: "block", width: 18, height: 2, background: "#0D0D0D", borderRadius: 2 }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ───────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              backgroundColor: "#FFFFFF",
              borderTop: "1px solid #E8EDF5",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            }}
          >
            <div
              className="container-bionics"
              style={{ paddingTop: "1.25rem", paddingBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  style={{
                    display: "block",
                    padding: "0.75rem 0",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#4B5563",
                    borderBottom: "1px solid #F1F5F9",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
                >
                  {link.label}
                </a>
              ))}


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ── Sub-components ───────────────────────────────────────── */

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      style={{
        position: "relative",
        fontSize: "0.9375rem",
        fontWeight: 500,
        color: "#4B5563",
        textDecoration: "none",
        paddingBottom: "2px",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
      className="nav-link"
    >
      {label}
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
