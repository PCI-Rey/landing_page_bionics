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
   WF HERO
   ════════════════════════════════════════════════════════════ */
export default function WFHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      aria-label="Wayfinding Hero"
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        paddingTop: isMobile ? "calc(72px + 2.5rem)" : "calc(72px + 5rem)",
        paddingBottom: isMobile ? "3.5rem" : "6rem",
        overflow: "hidden",
      }}
    >
      {/* ══ Premium Animated Hero Background ════════════════════ */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* ── Layer 1: Fine architectural grid (static base) ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right,  rgba(74,108,247,0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(74,108,247,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 95% 90% at 50% 40%, rgba(0,0,0,1) 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 95% 90% at 50% 40%, rgba(0,0,0,1) 0%, transparent 100%)",
          }}
        />

        {/* ── Layer 2: Ambient orbs — large, clearly drifting ── */}

        {/* Orb A — Cyan, top-left, drifts right-down */}
        <motion.div
          animate={{ x: [0, 200, 80, -60, 0], y: [0, 100, 220, 70, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-30%",
            left: "-10%",
            width: 900,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(0,212,170,0.50) 0%, rgba(0,212,170,0.15) 50%, transparent 72%)",
            filter: "blur(48px)",
            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
            mixBlendMode: "multiply",
            willChange: "transform",
          }}
        />

        {/* Orb B — Indigo, right, drifts left-up */}
        <motion.div
          animate={{ x: [0, -180, -80, 100, 0], y: [0, -120, -200, -70, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "-25%",
            right: "-12%",
            width: 860,
            height: 460,
            background:
              "radial-gradient(ellipse, rgba(74,108,247,0.48) 0%, rgba(74,108,247,0.14) 50%, transparent 72%)",
            filter: "blur(48px)",
            borderRadius: "45% 55% 40% 60% / 55% 45% 60% 40%",
            mixBlendMode: "multiply",
            willChange: "transform",
          }}
        />

        {/* Orb C — Violet, center, orbital slow float */}
        <motion.div
          animate={{ x: [0, 120, -90, 50, 0], y: [0, -90, 60, -120, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            left: "20%",
            width: 780,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(139,92,246,0.42) 0%, rgba(139,92,246,0.12) 50%, transparent 72%)",
            filter: "blur(50px)",
            borderRadius: "50% 50% 65% 35% / 45% 55% 45% 55%",
            mixBlendMode: "multiply",
            willChange: "transform",
          }}
        />

        {/* ── Layer 3: Diagonal route sweep lines ─────────────── */}
        {/* These travel across the grid, reinforcing the navigation/spatial theme */}

        {/* Sweep 1 — fast, shallow diagonal */}
        <motion.div
          animate={{ x: ["-120%", "220%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear", repeatDelay: 1 }}
          style={{
            position: "absolute",
            top: "28%",
            left: 0,
            width: "55%",
            height: 2,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.45) 30%, rgba(74,108,247,0.35) 70%, transparent 100%)",
            transform: "rotate(-15deg)",
            filter: "blur(1px)",
            willChange: "transform",
          }}
        />

        {/* Sweep 2 — slower, steeper diagonal, indigo */}
        <motion.div
          animate={{ x: ["-140%", "240%"] }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear", repeatDelay: 3 }}
          style={{
            position: "absolute",
            top: "55%",
            left: 0,
            width: "65%",
            height: 1.5,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(74,108,247,0.40) 35%, rgba(139,92,246,0.30) 70%, transparent 100%)",
            transform: "rotate(-22deg)",
            filter: "blur(0.5px)",
            willChange: "transform",
          }}
        />

        {/* Sweep 3 — medium, gentle upward diagonal */}
        <motion.div
          animate={{ x: ["-130%", "230%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear", repeatDelay: 2 }}
          style={{
            position: "absolute",
            top: "70%",
            left: 0,
            width: "50%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.35) 40%, rgba(74,108,247,0.28) 70%, transparent 100%)",
            transform: "rotate(-8deg)",
            filter: "blur(0.5px)",
            willChange: "transform",
          }}
        />

        {/* ── Layer 4: Soft vertical light band — vertical drift ─ */}
        <motion.div
          animate={{ y: ["-60%", "160%"] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: "38%",
            width: "24%",
            height: "70%",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(74,108,247,0.10) 30%, rgba(139,92,246,0.08) 70%, transparent 100%)",
            filter: "blur(30px)",
            willChange: "transform",
          }}
        />

        {/* ── Layer 5: Center vignette — keeps content dominant ─ */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 58% 48% at 50% 40%, rgba(255,255,255,0.62) 0%, transparent 100%)",
          }}
        />
      </div>

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
              Bionics Wayfinding
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
            Navigation, Elevated for{" "}
            <span style={gradientTextStyle}>Modern Spaces</span>
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
            Help visitors move effortlessly through malls, hospitals, offices,
            hotels, and public destinations — with intuitive, touch-friendly
            digital wayfinding designed for premium environments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            {/* Primary */}
            <a
              href="#contact"
              id="wf-hero-cta-primary"
              className="gradient-btn"
              style={{ padding: "0.875rem 2.25rem", fontSize: "1rem" }}
            >
              Schedule a Demo
              <ArrowIcon />
            </a>

            {/* Secondary */}
            <a
              href="#wf-features"
              id="wf-hero-cta-secondary"
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
            Designed for premium visitor experiences · Trusted by leading
            properties
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
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "1rem" : "1.5rem",
            alignItems: isMobile ? "stretch" : "flex-end",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {/* Image 1 — Left */}
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              flex: isMobile ? "1 1 auto" : "1 1 33%",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.09)",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/images/wayfinding_1.jpeg"
              alt="Bionics Wayfinding — interactive kiosk in a premium space"
              width={640}
              height={480}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "4/3",
                objectFit: "cover",
                display: "block",
              }}
              priority
            />
          </motion.div>

          {/* Image 2 — Middle (elevated) */}
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              flex: isMobile ? "1 1 auto" : "1 1 33%",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow:
                "0 20px 60px rgba(74,108,247,0.18), 0 4px 24px rgba(0,0,0,0.07)",
              transform: isMobile ? "none" : "translateY(-24px)",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/images/wayfinding_2.jpeg"
              alt="Bionics Wayfinding — multi-floor navigation display"
              width={640}
              height={480}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "4/3",
                objectFit: "cover",
                display: "block",
              }}
              priority
            />
          </motion.div>

          {/* Image 3 — Right */}
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              flex: isMobile ? "1 1 auto" : "1 1 33%",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.09)",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/images/wayfinding_3.jpeg"
              alt="Bionics Wayfinding — directory and map interface"
              width={640}
              height={480}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "4/3",
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
