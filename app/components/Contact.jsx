import { assets } from "@/assets/assets";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [result, setResult] = useState("");
  const formRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setResult("Sending...");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_hvjkyqe",    
        "template_vgoie1j",   
        formRef.current,
        "ktzDfW8JnYUXzToi7"    
      )
      .then(
        () => {
          setResult("Message sent successfully");
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setResult("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] mt-20'
    >
      <motion.h4
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-center text-5xl"
      >
        Get in touch
      </motion.h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form ref={formRef} onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your full name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            name="email"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          name="message"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer"
        >
          Send message
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </button>

        <p className="mt-3 text-center">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
