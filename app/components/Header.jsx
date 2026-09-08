"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { ease } from "@/app/lib/motion";

const stack = ["Python", "SQL", "TypeScript", "React", "Databricks"];

const Header = () => {
  return (
    <header
      id="top"
      className="relative min-h-[calc(100svh-4.5rem)] flex items-center py-16"
    >
      <div className="site-wrap relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
        <div className="min-w-0">
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 sm:w-12 bg-gold shrink-0" />
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-gold">
              Data &amp; AI Associate, Engineering
            </p>
          </motion.div>

          <motion.h1
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="font-[family-name:var(--font-syne)] text-5xl sm:text-6xl lg:text-7xl leading-[0.95] font-bold gold-text"
          >
            Erlis
            <br />
            Bunjaku
          </motion.h1>

          <motion.p
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            className="mt-6 text-lg sm:text-xl text-cream leading-relaxed"
          >
            At <span className="gold-text font-semibold">Agilyti</span>.
          </motion.p>

          <motion.p
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease }}
            className="mt-4 font-[family-name:var(--font-geist-mono)] text-[11px] sm:text-xs tracking-[0.14em] sm:tracking-[0.2em] uppercase text-gold break-words"
          >
            {stack.join("  ·  ")}
          </motion.p>

          <motion.div
            initial={{ y: 8 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-9"
          >
            <a
              href="#work"
              className="gold-btn px-8 py-3 text-center text-sm font-semibold tracking-wide cursor-pointer"
            >
              Selected work
            </a>
            <a
              href="#about"
              className="px-8 py-3 text-center text-sm tracking-wide border border-gold/40 text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300 cursor-pointer"
            >
              About me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md min-w-0"
        >
          <div className="absolute -inset-3 border border-gold/20 pointer-events-none hidden sm:block" />
          <div className="relative overflow-hidden border border-gold/40">
            <Image
              src={assets.profile_img}
              alt="Erlis Bunjaku"
              className="w-full aspect-square object-cover object-[center_18%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase text-cream">
              Vushtrri, Kosovo
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
