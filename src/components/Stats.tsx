import React from 'react';
import { motion } from 'motion/react';
import { Smile, Briefcase, Clock } from 'lucide-react';

export default function Stats() {
  const statItems = [
    {
      value: '74+',
      label: 'Satisfied Business',
      desc: 'Corporate partners trust us with customer operations.',
      icon: <Smile className="w-5 h-5 text-[#0b4bce]" />
    },
    {
      value: '13+',
      label: 'Years of experience',
      desc: 'Industry leadership in scaling call center campaigns.',
      icon: <Briefcase className="w-5 h-5 text-[#00b0b9]" />
    },
    {
      value: '24X7',
      label: 'Team Members/Employees',
      desc: 'Active coverage keeping support and sales online always.',
      icon: <Clock className="w-5 h-5 text-[#0b4bce]" />
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200/60 py-10 md:py-14 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0b4bce]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00b0b9]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          
          {statItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-2 py-6 md:py-0 md:px-8 flex flex-col items-center text-center"
            >
              {/* Stat Icon Circle */}
              <div className="w-10 h-10 rounded-full bg-[#0b4bce]/5 flex items-center justify-center mb-1">
                {item.icon}
              </div>

              {/* Number/Value */}
              <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] font-display tracking-tight leading-none">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-sm font-black text-slate-800 uppercase tracking-wider font-display pt-1">
                {item.label}
              </p>

              {/* Description */}
              <p className="text-xs text-slate-400 font-body-alt max-w-xs mt-1">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
