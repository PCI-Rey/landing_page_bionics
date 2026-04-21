"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

/* ── Data ─────────────────────────────────────────────────── */
const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "#",
    color: "#0077b5",
    hoverBg: "rgba(0,212,170,0.1)",
    hoverColor: "#00D4AA",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    hoverBg: "rgba(74,108,247,0.1)",
    hoverColor: "#4A6CF7",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    hoverBg: "rgba(139,92,246,0.1)",
    hoverColor: "#8B5CF6",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    hoverBg: "rgba(0,212,170,0.1)",
    hoverColor: "#00D4AA",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
] as const;

const FOOTER_LINKS = [
  {
    title: "Solutions",
    links: [
      { label: "Digital Signage", href: "#digital-signage" },
      { label: "Hospitality TV", href: "#hospitality-tv" },
      { label: "Wayfinding", href: "#wayfinding" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
    ],
  },
] as const;

const CONTACT_INFO = [
  { label: "Jl. Buni No.19, RT.9/RW.5, Mangga Besar, Kec. Taman Sari, Kota Jakarta Barat, Jakarta 11180", href: undefined, color: "#00D4AA", icon: "pin" },
  { label: "hello@bionics.id", href: "mailto:hello@bionics.id", color: "#4A6CF7", icon: "mail" },
  { label: "+62 21 1234 567", href: "tel:+62211234567", color: "#8B5CF6", icon: "phone" },
] as const;

/* ── Animations ───────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  },
};

/* ════════════════════════════════════════════════════════════
   FOOTER
   ════════════════════════════════════════════════════════════ */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsMobile(w < 640);
      setIsTablet(w >= 640 && w < 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <footer
      role="contentinfo"
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* ── Gradient line at top ───────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 3,
          background: "linear-gradient(90deg, #00D4AA 0%, #4A6CF7 50%, #8B5CF6 100%)",
        }}
      />
      {/* Soft glow beneath the line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 3, left: 0, right: 0,
          height: 120,
          background: "linear-gradient(180deg, rgba(74,108,247,0.03) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-bionics" style={{
        paddingTop: isMobile ? "3rem" : "5rem",
        paddingBottom: isMobile ? "2rem" : "3rem",
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* ── Main grid ─────────────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : isTablet
                  ? "1fr 1fr"
                  : "2fr 1fr 1fr 1fr",
              gap: isMobile ? "2rem" : "3rem",
              paddingBottom: isMobile ? "2rem" : "3.5rem",
              borderBottom: "1px solid #E8EDF5",
            }}
          >
            {/* ── Brand column ────────────────────────────── */}
            <motion.div variants={itemVariants} style={{ minWidth: 0 }}>
              {/* Logo + brand name */}
              <a
                href="#"
                aria-label="Bionics home"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  marginBottom: "1.5rem",
                  textDecoration: "none",
                }}
              >
                <Image
                  src="/assets/images/Brand_Bionics.png"
                  alt="Bionics Logo"
                  width={44}
                  height={44}
                  style={{ height: isMobile ? 36 : 44, width: "auto", objectFit: "contain", display: "block" }}
                />
                <span
                  style={{
                    fontSize: isMobile ? "1.5rem" : "1.75rem",
                    fontWeight: 800,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    paddingTop: "0.15rem",
                  }}
                >
                  BIONICS
                </span>
              </a>

              {/* Tagline */}
              <p style={{
                fontSize: isMobile ? "0.875rem" : "1rem",
                color: "#4B5563",
                lineHeight: 1.8,
                maxWidth: "32ch",
                marginBottom: "1.5rem",
              }}>
                Empowering businesses with intelligent display solutions.
                Transform your spaces with Bionics.
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                {SOCIAL_LINKS.map((social) => (
                  <SocialIcon key={social.name} social={social} isMobile={isMobile} />
                ))}
              </div>
            </motion.div>

            {/* ── Link columns ─────────────────────────────── */}
            {FOOTER_LINKS.map((group) => (
              <motion.div variants={itemVariants} key={group.title}>
                <h4 style={{
                  fontSize: "0.875rem",
                  fontWeight: 800,
                  color: "#0D0D0D",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: isMobile ? "1rem" : "1.5rem",
                }}>
                  {group.title}
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: isMobile ? "0.75rem" : "1rem" }}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        style={{
                          fontSize: isMobile ? "0.9375rem" : "1rem",
                          color: "#4B5563",
                          textDecoration: "none",
                          transition: "color 0.2s ease, transform 0.2s ease",
                          display: "inline-block",
                        }}
                        onMouseEnter={(e) => { 
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.color = "#4A6CF7"; 
                          el.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => { 
                          const el = e.currentTarget as HTMLAnchorElement;
                          el.style.color = "#4B5563"; 
                          el.style.transform = "translateX(0)";
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* ── Contact column ───────────────────────────── */}
            <motion.div variants={itemVariants}>
              <h4 style={{
                fontSize: "0.875rem", fontWeight: 800,
                color: "#0D0D0D", textTransform: "uppercase",
                letterSpacing: "0.15em", marginBottom: isMobile ? "1rem" : "1.5rem",
              }}>
                Get in Touch
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {CONTACT_INFO.map(({ label, href, color, icon }) => (
                  <li key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: 32, height: 32, borderRadius: "50%", background: `${color}15`,
                      flexShrink: 0,
                    }}>
                      <ContactIcon icon={icon} color={color} />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontSize: isMobile ? "0.875rem" : "1rem",
                          color: "#4B5563",
                          textDecoration: "none", transition: "color 0.2s ease",
                          wordBreak: "break-all",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = color; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#4B5563"; }}
                      >
                        {label}
                      </a>
                    ) : (
                      <span style={{
                        fontSize: isMobile ? "0.875rem" : "1rem",
                        color: "#4B5563",
                      }}>
                        {label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── Copyright bar ─────────────────────────────── */}
          <motion.div variants={itemVariants} style={{
            paddingTop: isMobile ? "1.5rem" : "2rem",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "wrap",
            alignItems: isMobile ? "center" : "center",
            justifyContent: "space-between",
            gap: "1rem",
            textAlign: isMobile ? "center" : "left",
          }}>
            <p style={{ fontSize: "0.875rem", color: "#9CA3AF" }}>
              © {currentYear} Bionics. All rights reserved.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              {(["Privacy Policy", "Terms of Service"] as const).map((label, i) => (
                <a
                  key={label}
                  href="#"
                  style={{
                    fontSize: "0.875rem",
                    color: "#9CA3AF",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#4B5563"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF"; }}
                >
                  {i > 0 && (
                    <span aria-hidden="true" style={{ marginRight: "1.5rem", color: "#E8EDF5" }}>·</span>
                  )}
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

/* ── Sub-components ───────────────────────────────────────── */

function SocialIcon({ social, isMobile }: { social: typeof SOCIAL_LINKS[number]; isMobile: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const size = isMobile ? 40 : 44;

  return (
    <a
      href={social.href}
      aria-label={social.name}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: 12,
        backgroundColor: isHovered ? social.hoverBg : "#FFFFFF",
        border: "1px solid",
        borderColor: isHovered ? "transparent" : "#E8EDF5",
        color: isHovered ? social.hoverColor : "#9CA3AF",
        textDecoration: "none",
        transition: "all 0.3s ease",
        boxShadow: isHovered ? `0 4px 12px ${social.hoverBg}` : "0 2px 8px rgba(0,0,0,0.02)",
        flexShrink: 0,
      }}
    >
      {social.icon}
    </a>
  );
}

function ContactIcon({ icon, color }: { icon: string; color: string }) {
  const props = {
    width: 16, height: 16, viewBox: "0 0 24 24",
    fill: "none", stroke: color,
    strokeWidth: 2, strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    style: { flexShrink: 0 },
  };

  if (icon === "pin") return (
    <svg {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
  if (icon === "mail") return (
    <svg {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
  return (
    <svg {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
