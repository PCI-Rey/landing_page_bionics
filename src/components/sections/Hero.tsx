"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/* ── Animation variants — staggered fade-up ────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" as const
    } 
  },
};

/* ── Trust badge items ────────────────────────────────────── */
const TRUST_ITEMS = [
  { label: "No credit card required" },
  { label: "Setup in minutes" },
  { label: "24/7 support" },
];

/* ── Glow Blobs ────────────────────────────────────────────── */
const GLOW_BLOBS = [
  { color: "rgba(0, 212, 170, 0.06)", x: "-10%", y: "-10%", size: "600px", animDur: 15 },
  { color: "rgba(74, 108, 247, 0.06)", x: "50%", y: "-20%", size: "700px", animDur: 18 },
  { color: "rgba(139, 92, 246, 0.06)", x: "30%", y: "60%", size: "800px", animDur: 20 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Mouse spotlight */
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const mouseX = useSpring(rawX, { damping: 40, stiffness: 200 });
  const mouseY = useSpring(rawY, { damping: 40, stiffness: 200 });

  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) =>
      `radial-gradient(800px circle at ${x * 100}% ${y * 100}%, rgba(74,108,247,0.05) 0%, transparent 60%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width);
    rawY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      aria-labelledby="hero-heading"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        paddingTop: 140,
        paddingBottom: 120,
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* ════════════════════════════════════════════════════
          BACKGROUND — pointer-events: none, aria-hidden
          ════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
      >
        {/* Layer 1: Animated Grid */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "0px 60px"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          style={{
            position: "absolute",
            inset: "-60px 0 0 0",
            backgroundImage: `linear-gradient(to right, #F0F0F0 1px, transparent 1px), linear-gradient(to bottom, #F0F0F0 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, rgba(0,0,0,1) 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, rgba(0,0,0,1) 0%, transparent 100%)",
          }}
        />

        {/* Layer 2: Soft glow blobs with blur 100px */}
        {GLOW_BLOBS.map((blob, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 40, -30, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{
              duration: blob.animDur,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: blob.x,
              top: blob.y,
              width: blob.size,
              height: blob.size,
              background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
              filter: "blur(100px)",
              borderRadius: "50%",
              willChange: "transform",
            }}
          />
        ))}

        {/* Layer 3: Mouse spotlight */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: spotlightBg,
          }}
        />
      </div>

      {/* ════════════════════════════════════════════════════
          CONTENT — z-index: 10
          ════════════════════════════════════════════════════ */}
      <motion.div
        className="container-bionics"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.4rem 1.1rem",
            marginBottom: "2rem",
            borderRadius: 9999,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8EDF5",
            boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "#4B5563",
          }}
        >
          {/* Live dot */}
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#00D4AA",
              boxShadow: "0 0 8px rgba(0,212,170,0.5)",
              flexShrink: 0,
            }}
          />
          Smart Solutions for Modern Business
        </motion.div>

        {/* H1 */}
        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            maxWidth: "14ch",
          }}
        >
          <span style={{ color: "#0D0D0D" }}>
            Choose Your
          </span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Bionics Solution
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          style={{
            maxWidth: "38ch",
            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
            color: "#4B5563",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          Select the solution that fits your business needs.
          <br />
          Powerful, scalable, and built for the future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <a
            href="#products"
            id="hero-cta-explore"
            className="gradient-btn"
            style={{ fontSize: "1rem", padding: "1rem 2.5rem", boxShadow: "0 8px 24px rgba(74, 108, 247, 0.2)" }}
          >
            Explore Solutions
            <ChevronDownIcon />
          </a>

          <a
            href="#contact"
            id="hero-cta-demo"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "1rem 2.5rem",
              borderRadius: 9999,
              fontSize: "1rem",
              fontWeight: 600,
              color: "#0D0D0D",
              textDecoration: "none",
              overflow: "hidden",
              isolation: "isolate",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8EDF5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.borderColor = "#00D4AA";
              target.style.boxShadow = "0 8px 24px rgba(0,212,170,0.15)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.borderColor = "#E8EDF5";
              target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.03)";
            }}
          >
            Schedule a Demo
            <ArrowRightIcon />
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
          }}
        >
          {TRUST_ITEMS.map((item, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#6B7280", fontWeight: 500 }}>
              {i > 0 && (
                <span
                  aria-hidden="true"
                  style={{ width: 1, height: 12, backgroundColor: "#E8EDF5", display: "inline-block", marginRight: "0.75rem" }}
                />
              )}
              <CheckIcon color="#00D4AA" />
              {item.label}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          style={{ marginTop: "5rem" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}
          >
            <span
              style={{
                fontSize: "0.6875rem",
                color: "#9CA3AF",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: 24,
                height: 36,
                borderRadius: 12,
                border: "2px solid #E8EDF5",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: 6,
              }}
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 4,
                  height: 8,
                  borderRadius: 2,
                  background: "linear-gradient(180deg, #00D4AA, #4A6CF7)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── Icon sub-components ──────────────────────────────────── */

function ChevronDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transition: "transform 0.25s ease" }}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
