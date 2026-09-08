"use client";

import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#path", label: "Path" },
  { href: "#focus", label: "Focus" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 left-0 w-full z-[300] transition-colors duration-300 ${
          isScroll || open
            ? "bg-ink/95 backdrop-blur-md border-b border-gold/20"
            : "bg-ink/80 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <div className="site-wrap py-3 sm:py-4 flex items-center justify-between gap-3">
          <a
            href="#top"
            onClick={closeMenu}
            className="flex items-center gap-3 min-w-0 cursor-pointer"
          >
            <BrandMark size={40} />
            <span className="hidden sm:block min-w-0">
              <span className="block font-[family-name:var(--font-syne)] text-sm tracking-[0.22em] uppercase text-cream truncate">
                Erlis Bunjaku
              </span>
              <span className="block font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.18em] uppercase text-gold">
                Data &amp; AI · Engineering
              </span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.18em] uppercase text-stone">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2 border border-gold/50 text-[11px] tracking-[0.18em] uppercase font-[family-name:var(--font-geist-mono)] text-gold hover:bg-gold hover:text-ink transition-all duration-300 cursor-pointer"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={toggleMenu}
              className="lg:hidden relative z-[310] inline-flex items-center justify-center w-11 h-11 border border-gold/50 text-gold cursor-pointer bg-panel pointer-events-auto"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 7h16M4 12h16M4 17h10" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[290] bg-ink/75 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <aside
        id="mobile-menu"
        className={`fixed top-0 right-0 z-[305] h-[100dvh] w-[min(18rem,86vw)] bg-panel border-l border-gold/25 transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gold/15">
          <p className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.22em] uppercase text-gold">
            Menu
          </p>
          <button
            type="button"
            onClick={closeMenu}
            className="p-2 text-gold cursor-pointer border border-gold/30"
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-1 px-4 py-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-3 font-[family-name:var(--font-geist-mono)] text-xs tracking-[0.2em] uppercase text-cream hover:text-gold hover:bg-gold/10 transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
