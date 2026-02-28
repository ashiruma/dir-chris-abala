"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/admin");
    } else {
      setError("Invalid password.");
      setLoading(false);
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#080808",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Montserrat', sans-serif",
    }}>
      <div style={{ width: "100%", maxWidth: "400px", padding: "0 20px" }}>
        <h1 style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "2rem",
          color: "#fff",
          textAlign: "center",
          marginBottom: "8px",
        }}>
          DIRECTOR <span style={{ color: "#16a34a" }}>PANEL</span>
        </h1>
        <p style={{
          fontSize: "0.65rem",
          color: "#555",
          letterSpacing: "3px",
          textAlign: "center",
          marginBottom: "40px",
        }}>
          RESTRICTED ACCESS
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <input
            type="password"
            placeholder="ENTER PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              backgroundColor: "#111",
              border: "1px solid #222",
              color: "#fff",
              padding: "14px 16px",
              fontSize: "0.8rem",
              letterSpacing: "2px",
              outline: "none",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          {error && (
            <p style={{ color: "#ff4444", fontSize: "0.75rem", letterSpacing: "1px", margin: 0 }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: "#16a34a",
              color: "#fff",
              border: "none",
              padding: "14px",
              fontSize: "0.75rem",
              letterSpacing: "3px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "AUTHENTICATING..." : "AUTHENTICATE"}
          </button>
        </form>
      </div>
    </main>
  );
}
