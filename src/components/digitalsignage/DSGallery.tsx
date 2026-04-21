"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/* ── Animation Variants ───────────────────────────────────── */
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const galleryVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.14,
    },
  },
};

const galleryItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ════════════════════════════════════════════════════════════
   DS GALLERY
   ════════════════════════════════════════════════════════════ */
export default function DSGallery() {
  return (
    <section
      id="ds-gallery"
      aria-labelledby="ds-gallery-heading"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        position: "relative",
      }}
    >
      <div className="container-bionics">
        {/* ── Section Header ───────────────────────────────── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <h2
            id="ds-gallery-heading"
            style={{
              fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            See It{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              In Action
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#4B5563",
              lineHeight: 1.75,
              maxWidth: 520,
              marginInline: "auto",
            }}
          >
            Experience how Bionics Digital Signage transforms spaces with
            vibrant, dynamic displays.
          </p>
        </motion.div>

        {/* ── Gallery Layout ───────────────────────────────── */}
        <motion.div
          variants={galleryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="ds-gallery-grid"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1.25rem",
            alignItems: "stretch",
          }}
        >
          {/* ── Large showcase image (left, 60%) ─────────── */}
          <motion.div
            variants={galleryItemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="ds-gallery-main"
            style={{
              flex: "0 0 60%",
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow:
                "0 8px 48px rgba(74,108,247,0.14), 0 4px 20px rgba(0,0,0,0.08)",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/images/sign_age_1.jpeg"
              alt="Bionics Digital Signage in a commercial environment"
              width={900}
              height={540}
              sizes="(max-width: 639px) 100vw, 60vw"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "24rem",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
              priority
            />
            {/* Gradient overlay tag */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(13,13,13,0.22) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
            {/* Caption badge */}
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "1.25rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 0.875rem",
                backgroundColor: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderRadius: 9999,
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#00D4AA",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#0D0D0D",
                  whiteSpace: "nowrap",
                }}
              >
                Live Display
              </span>
            </div>
          </motion.div>

          {/* ── Two stacked images (right, 40%) ──────────── */}
          <div
            className="ds-gallery-side"
            style={{
              flex: "0 0 calc(40% - 1.25rem)",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* Top image */}
            <motion.div
              variants={galleryItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                flex: "1 1 50%",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                willChange: "transform",
                position: "relative",
              }}
            >
              <Image
                src="/assets/images/sign_age_2.jpeg"
                alt="Bionics content management dashboard on signage screen"
                width={560}
                height={280}
                sizes="(max-width: 639px) 100vw, 40vw"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "11rem",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(13,13,13,0.18) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0.875rem",
                  left: "0.875rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.3rem 0.7rem",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  borderRadius: 9999,
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#4A6CF7",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#0D0D0D",
                    whiteSpace: "nowrap",
                  }}
                >
                  Dashboard View
                </span>
              </div>
            </motion.div>

            {/* Bottom image */}
            <motion.div
              variants={galleryItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                flex: "1 1 50%",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                willChange: "transform",
                position: "relative",
              }}
            >
              <Image
                src="/assets/images/sign_age_3.jpeg"
                alt="Bionics multi-screen layout configuration"
                width={560}
                height={280}
                sizes="(max-width: 639px) 100vw, 40vw"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "11rem",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(13,13,13,0.18) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0.875rem",
                  left: "0.875rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.3rem 0.7rem",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  borderRadius: 9999,
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#8B5CF6",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#0D0D0D",
                    whiteSpace: "nowrap",
                  }}
                >
                  Multi-Screen Layout
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Mobile responsive overrides ───────────────────── */}
      <style>{`
        @media (max-width: 639px) {
          .ds-gallery-grid {
            flex-direction: column !important;
          }
          .ds-gallery-main {
            flex: 1 1 auto !important;
          }
          .ds-gallery-side {
            flex: 1 1 auto !important;
          }
        }
      `}</style>
    </section>
  );
}
