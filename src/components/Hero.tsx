import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Headphones, Award, Star } from 'lucide-react';

interface HeroProps {
  onPageChange: (page: 'home' | 'services' | 'team' | 'contact') => void;
}

export default function Hero({ onPageChange }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#f8fafc] overflow-hidden">
      {/* Premium background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_50%,transparent_100%)] opacity-25" />
      
      {/* Ambient background glows in blue/teal */}
      <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] bg-[#0b4bce]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-[500px] h-[500px] bg-[#00b0b9]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0b4bce]/5 border border-[#0b4bce]/10 rounded-xl text-[#0b4bce] text-xs font-extrabold uppercase tracking-wider"
            >
              <Headphones className="w-3.5 h-3.5 text-[#0b4bce]" />
              NIS-BPO Corporate Outsourcing
            </motion.div>
  
            {/* Updated Hero Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6.5xl font-black text-slate-900 tracking-tight leading-[1.1] font-display"
            >
              Inbound and Outbound <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b4bce] to-[#00b0b9]">
                Customer Support services
              </span>
            </motion.h1>
  
            {/* Tagline / Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-body-alt"
            >
              India's leading call center outsourcing provider. We bridge the gap between your business and your customers with expert inbound, outbound, and lead generation services that slash costs and maximize ROI.
            </motion.p>
  
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={() => onPageChange('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] text-white font-extrabold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer text-sm font-body-alt hover:scale-[1.02]"
              >
                Contact Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onPageChange('services')}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-extrabold rounded-xl border border-slate-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm font-body-alt shadow-sm"
              >
                View services
              </button>
            </motion.div>

            {/* Trustpilot Logo & Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-slate-100"
            >
              <div className="flex items-center gap-2">
                {/* Trustpilot Icon (Green Star) */}
                <svg className="w-5 h-5 text-[#00b67a]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="font-display font-black text-slate-900 text-sm tracking-tight">Trustpilot</span>
                <div className="flex gap-0.5 ml-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center text-white text-[9px] rounded-xs font-bold select-none">
                      ★
                    </div>
                  ))}
                </div>
                <span className="text-slate-900 font-extrabold text-xs ml-1">4.9 / 5</span>
              </div>
              
              <div className="hidden md:block text-slate-300 select-none">|</div>

              <div className="hidden md:flex items-center gap-2">
                <Award className="w-4 h-4 text-[#00b0b9] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-500 font-body-alt">
                  Your Software. Our Agents. 5+ Years Average Experience.
                </span>
              </div>
            </motion.div>
  
          </div>
  
          {/* Right Visual Element */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-xl text-left"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <span className="text-[10px] font-sans text-slate-400 font-bold uppercase tracking-wider">Corporate Operations Hub</span>
              </div>
  
              <div className="space-y-4">
                <div className="p-4 bg-slate-50/50 border border-slate-100 rounded-xl">
                  <span className="text-[9px] text-[#0b4bce] font-black uppercase tracking-wider block mb-1">Global Delivery Center</span>
                  <p className="text-sm font-black text-slate-900 font-display">Kanpur Hub, India (24/7/365)</p>
                  <p className="text-xs text-slate-500 mt-1 font-body-alt leading-relaxed">
                    Bridging the operational gaps that prevail between customers and businesses with our redundant infrastructure.
                  </p>
                </div>
  
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#0b4bce]/5 border border-[#0b4bce]/10 rounded-xl text-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Campaign SLA</span>
                    <span className="text-sm font-black text-[#0b4bce] mt-1 block">99.2% Score</span>
                  </div>
                  <div className="p-3 bg-[#00b0b9]/5 border border-[#00b0b9]/10 rounded-xl text-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Customer Rating</span>
                    <span className="text-sm font-black text-[#00b0b9] mt-1 block">4.9 / 5.0 Rating</span>
                  </div>
                </div>
  
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-600 font-body-alt">Active SLA Protection</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 font-sans">Kanpur, UP</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
 
      </div>
    </section>
  );
}
