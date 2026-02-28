// components/contact-section.tsx
"use client";
import { sendEmail } from "@/app/actions/sendEmail";
import React, { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);
    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid #3d2325",
    padding: "20px 0",
    color: "#f4f4f4",
    fontSize: "0.9em",
    outline: "none",
    fontFamily: "'Montserrat', sans-serif",
    textTransform: "uppercase",
    letterSpacing: "2px"
  };

  return (
    <section style={{ padding: "120px 40px", backgroundColor: "#080808" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "4rem", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "16px" }}>
            Initiate <span style={{ color: "#16a34a" }}>Production</span>
          </h2>
          <p style={{ color: "#555", textTransform: "uppercase", letterSpacing: "4px", fontSize: "10px" }}>
            Commercial & Institutional Inquiries 2026
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <input name="organization" type="text" placeholder="Organization / Company" required style={inputStyle} />
            <input name="email" type="email" placeholder="Professional Email" required style={inputStyle} />
          </div>

          <input name="subject" type="text" placeholder="Project Scope (e.g., Documentary, Corporate)" required style={inputStyle} />

          <textarea name="message" placeholder="Project Brief & Objectives" required style={{ ...inputStyle, minHeight: "150px", resize: "none" }} />

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              padding: "30px",
              backgroundColor: status === "sending" ? "#333" : "#16a34a",
              color: "#fff",
              border: "none",
              fontFamily: "'Oswald', sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "5px",
              cursor: status === "sending" ? "not-allowed" : "pointer",
              fontWeight: "bold",
              transition: "background-color 0.3s"
            }}
          >
            {status === "idle" && "Submit Proposal Inquiry →"}
            {status === "sending" && "Processing Transmission..."}
            {status === "success" && "✓ Inquiry Received. We will contact you."}
            {status === "error" && "✗ Error. Please try again."}
          </button>
        </form>
      </div>
    </section>
  );
}