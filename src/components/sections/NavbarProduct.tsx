"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

/* ── Nav links config ─────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Digital Signage", href: "/digital-signage" },
  { label: "Hospitality TV",  href: "/hospitality-tv"  },
  { label: "Wayfinding",      href: "/wayfinding"      },
];

export default function NavbarProduct() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on desktop resize */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMobileClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      document.body.style.overflow = "";
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      role="navigation"
      aria-label="Product navigation"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.98)"
          : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #E8EDF5" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        transition:
          "background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
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
          href="/"
          aria-label="Bionics home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.875rem",
            textDecoration: "none",
          }}
        >
          <Image
            src="/assets/images/Brand_Bionics.png"
            alt="Bionics Logo"
            width={44}
            height={44}
            style={{
              height: 44,
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
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
              paddingTop: "0.15rem",
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
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={pathname === link.href}
            />
          ))}
        </div>

        {/* ── Mobile Toggle ───────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            id="navbar-mobile-toggle"
            className="mobile-only"
            style={{
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
              style={{
                display: "block",
                width: 18,
                height: 2,
                background: "#0D0D0D",
                borderRadius: 2,
              }}
            />
            <motion.span
              animate={
                mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
              style={{
                display: "block",
                width: 12,
                height: 2,
                background: "#0D0D0D",
                borderRadius: 2,
              }}
            />
            <motion.span
              animate={
                mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
              style={{
                display: "block",
                width: 18,
                height: 2,
                background: "#0D0D0D",
                borderRadius: 2,
              }}
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
              style={{
                paddingTop: "1.25rem",
                paddingBottom: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileClick(e, link.href)}
                  style={{
                    display: "block",
                    padding: "0.75rem 0",
                    fontSize: "1rem",
                    fontWeight: pathname === link.href ? 700 : 500,
                    color: pathname === link.href ? "#4A6CF7" : "#4B5563",
                    borderBottom: "1px solid #F1F5F9",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
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

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <a
      href={href}
      style={{
        position: "relative",
        fontSize: "0.9375rem",
        fontWeight: active ? 700 : 500,
        color: active ? "#0D0D0D" : "#4B5563",
        textDecoration: "none",
        paddingBottom: "2px",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "#0D0D0D";
      }}
      onMouseLeave={(e) => {
        if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "#4B5563";
      }}
    >
      {active ? (
        <span
          style={{
            background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {label}
        </span>
      ) : (
        label
      )}
      {/* Bottom accent for active link */}
      {active && (
        <motion.div
          layoutId="nav-active-accent"
          style={{
            position: "absolute",
            bottom: -4,
            left: 0,
            right: 0,
            height: 2,
            background: "linear-gradient(90deg, #00D4AA, #4A6CF7)",
            borderRadius: 2,
          }}
        />
      )}
    </a>
  );
}


