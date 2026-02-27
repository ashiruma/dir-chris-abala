import Link from "next/link";
import { getCategories } from "@/lib/google-drive";

const placeholders = [
  { title: "Visual Documentary", role: "Production Lead", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800", accent: "#16a34a", slug: "visual-documentary" },
  { title: "Brand Narrative", role: "Visual Storytelling", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800", accent: "#facc15", slug: "brand-narrative" },
  { title: "Creative Direction", role: "Photography", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800", accent: "#e67e22", slug: "creative-direction" },
  { title: "Corporate Events", role: "Event Coverage", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800", accent: "#16a34a", slug: "corporate-events" },
  { title: "Portrait Series", role: "Photography", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800", accent: "#facc15", slug: "portrait-series" },
  { title: "Cultural Stories", role: "Documentary", img: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=800", accent: "#e67e22", slug: "cultural-stories" },
];

export default async function WorkPage() {
  let driveCategories: { id: string; title: string; slug: string; images: { id: string; thumbnailUrl: string }[] }[] = [];

  try {
    driveCategories = await getCategories();
  } catch {
    // Falls back to placeholders silently
  }

  return (
    <main style={{ backgroundColor: "#291011", minHeight: "100vh" }}>

      {/* PAGE HERO */}
      <section style={{ padding: "120px 40px 60px", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Portfolio</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5em, 6vw, 5em)", textTransform: "uppercase", color: "#f4f4f4", lineHeight: 0.9 }}>
              Selected <br /><span className="highlight-yellow">Projects</span>
            </h1>
            <Link href="/#contact" className="btn-solid">Start a Project</Link>
          </div>
        </div>
      </section>

      {/* DRIVE CATEGORIES */}
      {driveCategories.length > 0 && (
        <section style={{ padding: "80px 40px", borderBottom: "1px solid #3d2325" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
              <span className="section-divider-green" />
              <span className="section-tag">From the Archive</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {driveCategories.map((cat, i) => {
                const accents = ["#16a34a", "#facc15", "#e67e22"];
                const accent = accents[i % accents.length];
                return (
                  <Link key={cat.id} href={`/work/${cat.slug}`} style={{ textDecoration: "none" }}>
                    <div className="project-card">
                      <div style={{ height: "200px", overflow: "hidden", backgroundColor: "#3d2325" }}>
                        {cat.images[0] && (
                          <img
                            src={cat.images[0].thumbnailUrl}
                            alt={cat.title}
                            className="project-img"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div style={{ padding: "20px", borderTop: `3px solid ${accent}` }}>
                        <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.3em", color: "#f4f4f4", marginBottom: "8px" }}>{cat.title}</h3>
                        <p style={{ fontSize: "0.85em", color: accent, textTransform: "uppercase", letterSpacing: "0.2em" }}>{cat.images.length} items</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* PLACEHOLDER CARDS */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Featured Work</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {placeholders.map((item) => (
              <Link key={item.title} href={`/work/${item.slug}`} style={{ textDecoration: "none" }}>
                <div className="project-card">
                  <div style={{ height: "220px", overflow: "hidden" }}>
                    <img src={item.img} alt={item.title} className="project-img" loading="lazy" />
                  </div>
                  <div style={{ padding: "20px", borderTop: `3px solid ${item.accent}` }}>
                    <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.3em", color: "#f4f4f4", marginBottom: "8px" }}>{item.title}</h3>
                    <p style={{ fontSize: "0.85em", color: item.accent, textTransform: "uppercase", letterSpacing: "0.2em" }}>{item.role}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#1a1a1a", borderTop: "2px solid #16a34a", padding: "40px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.2em", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "2px" }}>
            <span style={{ color: "#16a34a" }}>Chrispine</span>
            <span style={{ color: "#facc15" }}> Abala</span>
          </p>
          <p style={{ fontSize: "0.85em", color: "#999" }}>
            © {new Date().getFullYear()} All Rights Reserved. Built with passion for storytelling.
          </p>
        </div>
      </footer>

    </main>
  );
}