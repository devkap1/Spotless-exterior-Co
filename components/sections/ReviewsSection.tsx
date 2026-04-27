"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "David did a great job pressure washing our home in Chappaqua. Everything looks so much cleaner and refreshed. He was professional, thorough, and took pride in his work. The difference was noticeable right away. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Wyatt Podielsky",
    role: "Chappaqua, NY",
  },
  {
    text: "David with Spotless Exterior did a wonderful job on our windows. They also did some house pressure washing and did a wonderful job. Will definitely be using them in the future.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "MaryCatherine Besgen",
    role: "Westchester, NY",
  },
  {
    text: "A huge thank you to David for doing the best job ever! A very pleasant and professional young man and my new go-to for all my power-washing needs! Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Danny Yesenia Ragonese",
    role: "Westchester, NY",
  },
  {
    text: "David from Spotless Exterior did a wonderful job on my windows at my home in Wilton. Will definitely be using him in the future.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Sophia Mosner",
    role: "Wilton, CT",
  },
  {
    text: "David did such a wonderful job pressure washing and window cleaning our home in Scarsdale. The difference was incredible — everything looks fresh, bright, and meticulously cleaned. The windows came out crystal clear.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    name: "Abby",
    role: "Scarsdale, NY",
  },
  {
    text: "David did an excellent job pressure washing my patio in Ridgefield. The difference is honestly night and day — the photo speaks for itself. He is professional, thorough, and clearly takes pride in his work.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Josh Chana",
    role: "Ridgefield, CT",
  },
  {
    text: "David came to our home in Armonk and did an outstanding job with both the pressure washing and window cleaning. The exterior looks completely refreshed, windows came out crystal clear with a true streak-free finish.",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    name: "Caleb Mariakakis",
    role: "Armonk, NY",
  },
  {
    text: "My house was built over 25 years ago. There were marks and stains I had genuinely written off as permanent. I was wrong. The driveway came back looking like new — the transformation is honestly hard to believe.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Ilker Eraslan",
    role: "Westchester, NY",
  },
  {
    text: "David did a wonderful job on our exterior and interior windows. You can tell he really cares about the quality of his work. He also noticed our walkway needed pressure washing and just did it for free!",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
    name: "Shalla Radow",
    role: "Westchester, NY",
  },
  {
    text: "David did a great job on my home. Professional service, excellent results. Would highly recommend to anyone looking for exterior cleaning.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "David Mosner",
    role: "Westchester, NY",
  },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 7);
const col3 = testimonials.slice(7, 10);

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".rev-header", {
        y: 40,
        opacity: 0,
        duration: 0.7,
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

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1628 0%, #060E1A 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,74,153,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="rev-header text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading tracking-[0.18em] uppercase text-brand-action mb-4"
            style={{
              background: "rgba(0,191,255,0.08)",
              border: "1px solid rgba(0,191,255,0.2)",
              fontFamily: "var(--font-barlow-condensed)",
            }}
          >
            Customer Reviews
          </div>
          <h2
            className="text-white leading-none mb-4"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              letterSpacing: "0.04em",
            }}
          >
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-white/55 font-body text-base max-w-xl mx-auto leading-relaxed">
            5.0 stars on Google. Every customer, every time — Spotless delivers.
          </p>
          {/* Star row */}
          <div className="flex items-center justify-center gap-1.5 mt-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#00BFFF">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span
              className="ml-2 text-brand-action font-heading font-bold text-xl"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              5.0
            </span>
            <span className="text-white/40 text-sm font-body ml-1">/ 5.0 · Google</span>
          </div>
        </div>

        <div
          className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={col1} duration={18} />
          <TestimonialsColumn testimonials={col2} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={col3} className="hidden lg:block" duration={16} />
        </div>
      </div>
    </section>
  );
}
