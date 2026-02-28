// app/admin/page.tsx
import { auth, signOut } from "@/auth";
import { getCategories } from "@/lib/google-drive";
import { redirect } from "next/navigation";
import { getConfig } from "@/lib/config-store";
import AdminConfigForm from "./AdminConfigForm";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminDashboard() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const [categories, config] = await Promise.all([
    getCategories(),
    getConfig(),
  ]);

  const glassStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    padding: "30px",
    marginBottom: "24px",
  };

  return (
    <main style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff", padding: "60px 20px", fontFamily: "'Montserrat', sans-serif" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "60px", borderBottom: "1px solid #1a1a1a", paddingBottom: "32px" }}>
          <div>
            <p style={{ color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.4em", fontSize: "0.7em", fontWeight: 700, marginBottom: "12px" }}>SYSTEM CONTROL</p>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2em, 4vw, 3em)", textTransform: "uppercase", color: "#f4f4f4" }}>
              CONTROL <span style={{ color: "#facc15" }}>CENTER</span>
            </h1>
          </div>
          <form action={async () => { "use server"; await signOut({ redirectTo: "/admin/login" }); }}>
            <button style={{ background: "none", border: "1px solid #333", color: "#666", padding: "10px 20px", cursor: "pointer", fontSize: "0.7em", letterSpacing: "2px" }}>
              LOGOUT
            </button>
          </form>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px", marginBottom: "48px" }}>

          {/* SECTION 1: LIVE CONFIG FORM */}
          <section style={glassStyle}>
            <h3 style={{ color: "#16a34a", marginBottom: "20px", fontFamily: "'Oswald'", letterSpacing: "2px" }}>GLOBAL ASSETS</h3>
            <AdminConfigForm config={config} />
          </section>

          {/* SECTION 2: CONTENT SYNC */}
          <section style={glassStyle}>
            <h3 style={{ color: "#16a34a", marginBottom: "20px", fontFamily: "'Oswald'", letterSpacing: "2px" }}>CONTENT SYNC</h3>
            <div style={{ display: "grid", gap: "10px" }}>
              {categories.map((cat, i) => {
                const accents = ["#16a34a", "#facc15", "#e67e22"] as const;
                const accent = accents[i % accents.length];
                return (
                  <div key={cat.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.02)", padding: "15px", borderRadius: "8px", borderLeft: `3px solid ${accent}` }}>
                    <div>
                      <span style={{ fontSize: "0.9rem", display: "block" }}>{cat.title}</span>
                      <span style={{ color: "#555", fontSize: "0.65rem", letterSpacing: "1px" }}>slug: {cat.slug}</span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span style={{ color: accent, fontFamily: "'Oswald', sans-serif", fontSize: "1.5rem" }}>{cat.images.length}</span>
                      <span style={{ color: "#555", fontSize: "0.65rem", display: "block" }}>items</span>
                    </div>
                  </div>
                );
              })}
              <div style={{ marginTop: "20px", borderTop: "1px solid #222", paddingTop: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "2rem", color: "#fff", margin: "10px 0", fontFamily: "'Oswald', sans-serif" }}>{categories.length}</p>
                <span style={{ color: "#666", fontSize: "0.7rem", letterSpacing: "2px" }}>TOTAL CATEGORIES</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}