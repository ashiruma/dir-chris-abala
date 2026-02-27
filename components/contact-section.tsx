"use client";

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "80px 40px", backgroundColor: "#1a1a1a", borderTop: "1px solid #3d2325" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
          <span style={{ height: "1px", width: "48px", backgroundColor: "#16a34a", display: "block" }} />
          <span style={{ color: "#facc15", textTransform: "uppercase", letterSpacing: "0.4em", fontSize: "0.75em", fontWeight: 700 }}>Get In Touch</span>
          <span style={{ height: "1px", width: "48px", backgroundColor: "#16a34a", display: "block" }} />
        </div>

        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5em, 6vw, 5em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "16px" }}>
          Let's <span style={{ color: "#16a34a" }}>Build</span> <span style={{ color: "#facc15" }}>Together</span>
        </h2>

        <p style={{ color: "#999", textTransform: "uppercase", letterSpacing: "0.3em", fontSize: "0.75em", marginBottom: "60px" }}>
          Culture First, Then Commerce.
        </p>

        <form style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <input type="text" placeholder="IDENTITY" className="premium-input" />
          <input type="email" placeholder="E-MAIL" className="premium-input" />
          <textarea rows={4} placeholder="PROJECT BRIEF" className="premium-input" style={{ resize: "none" }} />
          <button type="submit" className="contact-submit">
            Initiate Conversation →
          </button>
        </form>

      </div>
    </section>
  );
}