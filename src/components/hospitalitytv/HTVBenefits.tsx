"use client";

import { motion } from "framer-motion";

/* ── Benefits Data ────────────────────────────────────────── */
const BENEFITS = [
  {
    id: "satisfaction",
    title: "Better Guest Satisfaction",
    description:
      "Guests who feel genuinely welcomed and well-served are more likely to leave positive reviews, return for future stays, and recommend your property. Bionics Hospitality TV creates moments of delight throughout the stay.",
    icon: <SatisfactionIcon />,
    accentFrom: "#00D4AA",
    accentTo: "#4A6CF7",
  },
  {
    id: "branding",
    title: "Stronger Hotel Branding",
    description:
      "Every screen interaction reinforces your hotel identity. From the welcome message to the guide, everything is customizable to match your brand - creating a cohesive, premium visual experience.",
    icon: <BrandingIcon />,
    accentFrom: "#4A6CF7",
    accentTo: "#8B5CF6",
  },
  {
    id: "services",
    title: "Easier Access to Services",
    description:
      "Transport schedules, dining menus, spa bookings, and facility details are all instantly accessible directly on the screen - reducing friction, lowering front desk calls, and improving service delivery.",
    icon: <ServicesIcon />,
    accentFrom: "#8B5CF6",
    accentTo: "#00D4AA",
  },
  {
    id: "connected",
    title: "One Connected Experience",
    description:
      "Instead of managing disconnected systems for entertainment and services, Bionics Hospitality TV brings everything into one unified platform - simpler to operate, easier to maintain, and far more impressive.",
    icon: <ConnectedIcon />,
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
   HTV BENEFITS (MATCHES WF BENEFITS DESIGN EXACTLY)
   ════════════════════════════════════════════════════════════ */
export default function HTVBenefits() {
  return (
    <section
      id="htv-benefits"
      aria-labelledby="htv-benefits-heading"
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
            Why Bionics
          </span>

          <h2
            id="htv-benefits-heading"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
              maxWidth: "22ch",
              marginInline: "auto",
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
            Built specifically for premium hospitality environments, delivering measurable improvements in guest experience and hotel operations.
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

function SatisfactionIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}
function BrandingIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}
function ServicesIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}
function ConnectedIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  );
}
