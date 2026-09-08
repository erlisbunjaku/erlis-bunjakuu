"use client";

import BrandMark from "./BrandMark";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-gold/20">
      <div className="site-wrap py-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BrandMark size={40} />
          <span className="font-[family-name:var(--font-syne)] text-lg tracking-wide text-cream">
            Erlis Bunjaku
          </span>
        </div>
        <a
          href="mailto:erlisbunjaku54@gmail.com"
          className="inline-flex items-center gap-2 text-stone hover:text-gold transition-colors duration-300 cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="5" width="18" height="14" rx="1" />
            <path d="M3 7l9 7 9-7" />
          </svg>
          erlisbunjaku54@gmail.com
        </a>
        <p className="mt-4 font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.22em] uppercase text-gold">
          Data &amp; AI Associate, Engineering · Agilyti
        </p>
      </div>

      <div className="site-wrap text-center sm:flex items-center justify-between border-t border-gold/15 py-6 text-sm text-stone">
        <p>&copy; {currentYear} Erlis Bunjaku</p>
        <ul className="flex items-center gap-8 justify-center mt-4 sm:mt-0 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.16em] uppercase">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/erlisbunjaku"
              className="hover:text-gold transition-colors duration-300 cursor-pointer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/erlis-bunjaku/"
              className="hover:text-gold transition-colors duration-300 cursor-pointer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/erlisbunjakuu/?next=%2F"
              className="hover:text-gold transition-colors duration-300 cursor-pointer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
