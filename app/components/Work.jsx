import { assets, workData, techLogos } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div id="work" className="w-full px-[8%] py-12 scroll-mt-20 mt-10">
      {/* Section Header */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-center mb-1 text-lg tracking-wide text-black-800"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-center text-5xl sm:text-4xl font-sm text-black-800"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-2xl mx-auto mt-3 mb-8 text-gray-600 text-sm leading-relaxed"
      >
        A selection of my recent projects, showcasing skills in modern front-end
        development.
      </motion.p>

      {/* Portfolio Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col"
          >
            {/* Project Card */}
            <div className="relative overflow-hidden rounded-t-lg">
              <div
                className="aspect-[3/2] bg-no-repeat bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-t-lg">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      className="bg-white/90 backdrop-blur-sm rounded-md p-2 shadow-sm hover:scale-105 transition"
                    >
                      <Image
                        src={assets.send_icon}
                        alt="view project"
                        className="w-4 h-4"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200 my-2" />

            {/* Project Info */}
            <div className="px-3 flex-1 flex flex-col">
              <h3 className="text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mt-1">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {Array.isArray(project.technologies) ? (
                  project.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-100 shadow-sm hover:shadow-md transition-all duration-300 p-1"
                      title={tech}
                    >
                      <Image
                        src={techLogos[tech]}
                        alt={tech}
                        className="object-contain w-full h-full p-1"
                      />
                    </div>
                  ))
                ) : (
                  <div
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300 p-1"
                    title={project.technologies}
                  >
                    <Image
                      src={techLogos[project.technologies]}
                      alt={project.technologies}
                      className="object-contain w-full h-full p-1"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200 mt-3" />

            {/* Visit Project Button */}
            <div className="p-3">
              <a
                href={project.link}
                target="_blank"
                className="block text-center text-xs font-medium text-white bg-black px-3 py-2 rounded-md shadow-sm 
               hover:bg-white hover:text-black 
               transition-colors duration-300"
              >
                Visit Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
