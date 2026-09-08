"use client";

import { assets, pathData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { ease, fadeIn, fadeUp } from "@/app/lib/motion";

const logos = {
  agilyti: { src: assets.agilyti_logo, light: false },
  unity: { src: assets.unity_logo, light: false },
  primeline: { src: assets.primeline_logo, light: true },
};

const Path = () => {
  return (
    <section id="path" className="site-wrap py-20 sm:py-24 scroll-mt-24">
      <div className="gold-rule mb-14" />
      <motion.p
        {...fadeIn}
        className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.32em] uppercase text-gold"
      >
        Experience
      </motion.p>
      <motion.h2
        {...fadeUp}
        className="mt-3 text-4xl sm:text-5xl font-[family-name:var(--font-syne)] font-semibold max-w-2xl"
      >
        Where I work
      </motion.h2>

      <div className="mt-12 relative">
        <div className="hidden md:block absolute left-[7.25rem] top-3 bottom-3 w-px bg-gold/25" />
        <ol className="space-y-6">
          {pathData.map((item, index) => {
            const logo = logos[item.logo];
            return (
              <motion.li
                key={item.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease }}
                className="grid md:grid-cols-[7rem_1fr] gap-4 md:gap-10 items-start"
              >
                <p className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.2em] uppercase text-gold pt-2 md:pt-6">
                  {item.period}
                </p>
                <div className="panel p-5 sm:p-7 flex items-start gap-4 cursor-pointer">
                  {logo && (
                    <span
                      className={`shrink-0 h-12 w-12 overflow-hidden border border-gold/30 flex items-center justify-center ${
                        logo.light ? "bg-white p-1" : ""
                      }`}
                    >
                      <Image
                        src={logo.src}
                        alt={item.org}
                        className={logo.light ? "h-7 w-auto object-contain" : "h-full w-full object-cover"}
                      />
                    </span>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl text-cream">
                      {item.org}
                    </h3>
                    <p className="mt-1 text-gold text-sm">{item.role}</p>
                    <p className="mt-3 text-stone leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Path;
