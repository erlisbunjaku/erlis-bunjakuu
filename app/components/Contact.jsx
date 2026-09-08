"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeIn, fadeUp } from "@/app/lib/motion";

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
          setResult("Message sent.");
          formRef.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setResult("Failed to send. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="site-wrap py-20 sm:py-24 scroll-mt-24">
      <div className="gold-rule mb-14" />
      <motion.p
        {...fadeIn}
        className="text-center font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.32em] uppercase text-gold"
      >
        Contact
      </motion.p>
      <motion.h2
        {...fadeUp}
        className="text-center text-4xl sm:text-5xl font-[family-name:var(--font-syne)] font-semibold mt-3"
      >
        Get in touch
      </motion.h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-stone leading-relaxed">
        For work or questions, write below.
      </p>

      <form ref={formRef} onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          <input
            type="text"
            placeholder="Full name"
            required
            className="w-full p-3.5 outline-none border border-gold/25 bg-panel text-cream placeholder:text-stone/70 focus:border-gold transition-colors duration-300"
            name="name"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3.5 outline-none border border-gold/25 bg-panel text-cream placeholder:text-stone/70 focus:border-gold transition-colors duration-300"
            name="email"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Message"
          required
          className="w-full p-4 outline-none border border-gold/25 bg-panel text-cream placeholder:text-stone/70 focus:border-gold mb-6 transition-colors duration-300"
          name="message"
        ></textarea>

        <button
          type="submit"
          className="gold-btn py-3 px-8 w-max flex items-center gap-2 mx-auto text-sm font-semibold tracking-wide cursor-pointer"
        >
          Send message
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>

        <p className="mt-4 text-center text-sm text-gold">{result}</p>
      </form>
    </section>
  );
};

export default Contact;
