import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20 mt-16">
      <motion.h4
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-center mb-2 text-lg"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-center text-5xl"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
        initial={{ skewX: -10, opacity: 0 }}
        whileInView={{ skewX: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            {/* Project Image Container */}
            <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
              <div
                className="aspect-[3/3] bg-no-repeat bg-cover bg-center rounded-xl 
                group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <a href={project.link} target="_blank">
                      <Image
                        src={assets.send_icon}
                        alt="view project"
                        className="w-6 h-6"
                      />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="mt-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {Array.isArray(project.technologies)
                ? project.technologies.map((tech, i) => (
                  <span
                  key={i}
                  className="px-3 py-1 bg-purple-100 text-black-700 text-xs rounded-full font-medium">
                    {tech}
                    
                  </span>
                ))
                :(
                  <span className="px-3 py-1 bg-purple-100 text-black-700 text-xs rounded-full font-medium">
                    {project.technologies}
                  </span>
                )
                }
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-12"
      >
      </motion.div>
    </div>
  );
};

export default Work;
