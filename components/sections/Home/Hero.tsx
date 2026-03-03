// components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#000000] overflow-hidden pt-20">
      
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Banners/1.png"
          alt="Mining Infrastructure"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* Uniform Dark Overlay */}
      <div className="absolute inset-0 bg-[#000000]/60 z-0" />

      {/* Right Side Geometric Shapes - The BricketX "Double X" */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] z-0 overflow-hidden pointer-events-none hidden md:block opacity-90">
        
        {/* Master Anchor Box for the X */}
        <div className="absolute top-1/2 right-[-50%] w-[1000px] h-[1000px] -translate-y-1/2 opacity-90">
          
          {/* --- Ascending Axis ( / ) --- */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 -rotate-45">
            <div className="w-[150%] h-[60px] bg-[#c39967] shadow-2xl" />
            <div className="w-[150%] h-[60px] bg-[#c39967] shadow-2xl" />
          </div>

          {/* --- Descending Axis ( \ ) --- */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 rotate-45">
            <div className="w-[150%] h-[60px] bg-[#c39967] shadow-2xl" />
            <div className="w-[150%] h-[60px] bg-[#c39967] shadow-2xl" />
          </div>
          
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20">
        <div className="max-w-[600px]">
          
          {/* Subheading */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="text-[#ffffff] font-bold tracking-[0.15em] uppercase text-[11px] md:text-xs drop-shadow-md">
              Solutions
            </span>
            <div className="h-[2px] w-8 bg-[#c39967] shadow-sm" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#ffffff] leading-[1.1] mb-6 tracking-tight drop-shadow-lg"
          >
            Where Strategy <br />
            Meets <br className="hidden md:block" />
            <span className="bg-[#c39967] px-3 py-1 inline-block mt-2 text-[#ffffff] shadow-lg">Execution</span>
          </motion.h1>

          {/* Paragraph - Styled for maximum premium readability */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#f8f9fa] text-base md:text-lg mb-10 max-w-[500px] leading-relaxed md:leading-[1.8] font-medium drop-shadow-md"
          >
            We have been operating for over a decade, providing top-notch services to our clients and building a strong track record in the industry.
          </motion.p>

          {/* Actions Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-10"
          >
            {/* Button */}
            <button className="px-8 py-3.5 bg-transparent border border-[#c39967] text-[#ffffff] font-semibold rounded-full hover:bg-[#c39967] transition-all duration-300 uppercase tracking-widest text-[11px] md:text-xs shadow-lg hover:shadow-xl">
              Discover More +
            </button>

           

          </motion.div>

        </div>
      </div>
    </section>
  );
}