"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ── Animation Variants ───────────────────────────────────── */
const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ════════════════════════════════════════════════════════════
   WF GALLERY
   ════════════════════════════════════════════════════════════ */
export default function WFGallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="wf-gallery"
      aria-labelledby="wf-gallery-heading"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="container-bionics">
        {/* ── Section Header ───────────────────────────────── */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2
            id="wf-gallery-heading"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            A More Elegant Way to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Move Through Space
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "#4B5563",
              lineHeight: 1.75,
              maxWidth: 500,
              marginInline: "auto",
            }}
          >
            Beautifully designed for architectural spaces where first impressions
            and visitor confidence matter most.
          </p>
        </motion.div>

        {/* ── Image Layout ─────────────────────────────────── */}
        {isMobile ? (
          /* Mobile: stacked vertically */
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.14 },
              },
            }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {[
              {
                src: "/assets/images/wayfinding_1.jpeg",
                alt: "Wayfinding kiosk in a premium lobby",
              },
              {
                src: "/assets/images/wayfinding_2.jpeg",
                alt: "Multi-floor navigation interface",
              },
              {
                src: "/assets/images/wayfinding_3.jpeg",
                alt: "Directory map display",
              },
            ].map((img) => (
              <motion.div
                key={img.src}
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.09)",
                  willChange: "transform",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={533}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Desktop: left dominant + right stack */
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "1.5rem",
              alignItems: "stretch",
            }}
          >
            {/* Left: dominant image */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.35 }}
              style={{
                borderRadius: 24,
                overflow: "hidden",
                boxShadow:
                  "0 16px 60px rgba(74,108,247,0.14), 0 4px 24px rgba(0,0,0,0.07)",
                willChange: "transform",
              }}
            >
              <Image
                src="/assets/images/wayfinding_1.jpeg"
                alt="Bionics Wayfinding - premium lobby kiosk display"
                width={900}
                height={700}
                sizes="55vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </motion.div>

            {/* Right: two stacked */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {[
                {
                  src: "/assets/images/wayfinding_2.jpeg",
                  alt: "Multi-floor navigation screen",
                },
                {
                  src: "/assets/images/wayfinding_3.jpeg",
                  alt: "Wayfinding directory map",
                },
              ].map((img) => (
                <motion.div
                  key={img.src}
                  variants={imageVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    flex: 1,
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.09)",
                    willChange: "transform",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={350}
                    sizes="40vw"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
