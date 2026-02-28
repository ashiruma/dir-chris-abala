import { getCategories } from "@/lib/google-drive";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  // Serverside Guard
  if (!session) {
    redirect("/login");
  }

  let categories = [];
  let error = null;

  try {
    categories = await getCategories();
  } catch (e: any) {
    error = e.message;
  }

  return (
    <main style={{ 
      minHeight: "100vh", 
      backgroundColor: "#080808", 
      color: "#fff", 
      padding: "60px 40px",
      fontFamily: "'Montserrat', sans-serif" 
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <header style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          borderBottom: "1px solid #16a34a",
          paddingBottom: "30px",
          marginBottom: "50px"
        }}>
          <div>
            <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "2.5rem", margin: 0 }}>
              DIRECTOR <span style={{ color: "#16a34a" }}>CONTROL</span>
            </h1>
            <p style={{ fontSize: "0.7rem", color: "#666", letterSpacing: "3px", marginTop: "5px" }}>
              SYSTEM STATUS: OPERATIONAL
            </p>
          </div>

          <form action={async () => { "use server"; await signOut(); }}>
            <button style={{ 
              background: "transparent", 
              border: "1px solid #333", 
              color: "#fff", 
              padding: "10px 25px", 
              cursor: "pointer",
              fontSize: "0.7rem",
              letterSpacing: "2px"
            }}>
              TERMINATE SESSION
            </button>
          </form>
        </header>

        {error ? (
          <div style={{ padding: "40px", border: "1px solid #ff4444", backgroundColor: "#1a0505", color: "#ff4444" }}>
            <strong>CRITICAL ERROR:</strong> {error}
            <p style={{ fontSize: "0.8rem", marginTop: "10px" }}>Check your GOOGLE_PRIVATE_KEY and Client Email in .env.local</p>
          </div>
        ) : (
          <div style={{ display: "grid", gap: "20px" }}>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.2rem" }}>ACTIVE FOLDERS</h3>
            {categories.length === 0 ? (
              <p style={{ color: "#444" }}>No folders found in Root Directory.</p>
            ) : (
              categories.map((cat: any) => (
                <div key={cat.id} style={{ 
                  padding: "25px", 
                  backgroundColor: "#111", 
                  border: "1px solid #222", 
                  display: "flex", 
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <span style={{ fontWeight: "bold", letterSpacing: "1px" }}>{cat.name}</span>
                  <code style={{ color: "#16a34a", fontSize: "0.8rem", backgroundColor: "#000", padding: "5px 10px" }}>
                    {cat.id}
                  </code>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
}