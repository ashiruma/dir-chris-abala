import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cinematic Video Editor for Brands, Agencies & YouTube Channels | Chrispine Abala",
  description: "Professional cinematic video editor working remotely with brands, YouTubers, and agencies worldwide. Specializing in commercial, documentary, and high-retention digital content.",
  keywords: [
    "Remote video editor",
    "Freelance video editor",
    "Cinematic video editor",
    "YouTube video editor for hire",
    "Commercial video editor",
    "Documentary video editor",
    "Professional video editor for brands",
    "Video editor for agencies",
    "High retention YouTube editor",
    "Online video editor",
    "Chrispine Abala",
    "Mbogiwood Productions",
  ],
  authors: [{ name: "Chrispine Abala Ashiruma" }],
  openGraph: {
    title: "Cinematic Video Editor for Brands, Agencies & YouTube Channels | Chrispine Abala",
    description: "Professional cinematic video editor working remotely with brands, YouTubers, and agencies worldwide.",
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
    title: "Cinematic Video Editor for Brands, Agencies & YouTube Channels | Chrispine Abala",
    description: "Professional cinematic video editor working remotely with brands, YouTubers, and agencies worldwide.",
    images: ["https://dir-chris-abala.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Chrispine Abala Ashiruma",
              "jobTitle": "Cinematic Video Editor",
              "description": "Professional cinematic video editor specializing in documentaries, commercial content, and high-retention YouTube editing.",
              "url": "https://dir-chris-abala.vercel.app/",
              "worksFor": {
                "@type": "Organization",
                "name": "Mbogiwood Productions PLC",
              },
              "sameAs": [],
            }),
          }}
        />
        <header style={{ backgroundColor: "#291011", borderBottom: "2px solid #16a34a", position: "sticky", top: 0, zIndex: 100, padding: "0 20px", boxShadow: "0 2px 5px rgba(0,0,0,0.3)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px" }}>
            <Link href="/" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.2em", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
              <span style={{ color: "#16a34a" }}>Chrispine</span>
              <span style={{ color: "#facc15" }}> Abala</span>
            </Link>
            <nav style={{ display: "flex", gap: "25px", alignItems: "center" }}>
              <Link href="/work" className="nav-link">Work</Link>
              <Link href="/#services" className="nav-link">Services</Link>
              <Link href="/#contact" className="nav-link">Contact</Link>
              <a href="https://drive.google.com/uc?export=download&id=1r_EA6Kga8CmEXWA1z2iUXd-GBr5OmeyL" download className="nav-cv">Download CV</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}