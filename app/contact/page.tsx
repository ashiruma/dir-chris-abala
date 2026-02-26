"use client";

export default function ContactPage() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Let's Create Something Great Together</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Available for photography, video production, branding, and creative projects.
        </p>

        <div className="bg-card p-10 rounded-3xl border">
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border" required />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border" required />
            <textarea placeholder="Tell me about your project..." rows={6} className="w-full p-4 rounded-xl border" required></textarea>
            
            <button type="submit" className="w-full bg-gradient-to-r from-brand-green to-brand-red text-white py-4 rounded-2xl text-lg font-semibold hover:brightness-110 transition">
              Send Message — Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}