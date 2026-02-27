import Link from "next/link";
import ContactSection from "@/components/contact-section";
import React from "react";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#291011" }}>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 40px", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Cinematic Video Editor — Remote Worldwide</span>
          </div>

          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.5em, 7vw, 6em)", fontWeight: 700, textTransform: "uppercase", lineHeight: 0.95, marginBottom: "32px", color: "#f4f4f4" }}>
            Cinematic Video Editor <br />
            <span style={{ color: "#291011", WebkitTextStroke: "2px #16a34a" } as React.CSSProperties}>for Brands, Agencies</span> <br />
            <span style={{ color: "#facc15" }}>&amp; YouTube Channels</span>
          </h1>

          <p style={{ color: "#999", fontSize: "1.05em", lineHeight: 1.9, fontWeight: 300, maxWidth: "600px", marginBottom: "48px" }}>
            I help creators and media companies produce structured, high-retention video content that drives engagement, monetization, and long-term brand authority.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "64px" }}>
            <Link href="/work" className="btn-outline">View Selected Work</Link>
            <Link href="/#contact" className="btn-solid">Request Project Quote</Link>
          </div>

          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", borderTop: "1px solid #3d2325", paddingTop: "32px" }}>
            {[
              { label: "10+ Years", sub: "Editing Experience" },
              { label: "Co-Founder", sub: "Mbogiwood Productions PLC" },
              { label: "Former Tutor", sub: "Filamu Juani" },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontFamily: "'Oswald', sans-serif", color: "#facc15", fontSize: "1.3em", textTransform: "uppercase", letterSpacing: "1px" }}>{item.label}</p>
                <p style={{ color: "#555", fontSize: "0.7em", textTransform: "uppercase", letterSpacing: "2px", marginTop: "4px" }}>{item.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
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

      {/* SERVICES */}
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

      {/* CASE STUDIES / EXPERIENCE */}
      <section style={{ padding: "100px 40px", backgroundColor: "#1a1a1a", borderBottom: "1px solid #3d2325" }}>
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
              <div key={exp.role} style={{ backgroundColor: "#291011", borderLeft: `4px solid ${exp.color}`, padding: "36px", borderRadius: "4px" }}>
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
              <div style={{ backgroundColor: "#291011", borderTop: "3px solid #16a34a", padding: "36px", borderRadius: "4px" }}>
                <p style={{ color: "#555", fontSize: "0.65em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Executive Editorial Direction</p>
                <h4 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.3em", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "4px" }}>Chrispine Abala Ashiruma</h4>
                <p style={{ color: "#16a34a", fontSize: "0.75em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "24px" }}>Cinematic Video Editor & Director</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {["Story structure oversight", "Editorial supervision", "Post-production leadership", "Narrative alignment"].map((item) => (
                    <li key={item} style={{ color: "#999", fontSize: "0.85em", padding: "6px 0", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#16a34a" }}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ backgroundColor: "#291011", borderTop: "3px solid #facc15", padding: "36px", borderRadius: "4px" }}>
                <p style={{ color: "#555", fontSize: "0.65em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Producer / Production Management</p>
                <h4 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.3em", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "4px" }}>Amaica Media</h4>
                <p style={{ color: "#facc15", fontSize: "0.75em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "24px" }}>Production Partner</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {["Production coordination", "Budget supervision", "Logistics and scheduling", "Operational execution", "Stakeholder management", "Delivery oversight"].map((item) => (
                    <li key={item} style={{ color: "#999", fontSize: "0.85em", padding: "6px 0", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#facc15" }}>→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "24px", backgroundColor: "#291011", padding: "28px 32px", borderLeft: "4px solid #e67e22" }}>
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

      {/* VS AGENCY */}
      <section style={{ padding: "100px 40px", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Why Independent</span>
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.8em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "48px" }}>
            Independent Editor <span style={{ color: "#facc15" }}>vs Agency Model</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", marginBottom: "40px" }}>
            <div style={{ backgroundColor: "#16a34a", padding: "16px 24px" }}>
              <p style={{ fontFamily: "'Oswald', sans-serif", color: "#fff", fontSize: "0.9em", textTransform: "uppercase", letterSpacing: "2px" }}>Independent Editor (Me)</p>
            </div>
            <div style={{ backgroundColor: "#3d2325", padding: "16px 24px" }}>
              <p style={{ fontFamily: "'Oswald', sans-serif", color: "#999", fontSize: "0.9em", textTransform: "uppercase", letterSpacing: "2px" }}>Agency Model</p>
            </div>
            {[
              ["Direct communication", "Layered communication"],
              ["Director-level story understanding", "Often junior editors"],
              ["Strategic narrative input", "Execution-focused"],
              ["Faster revisions", "Approval bottlenecks"],
              ["Custom scope pricing", "Overhead-driven pricing"],
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

      {/* PROCESS */}
      <section style={{ padding: "100px 40px", backgroundColor: "#1a1a1a", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
              <span className="section-divider-green" />
              <span className="section-tag">Process</span>
              <span className="section-divider-green" />
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.8em)", textTransform: "uppercase", color: "#f4f4f4" }}>
              How Projects <span style={{ color: "#facc15" }}>Move Forward</span>
            </h2>
            <p style={{ color: "#777", fontSize: "0.85em", marginTop: "12px", textTransform: "uppercase", letterSpacing: "2px" }}>
              Clear scope. Clear timelines. No ambiguity.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2px" }}>
            {[
              { step: "01", title: "Project Brief", color: "#16a34a" },
              { step: "02", title: "Story Structure Alignment", color: "#facc15" },
              { step: "03", title: "First Cut Delivery", color: "#e67e22" },
              { step: "04", title: "Up to 3 Revisions", color: "#16a34a" },
              { step: "05", title: "Final Delivery", color: "#facc15" },
            ].map((item) => (
              <div key={item.step} style={{ backgroundColor: "#291011", padding: "32px 24px", textAlign: "center", borderTop: `3px solid ${item.color}` }}>
                <p style={{ fontFamily: "'Oswald', sans-serif", color: item.color, fontSize: "2em", marginBottom: "12px" }}>{item.step}</p>
                <p style={{ fontFamily: "'Oswald', sans-serif", color: "#f4f4f4", fontSize: "0.9em", textTransform: "uppercase", letterSpacing: "1px" }}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABILITY */}
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
            {["Long-term Retainers", "Contract-based Editing", "Agency Partnerships", "Documentary Post-Production", "YouTube Channel Editing"].map((item) => (
              <span key={item} style={{ border: "1px solid #3d2325", color: "#999", padding: "8px 16px", fontSize: "0.75em", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase", letterSpacing: "1px" }}>
                {item}
              </span>
            ))}
          </div>
          <Link href="/#contact" className="btn-solid">Request a Quote</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
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

      {/* FINAL CTA */}
      <section style={{ padding: "100px 40px", borderBottom: "1px solid #3d2325", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Let's Work</span>
            <span className="section-divider-green" />
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2em, 4vw, 3.5em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "24px" }}>
            Ready to Build <span style={{ color: "#16a34a" }}>Structured,</span> <br /><span style={{ color: "#facc15" }}>High-Impact Video Content?</span>
          </h2>
          <p style={{ color: "#999", fontSize: "1em", lineHeight: 1.9, marginBottom: "40px" }}>
            Request a quote and outline your project scope.
          </p>
          <Link href="/#contact" className="btn-solid" style={{ fontSize: "1em", padding: "18px 48px" }}>Request a Quote</Link>
        </div>
      </section>

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#1a1a1a", borderTop: "2px solid #16a34a", padding: "40px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.2em", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "2px" }}>
            <span style={{ color: "#16a34a" }}>Chrispine</span>
            <span style={{ color: "#facc15" }}> Abala</span>
          </p>
          <p style={{ fontSize: "0.85em", color: "#999" }}>
            © {new Date().getFullYear()} All Rights Reserved. Cinematic Video Editor — Remote Worldwide.
          </p>
        </div>
      </footer>

    </main>
  );
}