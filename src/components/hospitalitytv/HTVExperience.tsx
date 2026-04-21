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

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ── Experience data ──────────────────────────────────────── */
const EXPERIENCES = [
  {
    number: "01",
    label: "Welcome",
    title: "Personalized Arrival & Greeting",
    description:
      "The moment a guest enters their room, they're greeted by name with a custom welcome screen tailored to their stay. Set the tone for a memorable experience from the very first second - with branded messaging, personalized details, and a warm digital introduction that feels truly premium.",
    highlights: [
      "Guest name display",
      "Custom branded messaging",
      "Stay details summary",
      "Room-specific welcome",
    ],
    accent: "#00D4AA",
    accentBg: "rgba(0,212,170,0.07)",
    accentBorder: "rgba(0,212,170,0.18)",
    icon: <WelcomeIcon />,
  },
  {
    number: "02",
    label: "Entertainment",
    title: "On-Screen Playback & Media Access",
    description:
      "Give guests easy access to movies, live TV channels, on-demand content, and media playback - all from a beautifully designed on-screen interface. Entertainment is organized, easy to navigate, and always responsive to what guests want to watch.",
    highlights: [
      "Live TV channels",
      "On-demand movies",
      "Streaming integration",
      "Clean media interface",
    ],
    accent: "#4A6CF7",
    accentBg: "rgba(74,108,247,0.07)",
    accentBorder: "rgba(74,108,247,0.18)",
    icon: <EntertainmentIcon />,
  },
  {
    number: "03",
    label: "Music",
    title: "Simple & Enjoyable Room Audio",
    description:
      "Let guests set the perfect mood in their room with curated music and ambient soundscapes. Whether they want relaxing background music or upbeat energy, in-room audio is always just a tap away - creating a truly immersive stay experience.",
    highlights: [
      "Curated music playlists",
      "Ambient soundscapes",
      "Simple playback controls",
      "Room-filling audio",
    ],
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.07)",
    accentBorder: "rgba(139,92,246,0.18)",
    icon: <MusicIcon />,
  },
  {
    number: "04",
    label: "Guide",
    title: "Hotel Facilities & Internal Services",
    description:
      "Guests can explore everything your hotel offers - from dining and spa to transport, shuttle schedules, and in-room services. All hotel information is presented in a clear, structured format that replaces the traditional printed guide with something far more beautiful and interactive.",
    highlights: [
      "Dining & restaurant menus",
      "Transport & shuttle info",
      "Spa & facility listings",
      "In-room service requests",
    ],
    accent: "#00D4AA",
    accentBg: "rgba(0,212,170,0.07)",
    accentBorder: "rgba(0,212,170,0.18)",
    icon: <GuideIcon />,
  },
  {
    number: "05",
    label: "Nearby",
    title: "Local Attraction Discovery for Guests",
    description:
      "Help guests explore the world just outside your hotel. Curated recommendations for local attractions, landmarks, restaurants, and hidden gems give guests the confidence to explore - and the feeling that your hotel truly knows the city they're in.",
    highlights: [
      "Top local attractions",
      "Nearby restaurants",
      "Cultural landmarks",
      "Curated city guide",
    ],
    accent: "#4A6CF7",
    accentBg: "rgba(74,108,247,0.07)",
    accentBorder: "rgba(74,108,247,0.18)",
    icon: <NearbyIcon />,
  },
];

/* ════════════════════════════════════════════════════════════
   HTV EXPERIENCE
   ════════════════════════════════════════════════════════════ */
export default function HTVExperience() {
  return (
    <section
      id="htv-experience"
      aria-label="Hospitality TV Experience"
      style={{
        position: "relative",
        backgroundColor: "#F8FAFF",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        overflow: "hidden",
      }}
    >
      {/* Edge hairlines */}
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, #E8EDF5 30%, #E8EDF5 70%, transparent)" }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, #E8EDF5 30%, #E8EDF5 70%, transparent)" }} />

      <div className="container-bionics">

        {/* ── Section Header ─────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 4rem" }}
        >
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
              Guest Experience
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
            Five Experiences.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One Seamless Platform.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{ fontSize: "1.0625rem", color: "#4B5563", lineHeight: 1.75, margin: 0 }}
          >
            From the moment guests arrive to the moment they check out, every
            in-room touchpoint is designed to delight.
          </motion.p>
        </motion.div>

        {/* ── Experience Blocks ─────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {EXPERIENCES.map((exp, i) => {
            const isEven = i % 2 === 1; // odd index → flip on desktop

            return (
              <motion.div
                key={exp.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
                  },
                }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2.5rem",
                  alignItems: "center",
                  background: "#FFFFFF",
                  border: "1px solid #E8EDF5",
                  borderRadius: 24,
                  padding: "2.5rem",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                }}
                className="htv-experience-block"
              >
                {/* Number badge + label - left on even, right on odd */}
                <motion.div
                  variants={isEven ? slideRight : slideLeft}
                  style={{ order: isEven ? 2 : 1 }}
                >
                  {/* Number badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: exp.accentBg,
                        border: `1.5px solid ${exp.accentBorder}`,
                        fontSize: "0.875rem",
                        fontWeight: 800,
                        color: exp.accent,
                        letterSpacing: "-0.01em",
                        flexShrink: 0,
                      }}
                    >
                      {exp.number}
                    </span>
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: exp.accent,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {exp.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                      fontWeight: 800,
                      color: "#0D0D0D",
                      lineHeight: 1.25,
                      letterSpacing: "-0.018em",
                      marginBottom: "1rem",
                    }}
                  >
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "#4B5563",
                      lineHeight: 1.75,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {exp.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          padding: "0.3rem 0.75rem",
                          background: exp.accentBg,
                          border: `1px solid ${exp.accentBorder}`,
                          borderRadius: 9999,
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: exp.accent,
                        }}
                      >
                        <span aria-hidden="true" style={{ fontSize: "0.55rem" }}>✦</span>
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Visual panel */}
                <motion.div
                  variants={isEven ? slideLeft : slideRight}
                  style={{ order: isEven ? 1 : 2 }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 220,
                      borderRadius: 20,
                      background: `linear-gradient(135deg, ${exp.accentBg} 0%, rgba(255,255,255,0) 100%)`,
                      border: `1px solid ${exp.accentBorder}`,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Large icon */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 80,
                        height: 80,
                        borderRadius: 24,
                        background: exp.accentBg,
                        border: `2px solid ${exp.accentBorder}`,
                        color: exp.accent,
                      }}
                    >
                      {exp.icon}
                    </div>

                    {/* Decorative corner dots */}
                    <div style={{ position: "absolute", top: 16, left: 16, width: 6, height: 6, borderRadius: "50%", background: exp.accent, opacity: 0.3 }} />
                    <div style={{ position: "absolute", top: 16, right: 16, width: 4, height: 4, borderRadius: "50%", background: exp.accent, opacity: 0.2 }} />
                    <div style={{ position: "absolute", bottom: 16, left: 16, width: 4, height: 4, borderRadius: "50%", background: exp.accent, opacity: 0.2 }} />
                    <div style={{ position: "absolute", bottom: 16, right: 16, width: 6, height: 6, borderRadius: "50%", background: exp.accent, opacity: 0.3 }} />

                    {/* Experience number watermark */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: 12,
                        right: 16,
                        fontSize: "4rem",
                        fontWeight: 900,
                        color: exp.accent,
                        opacity: 0.06,
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                        userSelect: "none",
                      }}
                      aria-hidden="true"
                    >
                      {exp.number}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Responsive: stack on mobile */}
        <style>{`
          @media (max-width: 767px) {
            .htv-experience-block {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
              padding: 1.75rem !important;
            }
            .htv-experience-block > div {
              order: unset !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ── Icons ────────────────────────────────────────────────── */
function WelcomeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function EntertainmentIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" /><path d="M12 17v4" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function GuideIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}

function NearbyIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76" />
    </svg>
  );
}
