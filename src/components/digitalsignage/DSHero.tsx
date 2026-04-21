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
      {/* ── Dot Grid Background ────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(#F0F0F0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Subtle radial fade overlay ─────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0) 0%, #FFFFFF 75%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

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

        {/* ── Product Images ───────────────────────────────── */}
        <motion.div
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "1.25rem",
            alignItems: isMobile ? "stretch" : "flex-end",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {/* Image 1 — Left */}
          <motion.div
            variants={imageItemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              flex: isMobile ? "1 1 auto" : "1 1 33%",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/images/sign_age_1.jpeg"
              alt="Bionics Digital Signage — display in action"
              width={640}
              height={360}
              sizes="(max-width: 768px) 100vw, 33vw"
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

          {/* Image 2 — Middle (elevated on desktop) */}
          <motion.div
            variants={imageItemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              flex: isMobile ? "1 1 auto" : "1 1 33%",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow:
                "0 16px 64px rgba(74,108,247,0.18), 0 4px 24px rgba(0,0,0,0.08)",
              transform: isMobile ? "none" : "translateY(-20px)",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/images/sign_age_2.jpeg"
              alt="Bionics Digital Signage — content management"
              width={640}
              height={360}
              sizes="(max-width: 768px) 100vw, 33vw"
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

          {/* Image 3 — Right */}
          <motion.div
            variants={imageItemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            style={{
              flex: isMobile ? "1 1 auto" : "1 1 33%",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/images/sign_age_3.jpeg"
              alt="Bionics Digital Signage — multi-screen layout"
              width={640}
              height={360}
              sizes="(max-width: 768px) 100vw, 33vw"
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
