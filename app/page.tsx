import Link from "next/link";
import ContactSection from "@/components/contact-section";

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
            Editing That <br />
            <span style={{ color: "#291011", WebkitTextStroke: "2px #16a34a" } as React.CSSProperties}>Holds Attention.</span> <br />
            <span style={{ color: "#facc15" }}>Drives Results.</span>
          </h1>

          <p style={{ color: "#999", fontSize: "1em", lineHeight: 1.9, fontWeight: 300, maxWidth: "560px", marginBottom: "48px" }}>
            Professional video editor specializing in cinematic storytelling, high-retention YouTube content, branded films, and commercial post-production.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/work" className="btn-outline">View Portfolio</Link>
            <Link href="/#contact" className="btn-solid">Work With Me</Link>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 40px", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <span className="section-divider-green" />
              <span className="section-tag">About</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.8em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "24px" }}>
              Professional Cinematic <br /><span style={{ color: "#facc15" }}>Video Editor</span>
            </h2>
            <p style={{ color: "#ccc", fontSize: "0.95em", lineHeight: 1.9, fontWeight: 300, marginBottom: "16px" }}>
              Over a decade of editing experience across narrative films, documentaries, commercial campaigns, and performance-driven digital content. Editing since 2012. Full professional production since 2023.
            </p>
            <p style={{ color: "#ccc", fontSize: "0.95em", lineHeight: 1.9, fontWeight: 300, marginBottom: "16px" }}>
              Former video editing tutor at Filamu Juani. Co-founder and director at <span style={{ color: "#16a34a", fontWeight: 700 }}>Mbogiwood Productions PLC</span>.
            </p>
            <p style={{ color: "#ccc", fontSize: "0.95em", lineHeight: 1.9, fontWeight: 300, marginBottom: "32px" }}>
              I work remotely with creators, agencies, and brands across multiple markets. My editing focuses on retention pacing, structured storytelling, emotional sequencing, clean color workflows, and platform-specific optimization.
            </p>

            <div style={{ marginBottom: "32px" }}>
              <p style={{ color: "#555", fontSize: "0.7em", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Tools</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"].map((tool) => (
                  <span key={tool} style={{ border: "1px solid #16a34a", color: "#16a34a", padding: "6px 14px", fontSize: "0.75em", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase", letterSpacing: "1px", borderRadius: "2px" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/work" className="btn-outline">See the Work</Link>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", aspectRatio: "3/4", backgroundColor: "#3d2325", borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ width: "100%", height: "100%", backgroundImage: "url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(30%)" }} />
            </div>
            <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "120px", height: "120px", backgroundColor: "#16a34a", borderRadius: "4px", zIndex: -1 }} />
            <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "80px", height: "80px", border: "2px solid #facc15", borderRadius: "4px", zIndex: -1 }} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 40px", backgroundColor: "#1a1a1a", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
              <span className="section-divider-green" />
              <span className="section-tag">Services</span>
              <span className="section-divider-green" />
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.8em)", textTransform: "uppercase", color: "#f4f4f4" }}>
              Video Editing Services for <span style={{ color: "#facc15" }}>Brands, Agencies & Creators</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              {
                title: "YouTube Growth Editing",
                color: "#16a34a",
                icon: "📈",
                desc: "High-retention edits built for monetized channels, coaches, commentary creators, and documentary channels.",
                items: ["Retention optimization", "Hook structuring", "Story pacing", "Long-form to short-form repurposing"],
              },
              {
                title: "Commercial & Brand Film",
                color: "#facc15",
                icon: "🎯",
                desc: "Optimized for paid advertising, brand positioning, investor decks, and web landing pages.",
                items: ["Product storytelling", "Digital ads", "Launch films", "Event recap films"],
              },
              {
                title: "Documentary & Narrative",
                color: "#e67e22",
                icon: "🎬",
                desc: "Festival-level finishing with structured story arcs and emotional pacing.",
                items: ["Interview-driven storytelling", "Emotional pacing", "Structured story arcs", "Festival submissions"],
              },
              {
                title: "Social Media Content",
                color: "#16a34a",
                icon: "📱",
                desc: "Built for platform algorithms — Reels, TikTok, Facebook monetization, and content batching.",
                items: ["Reels & TikTok edits", "Facebook monetization", "Content batching", "Platform optimization"],
              },
            ].map((service) => (
              <div key={service.title} className="service-card" style={{ backgroundColor: "#291011", padding: "36px 28px", borderRadius: "4px", borderTop: `3px solid ${service.color}` }}>
                <div style={{ fontSize: "2em", marginBottom: "16px" }}>{service.icon}</div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.3em", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "12px" }}>{service.title}</h3>
                <p style={{ color: "#777", fontSize: "0.85em", lineHeight: 1.7, marginBottom: "16px" }}>{service.desc}</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {service.items.map((item) => (
                    <li key={item} style={{ color: "#999", fontSize: "0.8em", padding: "4px 0", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: service.color, fontSize: "0.8em" }}>●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section style={{ padding: "100px 40px", borderBottom: "1px solid #3d2325" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <span className="section-divider-green" />
              <span className="section-tag">Differentiator</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.8em, 3vw, 2.8em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "32px" }}>
              Why Work <span style={{ color: "#facc15" }}>With Me</span>
            </h2>
            <p style={{ color: "#999", fontSize: "0.95em", lineHeight: 1.9, marginBottom: "32px" }}>
              I do not deliver generic edits. I deliver structured visual communication.
            </p>
            <div style={{ display: "grid", gap: "16px" }}>
              {[
                { point: "10+ years editing experience", color: "#16a34a" },
                { point: "Production-level understanding beyond software", color: "#facc15" },
                { point: "Director-level story structure", color: "#e67e22" },
                { point: "Commercial awareness built into every cut", color: "#16a34a" },
                { point: "Performance-driven editing — not just aesthetic", color: "#facc15" },
              ].map((item) => (
                <div key={item.point} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", backgroundColor: "#1a1a1a", borderLeft: `3px solid ${item.color}`, borderRadius: "2px" }}>
                  <span style={{ color: item.color, fontSize: "1.2em" }}>→</span>
                  <p style={{ color: "#ccc", fontSize: "0.9em", fontFamily: "'Montserrat', sans-serif" }}>{item.point}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <span className="section-divider-green" />
              <span className="section-tag">Background</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.5em, 2.5vw, 2.2em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "32px" }}>
              Professional <span style={{ color: "#facc15" }}>Background</span>
            </h2>
            {[
              { role: "Co-Founder & Director", company: "Mbogiwood Productions PLC", color: "#16a34a" },
              { role: "Video Editing Tutor", company: "Filamu Juani", color: "#facc15" },
              { role: "Editing Since", company: "2012 — 10+ Years", color: "#e67e22" },
            ].map((item) => (
              <div key={item.role} style={{ padding: "20px", backgroundColor: "#1a1a1a", borderLeft: `3px solid ${item.color}`, borderRadius: "2px", marginBottom: "12px" }}>
                <p style={{ fontFamily: "'Oswald', sans-serif", color: "#f4f4f4", fontSize: "1em", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>{item.role}</p>
                <p style={{ color: item.color, fontSize: "0.75em", textTransform: "uppercase", letterSpacing: "2px" }}>{item.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABLE FOR REMOTE */}
      <section style={{ padding: "100px 40px", backgroundColor: "#1a1a1a", borderBottom: "1px solid #3d2325", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "24px" }}>
            <span className="section-divider-green" />
            <span className="section-tag">Availability</span>
            <span className="section-divider-green" />
          </div>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2em, 4vw, 3.5em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "24px" }}>
            Available for <span style={{ color: "#16a34a" }}>Remote</span> <span style={{ color: "#facc15" }}>Projects</span>
          </h2>
          <p style={{ color: "#999", fontSize: "1em", lineHeight: 1.9, marginBottom: "40px" }}>
            Time zone flexible. Remote-ready workflow. Open to long-term retainer contracts, agency partnerships, YouTube channel management editing, and documentary post-production.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "48px" }}>
            {["Retainer Contracts", "Agency Partnerships", "YouTube Management", "Documentary Post-Production"].map((item) => (
              <span key={item} style={{ border: "1px solid #3d2325", color: "#999", padding: "8px 16px", fontSize: "0.75em", fontFamily: "'Montserrat', sans-serif", textTransform: "uppercase", letterSpacing: "1px" }}>
                {item}
              </span>
            ))}
          </div>
          <Link href="/#contact" className="btn-solid">Start a Conversation</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "100px 40px", borderBottom: "1px solid #3d2325" }}>
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
              <div key={t.name} style={{ backgroundColor: "#1a1a1a", padding: "36px", borderRadius: "4px", borderLeft: `3px solid ${t.color}` }}>
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