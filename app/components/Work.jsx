"use client";

import { assets, workData, techLogos } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { ease, fadeIn, fadeUp } from "@/app/lib/motion";

const Work = () => {
  return (
    <section id="work" className="site-wrap py-20 sm:py-24 scroll-mt-24">
      <div className="gold-rule mb-14" />
      <motion.p
        {...fadeIn}
        className="text-center font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.32em] uppercase text-gold"
      >
        Selected work
      </motion.p>
      <motion.h2
        {...fadeUp}
        className="text-center text-4xl sm:text-5xl font-[family-name:var(--font-syne)] font-semibold mt-3"
      >
        Projects
      </motion.h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-stone leading-relaxed">
        Client platforms and product builds.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {workData.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.3), ease }}
            className="group panel flex flex-col overflow-hidden cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <div
                className="aspect-[3/2] bg-no-repeat bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.disabled ? (
                      <span className="bg-ink/90 text-stone text-xs tracking-wide px-3 py-1 border border-gold/20">
                        Offline
                      </span>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="inline-flex items-center justify-center w-10 h-10 bg-gold text-ink"
                      >
                        <Image
                          src={assets.send_icon}
                          alt=""
                          className="w-4 h-4"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 pt-5 flex-1 flex flex-col">
              <h3 className="font-[family-name:var(--font-syne)] text-xl text-cream group-hover:text-gold transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-stone text-sm mt-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {Array.isArray(project.technologies) &&
                  project.technologies.map((tech) =>
                    techLogos[tech] ? (
                      <div
                        key={tech}
                        className="w-9 h-9 flex items-center justify-center bg-raised border border-gold/15"
                        title={tech}
                      >
                        <Image
                          src={techLogos[tech]}
                          alt={tech}
                          className="object-contain w-full h-full p-1.5"
                        />
                      </div>
                    ) : null
                  )}
              </div>
            </div>

            <div className="p-5 pt-4 mt-auto">
              {project.disabled ? (
                <button
                  disabled
                  className="w-full text-center text-xs tracking-wide text-stone bg-raised px-3 py-2.5 border border-gold/10 cursor-not-allowed"
                >
                  Currently not available
                </button>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-xs tracking-[0.16em] uppercase font-[family-name:var(--font-geist-mono)] text-ink gold-btn px-3 py-2.5 cursor-pointer"
                >
                  Visit project
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Work;
