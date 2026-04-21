"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

/* ── FAQ data ─────────────────────────────────────────────── */
const FAQS = [
  {
    id: "content",
    question: "What content can guests access through Hospitality TV?",
    answer:
      "Guests can access a wide range of content through Bionics Hospitality TV — including live TV channels, on-demand entertainment, curated music and ambient audio, hotel service information, facility guides, transport schedules, and personalized nearby place recommendations. Everything is available from a single, beautifully integrated TV interface.",
  },
  {
    id: "customization",
    question: "Can the interface be customized to match our hotel brand?",
    answer:
      "Yes, absolutely. Bionics Hospitality TV is fully brandable. You can customize the welcome screen with your hotel's logo, colors, and messaging. The guest guide, service listings, and content sections can all be tailored to reflect your property's identity — ensuring every in-room interaction feels like a natural extension of your brand.",
  },
  {
    id: "nearby",
    question: "Does Hospitality TV support nearby place recommendations?",
    answer:
      "Yes. The Nearby Discovery feature allows hotels to curate a list of recommended local attractions, restaurants, cultural landmarks, and experiences around the property. Guests can browse these recommendations directly from the TV, helping them make the most of their stay and reinforcing your hotel's role as a knowledgeable local host.",
  },
  {
    id: "facilities",
    question: "Can we display hotel facilities and transport information?",
    answer:
      "Definitely. The Hotel Guide & Services module lets you display all of your hotel's facilities — from the spa, gym, and pool to dining menus, room service, shuttle schedules, and check-out information. All of this is presented in a clean, easy-to-navigate format that replaces the traditional printed room guide with something far more elegant and interactive.",
  },
  {
    id: "getstarted",
    question: "How do we get started with Bionics Hospitality TV?",
    answer:
      "Getting started is simple. Reach out to our team through the contact form on this page or click 'Schedule a Demo' to book a dedicated consultation. Our team will walk you through the platform, understand your property's specific needs, and guide you through the onboarding process — from initial setup to go-live.",
  },
];

/* ── FAQ Item ─────────────────────────────────────────────── */
function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8EDF5",
        borderRadius: 16,
        overflow: "hidden",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: open
          ? "0 4px 24px rgba(74,108,247,0.10)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        ...(open && { borderColor: "rgba(74,108,247,0.24)" }),
      }}
    >
      {/* Question row */}
      <button
        id={`htv-faq-q-${index}`}
        aria-expanded={open}
        aria-controls={`htv-faq-a-${index}`}
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1.375rem 1.5rem",
          background: "transparent",
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

        {/* Plus / minus icon with rotate */}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: open
              ? "rgba(74,108,247,0.08)"
              : "rgba(74,108,247,0.05)",
            border: "1px solid rgba(74,108,247,0.16)",
            flexShrink: 0,
            color: "#4A6CF7",
          }}
          aria-hidden="true"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.span>
      </button>

      {/* Answer — AnimatePresence accordion */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`htv-faq-a-${index}`}
            role="region"
            aria-labelledby={`htv-faq-q-${index}`}
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
                borderTop: "1px solid #F0F4FF",
              }}
            >
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#4B5563",
                  lineHeight: 1.75,
                  margin: "1rem 0 0",
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
}

/* ════════════════════════════════════════════════════════════
   HTV FAQ
   ════════════════════════════════════════════════════════════ */
export default function HTVFAQ() {
  return (
    <section
      id="htv-faq"
      aria-label="Hospitality TV Frequently Asked Questions"
      style={{
        position: "relative",
        backgroundColor: "#F8FAFF",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      {/* Edge hairlines */}
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, #E8EDF5 30%, #E8EDF5 70%, transparent)" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, #E8EDF5 30%, #E8EDF5 70%, transparent)" }} />

      <div className="container-bionics">

        {/* ── Section Header ─────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: "1rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.3rem 0.9rem",
                background: "rgba(74,108,247,0.07)",
                border: "1px solid rgba(74,108,247,0.18)",
                borderRadius: 9999,
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#4A6CF7",
                letterSpacing: "0.03em",
              }}
            >
              FAQ
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
            Got Questions?{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We&apos;ve Got You Covered
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{ fontSize: "1.0625rem", color: "#4B5563", lineHeight: 1.75, margin: 0 }}
          >
            Everything you need to know about Bionics Hospitality TV,
            answered clearly and honestly.
          </motion.p>
        </motion.div>

        {/* ── FAQ List ───────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            maxWidth: 768,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
          }}
        >
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.id} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
