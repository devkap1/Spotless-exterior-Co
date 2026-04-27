"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    id: "window-cleaning",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        <path d="M6 6l2 2M6 12l2 2M12 6l2 2" opacity="0.5" />
      </svg>
    ),
    title: "Window Cleaning",
    tagline: "Crystal Clear, Streak-Free",
    description:
      "Pure water system, interior & exterior glass, frames, sills, and multi-story capability. Your windows will sparkle.",
    features: ["Pure Water System", "Interior & Exterior", "Frames & Sills", "Multi-Story Homes"],
    href: "/services#window-cleaning",
  },
  {
    id: "pressure-washing",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6c0-1.1.9-2 2-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
        <path d="M8 10v8M16 10v8M12 10v4" />
        <path d="M6 20h12" />
        <path d="M10 6h4" opacity="0.5" />
      </svg>
    ),
    title: "Pressure Washing",
    tagline: "Deep Clean, Long-Lasting Results",
    description:
      "Soft wash for siding and roofs, high-pressure for driveways, patios, and walkways. Professional-grade equipment only.",
    features: ["House Soft Wash", "Roof Washing", "Patio & Driveway", "Walkways & Paths"],
    href: "/services#pressure-washing",
  },
  {
    id: "gutter-cleaning",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18l-1 10H4L3 7z" />
        <path d="M3 7L2 4M21 7l1-3" />
        <path d="M8 7v3M12 7v5M16 7v3" opacity="0.5" />
        <path d="M7 17v4M17 17v4" />
      </svg>
    ),
    title: "Gutter Cleaning",
    tagline: "Protect Your Home, Top to Bottom",
    description:
      "Full debris removal, downspout clearance, and exterior gutter face cleaning. Protect your foundation and curb appeal.",
    features: ["Full Debris Removal", "Downspout Clearing", "Exterior Face Cleaning", "Overflow Prevention"],
    href: "/services#gutter-cleaning",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-header", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".svc-card", {
        y: 70,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".svc-grid",
          start: "top 95%",
          once: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ background: "#EEF4FF" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="svc-header text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading tracking-[0.18em] uppercase mb-4"
            style={{
              background: "rgba(0,74,153,0.07)",
              border: "1px solid rgba(0,74,153,0.18)",
              color: "#004A99",
              fontFamily: "var(--font-barlow-condensed)",
            }}
          >
            What We Do
          </div>
          <h2
            className="leading-none mb-4"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              letterSpacing: "0.04em",
              color: "#0A1628",
            }}
          >
            OUR SERVICES
          </h2>
          <p className="font-body text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#4A6080" }}>
            Every service is completed with professional-grade equipment and an obsessive attention to detail.
          </p>
        </div>

        <div className="svc-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc, i) => (
            <Link key={i} href={svc.href} className="svc-card group block">
              <div
                className="h-full p-7 rounded-2xl transition-all duration-300 group-hover:scale-[1.02]"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,74,153,0.1)",
                  boxShadow: "0 4px 24px rgba(0,74,153,0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(0,74,153,0.35)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,74,153,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(0,74,153,0.1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,74,153,0.08)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: "rgba(0,74,153,0.08)", border: "1px solid rgba(0,74,153,0.15)", color: "#004A99" }}
                >
                  {svc.icon}
                </div>

                {/* Title */}
                <div className="text-xs font-body tracking-[0.15em] uppercase mb-1.5" style={{ color: "#0099CC" }}>
                  {svc.tagline}
                </div>
                <h3
                  className="font-heading font-bold text-2xl tracking-wide mb-3"
                  style={{ fontFamily: "var(--font-barlow-condensed)", color: "#0A1628" }}
                >
                  {svc.title}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "#4A6080" }}>{svc.description}</p>

                {/* Feature list */}
                <ul className="space-y-2 mb-6">
                  {svc.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2.5 text-sm font-body" style={{ color: "#2A3D55" }}>
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(0,74,153,0.12)" }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1 4l2 2 4-4" stroke="#004A99" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-heading font-semibold tracking-wide transition-all duration-200 group-hover:gap-3" style={{ color: "#004A99", fontFamily: "var(--font-barlow-condensed)" }}>
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
