"use client";

import { motion } from "framer-motion";

/* ── Workflow Steps ────────────────────────────────────────── */
const STEPS = [
  {
    id: "consultation",
    number: 1,
    title: "Consultation & Survey",
    description:
      "We assess your property's existing infrastructure, guest demographics, and specific service needs to tailor the perfect TV solution.",
    icon: <ConsultationIcon />,
  },
  {
    id: "customization",
    number: 2,
    title: "Customization",
    description:
      "Our team designs your personalized welcome screens, integrates your hotel services, and aligns the UI with your brand identity.",
    icon: <PlanningIcon />,
  },
  {
    id: "installation",
    number: 3,
    title: "Installation & Setup",
    description:
      "Seamless professional deployment across all guest rooms, ensuring network stability and flawless hardware integration.",
    icon: <InstallationIcon />,
  },
  {
    id: "support",
    number: 4,
    title: "Ongoing Support",
    description:
      "24/7 technical assistance, system updates, and content management support to guarantee a premium guest experience year-round.",
    icon: <AftersalesIcon />,
  },
] as const;

/* ── Gradient colours per step ───────────────────────────── */
const STEP_COLORS = [
  { from: "#00D4AA", to: "#4A6CF7" },
  { from: "#4A6CF7", to: "#8B5CF6" },
  { from: "#8B5CF6", to: "#00D4AA" },
  { from: "#00D4AA", to: "#4A6CF7" },
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
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.14,
    },
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
   HTV WORKFLOW
   ════════════════════════════════════════════════════════════ */
export default function HTVWorkflow() {
  return (
    <section
      id="htv-workflow"
      aria-labelledby="htv-workflow-heading"
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
            id="htv-workflow-heading"
            style={{
              fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Your Path to{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Smarter Guest Rooms
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "#4B5563",
              lineHeight: 1.75,
              maxWidth: 540,
              marginInline: "auto",
            }}
          >
            From initial concept to full property deployment - we ensure a smooth, disruption-free transition.
          </p>
        </motion.div>

        {/* ── Steps - Desktop horizontal ───────────────────── */}
        <div className="htv-workflow-desktop">
          <motion.div
            variants={stepsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{ position: "relative" }}
          >
            {/* ── Connecting dashed line ──────────────────── */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 36, // half of 72px circle
                left: "calc(12.5% + 36px)", // start after first circle
                right: "calc(12.5% + 36px)", // end before last circle
                height: 1,
                borderTop: "2px dashed #E8EDF5",
                zIndex: 0,
              }}
            />

            {/* ── Steps row ───────────────────────────────── */}
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
                  {/* Circle */}
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${STEP_COLORS[index].from}, ${STEP_COLORS[index].to})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                      flexShrink: 0,
                      boxShadow: `0 6px 24px ${STEP_COLORS[index].from}30`,
                      position: "relative",
                    }}
                  >
                    {/* Step number overlay */}
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
                    {/* Icon faint overlay */}
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
                        color: STEP_COLORS[index].from,
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#0D0D0D",
                      marginBottom: "0.5rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
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

        {/* ── Steps - Mobile vertical ──────────────────────── */}
        <div className="htv-workflow-mobile">
          <motion.div
            variants={stepsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "0",
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
                {/* Left column - circle + vertical line */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  {/* Circle */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${STEP_COLORS[index].from}, ${STEP_COLORS[index].to})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 4px 16px ${STEP_COLORS[index].from}30`,
                      position: "relative",
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

                  {/* Vertical dashed connector */}
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

                {/* Right column - text */}
                <div style={{ paddingTop: "0.625rem", paddingBottom: "0.5rem" }}>
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

      {/* ── Responsive visibility ─────────────────────────── */}
      <style>{`
        .htv-workflow-desktop { display: block; }
        .htv-workflow-mobile  { display: none;  }

        @media (max-width: 767px) {
          .htv-workflow-desktop { display: none;  }
          .htv-workflow-mobile  { display: block; }
        }
      `}</style>
    </section>
  );
}

/* ── Step Icons (small, 14px) ─────────────────────────────── */
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

function ConsultationIcon() {
  return (
    <svg {...smallIconProps}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function PlanningIcon() {
  return (
    <svg {...smallIconProps}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function InstallationIcon() {
  return (
    <svg {...smallIconProps}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function AftersalesIcon() {
  return (
    <svg {...smallIconProps}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
