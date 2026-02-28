import Link from "next/link";
import ContactSection from "@/components/contact-section";
import React from "react";

export default function Home() {
  const marqueeItemStyle: React.CSSProperties = {
    color: "#3d2325",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "0.7em",
    textTransform: "uppercase",
    letterSpacing: "0.4em",
    fontWeight: 700,
    flexShrink: 0,
    marginRight: "48px",
  };

  return (
    <main style={{ backgroundColor: "#291011", color: "#f4f4f4" }}>

      {/* 1. HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 40px", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
            <span className="section-divider-green" />
            <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "3px", color: "#16a34a", fontWeight: "bold" }}>
              Director of Production & Compliance — Remote Worldwide
            </span>
          </div>

          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5em, 7vw, 6em)", fontWeight: 700, textTransform: "uppercase", lineHeight: 0.95, marginBottom: "32px" }}>
            High-Fidelity <br />
            <span style={{ color: "#291011", WebkitTextStroke: "2px #16a34a" } as React.CSSProperties}>Visual Production</span> <br />
            <span style={{ color: "#facc15" }}>at Global Standards.</span>
          </h1>

          <p style={{ color: "#999", fontSize: "1.05em", lineHeight: 1.9, fontWeight: 300, maxWidth: "600px", marginBottom: "24px" }}>
            Transforming creative hustle into institutional power through professional production standards. Built for corporate contracts, international NGOs, and high-budget commercial productions.
          </p>

          <p style={{ color: "#555", fontSize: "0.8em", fontStyle: "italic", maxWidth: "560px", marginBottom: "48px", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.05em" }}>
            "High-value clients aren't buying nice pictures. They're buying reliability, risk management, and professional standards."
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "64px" }}>
            <Link href="/work" className="btn-outline">View Selected Work</Link>
            <Link href="/#contact" className="btn-solid">Secure a Consultation</Link>
          </div>

          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", borderTop: "1px solid #3d2325", paddingTop: "32px" }}>
            {[
              { label: "10+ Years", sub: "Editorial Experience" },
              { label: "Co-Founder", sub: "Mbogiwood Productions PLC" },
              { label: "Director", sub: "Production & Compliance" },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontFamily: "'Oswald', sans-serif", color: "#facc15", fontSize: "1.3em", textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</p>
                <p style={{ color: "#555", fontSize: "0.7em", textTransform: "uppercase", letterSpacing: "2px", marginTop: "4px" }}>{item.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. TRUST MARQUEE */}
      <div style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #3d2325", padding: "30px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", whiteSpace: "nowrap" }}>
          {[1, 2, 3].map((group) => (
            <div key={group} style={{ display: "flex" }}>
              {["Technical Compliance", "Cinematic Quality", "Industry Standards", "Legal Clearances", "Production Governance", "Global Standards"].map((item) => (
                <span key={`${group}-${item}`} style={marqueeItemStyle}>{item} •</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3. PROBLEM / SOLUTION */}
      <section style={{ padding: "100px 40px", backgroundColor: "#1a1a1a", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <span className="section-divider-green" />
              <span className="section-tag">The Problem</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.5em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "32px" }}>
              Most Videos Fail <span style={{ color: "#e67e22" }}>Before They Finish</span>
            </h2>
            <div style={{ display: "grid", gap: "12px" }}>
              {["Weak hooks", "Poor pacing", "No narrative structure", "Platform mismatch", "Low retention"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", backgroundColor: "#291011", borderLeft: "3px solid #e67e22" }}>
                  <span style={{ color: "#e67e22" }}>✕</span>
                  <p style={{ color: "#999", fontSize: "0.9em", fontFamily: "'Montserrat', sans-serif" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <span className="section-divider-green" />
              <span className="section-tag">The Solution</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.5em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "16px" }}>
              Editorial <span style={{ color: "#16a34a" }}>Strategy</span>
            </h2>
            <p style={{ color: "#777", fontSize: "0.9em", lineHeight: 1.8, marginBottom: "24px" }}>
              This is not basic cutting. This is editorial strategy.
            </p>
            <div style={{ display: "grid", gap: "12px" }}>
              {["Retention", "Emotional pacing", "Clear story arcs", "Platform optimization", "Commercial alignment"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", backgroundColor: "#291011", borderLeft: "3px solid #16a34a" }}>
                  <span style={{ color: "#16a34a" }}>→</span>
                  <p style={{ color: "#ccc", fontSize: "0.9em", fontFamily: "'Montserrat', sans-serif" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section id="services" style={{ padding: "100px 40px", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
              <span className="section-divider-green" />
              <span className="section-tag">Services</span>
              <span className="section-divider-green" />
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.8em)", textTransform: "uppercase", color: "#f4f4f4" }}>
              What I <span style={{ color: "#facc15" }}>Deliver</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              {
                title: "YouTube & Long-Form Editing",
                color: "#16a34a",
                icon: "📈",
                desc: "Structured for monetization, retention, and channel growth.",
                items: ["Structured story flow", "Hook refinement", "Retention pacing", "Monetization-ready timelines", "Long-form to short-form conversion"],
              },
              {
                title: "Cinematic & Documentary",
                color: "#facc15",
                icon: "🎬",
                desc: "Festival-level editing with intentional narrative structure.",
                items: ["Interview-driven structure", "Narrative arcs", "Festival-level pacing", "Clean finishing workflows"],
              },
              {
                title: "Commercial & Brand Content",
                color: "#e67e22",
                icon: "🎯",
                desc: "Strategic brand storytelling for campaigns and corporate content.",
                items: ["Corporate storytelling", "Product campaigns", "Event recap films", "Structured brand messaging"],
              },
              {
                title: "Social Media Cutdowns",
                color: "#16a34a",
                icon: "📱",
                desc: "Platform-native content built for algorithm performance at scale.",
                items: ["Reels", "TikTok", "Facebook monetized content", "Batch systems for scale"],
              },
            ].map((service) => (
              <div key={service.title} className="service-card" style={{ backgroundColor: "#1a1a1a", padding: "36px 28px", borderRadius: "4px", borderTop: `3px solid ${service.color}` }}>
                <div style={{ fontSize: "2em", marginBottom: "16px" }}>{service.icon}</div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.3em", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "12px" }}>{service.title}</h3>
                <p style={{ color: "#777", fontSize: "0.85em", lineHeight: 1.7, marginBottom: "16px" }}>{service.desc}</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {service.items.map((item) => (
                    <li key={item} style={{ color: "#999", fontSize: "0.8em", padding: "6px 0", borderBottom: "1px solid #291011", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: service.color }}>●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPLIANCE — RISK SHIELD */}
      <section style={{ padding: "100px 40px", backgroundColor: "#1a1a1a", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Why Compliance Matters</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.5em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "20px" }}>
                Compliance is Your <br /><span style={{ color: "#facc15" }}>Risk Shield</span>
              </h2>
              <p style={{ color: "#777", lineHeight: 1.9, fontSize: "0.95em", marginBottom: "24px" }}>
                Large organizations fear amateur mistakes. By acting as Director of Compliance, I ensure all legal clearances, technical specs, and data protocols are handled — protecting your brand's reputation at every stage.
              </p>
              <p style={{ color: "#777", lineHeight: 1.9, fontSize: "0.95em" }}>
                Most editors list "video editing." Listing "Production Compliance" immediately justifies a higher price point and broader scope of authority.
              </p>
            </div>
            <div style={{ display: "grid", gap: "16px" }}>
              {[
                { title: "Institutional Trust", desc: "Corporations and NGOs buy reliability, not just creativity.", color: "#16a34a" },
                { title: "Repeatable Systems", desc: "Compliance standards prove results aren't a fluke.", color: "#facc15" },
                { title: "Global Market Ready", desc: "Every delivery meets international technical and legal standards.", color: "#e67e22" },
              ].map((item) => (
                <div key={item.title} style={{ padding: "24px", borderLeft: `3px solid ${item.color}`, backgroundColor: "#291011" }}>
                  <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1em", textTransform: "uppercase", letterSpacing: "1px", color: "#f4f4f4", marginBottom: "8px" }}>{item.title}</p>
                  <p style={{ color: "#666", fontSize: "0.82em", lineHeight: 1.7, fontFamily: "'Montserrat', sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPERIENCE */}
      <section style={{ padding: "100px 40px", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Experience</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.8em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "48px" }}>
            Professional <span style={{ color: "#facc15" }}>Background</span>
          </h2>

          <div style={{ display: "grid", gap: "24px" }}>
            {[
              {
                role: "Co-Founder & Director",
                company: "Mbogiwood Productions PLC",
                period: "August 2024 – Present",
                color: "#16a34a",
                scope: ["Post-production leadership", "Editorial direction for films and commercial content", "Governance and compliance oversight", "Strategic storytelling alignment"],
                impact: ["Built structured post-production systems within a PLC model", "Integrated storytelling standards across documentary and commercial work", "Established director-led creative oversight"],
              },
              {
                role: "Producer / Production Manager",
                company: "Amaica Media",
                period: "Active Production Manager",
                color: "#facc15",
                scope: ["Production coordination", "Budget supervision", "Logistics and scheduling", "Operational execution", "Stakeholder management", "Delivery oversight"],
                impact: ["Established structured production workflows", "Integrated operational discipline with editorial leadership", "Enabled scalable execution across commercial and documentary projects"],
              },
              {
                role: "Video Editing Tutor",
                company: "Filamu Juani",
                period: "2023",
                color: "#e67e22",
                scope: ["Delivered practical editing instruction", "Structured workflow systems", "Mentored upcoming editors"],
                impact: ["Transitioned from practitioner to instructor", "Demonstrated authority beyond software execution", "Reinforced structured cinematic editing standards"],
              },
              {
                role: "Freelance Video Editor",
                company: "Independent",
                period: "Since 2012",
                color: "#16a34a",
                scope: ["Cinematic editing", "Commercial content", "Social media monetization projects"],
                impact: ["10+ years hands-on editorial experience", "Adapted across evolving digital platforms", "Built retention-driven editing methodology"],
              },
            ].map((exp) => (
              <div key={exp.role} style={{ backgroundColor: "#1a1a1a", borderLeft: `4px solid ${exp.color}`, padding: "36px", borderRadius: "4px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px", alignItems: "start" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.3em", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "4px" }}>{exp.role}</h3>
                    <p style={{ color: exp.color, fontSize: "0.8em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "4px" }}>{exp.company}</p>
                    <p style={{ color: "#555", fontSize: "0.7em", textTransform: "uppercase", letterSpacing: "1px" }}>{exp.period}</p>
                  </div>
                  <div>
                    <p style={{ color: "#555", fontSize: "0.65em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Scope</p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {exp.scope.map((s) => (
                        <li key={s} style={{ color: "#999", fontSize: "0.8em", padding: "4px 0", display: "flex", gap: "8px" }}>
                          <span style={{ color: exp.color }}>→</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ color: "#555", fontSize: "0.65em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Impact</p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {exp.impact.map((i) => (
                        <li key={i} style={{ color: "#999", fontSize: "0.8em", padding: "4px 0", display: "flex", gap: "8px" }}>
                          <span style={{ color: exp.color }}>✓</span> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PRODUCTION STRUCTURE */}
          <div style={{ marginTop: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <span className="section-divider-green" />
              <span className="section-tag">Production Structure</span>
            </div>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.5em, 2.5vw, 2em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "16px" }}>
              Integrated Production <span style={{ color: "#facc15" }}>&amp; Post-Production Model</span>
            </h3>
            <p style={{ color: "#777", fontSize: "0.9em", lineHeight: 1.8, maxWidth: "700px", marginBottom: "40px" }}>
              Editorial direction is led at the director level. Production logistics and financial management are executed through Amaica Media. This allows clear accountability, defined production hierarchy, reduced execution risk, and structured delivery timelines.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              <div style={{ backgroundColor: "#1a1a1a", borderTop: "3px solid #16a34a", padding: "36px", borderRadius: "4px" }}>
                <p style={{ color: "#555", fontSize: "0.65em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Executive Editorial Direction</p>
                <h4 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.3em", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "4px" }}>Chrispine Abala Ashiruma</h4>
                <p style={{ color: "#16a34a", fontSize: "0.75em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "24px" }}>Director of Production & Compliance</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {["Story structure oversight", "Editorial supervision", "Compliance and governance", "Post-production leadership", "Narrative alignment"].map((item) => (
                    <li key={item} style={{ color: "#999", fontSize: "0.85em", padding: "6px 0", borderBottom: "1px solid #291011", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#16a34a" }}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ backgroundColor: "#1a1a1a", borderTop: "3px solid #facc15", padding: "36px", borderRadius: "4px" }}>
                <p style={{ color: "#555", fontSize: "0.65em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Producer / Production Management</p>
                <h4 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.3em", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "4px" }}>Amaica Media</h4>
                <p style={{ color: "#facc15", fontSize: "0.75em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "24px" }}>Production Partner</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {["Production coordination", "Budget supervision", "Logistics and scheduling", "Operational execution", "Stakeholder management", "Delivery oversight"].map((item) => (
                    <li key={item} style={{ color: "#999", fontSize: "0.85em", padding: "6px 0", borderBottom: "1px solid #291011", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#facc15" }}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "24px", backgroundColor: "#1a1a1a", padding: "28px 32px", borderLeft: "4px solid #e67e22" }}>
              <p style={{ fontFamily: "'Oswald', sans-serif", color: "#e67e22", fontSize: "0.85em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "16px" }}>Structured Production Model</p>
              <p style={{ color: "#999", fontSize: "0.85em", lineHeight: 1.8, marginBottom: "16px" }}>
                Projects executed under a dual-structure model — creative direction and editorial oversight led by Chrispine Abala, production management and coordination handled by Amaica Media.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {["Creative precision", "Operational discipline", "Budget control", "Timely delivery"].map((item) => (
                  <span key={item} style={{ border: "1px solid #e67e22", color: "#e67e22", padding: "6px 14px", fontSize: "0.7em", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase", letterSpacing: "1px" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. PRODUCTION LIFECYCLE */}
      <section style={{ padding: "100px 40px", backgroundColor: "#1a1a1a", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "60px" }}>
            <p style={{ color: "#16a34a", textTransform: "uppercase", letterSpacing: "4px", fontSize: "10px", fontWeight: "bold", marginBottom: "10px" }}>Our Workflow</p>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.8em)", textTransform: "uppercase", color: "#f4f4f4" }}>
              How Projects <span style={{ color: "#facc15" }}>Move Forward</span>
            </h2>
            <p style={{ color: "#777", fontSize: "0.85em", marginTop: "12px", textTransform: "uppercase", letterSpacing: "2px" }}>
              Clear scope. Clear timelines. No ambiguity.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2px", backgroundColor: "#3d2325" }}>
            {[
              { step: "01", title: "Discovery & Strategy", desc: "Brand objectives defined. Roadmap aligned with commercial goals.", color: "#16a34a" },
              { step: "02", title: "Story Structure", desc: "Narrative architecture built before a single frame is captured or cut.", color: "#facc15" },
              { step: "03", title: "Compliant Execution", desc: "Technical specs, legal clearances, and on-set standards managed.", color: "#e67e22" },
              { step: "04", title: "Editorial Review", desc: "Up to 3 revision cycles with structured feedback integration.", color: "#16a34a" },
              { step: "05", title: "Precision Delivery", desc: "Final output meets global market standards. Clean handover.", color: "#facc15" },
            ].map((item) => (
              <div key={item.step} style={{ backgroundColor: "#291011", padding: "40px 24px" }}>
                <p style={{ fontFamily: "'Oswald', sans-serif", color: item.color, fontSize: "1.5em", marginBottom: "10px" }}>{item.step}</p>
                <h4 style={{ fontFamily: "'Oswald', sans-serif", color: "#f4f4f4", fontSize: "0.9em", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>{item.title}</h4>
                <p style={{ color: "#666", fontSize: "0.8em", lineHeight: 1.6, fontFamily: "'Montserrat', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VS AGENCY */}
      <section style={{ padding: "100px 40px", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Why Independent</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.8em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "48px" }}>
            Independent Director <span style={{ color: "#facc15" }}>vs Agency Model</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", marginBottom: "40px" }}>
            <div style={{ backgroundColor: "#16a34a", padding: "16px 24px" }}>
              <p style={{ fontFamily: "'Oswald', sans-serif", color: "#fff", fontSize: "0.9em", textTransform: "uppercase", letterSpacing: "2px" }}>Director-Led Production (Me)</p>
            </div>
            <div style={{ backgroundColor: "#3d2325", padding: "16px 24px" }}>
              <p style={{ fontFamily: "'Oswald', sans-serif", color: "#999", fontSize: "0.9em", textTransform: "uppercase", letterSpacing: "2px" }}>Agency Model</p>
            </div>
            {[
              ["Direct access to the decision-maker", "Layered account management"],
              ["Director-level compliance oversight", "Often junior editors"],
              ["Strategic narrative input", "Execution-focused only"],
              ["Faster revisions, no bottlenecks", "Approval chains slow delivery"],
              ["Custom scope, transparent pricing", "Overhead-driven pricing"],
              ["Scalable via production network", "Fixed team overhead"],
            ].map(([mine, theirs], i) => (
              <React.Fragment key={i}>
                <div style={{ backgroundColor: "#1a1a1a", padding: "16px 24px", borderLeft: "3px solid #16a34a" }}>
                  <p style={{ color: "#ccc", fontSize: "0.85em", fontFamily: "'Montserrat', sans-serif" }}>✓ {mine}</p>
                </div>
                <div style={{ backgroundColor: "#1a1a1a", padding: "16px 24px" }}>
                  <p style={{ color: "#555", fontSize: "0.85em", fontFamily: "'Montserrat', sans-serif" }}>✕ {theirs}</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div style={{ backgroundColor: "#1a1a1a", padding: "32px", borderLeft: "4px solid #facc15" }}>
            <p style={{ fontFamily: "'Oswald', sans-serif", color: "#facc15", fontSize: "1.1em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>
              Agencies scale teams. I scale precision.
            </p>
            <p style={{ color: "#999", fontSize: "0.9em", lineHeight: 1.8 }}>
              You work directly with the decision-maker, not an account manager.
            </p>
          </div>
        </div>
      </section>

      {/* 9. NETWORK */}
      <section style={{ padding: "100px 40px", backgroundColor: "#1a1a1a", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">The Network</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.8em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "16px" }}>
            Solo Director. <span style={{ color: "#facc15" }}>Full Production</span> <span style={{ color: "#16a34a" }}>Capability.</span>
          </h2>
          <p style={{ color: "#777", fontSize: "0.95em", lineHeight: 1.9, maxWidth: "700px", marginBottom: "56px" }}>
            Independent doesn't mean isolated. A structured production network means scalability — from a single-camera headshot to a 20-person commercial set. The right professionals, assembled for each scope.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px", backgroundColor: "#3d2325" }}>
            {[
              { role: "Director & Editor", name: "Chrispine Abala", note: "Creative authority. Editorial oversight.", color: "#16a34a" },
              { role: "Production Management", name: "Amaica Media", note: "Logistics, budget, delivery.", color: "#facc15" },
              { role: "On-Set Crew", name: "Network — Per Project", note: "Scaled to production scope.", color: "#e67e22" },
              { role: "Post-Production", name: "Structured Workflow", note: "Premiere Pro · After Effects · DaVinci.", color: "#16a34a" },
            ].map((item) => (
              <div key={item.role} style={{ backgroundColor: "#291011", padding: "32px 24px", borderTop: `3px solid ${item.color}` }}>
                <p style={{ color: "#555", fontSize: "0.65em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>{item.role}</p>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.1em", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "8px" }}>{item.name}</h3>
                <p style={{ color: "#666", fontSize: "0.78em", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.6 }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. AVAILABILITY */}
      <section id="availability" style={{ padding: "100px 40px", borderBottom: "1px solid #3d2325", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Availability</span>
            <span className="section-divider-green" />
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2em, 4vw, 3.5em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "24px" }}>
            Open for <span style={{ color: "#16a34a" }}>Remote Projects</span> <span style={{ color: "#facc15" }}>Worldwide</span>
          </h2>
          <p style={{ color: "#999", fontSize: "1em", lineHeight: 1.9, marginBottom: "40px" }}>
            Time zone flexible. Remote-ready workflow. Project-based pricing with custom quotes based on scope.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "48px" }}>
            {["Corporate Contracts", "International NGOs", "Long-term Retainers", "Agency Partnerships", "Documentary Post-Production", "YouTube Channel Editing"].map((item) => (
              <span key={item} style={{ border: "1px solid #3d2325", color: "#999", padding: "8px 16px", fontSize: "0.75em", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase", letterSpacing: "1px" }}>
                {item}
              </span>
            ))}
          </div>
          <Link href="/#contact" className="btn-solid">Secure a Consultation</Link>
        </div>
      </section>

      {/* 11. TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "100px 40px", backgroundColor: "#1a1a1a", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
              <span className="section-divider-green" />
              <span className="section-tag">Testimonials</span>
              <span className="section-divider-green" />
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.8em)", textTransform: "uppercase", color: "#f4f4f4" }}>
              What Clients <span style={{ color: "#facc15" }}>Say</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {[
              { name: "Amara Odhiambo", role: "Brand Manager, Nairobi", quote: "The editing brought our brand to life in ways we never imagined. Cinematic, clean, and on-brief every time.", color: "#16a34a" },
              { name: "David Wekesa", role: "Documentary Director", quote: "Understood the vision immediately. Delivered beyond expectations. The pacing was exactly what the story needed.", color: "#facc15" },
              { name: "Fatuma Abubakar", role: "NGO Communications Lead", quote: "The documentary moved audiences across three continents. That is the power of purposeful editing.", color: "#e67e22" },
            ].map((t) => (
              <div key={t.name} style={{ backgroundColor: "#291011", padding: "36px", borderRadius: "4px", borderLeft: `3px solid ${t.color}` }}>
                <p style={{ color: "#ccc", fontSize: "0.95em", lineHeight: 1.9, fontStyle: "italic", marginBottom: "24px" }}>"{t.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "#1a1a1a", fontSize: "1em", flexShrink: 0 }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Oswald', sans-serif", color: "#f4f4f4", fontSize: "1em", textTransform: "uppercase", letterSpacing: "1px" }}>{t.name}</p>
                    <p style={{ color: "#666", fontSize: "0.75em", textTransform: "uppercase", letterSpacing: "1px" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section style={{ padding: "100px 40px", borderBottom: "1px solid #3d2325", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Project Inquiry</span>
            <span className="section-divider-green" />
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2em, 4vw, 3.5em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "24px" }}>
            Ready for <span style={{ color: "#16a34a" }}>Structured,</span> <br /><span style={{ color: "#facc15" }}>High-Fidelity Production?</span>
          </h2>
          <p style={{ color: "#999", fontSize: "1em", lineHeight: 1.9, marginBottom: "40px" }}>
            Commercial and documentary bookings open. Request a quote and outline your project scope.
          </p>
          <Link href="/#contact" className="btn-solid" style={{ fontSize: "1em", padding: "18px 48px" }}>Submit Project Inquiry</Link>
        </div>
      </section>

      {/* 13. CONTACT */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* 14. FOOTER */}
      <footer style={{ backgroundColor: "#1a1a1a", borderTop: "2px solid #16a34a", padding: "40px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.2em", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "2px" }}>
            <span style={{ color: "#16a34a" }}>Chrispine</span>
            <span style={{ color: "#facc15" }}> Abala</span>
          </p>
          <p style={{ fontSize: "0.85em", color: "#999" }}>
            © {new Date().getFullYear()} All Rights Reserved. Director of Production & Compliance — Remote Worldwide.
          </p>
        </div>
      </footer>

    </main>
  );
}