"use client";

import { motion } from "framer-motion";

/* ── Animation Variants */
const bannerVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 32 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

/* ════════════════════════════════════════════════════════════
   DS CTA BANNER
   ════════════════════════════════════════════════════════════ */
export default function DSCTABanner() {
  return (
    <section
      id="ds-cta"
      aria-labelledby="ds-cta-heading"
      style={{
        position: "relative",
        borderTop: "1px solid #E8EDF5",
        borderBottom: "1px solid #E8EDF5",
        background:
          "linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(74,108,247,0.08) 50%, rgba(139,92,246,0.08) 100%)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        overflow: "hidden",
      }}
    >
      {/* ── Decorative orbs ──────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-6rem",
          left: "-4rem",
          width: "28rem",
          height: "28rem",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,170,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-6rem",
          right: "-4rem",
          width: "32rem",
          height: "32rem",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "20rem",
          height: "20rem",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(74,108,247,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="container-bionics"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* ── Animated wrapper ─────────────────────────────── */}
        <motion.div
          variants={bannerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ textAlign: "center" }}
          >
            {/* Eyebrow badge */}
            <motion.div variants={childVariants} style={{ marginBottom: "1.5rem" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 1rem",
                  background: "rgba(74,108,247,0.08)",
                  border: "1px solid rgba(74,108,247,0.2)",
                  borderRadius: 9999,
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#4A6CF7",
                  letterSpacing: "0.04em",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                Start Today
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              id="ds-cta-heading"
              variants={childVariants}
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                color: "#0D0D0D",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                marginBottom: "1.25rem",
              }}
            >
              Ready to{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Transform Your Space?
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={childVariants}
              style={{
                fontSize: "1.0625rem",
                color: "#4B5563",
                lineHeight: 1.75,
                maxWidth: 500,
                marginInline: "auto",
                marginBottom: "2.5rem",
              }}
            >
              Join{" "}
              <strong style={{ color: "#0D0D0D", fontWeight: 700 }}>
                100+ companies
              </strong>{" "}
              already using Bionics Digital Signage to captivate audiences and
              drive results.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={childVariants}>
              <a
                href="#contact"
                id="ds-cta-demo-btn"
                className="gradient-btn"
                style={{
                  padding: "1rem 2.5rem",
                  fontSize: "1.0625rem",
                  boxShadow:
                    "0 8px 32px rgba(74,108,247,0.28), 0 4px 16px rgba(0,212,170,0.16)",
                }}
              >
                Schedule a Demo
                <svg
                  width="17"
                  height="17"
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
              </a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              variants={childVariants}
              style={{
                marginTop: "2.5rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              {[
                { value: "100+", label: "Companies served" },
                { value: "99.9%", label: "Uptime guaranteed" },
                { value: "24/7", label: "Support available" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.2rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 800,
                      background:
                        "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </span>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "#9CA3AF",
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
