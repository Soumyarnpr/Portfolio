"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 16);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`section-shell flex items-center justify-between px-4 py-3 transition-all duration-300 ${
          scrolled || open ? "glass-panel" : "border border-transparent"
        }`}
      >
        <a href="#home" className="text-base font-bold text-baby-powder md:text-lg" onClick={closeMenu}>
          Welcome to my Portfolio<span className="text-orange-peel">.</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-baby-powder transition hover:bg-white/10 hover:text-orange-peel focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download="SOUMYA RANJAN PARIDA RESUME"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-orange-peel px-4 py-2 text-sm font-bold text-rich-black transition hover:bg-turquoise focus:outline-none focus-visible:ring-2 focus-visible:ring-baby-powder"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-baby-powder transition hover:text-orange-peel focus:outline-none focus-visible:ring-2 focus-visible:ring-turquoise md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          title={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="section-shell mt-3 md:hidden">
          <div className="glass-panel flex flex-col gap-2 p-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-4 py-3 text-lg font-semibold text-baby-powder transition hover:bg-white/10 hover:text-orange-peel"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download="SOUMYA RANJAN PARIDA RESUME"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-orange-peel px-4 py-3 text-lg font-bold text-rich-black transition hover:bg-turquoise"
              onClick={closeMenu}
            >
              <Download size={18} aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
