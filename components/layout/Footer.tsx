import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Star } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Spotless+Exterior+Co.+Power+Washing+%26+Window+Cleaning/@41.1289615,-73.7165201,17z/data=!4m6!3m5!1s0xae09ad63d5f87389:0x138509fc69f4d0b8!8m2!3d41.1289615!4d-73.7165201!16s%2Fg%2F11nhftn_v2?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";

export default function Footer() {
  const serviceLinks = [
    { label: "Window Cleaning", href: "/services#window-cleaning" },
    { label: "Pressure Washing", href: "/services#pressure-washing" },
    { label: "Gutter Cleaning", href: "/services#gutter-cleaning" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Contact", href: "/#contact" },
  ];

  const serviceAreas = ["Armonk, NY", "Bedford, NY", "Greenwich, CT", "Scarsdale, NY", "Ridgefield, CT"];

  return (
    <footer
      style={{ background: "#060E1A", borderTop: "1px solid rgba(0,191,255,0.12)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-105">
                <Image src="/logo.webp" alt="Spotless Exterior Co." fill className="object-contain" />
              </div>
              <div>
                <div
                  className="text-white font-heading font-bold text-base tracking-[0.1em] uppercase leading-tight"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  Spotless Exterior Co.
                </div>
                <div className="text-brand-action text-xs tracking-[0.15em] uppercase opacity-70 mt-0.5">
                  Est. 2025
                </div>
              </div>
            </Link>
            <p className="text-white/55 text-sm font-body leading-relaxed mb-5">
              Professional exterior cleaning in the Westchester, NY area. Power washing, window cleaning & gutter cleaning.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-brand-action fill-brand-action" />
                ))}
              </div>
              <span className="text-white/60 text-xs font-body">5.0 on Google</span>
            </div>
            {/* Google Business link */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-heading font-semibold tracking-wide text-brand-action transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(0,191,255,0.08)",
                border: "1px solid rgba(0,191,255,0.25)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Find Us on Google
            </a>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-white font-heading font-bold text-base tracking-[0.12em] uppercase mb-5"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-brand-action text-sm font-body transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-action/40 group-hover:bg-brand-action transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3
              className="text-white font-heading font-bold text-base tracking-[0.12em] uppercase mt-8 mb-5"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-brand-action text-sm font-body transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-action/40 group-hover:bg-brand-action transition-colors duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3
              className="text-white font-heading font-bold text-base tracking-[0.12em] uppercase mb-5"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Service Areas
            </h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <MapPin size={13} className="text-brand-action/60 shrink-0" />
                  <span className="text-white/55 text-sm font-body">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white font-heading font-bold text-base tracking-[0.12em] uppercase mb-5"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+18455877616"
                className="flex items-center gap-3 text-white/75 hover:text-brand-action transition-colors duration-200 group"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-brand-action/20"
                  style={{ background: "rgba(0,191,255,0.1)", border: "1px solid rgba(0,191,255,0.2)" }}
                >
                  <Phone size={14} className="text-brand-action" />
                </div>
                <div>
                  <div className="text-xs text-white/40 font-body tracking-wide mb-0.5">Phone</div>
                  <div className="text-sm font-body font-medium">+1 (845) 587-7616</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(0,191,255,0.1)", border: "1px solid rgba(0,191,255,0.2)" }}
                >
                  <MapPin size={14} className="text-brand-action" />
                </div>
                <div>
                  <div className="text-xs text-white/40 font-body tracking-wide mb-0.5">Location</div>
                  <div className="text-sm font-body text-white/75">Westchester, NY Area</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/30 text-xs font-body text-center">
            © {new Date().getFullYear()} Spotless Exterior Co. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-body">
            Westchester, NY · Est. 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
