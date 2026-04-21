"use client";

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

/* ── Styles ───────────────────────────────────────────────── */
const GRADIENT = "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)";

const captionOverlay: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "1.5rem 1.25rem 1rem",
  background:
    "linear-gradient(0deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.20) 60%, transparent 100%)",
};

const captionText: React.CSSProperties = {
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: "rgba(255,255,255,0.92)",
  margin: 0,
  letterSpacing: "0.01em",
};

/* ── Screenshot data (order per spec: 1 → 5 → 4 → 2 → 3) ── */
const SCREENSHOTS = [
  {
    src: "/assets/images/hospitality_1.png",
    alt: "Bionics Hospitality TV — Personalized Welcome Experience",
    caption: "Personalized Welcome Experience",
  },
  {
    src: "/assets/images/hospitality_5.png",
    alt: "Bionics Hospitality TV — Hotel Guide & Guest Services",
    caption: "Hotel Guide & Guest Services",
  },
  {
    src: "/assets/images/hospitality_4.png",
    alt: "Bionics Hospitality TV — In-Room Music Experience",
    caption: "In-Room Music Experience",
  },
  {
    src: "/assets/images/hospitality_2.png",
    alt: "Bionics Hospitality TV — Nearby Places & Local Discovery",
    caption: "Nearby Places & Local Discovery",
  },
  {
    src: "/assets/images/hospitality_3.png",
    alt: "Bionics Hospitality TV — Integrated Entertainment Playback",
    caption: "Integrated Entertainment Playback",
  },
];

/* ── Card wrapper ─────────────────────────────────────────── */
function ScreenCard({
  src,
  alt,
  caption,
  index,
  style,
  sizes = "(max-width: 768px) 100vw, 50vw",
  aspectRatio = "16/9",
}: {
  src: string;
  alt: string;
  caption: string;
  index: number;
  style?: React.CSSProperties;
  sizes?: string;
  aspectRatio?: string;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid #E8EDF5",
        boxShadow: "0 4px 28px rgba(0,0,0,0.08), 0 1px 6px rgba(0,0,0,0.04)",
        background: "#0D0D14",
        willChange: "transform",
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={720}
        sizes={sizes}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          aspectRatio,
          display: "block",
        }}
      />
      <div style={captionOverlay}>
        <p style={captionText}>{caption}</p>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   HTV SHOWCASE
   ════════════════════════════════════════════════════════════ */
export default function HTVShowcase() {
  return (
    <section
      id="htv-showcase"
      aria-label="Hospitality TV Screenshot Showcase"
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      {/* ══ Subtle ambient background ════════════════════════ */}
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
        {/* Scrolling grid */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "0px 48px"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          style={{
            position: "absolute",
            inset: "-48px 0 0 0",
            backgroundImage: `
              linear-gradient(to right,  rgba(0,212,170,0.055) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,212,170,0.055) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(0,0,0,1) 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(0,0,0,1) 0%, transparent 100%)",
          }}
        />

        {/* Ambient blob — Cyan left */}
        <motion.div
          animate={{ x: [0, 40, -25, 0], y: [0, -35, 30, 0], scale: [1, 1.06, 0.95, 1] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            left: "-8%",
            width: 560,
            height: 560,
            background: "radial-gradient(circle, rgba(0,212,170,0.10) 0%, transparent 68%)",
            filter: "blur(60px)",
            borderRadius: "50%",
            willChange: "transform",
          }}
        />

        {/* Ambient blob — Violet right */}
        <motion.div
          animate={{ x: [0, -45, 20, 0], y: [0, 40, -30, 0], scale: [1, 1.07, 0.93, 1] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "5%",
            right: "-10%",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 68%)",
            filter: "blur(65px)",
            borderRadius: "50%",
            willChange: "transform",
          }}
        />

        {/* Center vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(255,255,255,0.72) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-bionics" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Section Header ─────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 3.5rem" }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: "1rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.3rem 0.9rem",
                background: "rgba(0,212,170,0.07)",
                border: "1px solid rgba(0,212,170,0.20)",
                borderRadius: 9999,
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#00D4AA",
                letterSpacing: "0.03em",
              }}
            >
              Product Screenshots
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.022em",
              marginBottom: "1rem",
            }}
          >
            See Hospitality TV{" "}
            <span
              style={{
                background: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              In Action
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "1.0625rem",
              color: "#4B5563",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Every screen is designed to feel beautiful, intuitive, and
            effortlessly aligned with your hotel brand.
          </motion.p>
        </motion.div>

        {/* ── Desktop Editorial Grid ─────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Row 1: Large feature (left 60%) + 2 stacked medium (right 40%) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "auto auto auto",
              gap: "1.25rem",
            }}
            className="htv-showcase-grid"
          >
            {/* hospitality_1 — main featured, tall, col 1-2 row 1-2 */}
            <div style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}>
              <ScreenCard
                src={SCREENSHOTS[0].src}
                alt={SCREENSHOTS[0].alt}
                caption={SCREENSHOTS[0].caption}
                index={0}
                sizes="(max-width: 768px) 100vw, 66vw"
                aspectRatio="4/3"
                style={{
                  boxShadow:
                    "0 20px 64px rgba(0,212,170,0.16), 0 4px 20px rgba(0,0,0,0.08)",
                }}
              />
            </div>

            {/* hospitality_5 — top-right medium */}
            <div style={{ gridColumn: "3 / 4", gridRow: "1" }}>
              <ScreenCard
                src={SCREENSHOTS[1].src}
                alt={SCREENSHOTS[1].alt}
                caption={SCREENSHOTS[1].caption}
                index={1}
                sizes="(max-width: 768px) 100vw, 33vw"
                aspectRatio="16/9"
              />
            </div>

            {/* hospitality_4 — bottom-right medium */}
            <div style={{ gridColumn: "3 / 4", gridRow: "2" }}>
              <ScreenCard
                src={SCREENSHOTS[2].src}
                alt={SCREENSHOTS[2].alt}
                caption={SCREENSHOTS[2].caption}
                index={2}
                sizes="(max-width: 768px) 100vw, 33vw"
                aspectRatio="16/9"
              />
            </div>

            {/* Row 2: hospitality_2 and hospitality_3 — equal thirds at bottom */}
            <div style={{ gridColumn: "1 / 2", gridRow: "3" }}>
              <ScreenCard
                src={SCREENSHOTS[3].src}
                alt={SCREENSHOTS[3].alt}
                caption={SCREENSHOTS[3].caption}
                index={3}
                sizes="(max-width: 768px) 100vw, 33vw"
                aspectRatio="16/9"
              />
            </div>
            <div style={{ gridColumn: "2 / 4", gridRow: "3" }}>
              <ScreenCard
                src={SCREENSHOTS[4].src}
                alt={SCREENSHOTS[4].alt}
                caption={SCREENSHOTS[4].caption}
                index={4}
                sizes="(max-width: 768px) 100vw, 66vw"
                aspectRatio="16/9"
              />
            </div>
          </div>

          {/* ── Responsive style override ─────────────────── */}
          <style>{`
            @media (max-width: 767px) {
              .htv-showcase-grid {
                grid-template-columns: 1fr !important;
                grid-template-rows: auto !important;
              }
              .htv-showcase-grid > div {
                grid-column: 1 / -1 !important;
                grid-row: auto !important;
              }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
