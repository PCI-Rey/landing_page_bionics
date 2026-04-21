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
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

/* ── Styles ───────────────────────────────────────────────── */
const GRADIENT = "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)";

const gradientTextStyle: React.CSSProperties = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/* ── Screenshot data ──────────────────────────────────────── */
const SCREENSHOTS = [
  {
    src: "/assets/images/hospitality_1.png",
    alt: "Bionics Hospitality TV — Personalized Welcome Experience",
    caption: "Personalized Welcome",
    size: "large",
  },
  {
    src: "/assets/images/hospitality_2.png",
    alt: "Bionics Hospitality TV — Nearby Places & Local Discovery",
    caption: "Nearby Discovery",
    size: "medium",
  },
  {
    src: "/assets/images/hospitality_3.png",
    alt: "Bionics Hospitality TV — Integrated Entertainment Playback",
    caption: "Entertainment Playback",
    size: "medium",
  },
  {
    src: "/assets/images/hospitality_4.png",
    alt: "Bionics Hospitality TV — In-Room Music Experience",
    caption: "In-Room Music",
    size: "small",
  },
  {
    src: "/assets/images/hospitality_5.png",
    alt: "Bionics Hospitality TV — Hotel Guide & Guest Services",
    caption: "Hotel Guide & Services",
    size: "small",
  },
];

/* ════════════════════════════════════════════════════════════
   HTV HERO
   ════════════════════════════════════════════════════════════ */
export default function HTVHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      aria-label="Hospitality TV Hero"
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        paddingTop: isMobile ? "calc(72px + 2.5rem)" : "calc(72px + 5rem)",
        paddingBottom: isMobile ? "3.5rem" : "6rem",
        overflow: "hidden",
      }}
    >
      {/* ══ Background — safe pattern (no translateY overflow) ═══ */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
      >
        {/* Scrolling grid */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "0px 48px"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          style={{
            position: "absolute",
            inset: "-48px 0 0 0",
            backgroundImage: `
              linear-gradient(to right,  rgba(0,212,170,0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,212,170,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 88% 85% at 50% 42%, rgba(0,0,0,1) 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 88% 85% at 50% 42%, rgba(0,0,0,1) 0%, transparent 100%)",
          }}
        />

        {/* Ambient blob — Cyan, top-left */}
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.07, 0.96, 1] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-18%",
            left: "-10%",
            width: 680,
            height: 680,
            background: "radial-gradient(circle, rgba(0,212,170,0.14) 0%, transparent 68%)",
            filter: "blur(70px)",
            borderRadius: "50%",
            willChange: "transform",
          }}
        />

        {/* Ambient blob — Indigo, top-right */}
        <motion.div
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -30, 0], scale: [1, 1.06, 0.94, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-15%",
            right: "-12%",
            width: 720,
            height: 720,
            background: "radial-gradient(circle, rgba(74,108,247,0.11) 0%, transparent 68%)",
            filter: "blur(80px)",
            borderRadius: "50%",
            willChange: "transform",
          }}
        />

        {/* Ambient blob — Violet, bottom-center */}
        <motion.div
          animate={{ x: [0, 40, -35, 0], y: [0, -40, 35, 0], scale: [1, 1.08, 0.93, 1] }}
          transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "-20%",
            left: "28%",
            width: 620,
            height: 620,
            background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 68%)",
            filter: "blur(70px)",
            borderRadius: "50%",
            willChange: "transform",
          }}
        />

        {/* Diagonal light sweep */}
        <motion.div
          animate={{ x: ["-120%", "200%"] }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear", repeatDelay: 8 }}
          style={{
            position: "absolute",
            top: "-30%",
            left: 0,
            width: "38%",
            height: "160%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.04) 40%, rgba(74,108,247,0.03) 60%, transparent 100%)",
            filter: "blur(20px)",
            transform: "rotate(-10deg)",
            willChange: "transform",
          }}
        />

        {/* Pulsing intersection dots */}
        <motion.div
          animate={{ opacity: [0.3, 0.85, 0.3], scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          style={{ position: "absolute", top: "22%", left: "14%", width: 6, height: 6, borderRadius: "50%", background: "#00D4AA", boxShadow: "0 0 10px rgba(0,212,170,0.65)" }}
        />
        <motion.div
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
          style={{ position: "absolute", top: "16%", right: "18%", width: 6, height: 6, borderRadius: "50%", background: "#4A6CF7", boxShadow: "0 0 10px rgba(74,108,247,0.65)" }}
        />
        <motion.div
          animate={{ opacity: [0.25, 0.85, 0.25], scale: [1, 1.6, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
          style={{ position: "absolute", top: "55%", left: "22%", width: 5, height: 5, borderRadius: "50%", background: "#8B5CF6", boxShadow: "0 0 8px rgba(139,92,246,0.60)" }}
        />

        {/* Corner frame markers */}
        <div style={{ position: "absolute", top: 40, left: 40 }}>
          <div style={{ width: 24, height: 1.5, background: "rgba(0,212,170,0.25)" }} />
          <div style={{ width: 1.5, height: 24, background: "rgba(0,212,170,0.25)", marginTop: -1.5 }} />
        </div>
        <div style={{ position: "absolute", top: 40, right: 40, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ width: 24, height: 1.5, background: "rgba(0,212,170,0.25)" }} />
          <div style={{ width: 1.5, height: 24, background: "rgba(0,212,170,0.25)", marginTop: -1.5 }} />
        </div>
        <div style={{ position: "absolute", bottom: 40, left: 40, display: "flex", flexDirection: "column-reverse" }}>
          <div style={{ width: 24, height: 1.5, background: "rgba(0,212,170,0.25)" }} />
          <div style={{ width: 1.5, height: 24, background: "rgba(0,212,170,0.25)", marginBottom: -1.5 }} />
        </div>
        <div style={{ position: "absolute", bottom: 40, right: 40, display: "flex", flexDirection: "column-reverse", alignItems: "flex-end" }}>
          <div style={{ width: 24, height: 1.5, background: "rgba(0,212,170,0.25)" }} />
          <div style={{ width: 1.5, height: 24, background: "rgba(0,212,170,0.25)", marginBottom: -1.5 }} />
        </div>

        {/* Center vignette — keeps headline dominant */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 64% 55% at 50% 38%, rgba(255,255,255,0.78) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ══ Content ══════════════════════════════════════════ */}
      <div className="container-bionics" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Text Block ───────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", maxWidth: 860, margin: "0 auto" }}
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 1rem",
                background: "rgba(0,212,170,0.07)",
                border: "1px solid rgba(0,212,170,0.20)",
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
              Bionics Hospitality TV
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
            One Screen,{" "}
            <span style={gradientTextStyle}>A More Memorable</span>
            <br />
            <span style={gradientTextStyle}>Guest Experience</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: isMobile ? "1rem" : "1.125rem",
              color: "#4B5563",
              lineHeight: 1.8,
              maxWidth: 620,
              margin: "0 auto 2.5rem",
            }}
          >
            Give guests everything they need — curated entertainment, hotel
            services, in-room music, nearby place discovery, and a personalized
            welcome — all through one beautifully integrated TV platform designed
            for modern hospitality.
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
            <a
              href="#htv-contact"
              id="htv-hero-cta-primary"
              className="gradient-btn"
              style={{ padding: "0.875rem 2.25rem", fontSize: "1rem" }}
            >
              Schedule a Demo
              <ArrowIcon />
            </a>
            <a
              href="#htv-features"
              id="htv-hero-cta-secondary"
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
            Designed for modern hospitality experiences · Trusted by leading hotels
          </motion.p>
        </motion.div>

        {/* ── Screenshot Composition ───────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.15, staggerChildren: 0.1 },
            },
          }}
        >
          {/* Desktop: asymmetric bento-style */}
          {!isMobile ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "auto auto",
                gap: "1.25rem",
                maxWidth: 1100,
                margin: "0 auto",
              }}
            >
              {/* Featured — spans 1 col, 2 rows (tall) */}
              <motion.div
                custom={0}
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  gridColumn: "1 / 2",
                  gridRow: "1 / 3",
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid #E8EDF5",
                  boxShadow:
                    "0 20px 60px rgba(0,212,170,0.14), 0 4px 20px rgba(0,0,0,0.07)",
                  background: "#0D0D14",
                  willChange: "transform",
                }}
              >
                <Image
                  src={SCREENSHOTS[0].src}
                  alt={SCREENSHOTS[0].alt}
                  width={720}
                  height={960}
                  sizes="33vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  priority
                />
                <div style={captionOverlay}>
                  <p style={captionText}>{SCREENSHOTS[0].caption}</p>
                </div>
              </motion.div>

              {/* Top-center */}
              <motion.div
                custom={1}
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ ...mediumCard, gridColumn: "2 / 3", gridRow: "1" }}
              >
                <Image
                  src={SCREENSHOTS[1].src}
                  alt={SCREENSHOTS[1].alt}
                  width={640}
                  height={360}
                  sizes="33vw"
                  style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
                  priority
                />
                <div style={captionOverlay}>
                  <p style={captionText}>{SCREENSHOTS[1].caption}</p>
                </div>
              </motion.div>

              {/* Top-right */}
              <motion.div
                custom={2}
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ ...mediumCard, gridColumn: "3 / 4", gridRow: "1" }}
              >
                <Image
                  src={SCREENSHOTS[2].src}
                  alt={SCREENSHOTS[2].alt}
                  width={640}
                  height={360}
                  sizes="33vw"
                  style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
                  priority
                />
                <div style={captionOverlay}>
                  <p style={captionText}>{SCREENSHOTS[2].caption}</p>
                </div>
              </motion.div>

              {/* Bottom-center */}
              <motion.div
                custom={3}
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ ...mediumCard, gridColumn: "2 / 3", gridRow: "2" }}
              >
                <Image
                  src={SCREENSHOTS[3].src}
                  alt={SCREENSHOTS[3].alt}
                  width={640}
                  height={360}
                  sizes="33vw"
                  style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
                />
                <div style={captionOverlay}>
                  <p style={captionText}>{SCREENSHOTS[3].caption}</p>
                </div>
              </motion.div>

              {/* Bottom-right */}
              <motion.div
                custom={4}
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ ...mediumCard, gridColumn: "3 / 4", gridRow: "2" }}
              >
                <Image
                  src={SCREENSHOTS[4].src}
                  alt={SCREENSHOTS[4].alt}
                  width={640}
                  height={360}
                  sizes="33vw"
                  style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
                />
                <div style={captionOverlay}>
                  <p style={captionText}>{SCREENSHOTS[4].caption}</p>
                </div>
              </motion.div>
            </div>
          ) : (
            /* Mobile: clean vertical stack */
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 520, margin: "0 auto" }}>
              {SCREENSHOTS.map((s, i) => (
                <motion.div
                  key={s.src}
                  custom={i}
                  variants={imageVariants}
                  style={{
                    position: "relative",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid #E8EDF5",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    background: "#0D0D14",
                  }}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={640}
                    height={360}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", display: "block" }}
                    priority={i === 0}
                  />
                  <div style={captionOverlay}>
                    <p style={captionText}>{s.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Shared card styles ───────────────────────────────────── */
const mediumCard: React.CSSProperties = {
  position: "relative",
  borderRadius: 20,
  overflow: "hidden",
  border: "1px solid #E8EDF5",
  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
  background: "#0D0D14",
  willChange: "transform",
};

const captionOverlay: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "1.25rem 1rem 0.875rem",
  background:
    "linear-gradient(0deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.18) 65%, transparent 100%)",
};

const captionText: React.CSSProperties = {
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: "rgba(255,255,255,0.92)",
  margin: 0,
  letterSpacing: "0.01em",
};

/* ── Icon ─────────────────────────────────────────────────── */
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
