import React from 'react';
import { motion } from 'motion/react';
import { Headphones, TrendingUp, Laptop, Database, Users, PhoneCall, Cpu, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onPageChange: (page: 'home' | 'services' | 'team' | 'contact') => void;
}

export default function ServicesPage({ onPageChange }: ServicesPageProps) {
  const servicesList = [
    {
      title: 'Customer Support',
      painPoint: 'Customer frustration and high churn due to slow support and long wait times.',
      solution: 'We deliver rapid 24/7 multi-channel support (phone, chat, email) that maintains a 98%+ satisfaction rate, keeping your customers loyal and happy.',
      icon: <Headphones className="w-6 h-6 text-[#0b4bce]" />
    },
    {
      title: 'Sales & Telemarketing',
      painPoint: 'Cold lead generation lists, high acquisition costs, and poor outbound conversion.',
      solution: 'Our highly trained outbound experts focus on warm qualification and value-driven closing to dramatically lower your cost-per-acquisition.',
      icon: <TrendingUp className="w-6 h-6 text-[#00b0b9]" />
    },
    {
      title: 'Web Designing Services',
      painPoint: 'Outdated, slow-loading websites that fail to build trust and lose active buyers.',
      solution: 'We build responsive, fast-loading, and high-converting custom websites that establish instant credibility and drive transactions.',
      icon: <Laptop className="w-6 h-6 text-[#0b4bce]" />
    },
    {
      title: 'Data Entry & Processing',
      painPoint: 'Administrative backlogs, manual entry errors, and expensive operational bottlenecks.',
      solution: 'Our accuracy-focused specialists handle high-volume data extraction, cleansing, and secure logging with 99.9% precision.',
      icon: <Database className="w-6 h-6 text-[#00b0b9]" />
    },
    {
      title: 'Human Resources',
      painPoint: 'High staff turnover, expensive recruitment cycles, and tedious payroll compliance.',
      solution: 'We manage end-to-end talent acquisition, onboarding, and payroll compliance to ensure your customer-facing teams stay fully staffed and capable.',
      icon: <Users className="w-6 h-6 text-[#0b4bce]" />
    },
    {
      title: 'Call-Centre Services',
      painPoint: 'Dropped calls, high hold times, and lack of professional telecom infrastructure.',
      solution: 'Our Kanpur-based center leverages high-speed fiber backups and enterprise systems to handle your call volumes efficiently and professionally.',
      icon: <PhoneCall className="w-6 h-6 text-[#00b0b9]" />
    },
    {
      title: 'Information Technology Services',
      painPoint: 'Frequent network downtime, hardware bugs, and unmanaged cybersecurity vulnerabilities.',
      solution: 'We monitor your servers, maintain high-security firewall protections, and provide immediate remote troubleshooting to keep operations online.',
      icon: <Cpu className="w-6 h-6 text-[#0b4bce]" />
    },
    {
      title: 'Telemarketing Services',
      painPoint: 'Disorganized lead tracking, missed follow-ups, and lost repeat client business.',
      solution: 'We run highly targeted and systematic outbound dialing campaigns to follow up on quotes, reactivate stale accounts, and generate fresh pipelines.',
      icon: <Mail className="w-6 h-6 text-[#00b0b9]" />
    },
    {
      title: 'Insurance Services',
      painPoint: 'Tedious claims validation, slow policy processing times, and complex paperwork.',
      solution: 'Our specialized insurance back-office agents process claims, verify certifications, and handle policy renewals with secure precision.',
      icon: <ShieldCheck className="w-6 h-6 text-[#0b4bce]" />
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc] text-slate-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#0b4bce] block mb-2">
            WHAT WE EXCEL AT
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Our Services
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-6 leading-relaxed text-base sm:text-lg">
            We don't just supply seats; we resolve the deep operational headaches that hold back your company's growth. Discover how our specialized teams can optimize your workflows today.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-xl hover:border-[#00b0b9]/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper with a subtle colored background */}
                <div className="w-12 h-12 rounded-2xl bg-[#0b4bce]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-black text-slate-900 tracking-tight font-display mb-4">
                  {service.title}
                </h3>

                {/* Pain point vs Solution container */}
                <div className="space-y-4 text-left">
                  <div className="p-3 bg-red-50/50 border border-red-100/50 rounded-xl">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block mb-1">
                      The Pain Point:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-body-alt">
                      {service.painPoint}
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-50/50 border border-emerald-100/50 rounded-xl">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      Our Solution:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-body-alt font-medium">
                      {service.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 mt-6 pt-4 flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#0b4bce] uppercase tracking-wider">
                  Guaranteed SLA Standards
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 bg-gradient-to-br from-[#0b4bce] to-[#00b0b9] rounded-[32px] p-8 md:p-16 text-white text-center relative overflow-hidden shadow-xl"
        >
          {/* Decorative glowing orbits */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight font-display">
              Ready to Optimize Your Customer Operations?
            </h2>
            <p className="text-teal-50 text-sm md:text-base leading-relaxed opacity-90 font-body-alt">
              Contact us today to receive a detailed service-level agreement proposal custom-designed around your unique targets and technology.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onPageChange('contact')}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-[#0b4bce] font-extrabold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group font-body-alt hover:scale-[1.02] duration-200"
              >
                Contact Now
                <ArrowRight className="w-4 h-4 text-[#0b4bce] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
