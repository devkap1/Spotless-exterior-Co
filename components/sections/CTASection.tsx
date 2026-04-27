"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Send, CheckCircle } from "lucide-react";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #004A99 0%, #003578 40%, #002460 100%)",
      }}
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,191,255,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="cta-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading tracking-[0.18em] uppercase text-white/70 mb-5"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                fontFamily: "var(--font-barlow-condensed)",
              }}
            >
              Free Estimate
            </div>
            <h2
              className="text-white leading-none mb-5"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                letterSpacing: "0.04em",
              }}
            >
              READY FOR A{" "}
              <span style={{ color: "#00BFFF" }}>SPOTLESS</span>
              {" "}HOME?
            </h2>
            <p className="text-white/65 font-body text-base leading-relaxed mb-8 max-w-md">
              Get a free, no-obligation quote. We respond within the hour. Servicing Westchester, NY and surrounding areas.
            </p>

            <a
              href="tel:+18455877616"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-heading font-bold tracking-wide text-lg text-brand-navy transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                background: "linear-gradient(135deg, #00BFFF, #00AADD)",
                boxShadow: "0 8px 32px rgba(0,191,255,0.4)",
              }}
            >
              <Phone size={20} />
              Call (845) 587-7616
            </a>

            <p className="text-white/35 text-xs font-body mt-4 tracking-wide">
              Or fill out the form and we&apos;ll be in touch shortly
            </p>
          </div>

          {/* Form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                <CheckCircle size={48} className="text-brand-action" />
                <h3
                  className="text-white font-heading font-bold text-2xl"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  Message Received!
                </h3>
                <p className="text-white/60 font-body text-sm">
                  We&apos;ll reach out within the hour with your free estimate.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/60 text-xs font-body tracking-wide uppercase mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-brand-action/40"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-body tracking-wide uppercase mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(914) 555-0123"
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-brand-action/40"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-body tracking-wide uppercase mb-1.5">
                    What Do You Need?
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="House washing, window cleaning, gutter cleaning..."
                    className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/30 outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-brand-action/40"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-heading font-bold tracking-wide text-base text-brand-navy transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    background: "linear-gradient(135deg, #00BFFF, #0099CC)",
                    boxShadow: "0 6px 24px rgba(0,191,255,0.35)",
                  }}
                >
                  <Send size={16} />
                  Get My Free Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
