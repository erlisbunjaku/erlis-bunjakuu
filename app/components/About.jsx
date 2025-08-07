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
          <motion.p
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="mb-10 max-w-2xl"
          >
            I’m passionate about building responsive, user-friendly web and
            mobile apps with clean, maintainable code. I enjoy solving problems
            and working closely with teams to create great experiences. I adapt
            quickly, collaborate well, and believe teamwork makes all the
            difference whether tackling challenges, sharing ideas, or having
            fun. Super friendly and always open to connect or collaborate!  &#128513;
          </motion.p>

          <ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6
          max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="border-[0.5px] border-gray-400
                rounded-xl p-3 cursor-pointer hover:bg-[#fcf4ff]  
                hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-7
                    mt-3"
                />
                <h3
                  className="my-4 font-semibold
                    text-gray-700"
                >
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </ul>

          <h4 className="mb-3 text-gray-700">Tools I use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center
                w-12 sm:w-14 aspect-square border border-gray-400 rounded-xl
                cursor-pointer
                hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image
                  src={tool}
                  alt="tool"
                  className="
                    w-5 sm:w-7"
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
