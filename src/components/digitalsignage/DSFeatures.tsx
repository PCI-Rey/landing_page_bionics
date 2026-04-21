"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ── Feature Data ─────────────────────────────────────────── */
const FEATURES = [
  {
    id: "centralized-distribution",
    title: "Centralized Content Distribution",
    description:
      "Automatically sync content across all screens via internet or intranet.",
    icon: <DistributionIcon />,
    gradientFrom: "rgba(0,212,170,0.14)",
    gradientTo: "rgba(74,108,247,0.10)",
    iconColor: "#00D4AA",
  },
  {
    id: "multimedia-playback",
    title: "Multimedia Content Playback",
    description:
      "Showcase videos, images, and text on any screen in multiple formats.",
    icon: <PlaybackIcon />,
    gradientFrom: "rgba(74,108,247,0.14)",
    gradientTo: "rgba(139,92,246,0.10)",
    iconColor: "#4A6CF7",
  },
  {
    id: "multi-platform",
    title: "Multi-Platform System",
    description:
      "Works seamlessly with all LED and signage brands.",
    icon: <PlatformIcon />,
    gradientFrom: "rgba(139,92,246,0.14)",
    gradientTo: "rgba(0,212,170,0.10)",
    iconColor: "#8B5CF6",
  },
  {
    id: "web-based-cms",
    title: "Web-Based CMS",
    description:
      "Design, schedule, and control displays from any device.",
    icon: <CMSIcon />,
    gradientFrom: "rgba(0,212,170,0.14)",
    gradientTo: "rgba(139,92,246,0.10)",
    iconColor: "#00D4AA",
  },
  {
    id: "content-scheduling",
    title: "Content Scheduling",
    description:
      "Plan and automate content to appear at specific times.",
    icon: <SchedulingIcon />,
    gradientFrom: "rgba(74,108,247,0.14)",
    gradientTo: "rgba(0,212,170,0.10)",
    iconColor: "#4A6CF7",
  },
  {
    id: "layout-designer",
    title: "Layout Designer",
    description:
      "Create dynamic multi-layer layouts just like a presentation.",
    icon: <LayoutIcon />,
    gradientFrom: "rgba(139,92,246,0.14)",
    gradientTo: "rgba(74,108,247,0.10)",
    iconColor: "#8B5CF6",
  },
  {
    id: "system-monitoring",
    title: "System Monitoring",
    description:
      "Monitor and manage all displays remotely from anywhere.",
    icon: <MonitoringIcon />,
    gradientFrom: "rgba(0,212,170,0.14)",
    gradientTo: "rgba(74,108,247,0.10)",
    iconColor: "#00D4AA",
  },
  {
    id: "offline-mode",
    title: "Offline Mode",
    description:
      "Scheduled content keeps playing even without internet.",
    icon: <OfflineIcon />,
    gradientFrom: "rgba(74,108,247,0.14)",
    gradientTo: "rgba(139,92,246,0.10)",
    iconColor: "#4A6CF7",
  },
  {
    id: "admin-privilege",
    title: "Admin Privilege",
    description:
      "Customize user access and permissions for your displays.",
    icon: <AdminIcon />,
    gradientFrom: "rgba(139,92,246,0.14)",
    gradientTo: "rgba(0,212,170,0.10)",
    iconColor: "#8B5CF6",
  },
  {
    id: "auto-operation",
    title: "Auto Operation",
    description:
      "Set screens to turn on and off automatically on schedule.",
    icon: <AutoIcon />,
    gradientFrom: "rgba(0,212,170,0.12)",
    gradientTo: "rgba(74,108,247,0.12)",
    iconColor: "#00D4AA",
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

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ════════════════════════════════════════════════════════════
   DS FEATURES
   ════════════════════════════════════════════════════════════ */
export default function DSFeatures() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="ds-features"
      aria-labelledby="ds-features-heading"
      style={{
        backgroundColor: "#F8FAFF",
        paddingTop: isMobile ? "3.5rem" : "6rem",
        paddingBottom: isMobile ? "4rem" : "6rem",
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
          style={{ textAlign: "center", marginBottom: isMobile ? "2.5rem" : "4rem" }}
        >
          <h2
            id="ds-features-heading"
            style={{
              fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0D0D0D",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
              maxWidth: 680,
              marginInline: "auto",
            }}
          >
            Everything Your Business Needs,{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              All in One Place
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
            A complete suite of tools to manage, distribute, and monitor your
            digital signage network effortlessly.
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
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fill, minmax(300px, 1fr))",
            gap: isMobile ? "1rem" : "1.5rem",
          }}
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Feature Card ─────────────────────────────────────────── */
function FeatureCard({
  feature,
}: {
  feature: (typeof FEATURES)[number];
}) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      aria-label={feature.title}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8EDF5",
        borderRadius: 20,
        padding: "1.75rem",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        cursor: "default",
        willChange: "transform",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 8px 40px rgba(74,108,247,0.12)";
        el.style.borderColor = "rgba(74,108,247,0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
        el.style.borderColor = "#E8EDF5";
      }}
    >
      {/* Icon container */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: `linear-gradient(135deg, ${feature.gradientFrom}, ${feature.gradientTo})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: feature.iconColor,
        }}
      >
        {feature.icon}
      </div>

      {/* Text */}
      <div>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#0D0D0D",
            marginBottom: "0.4rem",
            lineHeight: 1.3,
          }}
        >
          {feature.title}
        </h3>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#4B5563",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {feature.description}
        </p>
      </div>
    </motion.article>
  );
}

/* ── SVG Icon Components ──────────────────────────────────── */
const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function DistributionIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="M12 8v3M5 16V11l7-3M19 16V11l-7-3" />
    </svg>
  );
}

function PlaybackIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="m10 8 5 3-5 3V8z" strokeWidth={0} fill="currentColor" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function PlatformIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="3" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M6 8h4M6 11h6" />
    </svg>
  );
}

function CMSIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
      <path d="M13 13h4M13 17h4" />
    </svg>
  );
}

function SchedulingIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4" />
      <path d="M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function MonitoringIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function OfflineIcon() {
  return (
    <svg {...iconProps}>
      <path d="M2 2l20 20" />
      <path d="M8.5 16.5A5 5 0 0 1 12 15a5 5 0 0 1 3.5 1.5" />
      <path d="M5 12.9A10 10 0 0 1 12 10c1.9 0 3.7.5 5.2 1.5" />
      <path d="M10.7 6.1A14.8 14.8 0 0 1 19.9 9" />
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AdminIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function AutoIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
