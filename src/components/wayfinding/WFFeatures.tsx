"use client";

import { motion } from "framer-motion";

/* ── Feature Data ─────────────────────────────────────────── */
const FEATURES = [
  {
    id: "interactive-navigation",
    title: "Interactive Navigation",
    description:
      "Touch-responsive maps that guide visitors step-by-step through complex multi-level environments.",
    icon: <NavigationIcon />,
  },
  {
    id: "realtime-directory",
    title: "Real-Time Directory Updates",
    description:
      "Instantly reflect tenant changes, events, and room assignments without on-site intervention.",
    icon: <DirectoryIcon />,
  },
  {
    id: "multi-floor",
    title: "Multi-Floor Guidance",
    description:
      "Seamless floor-to-floor routing with elevator and stairway integration for complete spatial coverage.",
    icon: <FloorIcon />,
  },
  {
    id: "touch-friendly",
    title: "Touch-Friendly Interface",
    description:
      "Engineered for public kiosks — responsive, intuitive, and accessible for all visitor types.",
    icon: <TouchIcon />,
  },
  {
    id: "custom-branding",
    title: "Custom Branding",
    description:
      "Reflect your property identity with custom colors, typography, logos, and visual language.",
    icon: <BrandingIcon />,
  },
  {
    id: "centralized-cms",
    title: "Centralized CMS Control",
    description:
      "Manage all kiosks, directories, and maps from one secure cloud-based control dashboard.",
    icon: <CMSIcon />,
  },
  {
    id: "multilanguage",
    title: "Multi-Language Support",
    description:
      "Serve international visitors with automatic language detection and multiple language options.",
    icon: <LanguageIcon />,
  },
  {
    id: "analytics",
    title: "Analytics & Insights",
    description:
      "Understand visitor flow patterns and most-searched destinations to continually improve the experience.",
    icon: <AnalyticsIcon />,
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
   WF FEATURES
   ════════════════════════════════════════════════════════════ */
export default function WFFeatures() {
  return (
    <section
      id="wf-features"
      aria-labelledby="wf-features-heading"
      style={{
        backgroundColor: "#F8FAFF",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        position: "relative",
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
            Platform Capabilities
          </span>

          <h2
            id="wf-features-heading"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
              maxWidth: "20ch",
              marginInline: "auto",
            }}
          >
            Wayfinding Designed for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Clarity, Control, and Experience
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "#4B5563",
              lineHeight: 1.75,
              maxWidth: 520,
              marginInline: "auto",
            }}
          >
            Every feature is purpose-built for high-footfall, premium commercial
            environments where visitor experience is everything.
          </p>
        </motion.div>

        {/* ── Feature Cards Grid ───────────────────────────── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8EDF5",
                borderRadius: 20,
                padding: "1.875rem",
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
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background:
                    index % 3 === 0
                      ? "rgba(0,212,170,0.08)"
                      : index % 3 === 1
                      ? "rgba(74,108,247,0.08)"
                      : "rgba(139,92,246,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  color:
                    index % 3 === 0
                      ? "#00D4AA"
                      : index % 3 === 1
                      ? "#4A6CF7"
                      : "#8B5CF6",
                }}
              >
                {feature.icon}
              </div>

              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#0D0D0D",
                  marginBottom: "0.625rem",
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
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

/* ── Icons (24px stroke) ──────────────────────────────────── */
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function NavigationIcon() {
  return (
    <svg {...iconProps}>
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}
function DirectoryIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}
function FloorIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}
function TouchIcon() {
  return (
    <svg {...iconProps}>
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}
function BrandingIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}
function CMSIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 8h3M7 11h3M14 8h3M14 11h3" />
    </svg>
  );
}
function LanguageIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function AnalyticsIcon() {
  return (
    <svg {...iconProps}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}
