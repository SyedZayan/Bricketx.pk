// components/sections/About.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function About() {
  const floatVariants1: Variants = {
    animate: {
      y: [-8, 8, -8],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };
  
  const floatVariants2: Variants = {
    animate: {
      y: [8, -8, 8],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    // Reduced padding for mobile (py-16) and kept it large for desktop (lg:py-32)
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-[#ffffff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Reduced the gap on mobile so the image and text don't feel disconnected */}
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          
          {/* Left Side: Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            // Reduced margin to -50px so animations trigger properly on shorter mobile screens
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            {/* Scaled down max-width for mobile (320px) so decorations don't get cut off */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] aspect-square mx-auto">
              
              {/* Light Gray Background Accent - Pulled in slightly for mobile */}
              <div className="absolute top-[2%] right-[-2%] md:right-[-5%] w-[90%] h-[95%] bg-[#f8f9fa] rounded-[100px] -z-20 transform -rotate-3" />
              
              {/* Gold Crescent/Offset Circle - Pulled in slightly for mobile */}
              <div className="absolute top-[8%] left-[0%] md:left-[-4%] w-[85%] h-[85%] bg-gradient-to-br from-[#c39967] to-[#a88154] rounded-full -z-10 shadow-lg shadow-[#c39967]/20" />

              {/* Main Circular Image */}
              <div className="absolute top-[5%] right-[5%] w-[85%] h-[90%] rounded-full overflow-hidden border-[8px] md:border-[12px] border-[#ffffff] shadow-2xl z-10">
                <Image
                  src="/Banners/5.png"
                  alt="BricketX Tech Solutions Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* --- PREMIUM DECORATIVE ELEMENTS --- */}
              
              {/* Hollow Ring Top-Left */}
              <motion.div 
                variants={floatVariants1}
                animate="animate"
                // Adjusted positioning for mobile to stay within screen bounds
                className="absolute top-[35%] left-[0%] md:left-[-8%] w-10 h-10 md:w-12 md:h-12 rounded-full border-[4px] md:border-[5px] border-[#c39967] z-20 bg-transparent drop-shadow-md" 
              />
              
              {/* SVG Plus Sign Bottom-Left */}
              <motion.div 
                variants={floatVariants2}
                animate="animate"
                className="absolute bottom-[2%] left-[8%] md:left-[5%] text-[#c39967] z-20 drop-shadow-md"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="md:w-[28px] md:h-[28px]">
                  <path d="M12 2V22M2 12H22" />
                </svg>
              </motion.div>

              {/* SVG Plus Sign Middle-Right */}
              <motion.div 
                variants={floatVariants1}
                animate="animate"
                className="absolute top-[60%] right-[0%] md:right-[-8%] text-[#c39967] z-20 drop-shadow-md"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="md:w-[20px] md:h-[20px]">
                  <path d="M12 2V22M2 12H22" />
                </svg>
              </motion.div>

              {/* Zigzag Top-Center */}
              <motion.div 
                variants={floatVariants2}
                animate="animate"
                className="absolute top-[-5%] left-[25%] md:left-[30%] text-[#c39967] z-20 drop-shadow-md"
              >
                <svg width="40" height="14" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[50px] md:h-[18px]">
                  <path d="M2 10L8.5 2L15 10L21.5 2L28 10L34.5 2" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            {/* Subheading */}
            <div className="flex items-center gap-3 mb-4 md:mb-5">
              <span className="text-[#000000] font-bold tracking-[0.15em] uppercase text-[11px] md:text-xs">
                About Us
              </span>
              <div className="h-[2px] w-10 bg-[#c39967]" />
            </div>

            {/* Main Heading - Scaled down to 3xl for mobile so it breathes */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] leading-[1.2] lg:leading-[1.15] mb-5 md:mb-6 tracking-tight">
              Crafting Innovative Tech Solutions For BricketX.pk
            </h2>

            {/* Paragraphs - Adjusted bottom margins for a tighter mobile layout */}
            <p className="text-[#a6acb6] text-sm md:text-base mb-4 md:mb-6 leading-relaxed font-normal">
              At BricketX, we specialize in delivering cutting-edge technological solutions that drive digital transformation. Our expert team is dedicated to building robust infrastructures and seamless digital experiences tailored to your specific business needs.
            </p>
            
            <p className="text-[#a6acb6] text-sm md:text-base mb-8 md:mb-10 leading-relaxed font-normal">
              We combine industry-standard practices with innovative execution, ensuring your brand stays ahead of the curve in a rapidly evolving digital landscape. Your success is our ultimate blueprint.
            </p>

            {/* Action Button */}
            <button className="px-8 py-3.5 bg-[#c39967] border border-[#c39967] text-[#ffffff] font-semibold rounded-full hover:bg-transparent hover:text-[#c39967] transition-all duration-300 uppercase tracking-widest text-[11px] md:text-xs shadow-lg shadow-[#c39967]/20">
              Read More +
            </button>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}