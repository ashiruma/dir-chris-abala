// app/admin/page.tsx
import { getCategories, type Category } from "@/lib/google-drive";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminPage() {
  let categories: Category[] = [];
  let error: string | null = null;

  try {
    categories = await getCategories();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load categories";
    categories = [];
  }

  const totalImages = categories.reduce((acc, cat) => acc + cat.images.length, 0);

  return (
    <main
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        padding: "60px 40px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* HEADER */}
        <div
          style={{
            borderBottom: "1px solid #1a1a1a",
            paddingBottom: "32px",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              color: "#16a34a",
              textTransform: "uppercase",
              letterSpacing: "0.4em",
              fontSize: "0.7em",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            Admin Dashboard
          </p>
          <h1
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(2em, 4vw, 3em)",
              textTransform: "uppercase",
              color: "#f4f4f4",
              marginBottom: "8px",
            }}
          >
            Content <span style={{ color: "#facc15" }}>Overview</span>
          </h1>
          <p
            style={{
              color: "#555",
              fontSize: "0.8em",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Auto-synced from Google Drive — refreshes on every visit
          </p>

          {error && (
            <p style={{ marginTop: "12px", color: "#e67e22", fontSize: "0.85em" }}>
              Error: {error}
            </p>
          )}
        </div>

        {/* STATS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid #1a1a1a",
              borderTop: "3px solid #16a34a",
              padding: "24px",
              borderRadius: "4px",
            }}
          >
            <p
              style={{
                color: "#555",
                fontSize: "0.7em",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              Total Categories
            </p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2.5em", color: "#f4f4f4" }}>
              {categories.length}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid #1a1a1a",
              borderTop: "3px solid #facc15",
              padding: "24px",
              borderRadius: "4px",
            }}
          >
            <p
              style={{
                color: "#555",
                fontSize: "0.7em",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              Total Items
            </p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2.5em", color: "#f4f4f4" }}>
              {totalImages}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#111",
              border: "1px solid #1a1a1a",
              borderTop: "3px solid #e67e22",
              padding: "24px",
              borderRadius: "4px",
            }}
          >
            <p
              style={{
                color: "#555",
                fontSize: "0.7em",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "8px",
              }}
            >
              Status
            </p>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "1.2em",
                color: error ? "#e67e22" : "#16a34a",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              ● {error ? "Degraded" : "Live"}
            </p>
          </div>
        </div>

        {/* CATEGORIES */}
        <div style={{ display: "grid", gap: "16px" }}>
          {categories.map((cat, i) => {
            const accents = ["#16a34a", "#facc15", "#e67e22"] as const;
            const accent = accents[i % accents.length];

            return (
              <div
                key={cat.id}
                style={{
                  backgroundColor: "#111",
                  border: "1px solid #1a1a1a",
                  borderLeft: `4px solid ${accent}`,
                  padding: "24px 28px",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "1.3em",
                      textTransform: "uppercase",
                      color: "#f4f4f4",
                      marginBottom: "4px",
                    }}
                  >
                    {cat.title}
                  </h2>
                  <p style={{ color: "#555", fontSize: "0.75em", textTransform: "uppercase", letterSpacing: "2px" }}>
                    slug: {cat.slug}
                  </p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2em", color: accent }}>{cat.images.length}</p>
                  <p style={{ color: "#555", fontSize: "0.7em", textTransform: "uppercase", letterSpacing: "1px" }}>
                    items
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {categories.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#333" }}>
            <p
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "1.5em",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              No categories found
            </p>
            <p style={{ fontSize: "0.8em", marginTop: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Check your Google Drive connection
            </p>
          </div>
        )}
      </div>
    </main>
  );
}