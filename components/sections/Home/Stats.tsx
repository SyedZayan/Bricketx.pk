// components/sections/Stats.tsx
"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Reusable Counter Sub-component
const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.5, // 2.5 seconds to count up
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default function Stats() {
  const statsData = [
    {
      id: 1,
      endValue: 95,
      suffix: "%",
      label: "Success Rate",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[28px] md:h-[28px]">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
    {
      id: 2,
      endValue: 10,
      suffix: "K",
      label: "Complete Project",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[28px] md:h-[28px]">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      id: 3,
      endValue: 12,
      suffix: "K",
      label: "Satisfied Client",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[28px] md:h-[28px]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 4,
      endValue: 520,
      suffix: "",
      label: "Trade In The World",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[28px] md:h-[28px]">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#ffffff] border-b border-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Switched to a 2-column grid on mobile (grid-cols-2) and adjusted gaps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-8 lg:gap-14">
          
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              // Flex column on mobile (centered), row on large screens (left aligned)
              className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-3 md:gap-5 group"
            >
              {/* Scaled down the box slightly for mobile (w-14 h-14) */}
              <div className="lg:mt-1 w-14 h-14 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center bg-[#c39967] text-[#ffffff] rounded-2xl shadow-lg shadow-[#c39967]/20 group-hover:-translate-y-1 transition-transform duration-300">
                {stat.icon}
              </div>

              <div className="flex flex-col items-center lg:items-start">
                {/* Scaled down text for mobile (text-3xl) */}
                <h3 className="text-3xl md:text-5xl font-bold text-[#000000] tracking-tight leading-none mb-1 md:mb-2">
                  <AnimatedCounter value={stat.endValue} suffix={stat.suffix} />
                </h3>
                <p className="text-[#a6acb6] text-xs md:text-base font-medium leading-snug max-w-[120px]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}