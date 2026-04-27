"use client";
import React from "react";
import { motion } from "motion/react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  stars?: number;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role, stars = 5 }, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl max-w-xs w-full"
                style={{
                  background: "linear-gradient(135deg, #0E2040 0%, #0A1628 100%)",
                  border: "1px solid rgba(0,191,255,0.15)",
                  boxShadow: "0 8px 32px rgba(0,74,153,0.2)",
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: stars }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#00BFFF">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/85 text-sm leading-relaxed font-body mb-4">{text}</p>
                <div className="pt-3 border-t border-white/10">
                  <div className="font-heading font-semibold text-sm text-white leading-tight" style={{ fontFamily: "var(--font-barlow-condensed)" }}>{name}</div>
                  <div className="text-xs text-brand-action/80 tracking-wide mt-0.5">{role}</div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
