"use client";

import { motion } from "framer-motion";

/* ── Use Case Data ────────────────────────────────────────── */
const USE_CASES = [
  {
    id: "retail",
    title: "Retail & Stores",
    description:
      "Drive sales with eye-catching promotions, showcase new arrivals, and create immersive in-store brand experiences.",
    icon: "🛍️",
    accent: "#00D4AA",
  },
  {
    id: "corporate",
    title: "Corporate Offices",
    description:
      "Keep employees engaged and informed with internal news, company performance metrics, and meeting room schedules.",
    icon: "🏢",
    accent: "#4A6CF7",
  },
  {
    id: "qsr",
    title: "Restaurants & QSR",
    description:
      "Deploy dynamic digital menu boards that automatically update based on time of day, inventory, or active promotions.",
    icon: "🍔",
    accent: "#8B5CF6",
  },
  {
    id: "hospitality",
    title: "Hotels & Hospitality",
    description:
      "Welcome guests, display event schedules, and promote on-site amenities like spas, dining, and activities.",
    icon: "🏨",
    accent: "#00D4AA",
  },
  {
    id: "healthcare",
    title: "Healthcare Facilities",
    description:
      "Reduce perceived wait times with engaging content, display health tips, and guide patients to their appointments.",
    icon: "🏥",
    accent: "#4A6CF7",
  },
  {
    id: "transportation",
    title: "Transportation Hubs",
    description:
      "Display real-time arrival and departure boards, safety announcements, and advertising in airports and train stations.",
    icon: "✈️",
    accent: "#8B5CF6",
  },
] as const;

/* ── Animation Variants ───────────────────────────────────── */
const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

/* ════════════════════════════════════════════════════════════
   DS USE CASES
   ════════════════════════════════════════════════════════════ */
export default function DSUseCases() {
  return (
    <section
      id="ds-use-cases"
      aria-labelledby="ds-usecases-heading"
      style={{
        backgroundColor: "#F8FAFF",
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
            Any Industry, Any Screen
          </span>

          <h2
            id="ds-usecases-heading"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            Digital Signage for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every Environment
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
            Versatile enough to power a single cafe menu board or a global corporate network of thousands of screens.
          </p>
        </motion.div>

        {/* ── Cards Grid ───────────────────────────────────── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {USE_CASES.map((uc) => (
            <motion.div
              key={uc.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8EDF5",
                borderRadius: 20,
                padding: "2rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                willChange: "transform",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 8px 40px rgba(74,108,247,0.12)";
                el.style.borderColor = "rgba(74,108,247,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                el.style.borderColor = "#E8EDF5";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "2rem",
                  lineHeight: 1,
                  marginBottom: "1.25rem",
                }}
                aria-hidden="true"
              >
                {uc.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "#0D0D0D",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {uc.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#4B5563",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {uc.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
