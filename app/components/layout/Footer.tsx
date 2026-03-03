// components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronRight, Linkedin, Facebook, Instagram } from "lucide-react";
import { siteData } from "@/data/site"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/10">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About & Socials */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 bg-white/5 p-3 rounded-xl border border-white/10">
              <Image 
                src="/logo.png" 
                alt={`${siteData.company.name} Logo`}
                width={160} 
                height={50} 
                className="h-10 w-auto object-contain brightness-0 invert" 
                priority
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {siteData.company.description}
            </p>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-bricket-gold">
                {siteData.company.tagline}
              </span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a href={siteData.contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-bricket-gold hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={siteData.contact.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-bricket-gold hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteData.contact.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-bricket-gold hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Ecosystem</h4>
            <ul className="space-y-4">
              {['Global Platform', 'Infrastructure', 'Security Protocols', 'API Integration'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-bricket-gold text-sm flex items-center transition-colors group">
                    <ChevronRight className="w-4 h-4 mr-2 text-bricket-gold/50 group-hover:text-bricket-gold transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              {['About Pakistan Operations', 'Careers', 'Partner With Us', 'Support Center'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-bricket-gold text-sm flex items-center transition-colors group">
                    <ChevronRight className="w-4 h-4 mr-2 text-bricket-gold/50 group-hover:text-bricket-gold transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Dynamic Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Connect With Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-bricket-gold mr-3 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  {siteData.contact.emails.map((email, i) => (
                    <a key={i} href={email.link} className="hover:text-white transition-colors">
                      {email.address}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-bricket-gold mr-3 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col space-y-1">
                  {siteData.contact.phones.map((phone, i) => (
                    <a key={i} href={phone.link} className="hover:text-white transition-colors">
                      {phone.number}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-bricket-gold mr-3 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  {siteData.contact.address}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} {siteData.company.name}. All rights reserved. | {siteData.contact.website}
          </p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}