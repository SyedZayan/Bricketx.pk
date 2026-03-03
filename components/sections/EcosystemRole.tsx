// components/sections/EcosystemRole.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Globe2, Settings, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Global Coordination",
    description: "Serving as the central hub that connects and synchronizes BricketX's worldwide operations, ensuring seamless communication across all time zones.",
    icon: Globe2,
  },
  {
    title: "Flawless Execution",
    description: "Managing the day-to-day technological processes and backend workflows that allow investors to interact with our platform without friction.",
    icon: Settings,
  },
  {
    title: "Secure Infrastructure",
    description: "Maintaining and fortifying the data systems, servers, and security protocols that protect the integrity of the entire BricketX tokenization ecosystem.",
    icon: ShieldCheck,
  },
];

export default function EcosystemRole() {
  // Staggered animation for the cards to slide up one by one
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="ecosystem" className="py-24 md:py-32 bg-[#fafafa]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header (Centered exactly like the reference image) */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          
          {/* Overline with Side Lines */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1.5px] w-10 bg-[#c39967]" />
            <span className="text-[#000000] font-bold tracking-[0.15em] uppercase text-[11px] md:text-xs">
              Our Role
            </span>
            <div className="h-[1.5px] w-10 bg-[#c39967]" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#000000] leading-[1.15] tracking-tight max-w-2xl"
          >
            The Operational Engine <br className="hidden md:block" />
            Powering The Ecosystem
          </motion.h2>
          
        </div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // group class allows us to trigger child animations on hover
              className="group bg-[#ffffff] rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-transparent hover:border-[#c39967]/10 flex flex-col h-full"
            >
              
              {/* Card Header: Icon and Title Side-by-Side */}
              <div className="flex items-center gap-5 mb-8">
                {/* Icon Container (Replacing the Red from SS with Gold) */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#c39967] flex items-center justify-center shrink-0 shadow-lg shadow-[#c39967]/20 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-[#ffffff]" strokeWidth={2} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#000000] leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Description (Using the exact font properties from About.tsx) */}
              <p className="text-[#a6acb6] text-sm md:text-base leading-relaxed font-normal mb-8 flex-grow">
                {feature.description}
              </p>

              {/* Card Footer: Action Link */}
              <button className="flex items-center gap-2 text-[#000000] font-bold text-[11px] md:text-xs uppercase tracking-widest group-hover:text-[#c39967] transition-colors duration-300 w-fit mt-auto">
                Learn More 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}