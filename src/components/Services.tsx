import React from 'react';
import { motion } from 'motion/react';
import { Headphones, PhoneCall, MessageSquare, Laptop, CheckCircle, ShieldCheck, Clock, Award, Check, TrendingUp } from 'lucide-react';

export default function Services() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreServices = [
    {
      title: "Customer Support",
      desc: "Timely, empathetic issue resolution to boost customer retention and build brand loyalty across all touchpoints.",
      icon: <Headphones className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Telemarketing & Sales",
      desc: "Outbound and inbound sales calls professionally engineered to convert lukewarm prospects into valuable, repeating corporate revenue.",
      icon: <PhoneCall className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Lead Generation",
      desc: "Aggressive funnel building and prospecting hot leads specifically for the mortgage, finance, auto insurance, and real estate sectors.",
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Call Answering",
      desc: "Professional front-line brand representation, precise message taking, and seamless escalation protocols based on your parameters.",
      icon: <MessageSquare className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "IT Help Desk",
      desc: "Technical problem tracking, step-by-step product troubleshooting, and Level 1/Level 2 customer assistance over the phone.",
      icon: <Laptop className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Third-Party Verification",
      desc: "Independent QA validation, customer consent confirmation, and process audit mapping to optimize operational compliance.",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />
    }
  ];

  const valueProps = [
    "Higher conversion rates",
    "Better Retention",
    "Less costs",
    "Available anytime"
  ];

  return (
    <section id="services" className="py-24 bg-white text-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600 font-sans block mb-2">
            Your software. Our agents. It's that easy.
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
            Services
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Core Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 text-left">
          {coreServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] border border-slate-200/60 hover:border-indigo-300 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 font-display">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-body-alt">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights and 24/7 Sleep Statement */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-[32px] p-8 md:p-14 relative overflow-hidden shadow-2xl border border-slate-800 text-left">
          {/* Subtle tech grid background element */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left side checklist */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {valueProps.map((prop, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col justify-between p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl transition-all duration-300 shadow-inner group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 mb-3 group-hover:scale-105 transition-transform">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold font-body-alt tracking-wide text-slate-200">{prop}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side content */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-300 font-sans">
                  24/7/365 Non-Stop Campaign Operations
                </span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] font-display text-white">
                Great customer service <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-200 to-indigo-100 italic font-medium">never sleeps</span>, and neither do we.
              </h3>
              
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-body-alt">
                Our professional customer support representatives are fully geared to answer all your calls, emails, and live chats 24 hours a day, 7 days a week, 365 days a year.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => handleScrollTo('#contact')}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group font-body-alt hover:scale-[1.02] duration-200"
                >
                  Book a discovery call
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
