"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageComparison } from "@/components/ui/image-comparison-slider";

const examples = [
  {
    before: "/before-1.jpeg",
    after: "/after-1.jpeg",
    label: "Driveway Transformation",
    description: "Years of grime, oil stains, and organic buildup removed — restored to like-new condition.",
  },
  {
    before: "/before-2.jpeg",
    after: "/after-2.jpeg",
    label: "Patio & Walkway",
    description: "Moss, algae, and deep-set staining eliminated with professional-grade pressure washing.",
  },
  {
    before: "/before-3.webp",
    after: "/after-3.webp",
    label: "Exterior Surface",
    description: "Complete surface restoration — every surface cleaned back to its original brilliance.",
  },
];

export default function BeforeAfterSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ba-header", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".ba-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ba-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="results"
      className="section-padding relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="ba-header text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading tracking-[0.18em] uppercase mb-4"
            style={{
              background: "rgba(0,74,153,0.07)",
              border: "1px solid rgba(0,74,153,0.18)",
              color: "#004A99",
              fontFamily: "var(--font-barlow-condensed)",
            }}
          >
            Before & After
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
            SEE THE DIFFERENCE
          </h2>
          <p className="font-body text-base max-w-xl mx-auto leading-relaxed" style={{ color: "#4A6080" }}>
            Drag the slider to compare before and after. Every job, the transformation speaks for itself.
          </p>
        </div>

      {/* Blend into Services light-blue section below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, #EEF4FF, transparent)" }}
      />

        {/* Grid */}
        <div className="ba-grid grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {examples.map((ex, i) => (
            <div key={i} className="ba-card flex flex-col gap-4">
              {/* Slider */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
              >
                <ImageComparison
                  beforeImage={ex.before}
                  afterImage={ex.after}
                  altBefore={`Before - ${ex.label}`}
                  altAfter={`After - ${ex.label}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
