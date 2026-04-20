"use client";

import { motion } from "framer-motion";

/* ── Product Data ─────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "digital-signage",
    title: "Digital Signage",
    description:
      "Engage and inform your audience with dynamic cloud-based digital signage. Manage content remotely with real-time updates across all your displays.",
    features: ["Cloud-managed content", "Real-time updates", "Multi-display sync"],
    highlighted: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A6CF7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" /><path d="M12 17v4" />
        <path d="M6 8h.01" /><path d="M10 8h8" />
        <path d="M6 12h.01" /><path d="M10 12h5" />
      </svg>
    ),
  },
  {
    id: "hospitality-tv",
    title: "Hospitality TV",
    description:
      "Deliver premium in-room entertainment and information for your guests. Create a seamless, branded experience that elevates every stay.",
    features: ["Branded interface", "Guest information", "Remote management"],
    highlighted: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A6CF7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M7 21h10" /><path d="M9 17v4" /><path d="M15 17v4" />
        <polygon points="10,8 10,14 15,11" fill="#4A6CF7" stroke="none" />
      </svg>
    ),
  },
  {
    id: "wayfinding",
    title: "Wayfinding",
    description:
      "Simplify navigation with interactive maps and directories. Help visitors find their way with intuitive, touch-enabled kiosk displays.",
    features: ["Interactive maps", "Touch-enabled kiosks", "Multi-floor support"],
    highlighted: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4A6CF7" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
        <path d="M18 20h4" /><path d="M20 18v4" />
      </svg>
    ),
  },
] as const;

/* ── Animation Variants ──────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" as const } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" as const } 
  },
};

/* ════════════════════════════════════════════════════════════
   PRODUCT CARDS SECTION
   ════════════════════════════════════════════════════════════ */
export default function ProductCards() {
  return (
    <section
      aria-labelledby="products-heading"
      style={{
        position: "relative",
        backgroundColor: "#F8FAFF",
        paddingTop: "6rem",
        paddingBottom: "8rem",
        overflow: "hidden",
      }}
    >
      <div className="container-bionics" style={{ position: "relative", zIndex: 10 }}>
        {/* ── Section Header ───────────────────────────── */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          {/* Eyebrow */}
          <span style={{
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
          }}>
            Our Solutions
          </span>

          {/* H2 */}
          <h2
            id="products-heading"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#0D0D0D",
              marginBottom: "1.5rem",
            }}
          >
            Products Built for{" "}
            <span style={{
              background: "linear-gradient(135deg, #00D4AA, #4A6CF7, #8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Tomorrow
            </span>
          </h2>

          <p style={{
            maxWidth: "44ch",
            marginInline: "auto",
            fontSize: "1.125rem",
            color: "#4B5563",
            lineHeight: 1.7,
          }}>
            Three powerful platforms, one unified ecosystem. Choose the solution
            that transforms your space.
          </p>
        </motion.div>

        {/* ── Cards Grid ───────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "stretch", // Ensure equal height columns in grid
          }}
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── ProductCard sub-component ────────────────────────────── */
type Product = typeof PRODUCTS[number];

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "20px",
        padding: "32px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8EDF5",
        boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 8px 40px rgba(74,108,247,0.12)";
        el.style.borderColor = "rgba(74,108,247,0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.04)";
        el.style.borderColor = "#E8EDF5";
      }}
    >
      {product.highlighted && (
        <motion.div
          initial={{ opacity: 0, y: -10, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            position: "absolute",
            top: -14,
            left: "50%",
            zIndex: 20,
            padding: "0.35rem 1.1rem",
            borderRadius: 9999,
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            background: "linear-gradient(135deg, #00D4AA, #4A6CF7)",
            boxShadow: "0 4px 16px rgba(74,108,247,0.28)",
            whiteSpace: "nowrap",
          }}
        >
          ⭐ Most Popular
        </motion.div>
      )}

      {/* Top Section: Icon, Title, Description, Features */}
      <div>
        {/* Icon container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            marginBottom: "1.5rem",
            background: "linear-gradient(135deg, rgba(0,212,170,0.1), rgba(74,108,247,0.1))",
            flexShrink: 0,
          }}
        >
          {product.icon}
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: "1.25rem", // text-xl
          fontWeight: 700,     // font-bold
          color: "#0D0D0D",
          marginBottom: "1rem",
          lineHeight: 1.3,
        }}>
          {product.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: "0.875rem", // text-sm
          color: "#4B5563",
          lineHeight: 1.7, // relaxed
          marginBottom: "1.5rem",
        }}>
          {product.description}
        </p>

        {/* Feature list */}
        <ul style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          marginBottom: "2rem",
          padding: 0,
        }}>
          {product.features.map((feat) => (
            <li key={feat} style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "0.875rem",
              color: "#4B5563",
              fontWeight: 500,
            }}>
              <span style={{
                width: "6px", 
                height: "6px", 
                borderRadius: "50%", 
                flexShrink: 0,
                backgroundColor: "#00D4AA",
              }} />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section: Learn More link */}
      <div>
        <a
          href={`#${product.id}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "1rem",
            fontWeight: 700,
            textDecoration: "none",
            background: "linear-gradient(135deg, #00D4AA, #4A6CF7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          className="group-hover-arrow"
        >
          Learn More
          <svg
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="#4A6CF7" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
            style={{ 
              transition: "transform 0.3s ease", 
              flexShrink: 0,
            }}
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
