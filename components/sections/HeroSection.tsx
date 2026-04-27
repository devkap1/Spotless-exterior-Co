"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Phone, ChevronDown, Star, MapPin } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.7 }, 0.3)
        .from(".hero-headline", { y: 70, opacity: 0, duration: 1 }, 0.55)
        .from(".hero-tagline", { y: 40, opacity: 0, duration: 0.8 }, 0.85)
        .from(".hero-rating", { y: 30, opacity: 0, duration: 0.6 }, 1.05)
        .from(".hero-ctas", { y: 30, opacity: 0, duration: 0.6 }, 1.25)
        .from(".hero-scroll", { y: 20, opacity: 0, duration: 0.5 }, 1.6);

      gsap.to(".hero-scroll-arrow", {
        y: 8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Subtle particle float
      gsap.to(".hero-sparkle", {
        y: -12,
        opacity: 0.3,
        duration: 3,
        stagger: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #060E1A 0%, #0A1628 40%, #0E2040 100%)" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,191,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0,74,153,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Floating sparkles */}
      {[
        { top: "20%", left: "15%", size: 6 },
        { top: "35%", left: "80%", size: 4 },
        { top: "65%", left: "12%", size: 5 },
        { top: "55%", left: "88%", size: 4 },
        { top: "15%", left: "70%", size: 5 },
        { top: "75%", left: "55%", size: 3 },
      ].map((s, i) => (
        <div
          key={i}
          className="hero-sparkle absolute pointer-events-none"
          style={{ top: s.top, left: s.left }}
        >
          <svg width={s.size * 3} height={s.size * 3} viewBox="0 0 24 24" fill="#00BFFF" opacity="0.5">
            <polygon points="12 2 13.5 10.5 22 12 13.5 13.5 12 22 10.5 13.5 2 12 10.5 10.5" />
          </svg>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Location badge */}
        <div className="hero-badge mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading tracking-[0.18em] uppercase text-brand-action"
            style={{
              background: "rgba(0,191,255,0.08)",
              border: "1px solid rgba(0,191,255,0.25)",
              fontFamily: "var(--font-barlow-condensed)",
            }}
          >
            <MapPin size={11} />
            Westchester, NY Area
          </div>
        </div>

        {/* Main headline */}
        <h1
          className="hero-headline leading-none text-white mb-4"
          style={{
            fontFamily: "var(--font-bebas-neue)",
            fontSize: "clamp(5rem, 16vw, 15rem)",
            letterSpacing: "0.04em",
            lineHeight: 0.92,
            textShadow: "0 4px 40px rgba(0,74,153,0.5)",
          }}
        >
          <span className="block">SPOTLESS</span>
          <span
            className="block"
            style={{
              fontSize: "clamp(2.2rem, 8vw, 7.5rem)",
              letterSpacing: "0.12em",
              background: "linear-gradient(135deg, #00BFFF, #0099CC, #004A99)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            EXTERIOR CO.
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="hero-tagline text-white/70 font-body font-light mb-7 max-w-xl mx-auto"
          style={{ fontSize: "clamp(1rem, 2.2vw, 1.2rem)", letterSpacing: "0.02em", lineHeight: 1.6 }}
        >
          Professional Power Washing & Window Cleaning — transforming homes across Westchester, NY
        </p>

        {/* Rating */}
        <div className="hero-rating flex items-center gap-3 mb-8">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={18} className="text-brand-action fill-brand-action" />
            ))}
          </div>
          <span
            className="text-brand-action font-heading font-bold text-lg"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            5.0
          </span>
        </div>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row items-center gap-4">
          <a
            href="tel:+18455877616"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full font-heading font-semibold tracking-wide text-base transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              background: "linear-gradient(135deg, #00BFFF, #0099CC)",
              color: "#0A1628",
              boxShadow: "0 6px 28px rgba(0,191,255,0.4)",
            }}
          >
            <Phone size={17} />
            Call Now · (845) 587-7616
          </a>
          <a
            href="/#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-heading font-semibold tracking-wide text-base text-white transition-all duration-200 hover:scale-105 active:scale-95 hover:text-brand-action"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              border: "1.5px solid rgba(0,191,255,0.35)",
              background: "rgba(0,191,255,0.06)",
            }}
          >
            Get a Free Quote →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs font-body tracking-[0.2em] uppercase">Scroll</span>
        <div className="hero-scroll-arrow text-white/40">
          <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
}
