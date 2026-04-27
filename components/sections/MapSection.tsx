"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, ExternalLink } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Spotless+Exterior+Co.+Power+Washing+%26+Window+Cleaning/@41.1289615,-73.7165201,17z/data=!4m6!3m5!1s0xae09ad63d5f87389:0x138509fc69f4d0b8!8m2!3d41.1289615!4d-73.7165201!16s%2Fg%2F11nhftn_v2";

const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.573!2d-73.71652!3d41.128962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xae09ad63d5f87389%3A0x138509fc69f4d0b8!2sSpotless%20Exterior%20Co.%20Power%20Washing%20%26%20Window%20Cleaning!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus";

export default function MapSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".map-content", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".map-frame", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="location"
      className="section-padding relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Info */}
          <div className="map-content">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading tracking-[0.18em] uppercase mb-5"
              style={{
                background: "rgba(0,74,153,0.07)",
                border: "1px solid rgba(0,74,153,0.18)",
                color: "#004A99",
                fontFamily: "var(--font-barlow-condensed)",
              }}
            >
              Find Us
            </div>
            <h2
              className="leading-none mb-5"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                letterSpacing: "0.04em",
                color: "#0A1628",
              }}
            >
              SERVING THE{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #004A99, #0099CC)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                WESTCHESTER AREA
              </span>
            </h2>
            <p className="font-body text-base leading-relaxed mb-8 max-w-md" style={{ color: "#4A6080" }}>
              Based in Westchester, NY — serving homeowners across Armonk, Bedford, Greenwich, Scarsdale,
              Ridgefield, Wilton, and surrounding communities.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,74,153,0.08)", border: "1px solid rgba(0,74,153,0.15)" }}
                >
                  <MapPin size={18} style={{ color: "#004A99" }} />
                </div>
                <div>
                  <div className="text-xs font-body tracking-wide mb-0.5" style={{ color: "#9BB0C8" }}>Location</div>
                  <div className="font-body font-medium" style={{ color: "#0A1628" }}>Westchester County, NY</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,74,153,0.08)", border: "1px solid rgba(0,74,153,0.15)" }}
                >
                  <Phone size={18} style={{ color: "#004A99" }} />
                </div>
                <div>
                  <div className="text-xs font-body tracking-wide mb-0.5" style={{ color: "#9BB0C8" }}>Phone</div>
                  <a
                    href="tel:+18455877616"
                    className="font-body font-medium transition-colors duration-200 hover:text-brand-action"
                    style={{ color: "#0A1628" }}
                  >
                    +1 (845) 587-7616
                  </a>
                </div>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-heading font-semibold tracking-wide text-sm transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                background: "linear-gradient(135deg, #004A99, #0066CC)",
                color: "#FFFFFF",
                boxShadow: "0 6px 24px rgba(0,74,153,0.3)",
              }}
            >
              <ExternalLink size={16} />
              View on Google Maps
            </a>
          </div>

          {/* Map */}
          <div className="map-frame">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(0,74,153,0.12)",
                boxShadow: "0 12px 48px rgba(0,74,153,0.12)",
              }}
            >
              <iframe
                src={EMBED_URL}
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Spotless Exterior Co. Location"
              />
            </div>
            <p className="text-xs font-body text-center mt-3" style={{ color: "#9BB0C8" }}>
              Westchester, NY · Serving a 30-mile radius
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
