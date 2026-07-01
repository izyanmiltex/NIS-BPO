import React from 'react';
import { motion } from 'motion/react';
import { Headphones, TrendingUp, Laptop, Database, Users, PhoneCall, Cpu, Mail, ShieldCheck, ArrowRight } from 'lucide-react';

interface HomeServicesProps {
  onPageChange: (page: 'home' | 'services' | 'team' | 'contact') => void;
}

export default function HomeServices({ onPageChange }: HomeServicesProps) {
  const servicesList = [
    {
      title: 'Customer Support',
      painPoint: 'Customer frustration and high churn due to slow support and long wait times.',
      solution: 'We deliver rapid 24/7 multi-channel support (phone, chat, email) that maintains a 98%+ satisfaction rate, keeping your customers loyal and happy.',
      icon: <Headphones className="w-5 h-5 text-[#0b4bce]" />
    },
    {
      title: 'Sales & Telemarketing',
      painPoint: 'Cold lead generation lists, high acquisition costs, and poor outbound conversion.',
      solution: 'Our highly trained outbound experts focus on warm qualification and value-driven closing to dramatically lower your cost-per-acquisition.',
      icon: <TrendingUp className="w-5 h-5 text-[#00b0b9]" />
    },
    {
      title: 'Web Designing Services',
      painPoint: 'Outdated, slow-loading websites that fail to build trust and lose active buyers.',
      solution: 'We build responsive, fast-loading, and high-converting custom websites that establish instant credibility and drive transactions.',
      icon: <Laptop className="w-5 h-5 text-[#0b4bce]" />
    },
    {
      title: 'Data Entry & Processing',
      painPoint: 'Administrative backlogs, manual entry errors, and expensive operational bottlenecks.',
      solution: 'Our accuracy-focused specialists handle high-volume data extraction, cleansing, and secure logging with 99.9% precision.',
      icon: <Database className="w-5 h-5 text-[#00b0b9]" />
    },
    {
      title: 'Human Resources',
      painPoint: 'High staff turnover, expensive recruitment cycles, and tedious payroll compliance.',
      solution: 'We manage end-to-end talent acquisition, onboarding, and payroll compliance to ensure your customer-facing teams stay fully staffed and capable.',
      icon: <Users className="w-5 h-5 text-[#0b4bce]" />
    },
    {
      title: 'Call-Centre Services',
      painPoint: 'Dropped calls, high hold times, and lack of professional telecom infrastructure.',
      solution: 'Our Kanpur-based center leverages high-speed fiber backups and enterprise systems to handle your call volumes efficiently and professionally.',
      icon: <PhoneCall className="w-5 h-5 text-[#00b0b9]" />
    },
    {
      title: 'Information Technology Services',
      painPoint: 'Frequent network downtime, hardware bugs, and unmanaged cybersecurity vulnerabilities.',
      solution: 'We monitor your servers, maintain high-security firewall protections, and provide immediate remote troubleshooting to keep operations online.',
      icon: <Cpu className="w-5 h-5 text-[#0b4bce]" />
    },
    {
      title: 'Telemarketing Services',
      painPoint: 'Disorganized lead tracking, missed follow-ups, and lost repeat client business.',
      solution: 'We run highly targeted and systematic outbound dialing campaigns to follow up on quotes, reactivate stale accounts, and generate fresh pipelines.',
      icon: <Mail className="w-5 h-5 text-[#00b0b9]" />
    },
    {
      title: 'Insurance Services',
      painPoint: 'Tedious claims validation, slow policy processing times, and complex paperwork.',
      solution: 'Our specialized insurance back-office agents process claims, verify certifications, and handle policy renewals with secure precision.',
      icon: <ShieldCheck className="w-5 h-5 text-[#0b4bce]" />
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc] text-slate-800 font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#0b4bce] block mb-2">
            OUR CORE OFFERINGS
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
            Our Services &amp; Specializations
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-6 leading-relaxed text-sm sm:text-base font-body-alt">
            We solve the deep operational headaches that hold back your company's growth. Discover how our specialized teams can optimize your customer experience and outbound campaigns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 hover:shadow-lg hover:border-[#00b0b9]/30 transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-11 h-11 rounded-2xl bg-[#0b4bce]/5 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-lg font-black text-slate-900 tracking-tight font-display mb-3">
                  {service.title}
                </h3>

                {/* Pain point vs Solution */}
                <div className="space-y-3">
                  <div className="p-3 bg-red-50/40 border border-red-100/50 rounded-xl">
                    <span className="text-[9px] font-black text-red-600 uppercase tracking-wider block mb-1">
                      The Pain Point:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-body-alt">
                      {service.painPoint}
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-50/40 border border-emerald-100/50 rounded-xl">
                    <span className="text-[9px] font-black text-emerald-700 uppercase tracking-wider block mb-1">
                      Our Solution:
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-body-alt font-semibold">
                      {service.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 mt-5 pt-3.5 flex items-center justify-between text-[10px] font-bold text-slate-400">
                <span className="uppercase tracking-wider text-[#0b4bce]">SLA PROTECTED</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All services link */}
        <div className="text-center mt-12">
          <button
            onClick={() => onPageChange('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] text-white hover:scale-[1.02] duration-200 transition-all font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
          >
            Contact Us Now
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
}
