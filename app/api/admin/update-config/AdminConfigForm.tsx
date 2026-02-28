// app/admin/AdminConfigForm.tsx
"use client";

import { useState } from "react";
import { SiteConfig } from "@/lib/site-config";

export default function AdminConfigForm({ config }: { config: SiteConfig }) {
  const [form, setForm] = useState<SiteConfig>(config);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#111",
    border: "1px solid #222",
    padding: "12px",
    color: "#fff",
    fontSize: "0.85rem",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "10px",
    color: "#666",
    marginBottom: "5px",
    letterSpacing: "2px",
  };

  async function handleSave() {
    setStatus("saving");
    try {
      const res = await fetch("/api/admin/update-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <div style={{ display: "grid", gap: "15px" }}>
      <div>
        <label style={labelStyle}>CV GOOGLE DRIVE FILE ID</label>
        <input
          type="text"
          value={form.cvId}
          onChange={(e) => setForm({ ...form, cvId: e.target.value })}
          placeholder="1A2B3C..."
          style={inputStyle}
        />
      </div>
      <div>
        <label style={labelStyle}>SHIELD TITLE</label>
        <input
          type="text"
          value={form.shieldTitle}
          onChange={(e) => setForm({ ...form, shieldTitle: e.target.value })}
          style={inputStyle}
        />
      </div>
      <div>
        <label style={labelStyle}>ABOUT NARRATIVE</label>
        <textarea
          value={form.aboutText}
          onChange={(e) => setForm({ ...form, aboutText: e.target.value })}
          style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
        />
      </div>
      <div>
        <label style={labelStyle}>TRUST TEXT</label>
        <input
          type="text"
          value={form.trustText}
          onChange={(e) => setForm({ ...form, trustText: e.target.value })}
          style={inputStyle}
        />
      </div>
      <div>
        <label style={labelStyle}>MARKET TEXT</label>
        <input
          type="text"
          value={form.marketText}
          onChange={(e) => setForm({ ...form, marketText: e.target.value })}
          style={inputStyle}
        />
      </div>

      <button
        onClick={handleSave}
        disabled={status === "saving"}
        style={{
          backgroundColor: status === "saved" ? "#15803d" : status === "error" ? "#dc2626" : "#16a34a",
          color: "#fff",
          border: "none",
          padding: "15px",
          fontWeight: "bold",
          cursor: status === "saving" ? "not-allowed" : "pointer",
          letterSpacing: "2px",
          fontSize: "0.8rem",
          marginTop: "10px",
        }}
      >
        {status === "saving" ? "SAVING..." : status === "saved" ? "✓ SAVED" : status === "error" ? "✗ ERROR" : "SAVE CHANGES"}
      </button>
    </div>
  );
}