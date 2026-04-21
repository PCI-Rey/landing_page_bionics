"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── FAQ Data ─────────────────────────────────────────────── */
const FAQS = [
  {
    id: "branding",
    question: "Can the interface be customized to match our brand identity?",
    answer:
      "Absolutely. Bionics Wayfinding is fully white-label customizable - from color palettes, typography, and logo placement to UI layout, screen transitions, and language preferences. Our team works with your design guidelines to deliver a wayfinding experience that feels native to your property.",
  },
  {
    id: "multi-floor",
    question: "Does it support multiple floors or building zones?",
    answer:
      "Yes. Our platform is built for complex, multi-level environments. You can configure an unlimited number of floors, zones, and buildings - all interconnected within a single navigation graph that guides visitors through the most efficient routes, including elevator and stairway integration.",
  },
  {
    id: "remote-updates",
    question: "Can directory and route information be updated remotely?",
    answer:
      "All updates are handled through the Bionics cloud-based CMS. Whether you're adding a new tenant, updating operating hours, or reflecting a temporary closure - changes are pushed to every connected kiosk in real time, with no on-site intervention required.",
  },
  {
    id: "touch-optimized",
    question: "Is it optimized for touch screen experiences?",
    answer:
      "Yes - every aspect of the interface is engineered for public touch screen use. Tap targets are generously sized, transitions are smooth and immediate, and the UI is designed for first-time visitors with no prior experience navigating the system. We also adhere to ADA accessibility standards.",
  },
  {
    id: "implementation",
    question: "How long does implementation typically take?",
    answer:
      "For most properties, a standard implementation takes between 2 to 4 weeks - depending on the scale of the space and complexity of the directory. This includes space mapping, content configuration, UI branding, hardware deployment, and staff training. We provide end-to-end support throughout the entire process.",
  },
] as const;

/* ── Animation Variants ───────────────────────────────────── */
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ════════════════════════════════════════════════════════════
   WF FAQ
   ════════════════════════════════════════════════════════════ */
export default function WFFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="wf-faq"
      aria-labelledby="wf-faq-heading"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "6rem",
        paddingBottom: "6rem",
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
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "linear-gradient(135deg, #00D4AA, #4A6CF7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "1.25rem",
            }}
          >
            Common Questions
          </span>

          <h2
            id="wf-faq-heading"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Questions
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "#4B5563",
              lineHeight: 1.75,
              maxWidth: 460,
              marginInline: "auto",
            }}
          >
            Everything you need to know about implementing Bionics Wayfinding
            in your property.
          </p>
        </motion.div>

        {/* ── FAQ Accordion ─────────────────────────────────── */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            maxWidth: "52rem",
            marginInline: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid",
                  borderColor: isOpen ? "rgba(74,108,247,0.25)" : "#E8EDF5",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: isOpen
                    ? "0 8px 32px rgba(74,108,247,0.10)"
                    : "0 2px 12px rgba(0,0,0,0.04)",
                  transition:
                    "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Question button */}
                <button
                  id={`wf-faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`wf-faq-answer-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1.5rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#0D0D0D",
                      lineHeight: 1.4,
                      flex: 1,
                    }}
                  >
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{
                      flexShrink: 0,
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: isOpen
                        ? "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)"
                        : "rgba(74,108,247,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background 0.3s ease",
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? "#FFFFFF" : "#4A6CF7"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ transition: "stroke 0.3s ease" }}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </motion.div>
                </button>

                {/* Answer (animated) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`wf-faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`wf-faq-btn-${faq.id}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "0 1.5rem 1.5rem",
                          borderTop: "1px solid #F1F5F9",
                        }}
                      >
                        <p
                          style={{
                            paddingTop: "1.125rem",
                            fontSize: "0.9375rem",
                            color: "#4B5563",
                            lineHeight: 1.8,
                            margin: 0,
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
