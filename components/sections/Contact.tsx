// components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    // ADDED id="contact" HERE
    <section id="contact" className="relative w-full py-20 md:py-32 bg-[#ffffff]">
      
      {/* Background Dark Split Layer */}
      <div className="absolute top-0 left-0 w-full h-[65%] bg-[#000000] z-0 overflow-hidden">
        {/* Left Side Decorative Diamonds */}
        <div className="absolute top-[10%] left-[-8%] md:left-[-5%] w-48 h-48 md:w-80 md:h-80 border-[10px] md:border-[16px] border-[#c39967] rotate-45 opacity-80" />
        <div className="absolute top-[25%] left-[-4%] md:left-[-2%] w-48 h-48 md:w-80 md:h-80 border-[10px] md:border-[16px] border-[#c39967] rotate-45 opacity-80" />
        
        {/* Right Side Decorative Diamonds */}
        <div className="absolute bottom-[20%] right-[-8%] md:right-[-5%] w-48 h-48 md:w-80 md:h-80 border-[10px] md:border-[16px] border-[#c39967] rotate-45 opacity-80" />
        <div className="absolute bottom-[5%] right-[-4%] md:right-[-2%] w-48 h-48 md:w-80 md:h-80 border-[10px] md:border-[16px] border-[#c39967] rotate-45 opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Main Content Flex Box */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-8 pt-10 md:pt-16">
          
          {/* Left Side: Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-[#ffffff] p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col justify-center"
          >
            {/* Subheading */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#000000] font-bold tracking-[0.15em] uppercase text-[11px] md:text-xs">
                Message
              </span>
              <div className="h-[2px] w-8 bg-[#c39967]" />
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] leading-[1.2] mb-8 tracking-tight capitalize">
              Grow your business, <br /> get in touch
            </h2>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Name Input */}
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Name Here"
                    className="w-full pl-4 pr-12 py-3.5 rounded-lg border border-gray-200 text-[#000000] placeholder-[#a6acb6] text-sm focus:border-[#c39967] focus:ring-1 focus:ring-[#c39967] outline-none transition-all bg-transparent"
                  />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c39967]" />
                </div>

                {/* Contact Input */}
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="Contact Here"
                    className="w-full pl-4 pr-12 py-3.5 rounded-lg border border-gray-200 text-[#000000] placeholder-[#a6acb6] text-sm focus:border-[#c39967] focus:ring-1 focus:ring-[#c39967] outline-none transition-all bg-transparent"
                  />
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c39967]" />
                </div>

              </div>

              {/* Email Input */}
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address Here"
                  className="w-full pl-4 pr-12 py-3.5 rounded-lg border border-gray-200 text-[#000000] placeholder-[#a6acb6] text-sm focus:border-[#c39967] focus:ring-1 focus:ring-[#c39967] outline-none transition-all bg-transparent"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c39967]" />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea 
                  placeholder="Message Here" 
                  rows={4}
                  className="w-full pl-4 pr-12 py-3.5 rounded-lg border border-gray-200 text-[#000000] placeholder-[#a6acb6] text-sm focus:border-[#c39967] focus:ring-1 focus:ring-[#c39967] outline-none transition-all resize-none bg-transparent"
                />
                <Send className="absolute right-4 top-6 -translate-y-1/2 w-4 h-4 text-[#c39967] opacity-60" />
              </div>

              {/* Submit Button */}
              <button className="w-full py-4 mt-2 bg-[#c39967] text-[#ffffff] font-bold uppercase tracking-widest text-[13px] rounded-lg border border-[#c39967] hover:bg-transparent hover:text-[#c39967] transition-all duration-300 shadow-lg shadow-[#c39967]/20">
                Submit
              </button>

            </form>
          </motion.div>

          {/* Right Side: Image Container (HIDDEN ON MOBILE) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block w-full lg:w-1/2 min-h-[400px] lg:min-h-auto relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image 
              src="/Banners/3.webp" 
              alt="People looking at a tablet" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#000000]/10 mix-blend-overlay z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}