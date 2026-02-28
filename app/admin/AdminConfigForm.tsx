// app/admin/AdminConfigForm.tsx
"use client";

import { useState } from "react";
import { SiteConfig } from "@/lib/config-store";

export default function AdminConfigForm({ config }: { config: SiteConfig }) {
  const [form, setForm] = useState<SiteConfig>(config);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "12px",
    color: "#fff",
    borderRadius: "8px",
    marginTop: "6px",
    fontSize: "0.85rem",
    fontFamily: "inherit",
    boxSizing: "border-box",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.65rem",
    color: "#555",
    textTransform: "uppercase",
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
    <div style={{ display: "grid", gap: "16px" }}>
      <div>
        <label style={labelStyle}>ABOUT NARRATIVE</label>
        <textarea
          value={form.aboutNarrative}
          onChange={(e) => setForm({ ...form, aboutNarrative: e.target.value })}
          style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
        />
      </div>
      <div>
        <label style={labelStyle}>CV DRIVE FILE ID</label>
        <input
          type="text"
          value={form.cvDriveId}
          onChange={(e) => setForm({ ...form, cvDriveId: e.target.value })}
          placeholder="1A2B3C..."
          style={inputStyle}
        />
      </div>
      <div>
        <label style={labelStyle}>SHIELD TITLE</label>
        <input
          type="text"
          value={form.complianceShield.title}
          onChange={(e) => setForm({ ...form, complianceShield: { ...form.complianceShield, title: e.target.value } })}
          style={inputStyle}
        />
      </div>
      <div>
        <label style={labelStyle}>TRUST TEXT</label>
        <textarea
          value={form.complianceShield.trustText}
          onChange={(e) => setForm({ ...form, complianceShield: { ...form.complianceShield, trustText: e.target.value } })}
          style={{ ...inputStyle, minHeight: "60px", resize: "vertical" }}
        />
      </div>
      <div>
        <label style={labelStyle}>SYSTEMS TEXT</label>
        <textarea
          value={form.complianceShield.systemsText}
          onChange={(e) => setForm({ ...form, complianceShield: { ...form.complianceShield, systemsText: e.target.value } })}
          style={{ ...inputStyle, minHeight: "60px", resize: "vertical" }}
        />
      </div>
      <div>
        <label style={labelStyle}>MARKET TEXT</label>
        <textarea
          value={form.complianceShield.marketText}
          onChange={(e) => setForm({ ...form, complianceShield: { ...form.complianceShield, marketText: e.target.value } })}
          style={{ ...inputStyle, minHeight: "60px", resize: "vertical" }}
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
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: status === "saving" ? "not-allowed" : "pointer",
          letterSpacing: "2px",
          fontSize: "0.8rem",
          marginTop: "8px",
        }}
      >
        {status === "saving" ? "SAVING..." : status === "saved" ? "✓ SAVED" : status === "error" ? "✗ ERROR — CHECK CONFIG FILE ID" : "PUSH CHANGES LIVE"}
      </button>
    </div>
  );
}