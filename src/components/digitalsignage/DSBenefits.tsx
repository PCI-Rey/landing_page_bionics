"use client";

import { motion } from "framer-motion";

/* ── Benefits Data ────────────────────────────────────────── */
const BENEFITS = [
  {
    id: "centralized-control",
    title: "Centralized Content Management",
    description:
      "Control hundreds of screens across multiple locations from a single intuitive dashboard. Update content globally or locally with just a few clicks.",
    icon: <CentralizedIcon />,
    accentFrom: "#00D4AA",
    accentTo: "#4A6CF7",
  },
  {
    id: "real-time-updates",
    title: "Real-Time Updates",
    description:
      "Push new promotions, announcements, or emergency alerts instantly. Say goodbye to manual USB updates and outdated printed materials.",
    icon: <RealTimeIcon />,
    accentFrom: "#4A6CF7",
    accentTo: "#8B5CF6",
  },
  {
    id: "hardware-agnostic",
    title: "Hardware Agnostic & Scalable",
    description:
      "Bionics Digital Signage works seamlessly with any screen type - from commercial displays and TVs to LED video walls, scaling easily as you grow.",
    icon: <HardwareIcon />,
    accentFrom: "#8B5CF6",
    accentTo: "#00D4AA",
  },
  {
    id: "dynamic-content",
    title: "Dynamic Content Scheduling",
    description:
      "Schedule content based on time of day, day of week, or specific dates. Show breakfast menus in the morning and dinner specials at night automatically.",
    icon: <ScheduleIcon />,
    accentFrom: "#00D4AA",
    accentTo: "#8B5CF6",
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
    transition: { delayChildren: 0.1, staggerChildren: 0.13 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ════════════════════════════════════════════════════════════
   DS BENEFITS
   ════════════════════════════════════════════════════════════ */
export default function DSBenefits() {
  return (
    <section
      id="ds-benefits"
      aria-labelledby="ds-benefits-heading"
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
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
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
            Why Bionics Digital Signage
          </span>

          <h2
            id="ds-benefits-heading"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
              maxWidth: "24ch",
              marginInline: "auto",
            }}
          >
            Why Forward-Thinking Brands Choose{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Bionics Signage
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "#4B5563",
              lineHeight: 1.75,
              maxWidth: 560,
              marginInline: "auto",
            }}
          >
            Replace static, outdated communication with dynamic visual experiences that engage, inform, and convert your audience instantly.
          </p>
        </motion.div>

        {/* ── Benefit Cards - 2x2 spacious grid ───────────── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8EDF5",
                borderRadius: 24,
                padding: "2.5rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                willChange: "transform",
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 12px 48px rgba(74,108,247,0.12)";
                el.style.borderColor = "rgba(74,108,247,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                el.style.borderColor = "#E8EDF5";
              }}
            >
              {/* Gradient top accent */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${benefit.accentFrom}, ${benefit.accentTo})`,
                  borderRadius: "24px 24px 0 0",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${benefit.accentFrom}15, ${benefit.accentTo}15)`,
                  border: `1px solid ${benefit.accentFrom}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: benefit.accentFrom,
                }}
              >
                {benefit.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.1875rem",
                  fontWeight: 700,
                  color: "#0D0D0D",
                  marginBottom: "0.875rem",
                  lineHeight: 1.3,
                }}
              >
                {benefit.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#4B5563",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Icons ────────────────────────────────────────────────── */
const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function CentralizedIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M12 7L12 13M9 10L15 10" />
    </svg>
  );
}
function RealTimeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
function HardwareIcon() {
  return (
    <svg {...iconProps}>
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <polygon points="12 15 17 21 7 21 12 15" />
    </svg>
  );
}
function ScheduleIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  );
}
