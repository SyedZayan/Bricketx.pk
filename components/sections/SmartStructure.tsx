// components/sections/SmartStructure.tsx
"use client";

import { motion } from "framer-motion";
import { TrendingUp, Lock, Zap, Smartphone } from "lucide-react";

const techFeatures = [
  {
    title: "Bank-Grade Security",
    description: "Enterprise-level encryption and secure backend protocols keeping global assets completely safe.",
    icon: Lock,
  },
  {
    title: "High-Speed Execution",
    description: "Optimized server architecture ensuring instant transactions and real-time data syncing.",
    icon: Zap,
  },
  {
    title: "Seamless Mobile Integration",
    description: "Flawless API connectivity that powers the BricketX mobile experience for investors worldwide.",
    icon: Smartphone,
  },
  {
    title: "Scalable Growth",
    description: "A flexible tech stack built to handle exponential increases in user volume and tokenized assets.",
    icon: TrendingUp,
  },
];

export default function SmartStructure() {
  return (
    <section id="infrastructure" className="relative py-24 md:py-32 bg-bricket-dark overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-bricket-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Messaging */}
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-bricket-gold font-bold tracking-wider uppercase text-sm mb-4 block"
            >
              The Technology Advantage
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              Smart Structure, <br/>
              <span className="text-bricket-gold">Stronger Investments</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 mb-10 leading-relaxed"
            >
              As the operational backbone, we don't just maintain systems; we engineer the smart structures that make confident, high-yield global investments possible. Our infrastructure is built for reliability, speed, and absolute security.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <button className="px-8 py-3.5 bg-bricket-gold text-white font-bold rounded-md hover:bg-white hover:text-bricket-dark transition-colors duration-300">
                DM to Get Started
              </button>
            </motion.div>
          </div>

          {/* Right Column: Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {techFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-bricket-gold/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-5 group-hover:bg-bricket-gold/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-bricket-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-bricket-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}