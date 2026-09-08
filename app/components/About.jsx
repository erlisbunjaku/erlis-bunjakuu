"use client";

import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { ease, fadeIn, fadeUp } from "@/app/lib/motion";

const About = () => {
  return (
    <section id="about" className="site-wrap py-20 sm:py-24 scroll-mt-24">
      <motion.p
        {...fadeIn}
        className="font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.32em] uppercase text-gold text-center"
      >
        About
      </motion.p>
      <motion.h2
        {...fadeUp}
        className="mt-3 text-center text-4xl sm:text-5xl font-[family-name:var(--font-syne)] font-semibold"
      >
        Data &amp; AI Associate, Engineering
      </motion.h2>

      <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="w-full max-w-sm shrink-0"
        >
          <div className="relative border border-gold/35 p-2">
            <Image
              src={assets.profile_img}
              alt="Erlis Bunjaku"
              className="w-full aspect-square object-cover object-[center_18%]"
            />
          </div>
        </motion.div>

        <motion.div
          {...fadeIn}
          className="flex-1 w-full"
        >
          <p className="mb-6 max-w-2xl text-stone leading-relaxed text-base sm:text-lg">
            I am a Data &amp; AI Associate, Engineering at Agilyti. My work
            sits across software, data, and AI — Python, SQL, TypeScript,
            React, and Databricks.
          </p>
          <p className="mb-10 max-w-2xl text-stone leading-relaxed">
            Before Agilyti I was a frontend developer at PrimeLine. I came
            through Unity Tech Hub.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {infoList.map(({ title, description }, index) => (
              <motion.li
                key={title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08, ease }}
                className="panel p-5 cursor-pointer"
              >
                <p className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-[0.22em] uppercase text-gold mb-2">
                  {title}
                </p>
                <p className="text-sm text-cream leading-snug">{description}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
