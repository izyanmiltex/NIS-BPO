import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldAlert, Instagram, Linkedin } from 'lucide-react';
import { Inquiry } from '../types';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: `inq-${Date.now()}`,
        name,
        email,
        company: 'N/A',
        phone: phone || 'N/A',
        campaignType: 'Direct Web Inquiry',
        monthlyVolume: 0,
        currentCpa: 0,
        targetCpa: 0,
        message,
        status: 'new',
        submittedAt: new Date().toISOString(),
      };

      try {
        const stored = localStorage.getItem('nis_inquiries');
        const list: Inquiry[] = stored ? JSON.parse(stored) : [];
        list.unshift(newInquiry);
        localStorage.setItem('nis_inquiries', JSON.stringify(list));
        
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } catch (err) {
        console.error('Failed to save inquiry:', err);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }, 1200);
  };

  return (
    <section className="py-24 bg-[#f8fafc] text-slate-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#0b4bce] block mb-2">
            WE ARE ALWAYS REACHABLE
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-6 leading-relaxed text-sm sm:text-base font-body-alt">
            Partner with India’s leading 24/7 call center outsourcing provider. Reach out directly to receive custom campaign blueprints and SLA estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-8">
              <h2 className="text-2xl font-black text-slate-900 font-display">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {/* Physical Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b4bce]/5 border border-[#0b4bce]/10 flex items-center justify-center text-[#0b4bce] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wide text-slate-400 font-sans">
                      Our Operations Campus
                    </h3>
                    <p className="text-sm font-bold text-slate-800 font-display mt-1">
                      NIS BPO Services Pvt. Ltd.
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=186+Anandpuri,+Kidwai+Nagar,+Kanpur,+Uttar+Pradesh+208023+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-500 hover:text-[#0b4bce] hover:underline leading-relaxed font-body-alt mt-1 block"
                    >
                      186 Anandpuri, Kidwai Nagar, Kanpur, Uttar Pradesh 208023 India
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00b0b9]/5 border border-[#00b0b9]/10 flex items-center justify-center text-[#00b0b9] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wide text-slate-400 font-sans">
                      Electronic Mail
                    </h3>
                    <a href="mailto:hr@nisbpo.com" className="text-sm font-bold text-[#0b4bce] hover:underline block mt-1">
                      hr@nisbpo.com
                    </a>
                  </div>
                </div>

                {/* Phone numbers */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b4bce]/5 border border-[#0b4bce]/10 flex items-center justify-center text-[#0b4bce] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wide text-slate-400 font-sans">
                      Corporate Phone Lines
                    </h3>
                    <a href="tel:+915122345678" className="text-sm font-bold text-slate-800 block mt-1 hover:text-[#0b4bce]">
                      +91 (512) 234-5678
                    </a>
                    <a href="tel:+919876543210" className="text-xs text-slate-500 block mt-1 hover:text-[#0b4bce]">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels (Removed Facebook icon, added LinkedIn and Instagram) */}
              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-xs font-black uppercase tracking-wide text-slate-400 font-sans mb-3">
                  Connect on Socials
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/nis-bpo/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#0b4bce]/5 text-[#0b4bce] hover:bg-[#0b4bce] hover:text-white flex items-center justify-center transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#00b0b9]/5 text-[#00b0b9] hover:bg-[#00b0b9] hover:text-white flex items-center justify-center transition-all duration-200"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Now Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm text-left">
              <h2 className="text-2xl font-black text-slate-900 font-display mb-2">
                Contact Now
              </h2>
              <p className="text-xs text-slate-500 mb-8 font-body-alt">
                Fill out this quick form and an SLA operations manager will get back to you within 4 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Submit Feedback Banner */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex gap-3 items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-emerald-900">Message Sent Successfully!</h4>
                      <p className="text-xs text-emerald-700 font-body-alt mt-1">
                        Thank you for reaching out. Our team is already analyzing your inquiry and we will get in touch with you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-2xl flex gap-3 items-start"
                  >
                    <ShieldAlert className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-red-900">Required Fields Missing</h4>
                      <p className="text-xs text-red-700 font-body-alt mt-1">
                        Please provide your full name, email address, and write a message so we can process your request correctly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-black uppercase tracking-wider text-slate-400 font-sans block mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#0b4bce] focus:ring-4 focus:ring-[#0b4bce]/10 focus:outline-none transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase tracking-wider text-slate-400 font-sans block mb-2">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., jane@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#0b4bce] focus:ring-4 focus:ring-[#0b4bce]/10 focus:outline-none transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-black uppercase tracking-wider text-slate-400 font-sans block mb-2">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g., +1 (555) 019-2834"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#0b4bce] focus:ring-4 focus:ring-[#0b4bce]/10 focus:outline-none transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="text-xs font-black uppercase tracking-wider text-slate-400 font-sans block mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe how we can help you with customer support, data entry, Web services, or any outbound operations..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#0b4bce] focus:ring-4 focus:ring-[#0b4bce]/10 focus:outline-none transition-all font-sans resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.01] duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <span>Send</span>
                        <Send className="w-3.5 h-3.5 text-white" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
