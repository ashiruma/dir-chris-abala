"use client";
import { sendEmail } from "@/app/actions/sendEmail";
import React, { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleFormAction(formData: FormData) {
    setStatus("sending");
    const result = await sendEmail(formData);
    if (result.success) {
      setStatus("success");
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

  if (status === "success") {
    return (
      <section style={{ padding: "120px 40px", backgroundColor: "#080808", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "3.5rem", color: "#16a34a", marginBottom: "24px" }}>
            TRANSMISSION <br /> SUCCESSFUL
          </h2>
          <p style={{ color: "#999", fontSize: "1.1em", lineHeight: 1.8, marginBottom: "60px" }}>
            Your inquiry has been logged into the Mbogiwood production pipeline. Here is what happens next:
          </p>

          {/* ROADMAP PREVIEW */}
          <div style={{ display: "grid", gap: "20px", textAlign: "left" }}>
            {[
              { phase: "Phase 01", title: "Review & Compliance Check", desc: "I personally review your brief against technical and legal requirements." },
              { phase: "Phase 02", title: "Strategy Consultation", desc: "We schedule a call to align narrative structure with your commercial goals." },
              { phase: "Phase 03", title: "Production Roadmap", desc: "A formal proposal with clear timelines and deliverables is generated." }
            ].map((step) => (
              <div key={step.phase} style={{ padding: "30px", borderLeft: "3px solid #16a34a", backgroundColor: "#1a1a1a" }}>
                <span style={{ color: "#16a34a", fontSize: "0.7em", fontWeight: "bold", letterSpacing: "3px" }}>{step.phase}</span>
                <h4 style={{ fontFamily: "'Oswald', sans-serif", color: "#f4f4f4", margin: "10px 0" }}>{step.title}</h4>
                <p style={{ color: "#666", fontSize: "0.85em" }}>{step.desc}</p>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => setStatus("idle")} 
            style={{ marginTop: "60px", background: "none", border: "none", color: "#555", cursor: "pointer", textDecoration: "underline", fontSize: "0.8em" }}
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" style={{ padding: "120px 40px", backgroundColor: "#080808" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "4rem", textTransform: "uppercase", color: "#f4f4f4" }}>
            Inquire <span style={{ color: "#16a34a" }}>Now</span>
          </h2>
        </div>

        <form action={handleFormAction} style={{ display: "grid", gap: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <input name="organization" type="text" placeholder="Organization" required style={inputStyle} />
            <input name="email" type="email" placeholder="Professional Email" required style={inputStyle} />
          </div>
          <input name="subject" type="text" placeholder="Project Type" required style={inputStyle} />
          <textarea name="message" placeholder="Project Brief" required style={{ ...inputStyle, minHeight: "120px", resize: "none" }} />

          <button 
            type="submit" 
            disabled={status === "sending"}
            style={{
              padding: "30px",
              backgroundColor: status === "sending" ? "#333" : "#16a34a",
              color: "#fff",
              border: "none",
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {status === "sending" ? "INITIATING..." : "SUBMIT PROPOSAL INQUIRY →"}
          </button>
          {status === "error" && <p style={{ color: "#e67e22", textAlign: "center" }}>Transmission failed. Please check credentials.</p>}
        </form>
      </div>
    </section>
  );
}