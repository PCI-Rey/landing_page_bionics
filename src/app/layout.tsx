import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClearCache from "@/components/ClearCache";

/* ── Viewport — ensures proper mobile rendering ───────────── */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Bionics — Choose Your Smart Solution",
  description:
    "Select the Bionics solution that fits your business needs. Digital Signage, Hospitality TV, and Wayfinding — powered by cutting-edge technology.",
  keywords: [
    "Bionics",
    "Digital Signage",
    "Hospitality TV",
    "Wayfinding",
    "Smart Solutions",
    "Interactive Displays",
  ],
  authors: [{ name: "Bionics" }],
  robots: "index, follow",
  openGraph: {
    title: "Bionics — Choose Your Smart Solution",
    description:
      "Select the Bionics solution that fits your business needs. Digital Signage, Hospitality TV, and Wayfinding.",
    type: "website",
    locale: "en_US",
    siteName: "Bionics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bionics — Choose Your Smart Solution",
    description:
      "Select the Bionics solution that fits your business needs. Digital Signage, Hospitality TV, and Wayfinding.",
  },
};

/* ── Layout ───────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased"
      style={{ colorScheme: "light" }}
    >
      <head>
        {/* Force light color scheme — prevents OS dark-mode from inverting our white theme */}
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          color: "#4B5563",
          fontFamily: "var(--font-plus-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif",
        }}
      >
        <ClearCache />
        {children}
      </body>
    </html>
  );
}
