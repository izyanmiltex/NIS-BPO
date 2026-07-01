import React from 'react';
import { ShieldCheck, Users, BookOpen, BarChart3, Award, Sparkles } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white text-slate-800 scroll-mt-20 border-t border-slate-100 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-50/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600 font-sans block mb-2">
            The Quality &amp; Trust Blueprint
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
            The Team &amp; Quality Promise
          </h2>
          <p className="text-slate-500 text-sm font-body-alt mt-2">
            How we protect your brand and optimize conversion rates through dedicated oversight and continuous training.
          </p>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left items-stretch">
          
          {/* Left Column: Dedicated Leadership */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 lg:p-10 flex flex-col justify-between hover:border-indigo-300 transition-all duration-300 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/30 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-100/50 transition-colors" />
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-700 text-[10px] font-black uppercase tracking-wider font-sans">
                <Users className="w-3.5 h-3.5" />
                Management &amp; Analytics Oversight
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 tracking-tight font-display">
                Dedicated Leadership
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed font-body-alt">
                Every client team is directed by an Account Manager who manages performance analytics, sets clear benchmarks, and provides actionable data reports to improve your brand's market value.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-xs font-bold text-slate-700 font-body-alt">Custom Campaign KPI Tracking &amp; SLA Adherence</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-xs font-bold text-slate-700 font-body-alt">Weekly Operations Auditing &amp; Direct Live Feedback Logs</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-xs font-bold text-slate-700 font-body-alt">Strategic Growth Roadmap with Dedicated Client Desk Liaison</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-indigo-500" />
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Interactive SLA Standard</span>
              </div>
              <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md font-mono">99.2% Response Score</span>
            </div>
          </div>

          {/* Right Column: Continuous Upskilling */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 lg:p-10 flex flex-col justify-between hover:border-violet-300 transition-all duration-300 shadow-sm relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-violet-100/30 rounded-full blur-2xl pointer-events-none group-hover:bg-violet-100/50 transition-colors" />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-50 border border-violet-100 rounded-lg text-violet-700 text-[10px] font-black uppercase tracking-wider font-sans">
                <BookOpen className="w-3.5 h-3.5" />
                Skill Development &amp; QA
              </div>

              <h3 className="text-2xl font-black text-slate-900 tracking-tight font-display">
                Continuous Upskilling
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed font-body-alt">
                To guarantee flawless communication and sharp industry knowledge, our staff undergoes continuous training and development. We optimize agent knowledge structures to keep up with SaaS tools and dynamic compliance.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-violet-600 flex-shrink-0 mt-1" />
                  <span className="text-xs font-bold text-slate-700 font-body-alt">Empathetic Soft Skills &amp; Conversational Excellence Rounds</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-violet-600 flex-shrink-0 mt-1" />
                  <span className="text-xs font-bold text-slate-700 font-body-alt">Intensive Product Training Prior to Live Campaign Deployment</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-violet-600 flex-shrink-0 mt-1" />
                  <span className="text-xs font-bold text-slate-700 font-body-alt">Security, Client Data Protection (NDAs), and ISO Awareness</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-violet-500" />
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Certified Training Standard</span>
              </div>
              <span className="text-xs font-black text-violet-600 bg-violet-50 px-2.5 py-1 rounded-md font-mono">5+ Years Average Exp</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
