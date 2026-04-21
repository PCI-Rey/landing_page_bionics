"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── FAQ Data ─────────────────────────────────────────────── */
const FAQS = [
  {
    id: "equipment",
    question: "What equipment do I need to use Bionics Digital Signage?",
    answer:
      "You need a display screen (LED, LCD, or any HDMI/VGA-compatible monitor), a computer or media player to run the Bionics app, and a stable internet connection for remote management. The Bionics app is lightweight and compatible with most modern operating systems.",
  },
  {
    id: "customize",
    question: "Can I customize the look and feel of my displays?",
    answer:
      "Absolutely. The Bionics Layout Designer lets you build multi-layer, multi-zone layouts with your own branding - fonts, colors, logos, and media. You can create templates for different times of day, campaigns, or locations, and apply them across all your screens instantly.",
  },
  {
    id: "remote-update",
    question: "How do I update my content remotely?",
    answer:
      "Log in to the Bionics Web CMS from any device - phone, tablet, or laptop - and push updates instantly. You can schedule content changes in advance or update live displays in real time. All changes sync automatically across your entire network.",
  },
  {
    id: "offline",
    question: "Does the system work without internet connection?",
    answer:
      "Yes. Bionics has a built-in Offline Mode. Once content is synced to your devices, it will continue playing according to the schedule even if the internet connection drops. The system re-syncs automatically when connectivity is restored.",
  },
  {
    id: "get-started",
    question: "How do I get started with Bionics?",
    answer:
      "Getting started is simple - fill out our contact form or click 'Schedule a Demo' and our team will reach out within one business day. We'll walk you through a free consultation, tailor a plan for your needs, and handle the full installation and onboarding process.",
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
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
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
   DS FAQ
   ════════════════════════════════════════════════════════════ */
export default function DSFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="ds-faq"
      aria-labelledby="ds-faq-heading"
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
            id="ds-faq-heading"
            style={{
              fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Got Questions?{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We&apos;ve Got You Covered
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
            Everything you need to know about getting started with Bionics
            Digital Signage.
          </p>
        </motion.div>

        {/* ── FAQ List ─────────────────────────────────────── */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            maxWidth: "48rem",
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
                  borderColor: isOpen
                    ? "rgba(74,108,247,0.25)"
                    : "#E8EDF5",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: isOpen
                    ? "0 8px 32px rgba(74,108,247,0.10)"
                    : "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* ── Question Row ───────────────────────── */}
                <button
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1.375rem 1.5rem",
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

                  {/* Plus / Minus icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
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

                {/* ── Answer (animated) ─────────────────── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "0 1.5rem 1.375rem",
                          borderTop: "1px solid #F1F5F9",
                        }}
                      >
                        <p
                          style={{
                            paddingTop: "1rem",
                            fontSize: "0.9375rem",
                            color: "#4B5563",
                            lineHeight: 1.75,
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
