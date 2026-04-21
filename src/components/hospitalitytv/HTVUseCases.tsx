"use client";

import { motion } from "framer-motion";

/* ── Use Case Data (Guest Experience) ─────────────────────── */
const USE_CASES = [
  {
    id: "welcome",
    title: "Personalized Welcome",
    description:
      "The moment a guest enters their room, they're greeted by name with a custom welcome screen tailored to their stay.",
    icon: "👋",
    accent: "#00D4AA",
  },
  {
    id: "entertainment",
    title: "Entertainment & Media",
    description:
      "Give guests easy access to movies, live TV channels, and streaming content from a beautifully designed interface.",
    icon: "🎬",
    accent: "#4A6CF7",
  },
  {
    id: "music",
    title: "In-Room Audio",
    description:
      "Let guests set the perfect mood with curated music and ambient soundscapes, creating a truly immersive stay.",
    icon: "🎵",
    accent: "#8B5CF6",
  },
  {
    id: "guide",
    title: "Hotel Directory",
    description:
      "Showcase dining menus, spa services, and transport schedules in an interactive, easy-to-navigate digital format.",
    icon: "📖",
    accent: "#00D4AA",
  },
  {
    id: "nearby",
    title: "Local Discovery",
    description:
      "Help guests explore top attractions, restaurants, and hidden gems around the hotel with curated recommendations.",
    icon: "🗺️",
    accent: "#4A6CF7",
  },
  {
    id: "unified",
    title: "Seamless Integration",
    description:
      "Bring every digital interaction into one elegant platform that feels naturally aligned with your hotel's premium brand.",
    icon: "✨",
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
   HTV USE CASES
   ════════════════════════════════════════════════════════════ */
export default function HTVUseCases() {
  return (
    <section
      id="htv-use-cases"
      aria-labelledby="htv-usecases-heading"
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
            Guest Experience
          </span>

          <h2
            id="htv-usecases-heading"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            Delight Guests at{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every Touchpoint
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
            From the moment they arrive to the moment they check out, every in-room interaction is designed to elevate their stay.
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
