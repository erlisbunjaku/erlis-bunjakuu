"use client";

import { serviceData, stackData, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { ease, fadeIn, fadeUp } from "@/app/lib/motion";

const Services = () => {
  return (
    <section id="focus" className="site-wrap py-20 sm:py-24 scroll-mt-24">
      <motion.p
        {...fadeIn}
        className="text-center font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.32em] uppercase text-gold"
      >
        Focus
      </motion.p>
      <motion.h2
        {...fadeUp}
        className="text-center text-4xl sm:text-5xl font-[family-name:var(--font-syne)] font-semibold mt-3"
      >
        Software, data, and AI
      </motion.h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-stone leading-relaxed">
        Python, SQL, TypeScript, React, and Databricks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {serviceData.map(({ index, title, description }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.08, ease }}
            className="panel p-6 sm:p-8 cursor-pointer"
          >
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.24em] text-gold mb-5">
              {index}
            </p>
            <h3 className="font-[family-name:var(--font-syne)] text-2xl text-cream mb-3">
              {title}
            </h3>
            <p className="text-sm text-stone leading-relaxed">{description}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.28em] uppercase text-gold mb-5">
          Stack
        </h3>
        <ul className="flex flex-wrap gap-3">
          {stackData.map((item) => (
            <li
              key={item.name}
              className="border border-gold/30 px-4 py-2 text-sm text-cream transition-colors duration-300 hover:border-gold cursor-pointer"
            >
              <span className="font-medium">{item.name}</span>
              <span className="ml-3 font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.16em] uppercase text-gold">
                {item.layer}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 mb-4 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.28em] uppercase text-gold">
          Tools
        </h3>
        <ul className="flex flex-wrap items-center gap-3">
          {toolsData.map((tool, index) => (
            <li
              key={index}
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border border-gold/20 bg-raised/80 transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <Image
                src={tool}
                alt="tool"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
