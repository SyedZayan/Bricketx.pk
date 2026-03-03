// components/sections/EcosystemRole.tsx
"use client";

import { motion } from "framer-motion";
import { Globe2, Settings, ShieldCheck } from "lucide-react";

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
  return (
    <section id="ecosystem" className="py-24 bg-gray-50 border-t border-gray-100">
      {/* Container matching our Envato-style full-width padding */}
      <div className="w-full mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-bricket-dark tracking-tight mb-6"
          >
            Our Role In The <span className="text-bricket-gold">Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            While BricketX operates globally, BricketX Pakistan is the engine room. We ensure everything runs flawlessly, providing the vital technological support that powers the future of real estate tokenization.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="group bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:border-bricket-gold/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-bricket-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-bricket-light flex items-center justify-center mb-6 group-hover:bg-bricket-gold/10 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-bricket-gold" />
                </div>
                <h3 className="text-xl font-bold text-bricket-dark mb-4 group-hover:text-bricket-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}