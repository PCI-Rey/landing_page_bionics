"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ── Data ─────────────────────────────────────────────────── */
const SOLUTION_OPTIONS = [
  { value: "hospitality-tv",  label: "Hospitality TV"  },
  { value: "digital-signage", label: "Digital Signage" },
  { value: "wayfinding",      label: "Wayfinding"      },
] as const;

const STATS = [
  { value: "5★",    label: "Guest Satisfaction" },
  { value: "100%",  label: "Brandable Interface" },
  { value: "24/7",  label: "Always-On Experience" },
  { value: "1 Day", label: "Onboarding Time"      },
] as const;

const TRUST_SIGNALS = [
  { label: "SSL Secured",   color: "#00D4AA", icon: "shield" },
  { label: "Fast Response", color: "#4A6CF7", icon: "bolt"   },
  { label: "No Spam Ever",  color: "#8B5CF6", icon: "check"  },
] as const;

const WHY_POINTS = [
  "Fully brandable welcome and guide screens for your property",
  "Centralized CMS - update content across all rooms instantly",
  "Supports entertainment, music, hotel guide, and nearby discovery",
  "End-to-end support from setup to ongoing aftersales",
] as const;

/* ── Animation Variants ───────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const slideUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ── Shared input style ───────────────────────────────────── */
const INPUT_BASE: React.CSSProperties = {
  width: "100%",
  padding: "1rem 1.25rem",
  backgroundColor: "#FFFFFF",
  border: "1px solid #E8EDF5",
  borderRadius: 12,
  color: "#0D0D0D",
  fontFamily: "inherit",
  fontSize: "0.9375rem",
  lineHeight: 1.5,
  outline: "none",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  appearance: "none" as const,
};

const INPUT_FOCUS: React.CSSProperties = {
  borderColor: "transparent",
  boxShadow:
    "0 0 0 2px #00D4AA, 0 8px 24px rgba(0,212,170,0.15), 0 0 12px rgba(74,108,247,0.10)",
};

/* ════════════════════════════════════════════════════════════
   HTV CONTACT
   ════════════════════════════════════════════════════════════ */
export default function HTVContact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    solution: "hospitality-tv", // pre-selected
    specialRequest: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle = (field: string): React.CSSProperties =>
    focused === field ? { ...INPUT_BASE, ...INPUT_FOCUS } : { ...INPUT_BASE };

  return (
    <section
      id="htv-contact"
      aria-labelledby="htv-contact-heading"
      style={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        paddingTop: isMobile ? "3.5rem" : "6rem",
        paddingBottom: isMobile ? "4rem" : "8rem",
        overflow: "hidden",
      }}
    >
      <div className="container-bionics" style={{ position: "relative", zIndex: 10 }}>

        {/* ── Section Header ─────────────────────────────── */}
        <motion.div
          variants={slideUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "2.5rem" : "4rem",
          }}
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
            Contact Us
          </span>

          <h2
            id="htv-contact-heading"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#0D0D0D",
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s Talk{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hospitality TV
            </span>
          </h2>

          <p
            style={{
              maxWidth: "44ch",
              marginInline: "auto",
              fontSize: isMobile ? "1rem" : "1.125rem",
              color: "#4B5563",
              lineHeight: 1.7,
            }}
          >
            Ready to elevate your guest experience with Bionics Hospitality TV?
            Our team will reach out within one business day.
          </p>
        </motion.div>

        {/* ── Split Layout ──────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "2rem" : "3rem",
            alignItems: "start",
          }}
        >
          {/* ── LEFT: Info Panel ─────────────────────── */}
          <motion.div
            variants={slideUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Info card */}
            <div
              style={{
                position: "relative",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8EDF5",
                borderLeft: "none",
                borderRadius: isMobile ? 16 : 24,
                padding: isMobile ? "1.5rem" : "2.5rem",
                boxShadow: "0 4px 32px rgba(0,0,0,0.05)",
                marginBottom: isMobile ? "1.5rem" : "2rem",
                overflow: "hidden",
              }}
            >
              {/* Gradient accent bar */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 6,
                  background: "linear-gradient(180deg, #00D4AA, #4A6CF7, #8B5CF6)",
                }}
              />

              <h3
                style={{
                  fontSize: isMobile ? "1.25rem" : "1.5rem",
                  fontWeight: 800,
                  color: "#0D0D0D",
                  marginBottom: "0.75rem",
                  lineHeight: 1.25,
                }}
              >
                Why Choose{" "}
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
                ?
              </h3>

              <p
                style={{
                  fontSize: isMobile ? "0.875rem" : "1rem",
                  color: "#4B5563",
                  lineHeight: 1.7,
                  marginBottom: isMobile ? "1.25rem" : "1.75rem",
                }}
              >
                We deliver complete in-room guest experience platforms - from
                personalized welcome screens to entertainment, music, hotel guides,
                and nearby discovery - all in one beautifully integrated system.
              </p>

              {/* Why points */}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: isMobile ? "1.5rem" : "2rem",
                  padding: 0,
                }}
              >
                {WHY_POINTS.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      fontSize: isMobile ? "0.875rem" : "0.9375rem",
                      color: "#4B5563",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        marginTop: "0.2rem",
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #00D4AA, #4A6CF7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Stats grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: isMobile ? "0.75rem" : "1rem",
                }}
              >
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      borderRadius: isMobile ? 12 : 14,
                      padding: isMobile ? "0.875rem 0.75rem" : "1.125rem 1rem",
                      textAlign: "center",
                      backgroundColor: "#F8FAFF",
                      border: "1px solid #E8EDF5",
                    }}
                  >
                    <div
                      style={{
                        fontSize: isMobile ? "1.375rem" : "1.625rem",
                        fontWeight: 800,
                        marginBottom: "0.25rem",
                        background: "linear-gradient(135deg, #00D4AA, #4A6CF7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: isMobile ? "0.6875rem" : "0.8125rem",
                        color: "#6B7280",
                        fontWeight: 600,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: isMobile ? "1rem" : "1.5rem",
                paddingInline: "0.5rem",
              }}
            >
              {TRUST_SIGNALS.map(({ label, color, icon }) => (
                <div
                  key={label}
                  style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: `${color}18`,
                    }}
                  >
                    <TrustIcon icon={icon} color={color} />
                  </div>
                  <span
                    style={{
                      fontSize: isMobile ? "0.8125rem" : "0.875rem",
                      color: "#4B5563",
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Form ──────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8EDF5",
                borderRadius: isMobile ? 16 : 24,
                padding: isMobile ? "1.5rem" : "3rem",
                boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
              }}
            >
              <form onSubmit={handleSubmit} noValidate>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: isMobile ? "1.25rem" : "1.75rem",
                  }}
                >
                  {/* Row: Full Name + Company */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                      gap: "1.25rem",
                    }}
                  >
                    <motion.div variants={slideUpVariant}>
                      <FormLabel htmlFor="htv-fullName" required>Full Name</FormLabel>
                      <input
                        type="text"
                        id="htv-fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onFocus={() => setFocused("fullName")}
                        onBlur={() => setFocused(null)}
                        placeholder="John Doe"
                        required
                        style={inputStyle("fullName")}
                      />
                    </motion.div>

                    <motion.div variants={slideUpVariant}>
                      <FormLabel htmlFor="htv-companyName">Hotel / Company</FormLabel>
                      <input
                        type="text"
                        id="htv-companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        onFocus={() => setFocused("companyName")}
                        onBlur={() => setFocused(null)}
                        placeholder="Grand Hyatt Jakarta"
                        style={inputStyle("companyName")}
                      />
                    </motion.div>
                  </div>

                  {/* Row: Email + Phone */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                      gap: "1.25rem",
                    }}
                  >
                    <motion.div variants={slideUpVariant}>
                      <FormLabel htmlFor="htv-email" required>Email Address</FormLabel>
                      <input
                        type="email"
                        id="htv-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        placeholder="john@hotel.com"
                        required
                        style={inputStyle("email")}
                      />
                    </motion.div>

                    <motion.div variants={slideUpVariant}>
                      <FormLabel htmlFor="htv-phone">Phone Number</FormLabel>
                      <input
                        type="tel"
                        id="htv-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        placeholder="+62 812-3456-7890"
                        style={inputStyle("phone")}
                      />
                    </motion.div>
                  </div>

                  {/* Solution selector - pre-selected: Hospitality TV */}
                  <motion.div variants={slideUpVariant}>
                    <FormLabel htmlFor="htv-solution" required>Solution</FormLabel>
                    <div style={{ position: "relative" }}>
                      <select
                        id="htv-solution"
                        name="solution"
                        value={formData.solution}
                        onChange={handleChange}
                        onFocus={() => setFocused("solution")}
                        onBlur={() => setFocused(null)}
                        required
                        style={{
                          ...inputStyle("solution"),
                          paddingRight: "2.5rem",
                          cursor: "pointer",
                          color: "#0D0D0D",
                        }}
                      >
                        {SOLUTION_OPTIONS.map((opt) => (
                          <option
                            key={opt.value}
                            value={opt.value}
                            style={{ backgroundColor: "#FFFFFF", color: "#0D0D0D" }}
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {/* Chevron */}
                      <div
                        style={{
                          position: "absolute",
                          right: "1rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  {/* Special request */}
                  <motion.div variants={slideUpVariant}>
                    <FormLabel htmlFor="htv-specialRequest">Tell Us About Your Hotel</FormLabel>
                    <textarea
                      id="htv-specialRequest"
                      name="specialRequest"
                      value={formData.specialRequest}
                      onChange={handleChange}
                      onFocus={() => setFocused("specialRequest")}
                      onBlur={() => setFocused(null)}
                      placeholder="Describe your property, number of rooms, or any special requirements..."
                      rows={4}
                      style={{
                        ...inputStyle("specialRequest"),
                        resize: "none",
                        fontFamily: "inherit",
                      }}
                    />
                  </motion.div>

                  {/* Consent */}
                  <motion.p
                    variants={slideUpVariant}
                    style={{
                      fontSize: isMobile ? "0.8125rem" : "0.875rem",
                      color: "#6B7280",
                      lineHeight: 1.6,
                    }}
                  >
                    By clicking Schedule a Demo, I agree to be contacted by the
                    Bionics Solutions team for a consultation and product demo.
                  </motion.p>

                  {/* Submit */}
                  <motion.div variants={slideUpVariant}>
                    <button
                      type="submit"
                      id="htv-contact-submit"
                      style={{
                        position: "relative",
                        width: "100%",
                        padding: isMobile ? "1rem" : "1.125rem",
                        borderRadius: 14,
                        border: "none",
                        cursor: "pointer",
                        fontSize: isMobile ? "1rem" : "1.0625rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
                        backgroundSize: "200% 200%",
                        animation: "gradient-shift 4s ease infinite",
                        boxShadow:
                          "0 8px 32px rgba(0,212,170,0.28), 0 4px 16px rgba(74,108,247,0.18)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        overflow: "hidden",
                        fontFamily: "inherit",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.transform = "translateY(-2px)";
                        el.style.boxShadow =
                          "0 12px 40px rgba(0,212,170,0.38), 0 6px 20px rgba(74,108,247,0.26)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLButtonElement;
                        el.style.transform = "translateY(0)";
                        el.style.boxShadow =
                          "0 8px 32px rgba(0,212,170,0.28), 0 4px 16px rgba(74,108,247,0.18)";
                      }}
                    >
                      <span
                        style={{
                          position: "relative",
                          zIndex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                        }}
                      >
                        {submitted ? (
                          <>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            Demo Scheduled Successfully!
                          </>
                        ) : (
                          <>
                            Schedule a Demo
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </motion.div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ───────────────────────────────────────── */
function FormLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: "block",
        fontSize: "0.9375rem",
        fontWeight: 600,
        color: "#4B5563",
        marginBottom: "0.6rem",
      }}
    >
      {children}
      {required && (
        <span style={{ color: "#00D4AA", marginLeft: "0.3rem" }} aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

function TrustIcon({ icon, color }: { icon: string; color: string }) {
  const props = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (icon === "shield")
    return (
      <svg {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  if (icon === "bolt")
    return (
      <svg {...props}>
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    );
  return (
    <svg {...props} strokeWidth={2.5}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
