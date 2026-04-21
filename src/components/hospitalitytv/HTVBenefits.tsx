"use client";

import { motion } from "framer-motion";

/* ── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.14 },
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

/* ── Benefit data ─────────────────────────────────────────── */
const BENEFITS = [
  {
    id: "satisfaction",
    icon: <SatisfactionIcon />,
    title: "Better Guest Satisfaction",
    description:
      "Guests who feel genuinely welcomed and well-served are more likely to leave positive reviews, return for future stays, and recommend your property to others. Bionics Hospitality TV creates moments of delight throughout the entire stay.",
    stat: "Higher satisfaction",
    statDetail: "from personalized in-room experiences",
    accent: "#00D4AA",
    accentBg: "rgba(0,212,170,0.07)",
    accentBorder: "rgba(0,212,170,0.18)",
    gradientFrom: "rgba(0,212,170,0.06)",
    gradientTo: "rgba(0,212,170,0.0)",
  },
  {
    id: "branding",
    icon: <BrandingIcon />,
    title: "Stronger Hotel Branding",
    description:
      "Every screen interaction is an opportunity to reinforce your hotel identity. From the welcome message to the hotel guide, every element is customizable to match your brand — creating a cohesive, premium visual experience throughout the room.",
    stat: "Consistent branding",
    statDetail: "across every in-room touchpoint",
    accent: "#4A6CF7",
    accentBg: "rgba(74,108,247,0.07)",
    accentBorder: "rgba(74,108,247,0.18)",
    gradientFrom: "rgba(74,108,247,0.06)",
    gradientTo: "rgba(74,108,247,0.0)",
  },
  {
    id: "services",
    icon: <ServicesIcon />,
    title: "Easier Access to Hotel Services",
    description:
      "Guests no longer need to search for service directories or call the front desk for basic information. Transport schedules, dining menus, spa bookings, and facility details are all instantly accessible — reducing friction and improving service delivery.",
    stat: "Instant access",
    statDetail: "to all hotel services and information",
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.07)",
    accentBorder: "rgba(139,92,246,0.18)",
    gradientFrom: "rgba(139,92,246,0.06)",
    gradientTo: "rgba(139,92,246,0.0)",
  },
  {
    id: "connected",
    icon: <ConnectedIcon />,
    title: "One Connected In-Room Experience",
    description:
      "Instead of managing multiple disconnected systems for entertainment, guest information, and services, Bionics Hospitality TV brings everything into one unified platform — simpler to operate, easier to maintain, and far more impressive to guests.",
    stat: "Unified platform",
    statDetail: "for every in-room digital interaction",
    accent: "#00D4AA",
    accentBg: "rgba(0,212,170,0.07)",
    accentBorder: "rgba(0,212,170,0.18)",
    gradientFrom: "rgba(0,212,170,0.06)",
    gradientTo: "rgba(0,212,170,0.0)",
  },
];

/* ════════════════════════════════════════════════════════════
   HTV BENEFITS
   ════════════════════════════════════════════════════════════ */
export default function HTVBenefits() {
  return (
    <section
      id="htv-benefits"
      aria-label="Why Hotels Choose Bionics Hospitality TV"
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      <div className="container-bionics">

        {/* ── Section Header ─────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 3.5rem" }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: "1rem" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.3rem 0.9rem",
                background: "rgba(0,212,170,0.07)",
                border: "1px solid rgba(0,212,170,0.20)",
                borderRadius: 9999,
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#00D4AA",
                letterSpacing: "0.03em",
              }}
            >
              Why Bionics
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
            Why Hotels Choose{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Bionics Hospitality TV
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{ fontSize: "1.0625rem", color: "#4B5563", lineHeight: 1.75, margin: 0 }}
          >
            Built specifically for premium hospitality environments, Bionics
            Hospitality TV delivers measurable improvements in guest experience,
            hotel operations, and brand perception.
          </motion.p>
        </motion.div>

        {/* ── Benefit Cards ──────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 460px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {BENEFITS.map((b) => (
            <motion.div
              key={b.id}
              variants={fadeUp}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "relative",
                background: "#FFFFFF",
                border: "1px solid #E8EDF5",
                borderRadius: 24,
                padding: "clamp(1.25rem, 4vw, 2.25rem)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                overflow: "hidden",
                willChange: "transform",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 48px rgba(74,108,247,0.12)";
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
              {/* Subtle gradient wash in top-left corner */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 200,
                  height: 200,
                  background: `radial-gradient(circle at top left, ${b.gradientFrom} 0%, ${b.gradientTo} 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  background: b.accentBg,
                  border: `1.5px solid ${b.accentBorder}`,
                  borderRadius: 18,
                  color: b.accent,
                  marginBottom: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {b.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.1875rem",
                  fontWeight: 800,
                  color: "#0D0D0D",
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  marginBottom: "0.875rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {b.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#4B5563",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {b.description}
              </p>

              {/* Stat pill */}
              <div
                style={{
                  display: "inline-flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  background: b.accentBg,
                  border: `1px solid ${b.accentBorder}`,
                  borderRadius: 9999,
                  position: "relative",
                  zIndex: 1,
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: b.accent,
                  }}
                >
                  {b.stat}
                </span>
                <span
                  style={{
                    width: 1,
                    height: 14,
                    background: b.accentBorder,
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "#9CA3AF",
                  }}
                >
                  {b.statDetail}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Icons ────────────────────────────────────────────────── */
function SatisfactionIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

function BrandingIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}

function ConnectedIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  );
}
