"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FRAME_COUNT = 97;
const FRAME_PATH = (n: number) => `/frames/frame_${String(n).padStart(4, "0")}.webp`;

const overlays = [
  {
    enter: 0.10,
    leave: 0.32,
    heading: "PROFESSIONAL\nPOWER WASHING",
    body: "High-pressure precision cleaning that blasts away years of built-up grime, algae, and staining — leaving every surface looking brand new.",
  },
  {
    enter: 0.40,
    leave: 0.60,
    heading: "RESULTS THAT\nSPEAK LOUDLY",
    body: "From driveways and patios to siding and walkways — the transformation is immediate, dramatic, and long-lasting.",
  },
  {
    enter: 0.68,
    leave: 0.88,
    heading: "TRUSTED ACROSS\nWESTCHESTER",
    body: "Serving Armonk, Bedford, Greenwich & surrounding areas. 5-star rated service with an obsessive attention to detail.",
  },
];

export default function VideoScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas || !ctx) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
      drawFrame(currentFrameRef.current);
    }

    function drawFrame(index: number) {
      const img = framesRef.current[index];
      if (!img?.complete || img.naturalWidth === 0 || !ctx) return;
      const cw = window.innerWidth;
      const ch = window.innerHeight;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      // Full cover — image completely fills canvas edge-to-edge
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;
      ctx.fillStyle = "#060E1A";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    }

    // Load all frames
    const frames: HTMLImageElement[] = [];
    framesRef.current = frames;
    let firstLoaded = false;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      frames[i - 1] = img;
      img.onload = () => {
        if (!firstLoaded) {
          firstLoaded = true;
          resize();
        }
      };
      img.src = FRAME_PATH(i);
    }

    window.addEventListener("resize", resize);
    resize();

    // Hide all overlays completely via autoAlpha (sets opacity:0 + visibility:hidden)
    overlayRefs.current.forEach((el) => {
      if (!el) return;
      gsap.set(el, { autoAlpha: 0 });
      gsap.set(el.querySelectorAll(".ov-heading, .ov-body"), { y: 25, opacity: 0 });
    });

    // Frame scrub
    const mainST = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
      onUpdate: (self) => {
        const index = Math.min(Math.floor(self.progress * FRAME_COUNT), FRAME_COUNT - 1);
        if (index !== currentFrameRef.current) {
          currentFrameRef.current = index;
          requestAnimationFrame(() => drawFrame(index));
        }
      },
    });

    // Single ScrollTrigger for all overlays — activeIndex guarantees only one is ever visible
    const sts: ScrollTrigger[] = [];
    let activeIndex = -1;

    sts.push(ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const p = self.progress;
        const newIndex = overlays.findIndex((o) => p >= o.enter && p <= o.leave);
        if (newIndex === activeIndex) return;

        // Hide the outgoing overlay
        if (activeIndex >= 0) {
          const prev = overlayRefs.current[activeIndex];
          if (prev) {
            gsap.to(prev, { autoAlpha: 0, duration: 0.35, ease: "power2.in", overwrite: true });
            gsap.to(prev.querySelectorAll(".ov-heading, .ov-body"), {
              opacity: 0, y: -12, duration: 0.3, ease: "power2.in", overwrite: true,
            });
          }
        }

        activeIndex = newIndex;

        // Show the incoming overlay
        if (newIndex >= 0) {
          const next = overlayRefs.current[newIndex];
          if (next) {
            const textEls = next.querySelectorAll(".ov-heading, .ov-body");
            gsap.set(textEls, { y: 25, opacity: 0 });
            gsap.to(next, { autoAlpha: 1, duration: 0.5, ease: "power2.out", overwrite: true });
            gsap.to(textEls, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out", delay: 0.1, overwrite: true });
          }
        }
      },
    }));

    return () => {
      window.removeEventListener("resize", resize);
      mainST.kill();
      sts.forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: "600vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Gradient edges */}
        <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom, #060E1A, transparent)" }} />

        {/* Text overlays */}
        {overlays.map((overlay, i) => (
          <div
            key={i}
            ref={(el) => { overlayRefs.current[i] = el; }}
            className="absolute z-20 video-overlay-center"
            style={{ padding: "1.75rem 2.25rem" }}
          >
            {/* Glass backdrop */}
            <div
              className="ov-backdrop absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "rgba(4, 11, 22, 0.62)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(0,191,255,0.12)",
              }}
            />

            {/* Content sits above backdrop */}
            <div className="relative">
              <h2
                className="ov-heading text-white font-display leading-none mb-4 whitespace-pre-line"
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
                  letterSpacing: "0.04em",
                }}
              >
                {overlay.heading}
              </h2>

              <p
                className="ov-body font-body text-sm md:text-base leading-relaxed"
                style={{
                  color: "rgba(255,255,255,0.82)",
                  maxWidth: "34ch",
                  margin: "0 auto",
                }}
              >
                {overlay.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
