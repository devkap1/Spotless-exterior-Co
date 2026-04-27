"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const services = [
  {
    id: "window-cleaning",
    number: "01",
    title: "Window Cleaning",
    tagline: "Crystal Clear. Streak-Free. Every Time.",
    intro:
      "Our professional window cleaning service uses purified water technology and hand-detailing methods to achieve a spotless, streak-free finish on every pane of glass.",
    items: [
      {
        title: "Pure Water System (Spot-Free Finish)",
        description:
          "Our exterior cleaning uses purified water that removes minerals and impurities, allowing windows to dry completely spot-free without chemicals.",
        icon: "💧",
      },
      {
        title: "Exterior & Interior Glass Cleaning",
        description:
          "We clean both exterior and interior glass, removing dirt, pollen, smudges, and buildup to restore maximum clarity throughout your home.",
        icon: "🪟",
      },
      {
        title: "Frames & Sills Wiped",
        description:
          "All window frames and sills are wiped down as part of the service, leaving a clean, finished look — not just the glass.",
        icon: "✨",
      },
      {
        title: "Multi-Story Homes",
        description:
          "We're fully equipped to handle multi-story homes, allowing us to efficiently clean hard-to-reach windows with professional-grade equipment.",
        icon: "🏠",
      },
    ],
  },
  {
    id: "pressure-washing",
    number: "02",
    title: "Pressure Washing",
    tagline: "Professional-Grade Equipment. Long-Lasting Results.",
    intro:
      "From soft washing delicate siding to high-pressure blasting stubborn concrete stains — we use the right technique for every surface.",
    items: [
      {
        title: "House Washing (Soft Wash)",
        description:
          "Our soft washing process safely removes dirt, algae, mold, and mildew from siding using low pressure and specialized cleaning solutions. This method protects your home's exterior while delivering a deep, long-lasting clean.",
        icon: "🏡",
      },
      {
        title: "Roof Washing",
        description:
          "We use a gentle soft wash system to eliminate black streaks, moss, and algae from your roof without causing damage to shingles. This not only improves curb appeal but also helps extend the life of your roof.",
        icon: "🔝",
      },
      {
        title: "Patio & Surface Pressure Washing",
        description:
          "For harder surfaces like patios, walkways, and driveways, we use professional-grade pressure washing equipment to remove built-up grime, stains, and organic growth, restoring the surface to a like-new condition.",
        icon: "🧹",
      },
    ],
  },
  {
    id: "gutter-cleaning",
    number: "03",
    title: "Gutter Cleaning",
    tagline: "Protect Your Home from the Top Down.",
    intro:
      "Clogged gutters can lead to foundation damage, rot, and water infiltration. Our gutter cleaning service keeps everything flowing properly.",
    items: [
      {
        title: "Gutter Cleaning",
        description:
          "Keep your home protected and looking its best with our professional gutter cleaning service. We focus on removing buildup and restoring a clean, well-maintained appearance.",
        icon: "🌿",
      },
      {
        title: "Debris Removal",
        description:
          "Leaves, twigs, and other debris are fully cleared from your gutters to prevent clogs, overflow, and potential water damage.",
        icon: "🍂",
      },
      {
        title: "Exterior Gutter Cleaning",
        description:
          "We clean the exterior faces of your gutters, removing dirt, staining, and buildup to improve the overall look of your home's exterior.",
        icon: "🏠",
      },
    ],
  },
];

export default function ServicesDetailPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svcpage-hero", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      services.forEach((_, i) => {
        gsap.from(`.svc-section-${i}`, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.svc-section-${i}`,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(`.svc-item-${i}`, {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.svc-items-${i}`,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      style={{ background: "linear-gradient(180deg, #0A1628 0%, #060E1A 100%)" }}
    >
      {/* Page Hero */}
      <div
        className="svcpage-hero relative overflow-hidden pt-36 pb-20 px-6"
        style={{
          background: "linear-gradient(160deg, #060E1A 0%, #0A1628 50%, #0E2040 100%)",
          borderBottom: "1px solid rgba(0,191,255,0.1)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,191,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-white/35 text-xs font-body tracking-[0.25em] uppercase mb-4">
            <Link href="/" className="hover:text-brand-action transition-colors">Home</Link>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-brand-action">Services</span>
          </div>
          <h1
            className="text-white leading-none mb-5"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              letterSpacing: "0.04em",
            }}
          >
            OUR{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00BFFF, #0099CC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SERVICES
            </span>
          </h1>
          <p className="text-white/55 font-body text-base max-w-2xl mx-auto leading-relaxed">
            Professional exterior cleaning services for homeowners across Westchester, NY. Every job completed
            with professional-grade equipment and an obsessive commitment to quality.
          </p>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="px-5 py-2 rounded-full text-sm font-heading font-semibold tracking-wide text-white/70 hover:text-brand-action transition-all duration-200 hover:scale-105"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  background: "rgba(0,191,255,0.06)",
                  border: "1px solid rgba(0,191,255,0.15)",
                }}
              >
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service Sections */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 space-y-24">
        {services.map((svc, i) => (
          <div key={svc.id} id={svc.id} className={`svc-section-${i}`}>
            {/* Section header */}
            <div className="flex items-start gap-6 mb-10">
              <div
                className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(0,191,255,0.08)",
                  border: "1px solid rgba(0,191,255,0.2)",
                }}
              >
                <span
                  className="font-display text-brand-action text-2xl font-bold"
                  style={{ fontFamily: "var(--font-bebas-neue)" }}
                >
                  {svc.number}
                </span>
              </div>
              <div>
                <div className="text-brand-action text-xs font-body tracking-[0.18em] uppercase mb-1.5 opacity-70">
                  {svc.tagline}
                </div>
                <h2
                  className="text-white leading-tight mb-3"
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {svc.title}
                </h2>
                <p className="text-white/55 font-body text-base leading-relaxed max-w-2xl">
                  {svc.intro}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div
              className="mb-10 h-px"
              style={{ background: "linear-gradient(90deg, rgba(0,191,255,0.3), transparent)" }}
            />

            {/* Items grid */}
            <div className={`svc-items-${i} grid grid-cols-1 md:grid-cols-2 gap-5`}>
              {svc.items.map((item, j) => (
                <div
                  key={j}
                  className={`svc-item-${i} p-6 rounded-2xl`}
                  style={{
                    background: "linear-gradient(135deg, rgba(14,32,64,0.7) 0%, rgba(10,22,40,0.8) 100%)",
                    border: "1px solid rgba(0,191,255,0.1)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg"
                      style={{ background: "rgba(0,191,255,0.1)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className="text-white font-heading font-bold text-lg mb-2"
                        style={{ fontFamily: "var(--font-barlow-condensed)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-white/55 font-body text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
