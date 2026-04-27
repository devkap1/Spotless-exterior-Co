"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(10,22,40,0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,191,255,0.15)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.webp"
                  alt="Spotless Exterior Co."
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div
                  className="text-white font-semibold tracking-[0.08em]"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontSize: "1rem" }}
                >
                  Spotless Exterior Co.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/75 hover:text-brand-action text-sm font-body font-medium tracking-wide transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-action transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+18455877616"
                className="flex items-center gap-2 text-brand-action text-sm font-body font-medium hover:text-white transition-colors duration-200"
              >
                <Phone size={15} />
                <span>(845) 587-7616</span>
              </a>
              <a
                href="/#contact"
                className="relative overflow-hidden px-5 py-2.5 text-sm font-heading font-semibold tracking-wider text-brand-navy rounded-full transition-transform duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #00BFFF, #0099CC)",
                  boxShadow: "0 4px 20px rgba(0,191,255,0.35)",
                }}
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          pointerEvents: menuOpen ? "auto" : "none",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,22,40,0.97)", backdropFilter: "blur(20px)" }}
          onClick={() => setMenuOpen(false)}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-heading font-semibold text-3xl tracking-wide hover:text-brand-action transition-colors duration-200"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+18455877616"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 mt-4 text-brand-action text-xl font-body font-medium"
          >
            <Phone size={20} />
            (845) 587-7616
          </a>
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="px-8 py-3 text-brand-navy font-heading font-semibold text-lg tracking-wider rounded-full"
            style={{
              background: "linear-gradient(135deg, #00BFFF, #0099CC)",
              boxShadow: "0 4px 20px rgba(0,191,255,0.35)",
            }}
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </>
  );
}
