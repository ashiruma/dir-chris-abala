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
            <span className="section-tag">Visual Storyteller — Kenya</span>
          </div>

          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(3em, 9vw, 7em)", fontWeight: 700, textTransform: "uppercase", lineHeight: 0.9, marginBottom: "48px", color: "#f4f4f4" }}>
            Stories <br />
            <span style={{ color: "#291011", WebkitTextStroke: "2px #16a34a" } as React.CSSProperties}>That Reshape</span> <br />
            Narratives.
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "end" }}>
            <p style={{ color: "#ccc", fontSize: "1.1em", lineHeight: 1.8, fontWeight: 300, maxWidth: "420px" }}>
              Bridging the gap between creative vision and professional excellence. Global standards, local heart.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/work" className="btn-outline">View Projects</Link>
              <Link href="#contact" className="btn-solid">Let's Talk</Link>
            </div>
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
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2em, 4vw, 3.5em)", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "24px" }}>
              The Eye <span className="highlight-yellow">Behind</span> The Lens
            </h2>
            <p style={{ color: "#ccc", fontSize: "1em", lineHeight: 1.9, fontWeight: 300, marginBottom: "20px" }}>
              Chrispine Abala is a Kakamega-based visual storyteller with a passion for capturing authentic human moments. With years of experience in photography, videography, and brand direction, he brings a unique perspective to every project.
            </p>
            <p style={{ color: "#ccc", fontSize: "1em", lineHeight: 1.9, fontWeight: 300, marginBottom: "32px" }}>
              His work spans documentary storytelling, commercial branding, and creative direction — always rooted in cultural truth and visual integrity.
            </p>
            <Link href="/work" className="btn-outline">See My Work</Link>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", aspectRatio: "3/4", backgroundColor: "#3d2325", borderRadius: "4px", overflow: "hidden", border: "1px solid #3d2325" }}>
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
              <span className="section-tag">What I Do</span>
              <span className="section-divider-green" />
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2em, 4vw, 3em)", textTransform: "uppercase", color: "#f4f4f4" }}>
              Services <span className="highlight-green">&</span> <span className="highlight-yellow">Expertise</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { title: "Photography", desc: "Commercial, documentary, and portrait photography crafted with intention and precision.", color: "#16a34a", icon: "📷" },
              { title: "Video Production", desc: "Full-scale video production from concept to final cut. Brand films, documentaries, and social content.", color: "#facc15", icon: "🎬" },
              { title: "Brand Direction", desc: "Visual identity and creative direction that tells your brand story with consistency and impact.", color: "#e67e22", icon: "🎯" },
              { title: "Documentary", desc: "Long-form storytelling that captures truth, culture, and humanity in its most raw and honest form.", color: "#16a34a", icon: "🎞️" },
            ].map((service) => (
              <div key={service.title} style={{ backgroundColor: "#291011", padding: "36px 28px", borderRadius: "4px", borderTop: `3px solid ${service.color}`, transition: "transform 0.2s ease" }} className="service-card">
                <div style={{ fontSize: "2em", marginBottom: "16px" }}>{service.icon}</div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.4em", textTransform: "uppercase", color: "#f4f4f4", marginBottom: "12px" }}>{service.title}</h3>
                <p style={{ color: "#999", fontSize: "0.9em", lineHeight: 1.8 }}>{service.desc}</p>
              </div>
            ))}
          </div>
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
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2em, 4vw, 3em)", textTransform: "uppercase", color: "#f4f4f4" }}>
              What Clients <span className="highlight-yellow">Say</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {[
              { name: "Amara Odhiambo", role: "Brand Manager, Nairobi", quote: "Chrispine brought our brand to life in ways we never imagined. His eye for detail and storytelling is unmatched.", color: "#16a34a" },
              { name: "David Wekesa", role: "Documentary Director", quote: "Working with Chrispine was a seamless experience. He understood the vision immediately and delivered beyond expectations.", color: "#facc15" },
              { name: "Fatuma Abubakar", role: "NGO Communications Lead", quote: "The documentary he produced for us moved audiences across three continents. Pure talent and dedication.", color: "#e67e22" },
            ].map((t) => (
              <div key={t.name} style={{ backgroundColor: "#1a1a1a", padding: "36px", borderRadius: "4px", borderLeft: `3px solid ${t.color}`, position: "relative" }}>
                <p style={{ color: "#ccc", fontSize: "1em", lineHeight: 1.9, fontStyle: "italic", marginBottom: "24px" }}>"{t.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontWeight: 700, color: "#1a1a1a", fontSize: "1em" }}>
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
            © {new Date().getFullYear()} All Rights Reserved. Built with passion for storytelling.
          </p>
        </div>
      </footer>

    </main>
  );
}