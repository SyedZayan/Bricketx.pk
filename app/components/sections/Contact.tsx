// components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { siteData } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bricket-light relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bricket-gold/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-bricket-gold font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-bricket-dark tracking-tight mb-6"
          >
            Partner With <span className="text-bricket-gold">BricketX</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Whether you are looking to integrate with our global infrastructure or have a specific inquiry for our Pakistan operations team, we are here to help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-5 group hover:border-bricket-gold/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-bricket-light flex items-center justify-center flex-shrink-0 group-hover:bg-bricket-gold/10 transition-colors">
                <Mail className="w-6 h-6 text-bricket-gold" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-bricket-dark mb-2">Email Us</h4>
                <div className="space-y-1">
                  {siteData.contact.emails.map((email, i) => (
                    <a key={i} href={email.link} className="block text-gray-600 hover:text-bricket-gold transition-colors">
                      {email.address}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-5 group hover:border-bricket-gold/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-bricket-light flex items-center justify-center flex-shrink-0 group-hover:bg-bricket-gold/10 transition-colors">
                <Phone className="w-6 h-6 text-bricket-gold" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-bricket-dark mb-2">Call Us</h4>
                <div className="space-y-1">
                  {siteData.contact.phones.map((phone, i) => (
                    <a key={i} href={phone.link} className="block text-gray-600 hover:text-bricket-gold transition-colors">
                      {phone.number} <span className="text-sm text-gray-400">({phone.label})</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-5 group hover:border-bricket-gold/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-bricket-light flex items-center justify-center flex-shrink-0 group-hover:bg-bricket-gold/10 transition-colors">
                <MapPin className="w-6 h-6 text-bricket-gold" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-bricket-dark mb-2">Visit Us</h4>
                <p className="text-gray-600 leading-relaxed">
                  {siteData.contact.address}
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bricket-gold focus:ring-2 focus:ring-bricket-gold/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bricket-gold focus:ring-2 focus:ring-bricket-gold/20 outline-none transition-all bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject Inquiry</label>
                <select 
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bricket-gold focus:ring-2 focus:ring-bricket-gold/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-700"
                >
                  <option>API & Infrastructure Integration</option>
                  <option>Partnership Opportunities</option>
                  <option>Technical Support</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="How can we help you today?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bricket-gold focus:ring-2 focus:ring-bricket-gold/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button className="w-full px-8 py-4 bg-bricket-dark text-white font-bold rounded-lg hover:bg-bricket-gold transition-colors duration-300 flex items-center justify-center gap-2 mt-4 shadow-lg shadow-bricket-dark/10">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}