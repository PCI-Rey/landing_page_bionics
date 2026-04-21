"use client";

import { motion } from "framer-motion";

/* ── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ════════════════════════════════════════════════════════════
   WF CTA BANNER
   ════════════════════════════════════════════════════════════ */
export default function WFCTABanner() {
  return (
    <section
      id="wf-cta"
      aria-labelledby="wf-cta-heading"
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E8EDF5",
        borderBottom: "1px solid #E8EDF5",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        overflow: "hidden",
      }}
    >
      {/* Soft gradient tint background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0,212,170,0.04) 0%, rgba(74,108,247,0.05) 50%, rgba(139,92,246,0.04) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-bionics"
        style={{ position: "relative", zIndex: 1 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}
        >
          {/* Eyebrow */}
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
              Ready to Get Started?
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="wf-cta-heading"
            variants={itemVariants}
            style={{
              fontSize: "clamp(1.875rem, 4.5vw, 3rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "1.25rem",
            }}
          >
            Ready to Create a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              More Guided Visitor Experience?
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.0625rem",
              color: "#4B5563",
              lineHeight: 1.8,
              maxWidth: 520,
              marginInline: "auto",
              marginBottom: "2.75rem",
            }}
          >
            Our specialists will help you design a wayfinding system that
            reflects your property's identity and meets the expectations of
            every visitor who walks through your doors.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              id="wf-cta-schedule"
              className="gradient-btn"
              style={{
                display: "inline-flex",
                padding: "1rem 2.75rem",
                fontSize: "1.0625rem",
                fontWeight: 700,
                boxShadow: "0 8px 32px rgba(74,108,247,0.22)",
              }}
            >
              Schedule a Demo
              <ArrowIcon />
            </a>
          </motion.div>

          {/* Supporting note */}
          <motion.p
            variants={itemVariants}
            style={{
              marginTop: "1.5rem",
              fontSize: "0.875rem",
              color: "#9CA3AF",
              fontWeight: 500,
            }}
          >
            No commitment required · Response within one business day
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

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
