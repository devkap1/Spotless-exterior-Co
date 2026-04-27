"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
}

export const ImageComparison = ({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
}: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let newPosition = ((clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(newPosition);
    },
    [isDragging]
  );

  const handleMouseDown = (e: React.MouseEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);

  const handleTouchStart = (e: React.TouchEvent) => { e.stopPropagation(); setIsDragging(true); };
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* AFTER image — base layer, always visible (RIGHT side) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={afterImage}
        alt={altAfter}
        className="block w-full"
        style={{ objectFit: "cover", display: "block" }}
        draggable="false"
      />

      {/* BEFORE image — clipped overlay revealing LEFT side as slider moves right */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeImage}
          alt={altBefore}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover" }}
          draggable="false"
        />
      </div>

      {/* Labels */}
      <div
        className="absolute top-3 left-3 z-20 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm pointer-events-none"
        style={{ background: "rgba(10,22,40,0.75)", fontFamily: "var(--font-barlow-condensed)" }}
      >
        Before
      </div>
      <div
        className="absolute top-3 right-3 z-20 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full pointer-events-none"
        style={{ background: "#00BFFF", color: "#0A1628", fontFamily: "var(--font-barlow-condensed)" }}
      >
        After
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-px z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%`, background: "rgba(255,255,255,0.9)" }}
      />

      {/* Slider handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 z-20"
        style={{ left: `calc(${sliderPosition}% - 1.5rem)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className={`bg-white rounded-full h-12 w-12 flex items-center justify-center transition-transform duration-150 ${
            isDragging ? "scale-110" : "scale-100"
          }`}
          style={{ boxShadow: "0 0 0 3px #00BFFF, 0 8px 24px rgba(0,191,255,0.5)" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004A99" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l-6-6 6-6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
};
