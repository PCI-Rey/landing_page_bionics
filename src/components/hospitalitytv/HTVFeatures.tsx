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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ── Feature data ─────────────────────────────────────────── */
const FEATURES = [
  {
    id: "welcome",
    icon: <WelcomeIcon />,
    title: "Personalized Welcome Screen",
    description:
      "Greet every guest with custom messages, their name, and branded experiences that make the first impression unforgettable.",
    accent: "#00D4AA",
    accentBg: "rgba(0,212,170,0.07)",
    accentBorder: "rgba(0,212,170,0.18)",
  },
  {
    id: "entertainment",
    icon: <EntertainmentIcon />,
    title: "Entertainment & Streaming",
    description:
      "Give guests easy access to movies, live channels, on-demand media, and streaming content — all from a beautiful on-screen interface.",
    accent: "#4A6CF7",
    accentBg: "rgba(74,108,247,0.07)",
    accentBorder: "rgba(74,108,247,0.18)",
  },
  {
    id: "music",
    icon: <MusicIcon />,
    title: "Music Experience",
    description:
      "Let guests enjoy curated music and relaxing ambient audio directly from the room interface — setting the perfect mood for their stay.",
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.07)",
    accentBorder: "rgba(139,92,246,0.18)",
  },
  {
    id: "guide",
    icon: <GuideIcon />,
    title: "Hotel Guide & Services",
    description:
      "Showcase hotel facilities, transport options, dining menus, and in-house services — all clearly organized and instantly accessible.",
    accent: "#00D4AA",
    accentBg: "rgba(0,212,170,0.07)",
    accentBorder: "rgba(0,212,170,0.18)",
  },
  {
    id: "nearby",
    icon: <NearbyIcon />,
    title: "Nearby Discovery",
    description:
      "Help guests explore top attractions, landmarks, restaurants, and experiences around the hotel with curated local recommendations.",
    accent: "#4A6CF7",
    accentBg: "rgba(74,108,247,0.07)",
    accentBorder: "rgba(74,108,247,0.18)",
  },
  {
    id: "unified",
    icon: <UnifiedIcon />,
    title: "Unified Guest Experience",
    description:
      "Bring every in-room digital interaction — welcome, entertainment, services, and discovery — into one seamless, elegant platform.",
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.07)",
    accentBorder: "rgba(139,92,246,0.18)",
  },
];

/* ════════════════════════════════════════════════════════════
   HTV FEATURES
   ════════════════════════════════════════════════════════════ */
export default function HTVFeatures() {
  return (
    <section
      id="htv-features"
      aria-label="Hospitality TV Features"
      style={{
        position: "relative",
        backgroundColor: "#F8FAFF",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      {/* Subtle top/bottom edge gradients */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #E8EDF5 30%, #E8EDF5 70%, transparent)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, #E8EDF5 30%, #E8EDF5 70%, transparent)",
        }}
      />

      <div className="container-bionics">
        {/* ── Section header ─────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 3.5rem" }}
        >
          {/* Eyebrow */}
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
              Platform Features
            </span>
          </motion.div>

          {/* Heading */}
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
            Everything Guests Need,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Right From the TV
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "1.0625rem",
              color: "#4B5563",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Bionics Hospitality TV is built to deliver rich, intuitive guest
            experiences across every feature of modern in-room hospitality.
          </motion.p>
        </motion.div>

        {/* ── Feature Cards Grid ─────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8EDF5",
                borderRadius: 20,
                padding: "1.75rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                cursor: "default",
                willChange: "transform",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 40px rgba(74,108,247,0.12)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(74,108,247,0.28)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.06)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#E8EDF5";
              }}
            >
              {/* Icon container */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  background: feature.accentBg,
                  border: `1px solid ${feature.accentBorder}`,
                  borderRadius: 14,
                  marginBottom: "1.25rem",
                  color: feature.accent,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "#0D0D0D",
                  marginBottom: "0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#4B5563",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Icon Components ──────────────────────────────────────── */
function WelcomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function EntertainmentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function GuideIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}

function NearbyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76" />
    </svg>
  );
}

function UnifiedIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="9" height="9" rx="2" />
      <rect x="13" y="2" width="9" height="9" rx="2" />
      <rect x="2" y="13" width="9" height="9" rx="2" />
      <rect x="13" y="13" width="9" height="9" rx="2" />
    </svg>
  );
}
