"use client";

import { motion } from "framer-motion";

/* ── Steps ────────────────────────────────────────────────── */
const STEPS = [
  {
    id: "map",
    number: 1,
    title: "Map Your Space",
    description:
      "Upload your floor plans and define zones, pathways, and points of interest with our intuitive mapping tools.",
    gradientFrom: "#00D4AA",
    gradientTo: "#4A6CF7",
    icon: <MapIcon />,
  },
  {
    id: "configure",
    number: 2,
    title: "Configure Destinations",
    description:
      "Set up stores, offices, departments, and amenities with rich details — descriptions, images, and operating hours.",
    gradientFrom: "#4A6CF7",
    gradientTo: "#8B5CF6",
    icon: <ConfigIcon />,
  },
  {
    id: "customize",
    number: 3,
    title: "Customize the Experience",
    description:
      "Apply your brand identity, select languages, and fine-tune the visual interface to match your property's premium aesthetic.",
    gradientFrom: "#8B5CF6",
    gradientTo: "#00D4AA",
    icon: <CustomizeIcon />,
  },
  {
    id: "launch",
    number: 4,
    title: "Launch and Manage",
    description:
      "Deploy across all kiosks instantly and manage everything remotely from your centralized Bionics dashboard.",
    gradientFrom: "#00D4AA",
    gradientTo: "#4A6CF7",
    icon: <LaunchIcon />,
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

const stepsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.15, staggerChildren: 0.14 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ════════════════════════════════════════════════════════════
   WF WORKFLOW
   ════════════════════════════════════════════════════════════ */
export default function WFWorkflow() {
  return (
    <section
      id="wf-workflow"
      aria-labelledby="wf-workflow-heading"
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-bionics">
        {/* ── Section Header ───────────────────────────────── */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
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
            Implementation Process
          </span>

          <h2
            id="wf-workflow-heading"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            From Space Mapping to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Seamless Guidance
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "#4B5563",
              lineHeight: 1.75,
              maxWidth: 480,
              marginInline: "auto",
            }}
          >
            A refined four-step process that takes your property from concept to
            a fully live wayfinding network.
          </p>
        </motion.div>

        {/* ── Desktop Horizontal Timeline ───────────────────── */}
        <div className="wf-workflow-desktop">
          <motion.div
            variants={stepsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ position: "relative" }}
          >
            {/* Dashed connector line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 36,
                left: "calc(12.5% + 36px)",
                right: "calc(12.5% + 36px)",
                height: 1,
                borderTop: "2px dashed #E8EDF5",
                zIndex: 0,
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  style={{
                    flex: "1 1 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* Gradient circle */}
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                      flexShrink: 0,
                      boxShadow: `0 6px 24px ${step.gradientFrom}30`,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </span>
                    {/* Icon badge */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: -4,
                        right: -4,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                        color: step.gradientFrom,
                      }}
                    >
                      {step.icon}
                    </div>
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
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#4B5563",
                      lineHeight: 1.65,
                      maxWidth: "18ch",
                      margin: "0 auto",
                    }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Mobile Vertical Timeline ──────────────────────── */}
        <div className="wf-workflow-mobile">
          <motion.div
            variants={stepsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1.25rem",
                  position: "relative",
                  paddingBottom: index < STEPS.length - 1 ? "2.5rem" : 0,
                }}
              >
                {/* Left column */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 4px 16px ${step.gradientFrom}30`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Vertical connector */}
                  {index < STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      style={{
                        flex: 1,
                        width: 2,
                        borderLeft: "2px dashed #E8EDF5",
                        marginTop: "0.625rem",
                      }}
                    />
                  )}
                </div>

                {/* Right column */}
                <div style={{ paddingTop: "0.625rem", paddingBottom: "0.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: step.gradientFrom,
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Step {step.number}
                  </span>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0D0D0D",
                      marginBottom: "0.4rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#4B5563",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .wf-workflow-desktop { display: block; }
        .wf-workflow-mobile  { display: none; }

        @media (max-width: 767px) {
          .wf-workflow-desktop { display: none; }
          .wf-workflow-mobile  { display: block; }
        }
      `}</style>
    </section>
  );
}

/* ── Step Icons (small) ───────────────────────────────────── */
const smallIconProps = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function MapIcon() {
  return (
    <svg {...smallIconProps}>
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}
function ConfigIcon() {
  return (
    <svg {...smallIconProps}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
    </svg>
  );
}
function CustomizeIcon() {
  return (
    <svg {...smallIconProps}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
function LaunchIcon() {
  return (
    <svg {...smallIconProps}>
      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
    </svg>
  );
}
