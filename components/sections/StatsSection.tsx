"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: 5, suffix: ".0", label: "Star Rating", unit: "⭐", countFrom: 0 },
  { value: 10, suffix: "+", label: "Happy Customers", unit: null, countFrom: 0 },
  { value: 3, suffix: "", label: "Service Areas", unit: null, countFrom: 0 },
  { value: 100, suffix: "%", label: "Satisfaction", unit: null, countFrom: 0 },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stats-label", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".stat-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      // Count-up animations
      stats.forEach((stat, i) => {
        const el = statRefs.current[i];
        if (!el) return;
        gsap.fromTo(
          el,
          { textContent: stat.countFrom },
          {
            textContent: stat.value,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: ".stats-grid",
              start: "top 75%",
              toggleActions: "play none none reset",
            },
            onUpdate: function () {
              if (el) el.textContent = Math.round(parseFloat(el.textContent || "0")).toString();
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060E1A 0%, #0A0D14 100%)" }}
    >
      {/* Glowing line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.3), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,191,255,0.3), transparent)" }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,74,153,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="stats-label text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading tracking-[0.18em] uppercase text-brand-action mb-4"
            style={{
              background: "rgba(0,191,255,0.08)",
              border: "1px solid rgba(0,191,255,0.2)",
              fontFamily: "var(--font-barlow-condensed)",
            }}
          >
            By The Numbers
          </div>
          <h2
            className="text-white leading-none"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              letterSpacing: "0.04em",
            }}
          >
            THE SPOTLESS STANDARD
          </h2>
        </div>

        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-item text-center p-8 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(14,32,64,0.6) 0%, rgba(10,22,40,0.8) 100%)",
                border: "1px solid rgba(0,191,255,0.1)",
              }}
            >
              <div
                className="font-display leading-none mb-2 text-white"
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: "clamp(3.5rem, 8vw, 6rem)",
                  letterSpacing: "0.02em",
                }}
              >
                <span
                  ref={(el) => { statRefs.current[i] = el; }}
                  style={{ color: "#00BFFF" }}
                >
                  {stat.value}
                </span>
                <span className="text-white/60" style={{ fontSize: "0.5em" }}>
                  {stat.suffix}
                </span>
              </div>
              <div
                className="text-white/55 text-sm font-heading tracking-[0.1em] uppercase"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Areas served */}
        <div className="mt-12 text-center">
          <p
            className="text-white/35 text-xs font-body tracking-[0.2em] uppercase mb-4"
          >
            Serving
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Armonk, NY", "Bedford, NY", "Greenwich, CT", "Scarsdale, NY", "Ridgefield, CT", "Wilton, CT", "Chappaqua, NY"].map(
              (area) => (
                <span
                  key={area}
                  className="px-4 py-1.5 rounded-full text-xs font-body text-white/55 tracking-wide"
                  style={{
                    background: "rgba(0,191,255,0.06)",
                    border: "1px solid rgba(0,191,255,0.12)",
                  }}
                >
                  {area}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
