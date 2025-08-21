import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="text-center"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center text-5xl"
      >
        About me
      </motion.h2>

      <div
        className="flex w-full flex-col lg:flex-row items-center
        gap-20 my-20"
      >
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile_img}
            alt="Me image"
            className="w-full rounded-3xl"
          />
        </div>

        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="flex-1"
>
  {/* Intro Text */}
  <motion.p
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
    className="mb-6 max-w-2xl text-gray-700 leading-relaxed text-base"
  >
    I’m passionate about building responsive, user-friendly web and mobile apps
    with clean, maintainable code. I enjoy solving problems and working closely
    with teams to create great experiences. I adapt quickly, collaborate well,
    and believe teamwork makes all the difference — whether tackling challenges,
    sharing ideas, or having fun. Super friendly and always open to connect or
    collaborate! 😁
  </motion.p>

  {/* Services / Info List */}
  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
    {infoList.map(({ icon, title, description }, index) => (
      <motion.li
        key={index}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: index * 0.05 }}
        className="
          group
          border border-gray-200
          rounded-xl
          p-4
          bg-white
          shadow-sm
          hover:shadow-md
          hover:border-purple-300
          cursor-pointer
          transform
          hover:-translate-y-1
          transition-all duration-300
        "
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-50 group-hover:bg-purple-100 transition mb-3">
          <Image src={icon} alt={title} className="w-5 h-5 object-contain" />
        </div>
        <h3 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 text-xs leading-snug">{description}</p>
      </motion.li>
    ))}
  </ul>

  {/* Tools */}
  <h4 className="mt-6 mb-3 text-gray-800 font-medium">Tools I use</h4>
  <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
    {toolsData.map((tool, index) => (
      <motion.li
        key={index}
        whileHover={{ scale: 1.05 }}
        className="
          flex items-center justify-center
          w-10 h-10 sm:w-12 sm:h-12
          border border-gray-200
          rounded-lg
          bg-white
          shadow-sm
          cursor-pointer
          hover:shadow-md
          transition-all duration-300
        "
      >
        <Image src={tool} alt="tool" className="w-4 sm:w-5" />
      </motion.li>
    ))}
  </ul>
</motion.div>

      </div>
    </div>
  );
};

export default About;
