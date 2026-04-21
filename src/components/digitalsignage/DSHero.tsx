"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.12,
    },
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

const imageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.12,
    },
  },
};

const imageItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ── Styles ───────────────────────────────────────────────── */
const GRADIENT = "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)";

const gradientTextStyle: React.CSSProperties = {
  background: GRADIENT,
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
        paddingTop: isMobile ? "calc(72px + 2rem)" : "calc(72px + 5rem)",
        paddingBottom: isMobile ? "3rem" : "5rem",
        overflow: "hidden",
      }}
    >
      {/* ══ Background — Vivid animated blobs (visible on white) ══ */}
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
        {/* Blob 1 — Top Left: Cyan */}
        <motion.div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-15%",
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(0,212,170,0.55) 0%, rgba(0,212,170,0.15) 50%, transparent 75%)",
            filter: "blur(40px)",
            borderRadius: "50%",
            mixBlendMode: "multiply",
            willChange: "transform",
          }}
          animate={{
            x: [0, 80, 20, -40, 0],
            y: [0, 40, 80, 20, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
        />

        {/* Blob 2 — Bottom Right: Purple */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-15%",
            width: 650,
            height: 650,
            background: "radial-gradient(circle, rgba(139,92,246,0.50) 0%, rgba(74,108,247,0.20) 50%, transparent 75%)",
            filter: "blur(40px)",
            borderRadius: "50%",
            mixBlendMode: "multiply",
            willChange: "transform",
          }}
          animate={{
            x: [0, -70, -20, 50, 0],
            y: [0, -50, -80, -30, 0],
            scale: [1, 0.92, 1.08, 0.96, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            delay: 2,
            ease: "easeInOut",
          }}
        />

        {/* Blob 3 — Center: Blue drifting */}
        <motion.div
          style={{
            position: "absolute",
            top: "20%",
            left: "30%",
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(74,108,247,0.40) 0%, rgba(74,108,247,0.12) 50%, transparent 75%)",
            filter: "blur(35px)",
            borderRadius: "50%",
            mixBlendMode: "multiply",
            willChange: "transform",
          }}
          animate={{
            x: [0, 60, -50, 30, 0],
            y: [0, -60, 40, -30, 0],
            scale: [1, 1.12, 0.90, 1.06, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            delay: 4,
            ease: "easeInOut",
          }}
        />

        {/* ── Added: Scrolling grid (backgroundPosition — no overflow) ── */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "0px 48px"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          style={{
            position: "absolute",
            inset: "-48px 0 0 0",
            backgroundImage: `
              linear-gradient(to right,  rgba(74,108,247,0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(74,108,247,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 88% 85% at 50% 42%, rgba(0,0,0,1) 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 88% 85% at 50% 42%, rgba(0,0,0,1) 0%, transparent 100%)",
          }}
        />

        {/* ── Added: Glowing intersection dots ─────────────────── */}
        <motion.div
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          style={{ position: "absolute", top: "22%", left: "14%", width: 6, height: 6, borderRadius: "50%", background: "#00D4AA", boxShadow: "0 0 10px rgba(0,212,170,0.65)" }}
        />
        <motion.div
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
          style={{ position: "absolute", top: "18%", right: "18%", width: 6, height: 6, borderRadius: "50%", background: "#4A6CF7", boxShadow: "0 0 10px rgba(74,108,247,0.65)" }}
        />
        <motion.div
          animate={{ opacity: [0.25, 0.85, 0.25], scale: [1, 1.6, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.6 }}
          style={{ position: "absolute", top: "55%", left: "22%", width: 7, height: 7, borderRadius: "50%", background: "#8B5CF6", boxShadow: "0 0 12px rgba(139,92,246,0.60)" }}
        />
        <motion.div
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2.4 }}
          style={{ position: "absolute", top: "60%", right: "24%", width: 5, height: 5, borderRadius: "50%", background: "#00D4AA", boxShadow: "0 0 8px rgba(0,212,170,0.60)" }}
        />

        {/* ── Added: Corner frame markers ───────────────────────── */}
        <div style={{ position: "absolute", top: 40, left: 40 }}>
          <div style={{ width: 24, height: 1.5, background: "rgba(74,108,247,0.22)" }} />
          <div style={{ width: 1.5, height: 24, background: "rgba(74,108,247,0.22)", marginTop: -1.5 }} />
        </div>
        <div style={{ position: "absolute", top: 40, right: 40, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ width: 24, height: 1.5, background: "rgba(74,108,247,0.22)" }} />
          <div style={{ width: 1.5, height: 24, background: "rgba(74,108,247,0.22)", marginTop: -1.5 }} />
        </div>
        <div style={{ position: "absolute", bottom: 40, left: 40, display: "flex", flexDirection: "column-reverse" }}>
          <div style={{ width: 24, height: 1.5, background: "rgba(74,108,247,0.22)" }} />
          <div style={{ width: 1.5, height: 24, background: "rgba(74,108,247,0.22)", marginBottom: -1.5 }} />
        </div>
        <div style={{ position: "absolute", bottom: 40, right: 40, display: "flex", flexDirection: "column-reverse", alignItems: "flex-end" }}>
          <div style={{ width: 24, height: 1.5, background: "rgba(74,108,247,0.22)" }} />
          <div style={{ width: 1.5, height: 24, background: "rgba(74,108,247,0.22)", marginBottom: -1.5 }} />
        </div>

        {/* ── Added: Center vignette — keeps headline readable ─── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 62% 55% at 50% 40%, rgba(255,255,255,0.68) 0%, transparent 100%)",
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
          style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 1rem",
                background: "rgba(0,212,170,0.08)",
                border: "1px solid rgba(0,212,170,0.22)",
                borderRadius: 9999,
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#00D4AA",
                letterSpacing: "0.03em",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#00D4AA",
                  display: "inline-block",
                }}
              />
              Bionics Digital Signage
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
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
              fontSize: "1.125rem",
              color: "#4B5563",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: 640,
              margin: "0 auto 2.5rem",
            }}
          >
            Manage, schedule, and deliver stunning visual content to every
            screen in your business — from a single, intuitive dashboard.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
          >
            {/* Primary — gradient */}
            <a
              href="#contact"
              id="ds-hero-cta-primary"
              className="gradient-btn"
              style={{ padding: "0.875rem 2.25rem", fontSize: "1rem" }}
            >
              Get Started Free
              <ArrowIcon />
            </a>

            {/* Secondary — outline with gradient text */}
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
                border: "1.5px solid transparent",
                borderRadius: 9999,
                backgroundClip: "padding-box",
                position: "relative",
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

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.625rem",
              marginBottom: isMobile ? "3rem" : "4rem",
            }}
          >
            {/* Stars */}
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
              aria-label="5 star rating"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <span
              style={{
                fontSize: "0.875rem",
                color: "#4B5563",
                fontWeight: 500,
              }}
            >
              Trusted by{" "}
              <strong style={{ color: "#0D0D0D", fontWeight: 700 }}>
                100+ Companies
              </strong>
            </span>
          </motion.div>
        </motion.div>

        {/* ── Premium Single Image Showcase ──────────────── */}
        <motion.div
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            position: "relative",
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >

          {/* Gradient border frame */}
          <motion.div
            variants={imageItemVariants}
            style={{
              position: "relative",
              padding: 3,
              borderRadius: 24,
              background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
              boxShadow:
                "0 24px 80px rgba(74,108,247,0.22), 0 8px 32px rgba(0,0,0,0.10)",
            }}
          >
            {/* Glow ring behind image */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: -20,
                borderRadius: 36,
                background:
                  "radial-gradient(ellipse at center, rgba(74,108,247,0.12) 0%, transparent 70%)",
                zIndex: -1,
                filter: "blur(20px)",
              }}
            />

            {/* Image wrapper */}
            <div style={{ borderRadius: 22, overflow: "hidden", position: "relative" }}>
              <Image
                src="/assets/images/sign_age.jpeg"
                alt="Bionics Digital Signage — display in action"
                width={1200}
                height={675}
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

              {/* Glass info bar overlaid at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
                  padding: isMobile ? "1.5rem 1.25rem 1.25rem" : "2rem 2rem 1.5rem",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <p style={{ color: "#FFFFFF", fontSize: isMobile ? "0.9rem" : "1.0625rem", fontWeight: 600, margin: 0 }}>
                    Real-time Content Management Dashboard
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Bottom floating pill stats */}
          <motion.div
            variants={imageItemVariants}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: isMobile ? "0.75rem" : "1.5rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Content Types", value: "50+" },
              { label: "Avg. Setup Time", value: "< 5 min" },
              { label: "Formats Supported", value: "All Major" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "rgba(248,250,255,0.9)",
                  border: "1px solid #E8EDF5",
                  borderRadius: 12,
                  padding: "0.625rem 1.25rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0D0D0D", margin: 0 }}>{stat.value}</p>
                <p style={{ fontSize: "0.75rem", color: "#9CA3AF", fontWeight: 500, margin: 0 }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Icon Components ──────────────────────────────────────── */
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

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#F59E0B"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
