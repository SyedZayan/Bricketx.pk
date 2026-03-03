// components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32 md:pt-32 md:pb-40">
      
      {/* Abstract Tech/Infrastructure Background Pattern (Pure CSS) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern representing 'structure' and 'backend' */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        {/* Soft gold architectural glow at the top */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-bricket-gold/10 to-transparent blur-3xl -z-10" />
      </div>

      {/* Main Content Container matching the Navbar's wide padding */}
      <div className="relative z-10 w-full mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
          >
            <Server className="w-4 h-4 text-bricket-gold" />
            <span className="text-bricket-gold font-bold tracking-wider uppercase text-xs md:text-sm">
              Powering The Systems Behind The Scenes
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-bricket-dark tracking-tight mb-8 leading-[1.1]"
          >
            The Operational <span className="text-bricket-gold relative whitespace-nowrap">
              Backbone
              {/* Subtle underline SVG for emphasis on 'Backbone' */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-bricket-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span> That Keeps BricketX Moving
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We provide the essential technological infrastructure, coordination, and backend support that powers all platform services, ensuring seamless and transparent operations for our global partners.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-bricket-dark text-white font-bold rounded-lg hover:bg-bricket-gold transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-bricket-dark/10">
              Explore Our Infrastructure
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-bricket-dark border border-gray-200 font-bold rounded-lg hover:border-bricket-gold hover:text-bricket-gold transition-colors duration-300 flex items-center justify-center">
              Contact Support Team
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}