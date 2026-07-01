import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, PiggyBank, Clock, Sparkles } from 'lucide-react';

export default function ActiveSupport() {
  const points = [
    {
      title: 'Better Retention',
      description: 'Maximize customer lifetime value with empathetic, prompt, and precise query resolution.',
      icon: <HeartHandshake className="w-5 h-5 text-[#0b4bce]" />,
      bg: 'bg-[#0b4bce]/5',
      border: 'border-[#0b4bce]/10'
    },
    {
      title: 'Less Costs',
      description: 'Save up to 75% on operational overheads without compromising on SLA execution and team quality.',
      icon: <PiggyBank className="w-5 h-5 text-[#00b0b9]" />,
      bg: 'bg-[#00b0b9]/5',
      border: 'border-[#00b0b9]/10'
    },
    {
      title: 'Available Anytime',
      description: 'Your brand remains active and accessible to customers 24/7/365 across all global time zones.',
      icon: <Clock className="w-5 h-5 text-[#0b4bce]" />,
      bg: 'bg-[#0b4bce]/5',
      border: 'border-[#0b4bce]/10'
    }
  ];

  return (
    <section className="py-20 bg-white text-slate-800 font-sans relative overflow-hidden border-b border-slate-100">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#0b4bce]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-[#00b0b9]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#0b4bce] block">
              24/7/365 SLA ENGAGEMENT
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display leading-tight">
              Great customer service never sleeps, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b4bce] to-[#00b0b9]">and neither do we.</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] rounded-full" />
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body-alt font-medium">
              We are professional customer service representatives to answer all your calls 24 hours a day, 7 days a week, 365 days a year.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-body-alt">
              Whether handling critical technical support issues, managing high-volume incoming reservations, or calling active prospective buyers, our Kanpur operations team delivers absolute continuity of service around the clock.
            </p>
          </div>

          {/* Right Cards Block */}
          <div className="lg:col-span-6 space-y-4">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-5 bg-white border ${point.border} rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex gap-4 items-start group`}
              >
                <div className={`w-10 h-10 rounded-xl ${point.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                  {point.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black text-slate-900 font-display uppercase tracking-wide">
                    {point.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-body-alt leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
