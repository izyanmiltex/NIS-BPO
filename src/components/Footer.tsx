import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onPageChange: (page: 'home' | 'services' | 'team' | 'contact') => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 relative z-10 font-sans">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="cursor-pointer" onClick={() => onPageChange('home')}>
              <Logo />
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-body-alt">
              We go the extra mile in our customer support services to help our clients make it big in the competition. Bridging the gap that prevails between the customer &amp; business with our 24x7 call centers.
            </p>

            {/* Socials - FB removed, LinkedIn and Instagram kept */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/nisbpoofficial?igsh=d2Nkd3ZtaHpsamhu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#00b0b9]/40 hover:bg-slate-50/50 text-slate-500 hover:text-[#00b0b9] font-bold text-xs transition-all shadow-xs group"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 text-[#00b0b9]" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/nis-bpo/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#0b4bce]/40 hover:bg-slate-50/50 text-slate-500 hover:text-[#0b4bce] font-bold text-xs transition-all shadow-xs group"
                title="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0b4bce]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Navigator (Added Contact & Team, removed Employee Access) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 font-display">Navigator</h4>
            <ul className="space-y-3 text-xs font-bold">
              <li>
                <button 
                  onClick={() => onPageChange('home')} 
                  className="text-slate-500 hover:text-[#0b4bce] transition-colors cursor-pointer font-extrabold block text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('services')} 
                  className="text-slate-500 hover:text-[#0b4bce] transition-colors cursor-pointer font-extrabold block text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('team')} 
                  className="text-slate-500 hover:text-[#0b4bce] transition-colors cursor-pointer font-extrabold block text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onPageChange('contact')} 
                  className="text-slate-500 hover:text-[#0b4bce] transition-colors cursor-pointer font-extrabold block text-left"
                >
                  Contact Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts - 4 cols */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 font-display">Corporate Office</h4>
            <ul className="space-y-3 text-xs text-slate-500 font-body-alt">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0b4bce] flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=26.441077,80.332927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0b4bce] hover:underline leading-relaxed"
                >
                  186 Anandpuri, Kidwai Nagar, Kanpur, Uttar Pradesh 208023 India
                  <span className="block text-[10px] text-slate-400 font-medium mt-0.5">(Map Coordinates: 26.441077, 80.332927)</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00b0b9] flex-shrink-0" />
                <a href="mailto:hr@nisbpo.com" className="hover:text-[#0b4bce] hover:underline">
                  hr@nisbpo.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0b4bce] flex-shrink-0" />
                <a href="tel:+919511102314" className="hover:text-[#0b4bce] hover:underline">
                  +91 95111 02314
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Copyright Area (Removed Employee Access Button as requested) */}
      <div className="bg-slate-100 border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="text-left">
            <p className="font-bold text-slate-500 font-body-alt">
              © 2022 NIS BPO Services Pvt. Ltd. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-[10px] bg-[#0b4bce]/5 px-2.5 py-1 rounded-lg border border-[#0b4bce]/15 font-bold text-[#0b4bce] font-sans uppercase">
              <ShieldCheck className="w-3.5 h-3.5" /> Registered Corporation
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
