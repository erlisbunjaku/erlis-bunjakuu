import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20 mt-8">
      <motion.h4
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="text-center mb-2 text-lg"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center text-5xl"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        I am a frontend developer from Vushtrri, Kosovo with 2 years of
        experience.
      </motion.p>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="
        border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-color[#fcf4ff7]
        hover:-translate-y-1 duration-500"
          >
            <Image alt="Services" src={icon} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image alt="arrow" src={assets.right_arrow} className="w-4" />
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
