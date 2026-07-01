import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, Star, Sparkles, Building2, Globe } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#f8fafc] text-slate-800 scroll-mt-20 relative overflow-hidden border-b border-slate-100">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#0b4bce]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#00b0b9]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* LOWER BLOCK: Customer support services. NIS-BPO */}
        <div className="text-left">
          
          <div className="mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#0b4bce] font-sans block mb-2">
              WHY COMPANIES PARTNER WITH US
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
              Why Choose Us
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] rounded-full mt-3" />
            <p className="text-slate-500 text-sm font-body-alt mt-4 max-w-2xl">
              Discover how our Kanpur operations hub combines quality, security, and scalability to elevate your customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Column 1: Core Quality & Standard Integration */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 bg-white border border-slate-200/60 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0b4bce]/5 flex items-center justify-center text-[#0b4bce]">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900 font-display">Adhering to Quality Standards</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-body-alt">
                  We are a prominent Call Center Service Provider that adheres to the highest standards of quality. Our team keenly observes &amp; regulates that all the customer support services are performed up to the specified standards and your valuable customers get the much-needed attention.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 bg-white border border-slate-200/60 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00b0b9]/5 flex items-center justify-center text-[#00b0b9]">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900 font-display">Engagement Channels</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-body-alt">
                  We offer a variety of customer engagement channels such as phone, email, live chat, etc. to allow you to reach an extensive section of the customers quickly that in turn, results in increased customer satisfaction &amp; retention.
                </p>
              </motion.div>
            </div>

            {/* Column 2: Scale, Delivery, & Gap Bridging */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 bg-white border border-slate-200/60 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00b0b9]/5 flex items-center justify-center text-[#00b0b9]">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900 font-display">No Shortages</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-body-alt">
                  NIS ensures that you are never faced with the trouble of insufficient customer support services. We are one of India’s leading call center outsourcing companies with sales &amp; delivery centers in India and Abroad.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 bg-white border border-slate-200/60 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0b4bce]/5 flex items-center justify-center text-[#0b4bce]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900 font-display">Bridging the Gap</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-body-alt">
                  We focus on bridging the gap that prevails between the customer &amp; business with our 24×7 call centers. Start experiencing better &amp; improved sales, conversion rates, &amp; a fleet of satisfied customers with our Customer Service Outsourcing In Kanpur.
                </p>
              </motion.div>
            </div>

            {/* Column 3: Lead Generation & Acquisition Experience */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 bg-white border border-slate-200/60 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0b4bce]/5 flex items-center justify-center text-[#0b4bce]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900 font-display">The Skill Game</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-body-alt">
                  For lead generation to be effective, it’s a skill game more than a numbers game. We have the experience to meet any realistic cost per acquisition goals you have in mind for your call center outsourcing campaign.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 bg-white border border-slate-200/60 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00b0b9]/5 flex items-center justify-center text-[#00b0b9]">
                  <Star className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-900 font-display">Prospecting Records</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-body-alt">
                  We’ve successfully prospected hot leads for the mortgage industry, financial service companies, auto insurance companies, real estate companies, as well as a wide range of small businesses.
                </p>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
