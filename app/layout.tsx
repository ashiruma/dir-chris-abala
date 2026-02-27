import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chrispine Abala | Visual Storyteller",
  description: "Professional photographer and visual storyteller based in Kakamega. Specializing in branding, documentary, and creative projects.",
  keywords: ["Chrispine Abala", "Visual Storyteller", "Photographer Kakamega", "Branding", "Video Production", "Portfolio"],
  authors: [{ name: "Chrispine Abala" }],
  openGraph: {
    title: "Chrispine Abala | Visual Storyteller",
    description: "Professional Videographer, photographer and visual storyteller based in Kakamega.",
    images: [
      {
        url: "https://dir-chris-abala.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chrispine Abala | Visual Storyteller",
    description: "Professional Videographer, photographer and visual storyteller based in Kakamega.",
    images: ["https://dir-chris-abala.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "#291011", borderBottom: "2px solid #16a34a", position: "sticky", top: 0, zIndex: 100, padding: "0 20px", boxShadow: "0 2px 5px rgba(0,0,0,0.3)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px" }}>
            <Link href="/" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.2em", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
              <span style={{ color: "#16a34a" }}>Chrispine</span>
              <span style={{ color: "#facc15" }}> Abala</span>
            </Link>
            <nav style={{ display: "flex", gap: "25px", alignItems: "center" }}>
              <Link href="/work" className="nav-link">Work</Link>
              <Link href="/#contact" className="nav-link">Contact</Link>
              <a href="/cv.pdf" download className="nav-cv">Download CV</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}