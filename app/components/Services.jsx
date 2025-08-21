import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
        {serviceData.map(({ icon, title, description,}, index) => (
      <div
  key={index}
  className="
    group
    border border-gray-200 
    rounded-2xl 
    p-8 
    bg-white 
    shadow-sm 
    hover:shadow-lg 
    hover:border-purple-300
    cursor-pointer 
    transform 
    hover:-translate-y-2 
    transition-all 
    duration-300
  "
>
  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-50 mb-6 group-hover:bg-purple-100 transition">
    <Image alt="Services" src={icon} className="w-8 h-8 object-contain" />
  </div>

  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition">
    {title}
  </h3>

  <p className="text-sm text-gray-600 leading-relaxed">
    {description}
  </p>
</div>

        ))}
      </motion.div>
    </div>
  );
};

export default Services;
