import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, ArrowRight, UserCheck, Cpu } from 'lucide-react';

interface TeamPageProps {
  onPageChange: (page: 'home' | 'services' | 'team' | 'contact') => void;
}

export default function TeamPage({ onPageChange }: TeamPageProps) {
  const teamMembers = [
    {
      name: 'Mr. Ragib',
      role: 'Operations Lead & Director',
      achievement: 'Campaign Scaling, SLA Compliance, and Team Management'
    },
    {
      name: 'Mr. Shamsheer',
      role: 'Technology Lead & Co-Founder',
      achievement: 'High-Speed Infrastructure Setup, Backup Systems, and IT Redundancy'
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc] text-slate-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* About Us section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 text-left">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#0b4bce] block">
              GET TO KNOW US
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
              About Our Company
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] rounded-full" />
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body-alt">
              At NIS BPO Services Pvt. Ltd., we understand that outstanding support isn't just about answering phone calls—it's about protecting your brand equity and increasing customer lifetime value. Based in our corporate operations hub in Kanpur, Uttar Pradesh, we bridge the gap between business targets and customer satisfaction.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body-alt">
              We leverage premium local talent, high-speed modern infrastructure, and target-driven quality assurance processes to achieve up to 75% overhead savings compared to Western markets, all without sacrificing an ounce of performance.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white border border-slate-150 rounded-2xl flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#0b4bce] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-700">Strict SLA Standards</span>
              </div>
              <div className="p-4 bg-white border border-slate-150 rounded-2xl flex items-center gap-3">
                <Award className="w-5 h-5 text-[#00b0b9] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-700">Quality-First Talent</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0b4bce]/10 to-[#00b0b9]/10 rounded-3xl transform rotate-1 scale-105 -z-10 blur-xl" />
            <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-black text-slate-900 tracking-tight font-display border-b border-slate-100 pb-4">
                Our Operational Principles
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0b4bce]/10 flex items-center justify-center text-[#0b4bce] font-extrabold flex-shrink-0 text-sm">1</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Complete Calibration</h4>
                    <p className="text-xs text-slate-500 font-body-alt mt-1">We synchronize our teams directly with your preferred CRM, Ticketing, and Telephony software platforms.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#00b0b9]/10 flex items-center justify-center text-[#00b0b9] font-extrabold flex-shrink-0 text-sm">2</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Continuous Sourcing</h4>
                    <p className="text-xs text-slate-500 font-body-alt mt-1">Our Kanpur hub unlocks access to highly qualified, energetic college graduates with excellent English-speaking skills.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0b4bce]/10 flex items-center justify-center text-[#0b4bce] font-extrabold flex-shrink-0 text-sm">3</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Rigorous Quality Controls</h4>
                    <p className="text-xs text-slate-500 font-body-alt mt-1">Ongoing audio tracking, performance auditing, and direct SLA feedback reporting ensure continuous improvement.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Our Leadership Team section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#0b4bce] block mb-2">
            THE LEADERSHIP Blueprint
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
            Meet Our Core Team
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-6 leading-relaxed text-sm sm:text-base font-body-alt">
            Our company is guided by experienced professionals with deep sector expertise in customer relations, technology infrastructures, and human capital growth.
          </p>
        </div>

        {/* Team Grid (Featuring Mr. Ragib and Mr. Shamsheer only with Name, Post, and Performance Focus) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-[#00b0b9]/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Initial Avatar circle */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0b4bce] to-[#00b0b9] flex items-center justify-center text-white text-xl font-black shadow-md group-hover:scale-105 transition-transform duration-300">
                  {idx === 0 ? <UserCheck className="w-6 h-6" /> : <Cpu className="w-6 h-6" />}
                </div>

                <div className="space-y-1 text-left">
                  <h3 className="text-xl font-black text-slate-900 font-display">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold text-[#0b4bce] block uppercase tracking-wide">
                    {member.role}
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-100 mt-8 pt-4 text-left">
                <span className="text-[10px] font-bold text-[#00b0b9] uppercase tracking-wider block">Key Performance Focus:</span>
                <span className="text-xs font-extrabold text-slate-700 mt-1 block font-body-alt">{member.achievement}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-20 pt-12 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500 font-body-alt mb-4">Want to consult with our operations specialists?</p>
          <button
            onClick={() => onPageChange('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] text-white font-extrabold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] duration-200 transition-all cursor-pointer font-body-alt text-sm"
          >
            Contact Now
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
}
