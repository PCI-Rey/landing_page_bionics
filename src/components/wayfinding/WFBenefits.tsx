"use client";

import { motion } from "framer-motion";

/* ── Benefits Data ────────────────────────────────────────── */
const BENEFITS = [
  {
    id: "visitor-experience",
    title: "Elevated Visitor Experience",
    description:
      "First impressions define property perception. Bionics Wayfinding transforms arrival into a refined, guided experience - reducing confusion, boosting confidence, and leaving lasting positive impressions on every visitor.",
    icon: <ExperienceIcon />,
    accentFrom: "#00D4AA",
    accentTo: "#4A6CF7",
  },
  {
    id: "staff-dependency",
    title: "Reduced Staff Dependency",
    description:
      "Empower visitors to navigate independently with self-service kiosks that answer directional queries 24/7 - freeing your team to focus on hospitality and higher-value interactions.",
    icon: <StaffIcon />,
    accentFrom: "#4A6CF7",
    accentTo: "#8B5CF6",
  },
  {
    id: "brand-perception",
    title: "Stronger Brand & Property Perception",
    description:
      "A beautifully branded, seamless navigation system signals quality and attention to detail - reinforcing your property's premium positioning to tenants, guests, clients, and investors.",
    icon: <BrandIcon />,
    accentFrom: "#8B5CF6",
    accentTo: "#00D4AA",
  },
  {
    id: "dynamic-updates",
    title: "Faster Updates Across Dynamic Spaces",
    description:
      "Retail openings, department relocations, event changes - update any destination across all kiosks in real time from a single dashboard, eliminating outdated signage and visitor frustration.",
    icon: <UpdateIcon />,
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
   WF BENEFITS
   ════════════════════════════════════════════════════════════ */
export default function WFBenefits() {
  return (
    <section
      id="wf-benefits"
      aria-labelledby="wf-benefits-heading"
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
            Why Bionics Wayfinding
          </span>

          <h2
            id="wf-benefits-heading"
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
            Why Premium Spaces Choose{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Bionics Wayfinding
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
            Purpose-built for environments where visitor experience is a
            competitive advantage - not an afterthought.
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

function ExperienceIcon() {
  return (
    <svg {...iconProps}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function StaffIcon() {
  return (
    <svg {...iconProps}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function BrandIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );
}
function UpdateIcon() {
  return (
    <svg {...iconProps}>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}
