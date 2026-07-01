import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Building2, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface DualCtaProps {
  onPageChange: (page: 'home' | 'services' | 'team' | 'contact') => void;
}

export default function DualCta({ onPageChange }: DualCtaProps) {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative Orbs behind the section */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0b4bce]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#00b0b9]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Panel A (For Businesses) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-[36px] bg-gradient-to-br from-[#0b4bce] via-[#093fa8] to-[#004e9c] text-white p-8 md:p-14 shadow-2xl border border-blue-500/20 overflow-hidden group text-left"
        >
          {/* Glowing Animated Ambient Blobs Inside Card */}
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-[#00b0b9]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-110 group-hover:bg-[#00b0b9]/30 transition-all duration-700" />
          <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-all duration-700" />
          
          {/* Diagonal Glass Highlight Line */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Text Content and High-Fidelity Badges */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Top Row Badges */}
              <div className="flex flex-wrap gap-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-xs font-black uppercase tracking-wider text-teal-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  SLA Backed 24/7
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/20 backdrop-blur-md text-xs font-black uppercase tracking-wider text-teal-300">
                  <Zap className="w-3.5 h-3.5" />
                  Up to 75% Savings
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-sans font-black uppercase tracking-widest text-[#00b0b9] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#00b0b9] animate-pulse" />
                    Transform Your Customer Support
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display text-white leading-tight">
                  Ready to improve your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">conversion rates?</span>
                </h3>
              </div>

              <p className="text-slate-100/90 text-sm sm:text-base leading-relaxed font-body-alt max-w-2xl font-medium">
                Partner with NIS-BPO to streamline your operations, cut acquisition costs, and win back your valuable time with our dedicated, professional agents in Kanpur.
              </p>

              {/* Minimal bullet items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bold text-slate-200/90">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  Professional, Native English-Speaking Teams
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  Seamless Integration with Your CRM
                </div>
              </div>

            </div>

            {/* Right Column: High-fidelity action container */}
            <div className="lg:col-span-4 w-full flex lg:justify-end">
              <div className="w-full sm:w-auto relative group/btn">
                {/* Glowing border under the button */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-400 to-[#00b0b9] opacity-30 blur-md group-hover/btn:opacity-80 transition-all duration-300" />
                
                <button
                  onClick={() => onPageChange('contact')}
                  className="relative w-full sm:w-auto px-8 py-5 bg-white hover:bg-slate-50 text-slate-950 font-black rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer font-body-alt hover:scale-[1.03] active:scale-[0.98] duration-200 text-sm"
                >
                  Contact Us Now
                  <ArrowRight className="w-4 h-4 text-slate-950 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
