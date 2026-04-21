"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ── Styles ───────────────────────────────────────────────── */
const gradientTextStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/* ════════════════════════════════════════════════════════════
   DS HERO
   ════════════════════════════════════════════════════════════ */
export default function DSHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      aria-label="Digital Signage Hero"
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        paddingTop: isMobile ? "calc(72px + 2.5rem)" : "calc(72px + 5rem)",
        paddingBottom: isMobile ? "3.5rem" : "6rem",
        overflow: "hidden",
      }}
    >
      {/* ══════════════════════════════════════════════════════════
          BACKGROUND - identical pattern to WFHero
          ══════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
      >
        {/* Layer 1: Scrolling grid via backgroundPosition */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "0px 48px"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          style={{
            position: "absolute",
            inset: "-48px 0 0 0",
            backgroundImage: `
              linear-gradient(to right,  rgba(74,108,247,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(74,108,247,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 88% 85% at 50% 42%, rgba(0,0,0,1) 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 88% 85% at 50% 42%, rgba(0,0,0,1) 0%, transparent 100%)",
          }}
        />

        {/* Layer 2: Soft glow blobs */}
        <motion.div
          animate={{ x: [0, 40, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.06, 0.96, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "-10%",
            top: "-10%",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(0,212,170,0.10) 0%, transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
            willChange: "transform",
          }}
        />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 40, -30, 0], scale: [1, 1.05, 0.94, 1] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          style={{
            position: "absolute",
            right: "-5%",
            top: "-15%",
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(74,108,247,0.09) 0%, transparent 70%)",
            filter: "blur(90px)",
            borderRadius: "50%",
            willChange: "transform",
          }}
        />
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -30, 40, 0], scale: [1, 1.07, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "30%",
            bottom: "-10%",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
            willChange: "transform",
          }}
        />

        {/* Layer 3: Glowing grid intersection dots */}
        <motion.div
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "22%",
            left: "16%",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#00D4AA",
            boxShadow: "0 0 10px rgba(0,212,170,0.6)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
          style={{
            position: "absolute",
            top: "18%",
            right: "20%",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#4A6CF7",
            boxShadow: "0 0 10px rgba(74,108,247,0.6)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.25, 0.85, 0.25], scale: [1, 1.6, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.6 }}
          style={{
            position: "absolute",
            top: "52%",
            left: "25%",
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#8B5CF6",
            boxShadow: "0 0 12px rgba(139,92,246,0.55)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2.2 }}
          style={{
            position: "absolute",
            top: "58%",
            right: "28%",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#00D4AA",
            boxShadow: "0 0 8px rgba(0,212,170,0.55)",
          }}
        />



        {/* Layer 5: Center vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 62% 55% at 50% 40%, rgba(255,255,255,0.75) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════
          CONTENT
          ══════════════════════════════════════════════════════════ */}
      <div
        className="container-bionics"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* ── Text content ─────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            textAlign: "center",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 1rem",
                background: "rgba(74,108,247,0.07)",
                border: "1px solid rgba(74,108,247,0.18)",
                borderRadius: 9999,
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#4A6CF7",
                letterSpacing: "0.03em",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#4A6CF7",
                  display: "inline-block",
                }}
                aria-hidden="true"
              />
              Bionics Digital Signage
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "1.5rem",
            }}
          >
            The Future of{" "}
            <span style={gradientTextStyle}>Information Display</span>{" "}
            is Here
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              color: "#4B5563",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: 600,
              margin: "0 auto 2.5rem",
            }}
          >
            Manage, schedule, and deliver stunning visual content to every
            screen in your business - from a single, intuitive dashboard.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="hero-btn-group"
            style={{ marginBottom: "2rem" }}
          >
            {/* Primary */}
            <a
              href="#contact"
              id="ds-hero-cta-primary"
              className="gradient-btn"
              style={{ padding: "0.875rem 2.25rem", fontSize: "1rem" }}
            >
              Schedule a Demo
              <ArrowIcon />
            </a>

            {/* Secondary */}
            <a
              href="#ds-features"
              id="ds-hero-cta-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2.25rem",
                fontSize: "1rem",
                fontWeight: 600,
                background: "#FFFFFF",
                borderRadius: 9999,
                textDecoration: "none",
                color: "#4A6CF7",
                boxShadow: "0 0 0 1.5px #E8EDF5",
                transition: "box-shadow 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 0 1.5px #4A6CF7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 0 1.5px #E8EDF5";
              }}
            >
              Explore Features
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "0.875rem",
              color: "#9CA3AF",
              fontWeight: 500,
              letterSpacing: "0.01em",
              marginBottom: isMobile ? "3rem" : "4.5rem",
            }}
          >
            Manage content from anywhere · Real-time updates · No complexity
          </motion.p>
        </motion.div>

        {/* ── Image Composition ─────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.2, staggerChildren: 0.14 },
            },
          }}
          style={{
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              borderRadius: 20,
              overflow: "hidden",
              boxShadow:
                "0 20px 60px rgba(74,108,247,0.18), 0 4px 24px rgba(0,0,0,0.07)",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/images/sign_age.jpeg"
              alt="Bionics Digital Signage - Content Display Dashboard"
              width={1280}
              height={720}
              sizes="(max-width: 768px) 100vw, 1000px"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "16/9",
                objectFit: "cover",
                display: "block",
              }}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Icons ────────────────────────────────────────────────── */
function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
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
