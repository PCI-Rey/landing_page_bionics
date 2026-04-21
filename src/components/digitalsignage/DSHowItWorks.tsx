"use client";

import { motion } from "framer-motion";

/* ── Steps Data ───────────────────────────────────────────── */
const STEPS = [
  {
    id: "prepare",
    number: 1,
    title: "Prepare",
    description:
      "Power on your screen and install the Bionics app on your computer.",
    icon: <PrepareIcon />,
    gradientFrom: "#00D4AA",
    gradientTo: "#4A6CF7",
  },
  {
    id: "link-up",
    number: 2,
    title: "Link Up",
    description:
      "Connect your computer to the display using an HDMI or VGA cable.",
    icon: <LinkIcon />,
    gradientFrom: "#4A6CF7",
    gradientTo: "#8B5CF6",
  },
  {
    id: "authenticate",
    number: 3,
    title: "Authenticate",
    description:
      "Enter the server URL and unique code shown on your signage screen.",
    icon: <AuthIcon />,
    gradientFrom: "#8B5CF6",
    gradientTo: "#00D4AA",
  },
  {
    id: "get-creative",
    number: 4,
    title: "Get Creative",
    description:
      "Customize displays with images, videos, audio, and more in the Bionics dashboard.",
    icon: <CreativeIcon />,
    gradientFrom: "#00D4AA",
    gradientTo: "#8B5CF6",
  },
  {
    id: "go-live",
    number: 5,
    title: "Go Live",
    description:
      "Hit publish and watch your content come to life on screen.",
    icon: <LiveIcon />,
    gradientFrom: "#4A6CF7",
    gradientTo: "#00D4AA",
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

const makeStepVariants = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  },
});

/* ════════════════════════════════════════════════════════════
   DS HOW IT WORKS
   ════════════════════════════════════════════════════════════ */
export default function DSHowItWorks() {
  return (
    <section
      id="ds-how-it-works"
      aria-labelledby="ds-hiw-heading"
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
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <h2
            id="ds-hiw-heading"
            style={{
              fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Set Up Your Digital Signage{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in Minutes
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
            Five simple steps to go from unboxing to a fully live digital
            signage network.
          </p>
        </motion.div>

        {/* ── Steps — alternating layout ───────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
            maxWidth: 900,
            marginInline: "auto",
          }}
        >
          {STEPS.map((step, index) => {
            const isOdd = index % 2 === 0; // 0,2,4 → badge left on desktop
            const delay = index * 0.1;

            return (
              <motion.div
                key={step.id}
                variants={makeStepVariants(delay)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="ds-hiw-step"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "3rem",
                }}
                data-odd={isOdd ? "true" : "false"}
              >
                {/* ── Number Badge ──────────────────────── */}
                <div
                  className={isOdd ? "ds-hiw-badge" : "ds-hiw-badge ds-hiw-badge-right"}
                  style={{
                    order: isOdd ? 0 : 1, // badge right on even on desktop
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 8px 32px ${step.gradientFrom}30`,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </span>
                    {/* Small icon badge */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: -6,
                        right: -6,
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                        color: step.gradientFrom,
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* ── Text Content ──────────────────────── */}
                <div
                  style={{
                    order: isOdd ? 1 : 0, // text left on even on desktop
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  {/* Step label */}
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: step.gradientFrom,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Step {step.number}
                  </span>

                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "#0D0D0D",
                      marginBottom: "0.625rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#4B5563",
                      lineHeight: 1.75,
                      margin: 0,
                      maxWidth: "48ch",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile: stack vertically, badge always left ───── */}
      <style>{`
        @media (max-width: 767px) {
          .ds-hiw-step {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.25rem !important;
          }
          .ds-hiw-badge,
          .ds-hiw-badge-right {
            order: 0 !important;
          }
          .ds-hiw-step > div:last-child {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Step Icons (small, 15px) ─────────────────────────────── */
const smallIconProps = {
  width: 15,
  height: 15,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function PrepareIcon() {
  return (
    <svg {...smallIconProps}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg {...smallIconProps}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function AuthIcon() {
  return (
    <svg {...smallIconProps}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function CreativeIcon() {
  return (
    <svg {...smallIconProps}>
      <circle cx="13.5" cy="6.5" r="2.5" />
      <path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
      <path d="m5 16 4-4 3 3 3-3 4 4" />
    </svg>
  );
}

function LiveIcon() {
  return (
    <svg {...smallIconProps}>
      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
    </svg>
  );
}
