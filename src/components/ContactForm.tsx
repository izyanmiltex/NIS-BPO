import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldAlert, CheckCircle, Sparkles, Instagram } from 'lucide-react';
import { Inquiry } from '../types';

interface ContactFormProps {
  appliedMetrics: {
    campaignType: string;
    monthlyVolume: number;
    currentCpa: number;
    targetCpa: number;
  } | null;
  onClearMetrics: () => void;
}

export default function ContactForm({ appliedMetrics, onClearMetrics }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [campaignType, setCampaignType] = useState('Inbound Customer Support');
  const [monthlyVolume, setMonthlyVolume] = useState<number>(10000);
  const [currentCpa, setCurrentCpa] = useState<number>(5.00);
  const [targetCpa, setTargetCpa] = useState<number>(3.00);
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Load calculator metrics if applied
  useEffect(() => {
    if (appliedMetrics) {
      setCampaignType(appliedMetrics.campaignType);
      setMonthlyVolume(appliedMetrics.monthlyVolume);
      setCurrentCpa(appliedMetrics.currentCpa);
      setTargetCpa(appliedMetrics.targetCpa);
      setMessage(`Hi, I just ran the NIS BPO Cost Calculator. My target is to reach a Cost Per Acquisition/Ticket of $${appliedMetrics.targetCpa.toFixed(2)} compared to my current $${appliedMetrics.currentCpa.toFixed(2)} for a monthly volume of approximately ${appliedMetrics.monthlyVolume.toLocaleString()} interactions. Please contact me with a custom SLA proposal!`);
    }
  }, [appliedMetrics]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: `inq-${Date.now()}`,
        name,
        email,
        company,
        phone,
        campaignType,
        monthlyVolume,
        currentCpa,
        targetCpa,
        message,
        status: 'new',
        submittedAt: new Date().toISOString(),
      };

      // Store in localStorage
      try {
        const stored = localStorage.getItem('nis_inquiries');
        const list: Inquiry[] = stored ? JSON.parse(stored) : [];
        list.unshift(newInquiry);
        localStorage.setItem('nis_inquiries', JSON.stringify(list));
        
        // Success
        setSubmitStatus('success');
        onClearMetrics();
        
        // Reset form
        setName('');
        setEmail('');
        setCompany('');
        setPhone('');
        setMessage('');
      } catch (err) {
        console.error('Failed to save inquiry:', err);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-800 scroll-mt-20 relative overflow-hidden">
      {/* Dynamic ambient violet radial backgrounds (Onesoft/Mutmiz feel) */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-gradient-to-br from-violet-200/20 via-indigo-150/15 to-transparent rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-200/20 via-cyan-150/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Contact details & pitch */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-xs font-bold uppercase tracking-wider font-body-alt">
                <MessageSquare className="w-3.5 h-3.5" />
                Get in Touch
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight font-display">
                Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-extrabold">NIS BPO</span> Today
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-body-alt">
                Whether you need a dedicated inbound customer service team, a target-driven outbound lead generation squad, or an accurate data moderation service, NIS BPO goes the extra mile. 
              </p>

              {/* Informational Points */}
              <div className="space-y-5 pt-6 border-t border-slate-100">
                
                {/* Point 1 */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-body-alt">Global HQ Location</h4>
                    <p className="text-sm font-black text-slate-900 font-display">186 Anandpuri, Kidwai Nagar</p>
                    <p className="text-xs text-slate-500 font-body-alt">Kanpur, Uttar Pradesh 208023 India</p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-body-alt">Inquiries &amp; Support</h4>
                    <p className="text-sm font-black text-slate-900 font-display">contact@nisbpo.com</p>
                    <p className="text-xs text-slate-500 font-body-alt">Response within 12 working hours</p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-body-alt">Representative Call Desk</h4>
                    <p className="text-sm font-black text-slate-900 font-display">+91 95111 02314</p>
                    <p className="text-xs text-slate-500 font-body-alt">Corporate Sales Division</p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-pink-50 border border-pink-100/50 flex items-center justify-center text-pink-600 flex-shrink-0 shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-body-alt">Social Channel</h4>
                    <a
                      href="https://www.instagram.com/nisbpoofficial?igsh=d2Nkd3ZtaHpsamhu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-black text-slate-900 hover:text-pink-600 font-display transition-colors block"
                    >
                      @nisbpoofficial
                    </a>
                    <p className="text-xs text-slate-500 font-body-alt">Official Instagram Profile</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Note on Data Security */}
            <div className="p-5 bg-[#f8fafc] border border-slate-200/55 rounded-2xl flex items-start gap-3 shadow-sm">
              <ShieldAlert className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0 animate-pulse" />
              <div className="text-xs text-slate-500 leading-relaxed font-body-alt">
                <strong>Strict NDA Compliance:</strong> All client databases are handled through secure Virtual Desktops. Agents operate in a mobile-free, paperless facility to ensure 100% security for corporate data assets.
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form panel (Glassmorphic rounded container) */}
          <div className="lg:col-span-7 bg-white/70 backdrop-blur-xl border border-indigo-100/90 p-6 md:p-10 rounded-[32px] shadow-2xl shadow-indigo-100/30">
            
            {/* Calculator sync alert */}
            {appliedMetrics && (
              <div className="mb-6 p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-indigo-700 uppercase block leading-none font-body-alt">Calculator Sync Active</span>
                    <span className="text-xs text-slate-600 font-body-alt">
                      Targeting <strong className="text-indigo-600 font-bold font-mono">${targetCpa.toFixed(2)} CPA</strong> for <strong className="text-slate-800 font-semibold">{monthlyVolume.toLocaleString()}</strong> monthly volume.
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClearMetrics}
                  className="text-xs font-black text-indigo-600 hover:text-indigo-700 underline cursor-pointer font-body-alt"
                >
                  Clear Goals
                </button>
              </div>
            )}

            {submitStatus === 'success' ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto shadow-inner">
                  <CheckCircle className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-display">Proposal Request Logged!</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-body-alt">
                  Thank you for submitting your campaign details. Your parameters have been saved in our local workspace database. 
                </p>
                <p className="text-xs text-slate-400 max-w-sm mx-auto leading-normal font-body-alt">
                  Toggle the <strong className="text-indigo-600">"NIS Team Portal"</strong> in the navigation header to view, review, and draft responses to your submission in real-time!
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs rounded-xl cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {submitStatus === 'error' && (
                  <div className="p-3.5 bg-rose-50 border border-rose-100 rounded-xl text-rose-700 text-xs font-medium flex items-center gap-2 font-body-alt">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                    <span>Please enter your Name, Email, and Company Name.</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100/40 focus:outline-none font-body-alt transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sjenkins@apexretail.io"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100/40 focus:outline-none font-body-alt transition-all"
                    />
                  </div>
                </div>

                {/* Company & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Apex Retail Solutions LLC"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100/40 focus:outline-none font-body-alt transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 342-9081"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100/40 focus:outline-none font-body-alt transition-all"
                    />
                  </div>
                </div>

                {/* Campaign Config Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Campaign Type</label>
                    <select
                      value={campaignType}
                      onChange={(e) => setCampaignType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100/40 focus:outline-none font-body-alt transition-all cursor-pointer"
                    >
                      <option>Inbound Customer Support</option>
                      <option>Lead Generation / Outbound Sales</option>
                      <option>Technical Support</option>
                      <option>Back Office Processing</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Monthly Volume</label>
                    <input
                      type="number"
                      value={monthlyVolume}
                      onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100/40 focus:outline-none font-mono transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Target CPA ($)</label>
                    <input
                      type="number"
                      step="0.1"
                      value={targetCpa}
                      onChange={(e) => setTargetCpa(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100/40 focus:outline-none font-mono transition-all"
                    />
                  </div>
                </div>

                {/* Brief Message */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Campaign Brief &amp; SLA Requirements</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current setup, timelines, languages required, and specific tool integration preferences (e.g. Zendesk, Salesforce)..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100/40 focus:outline-none resize-none font-body-alt transition-all"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4 text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-black text-sm rounded-xl transition-all shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Saving Campaign Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Request Custom Proposal
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
