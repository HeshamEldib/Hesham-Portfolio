"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-14rem)] flex items-center py-10 md:py-0"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 1. Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <span className="text-main font-medium tracking-wider mb-2 text-lg">
            👋 Welcome to my portfolio
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="font-caramel text-main text-5xl md:text-7xl block mt-2">
              Hesham Eldib
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-8">
            Front-End Developer{" "}
            <span className="text-main">React & Next.js</span>
          </h2>

          <p className="text-gray-500 max-w-lg mb-10 text-lg leading-relaxed">
            I build accessible, pixel-perfect, and performant web applications.
            Passionate about crafting smooth user experiences using modern
            technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-8 py-3.5 rounded-full flex items-center gap-2 hover:bg-main transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Contact Me{" "}
              <Send
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <a
              href="/Hesham Eldib Front-End Web Developer Resume.pdf"
              download
              className="group bg-white text-gray-900 border border-gray-300 px-8 py-3.5 rounded-full flex items-center gap-2 hover:border-main hover:text-main transition-colors duration-300 w-full sm:w-auto justify-center"
            >
              Download CV{" "}
              <Download
                size={18}
                className="group-hover:translate-y-1 transition-transform"
              />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-main transition-colors transform hover:scale-110 duration-300"
                aria-label={link.label}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* 2. Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end relative"
        >
          {/* خلفية زخرفية (دائرة) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-orange-100 rounded-full blur-3xl -z-10 opacity-70"></div>

          <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] border-4 border-white shadow-2xl rounded-full overflow-hidden bg-gray-100">
            {/* تأكد أن اسم الصورة مطابق للملف الموجود في public */}
            <Image
              src="/H68.png"
              alt="Hesham Eldib"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
