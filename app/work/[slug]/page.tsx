import { notFound } from "next/navigation";
import Link from "next/link";
import GalleryGrid from "@/components/gallery-grid";
import { getCategoryBySlug } from "@/lib/google-drive";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) return notFound();

  return (
    <main style={{ backgroundColor: "#291011", minHeight: "100vh" }}>

      {/* PAGE HERO */}
      <section style={{ padding: "120px 40px 60px", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link href="/work" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#16a34a", fontFamily: "'Montserrat', sans-serif", fontSize: "0.8em", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "32px" }}>
            ← Back to Work
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Category</span>
          </div>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5em, 6vw, 5em)", textTransform: "uppercase", color: "#f4f4f4", lineHeight: 0.9 }}>
            {category.title}
          </h1>
          <p style={{ color: "#666", marginTop: "16px", fontFamily: "'Montserrat', sans-serif", fontSize: "0.85em", textTransform: "uppercase", letterSpacing: "2px" }}>
            {category.images.length} items
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <GalleryGrid images={category.images} />
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