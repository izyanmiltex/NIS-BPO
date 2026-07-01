import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Award, BookOpen, Send, CheckCircle2, AlertCircle, Upload, Heart, HelpCircle, PhoneCall, Headphones, FileText, CheckCircle } from 'lucide-react';

export default function Careers() {
  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedRole, setSelectedRole] = useState('Customer Support');
  const [experience, setExperience] = useState('Fresher (0 years)');
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const trainingRoles = [
    {
      title: "Customer Support",
      desc: "Address customer issues and resolve them in a timely and efficient manner and interact with customers to ensure that they are being dealt with immediately.",
      icon: <Headphones className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Call Answering",
      desc: "Represent the clients' business over the phone, greet callers and attend to those callers' needs. A message is taken and delivered per the customer's instructions.",
      icon: <PhoneCall className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Telemarketing Services",
      desc: "The direct marketing of goods or services to potential customers over the telephone including outbound calls, inbound calls, lead generation and sales calls.",
      icon: <FileText className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Lead Generation",
      desc: "Lead generation is the act of getting new customers to enter your sales funnel . You do this by generating excitement for your offers over the calls.",
      icon: <Heart className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "IT Help Desk",
      desc: "Help users solve their problems through phone calls. Track their issues, and give assistance regarding products, services or processes.",
      icon: <HelpCircle className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Third Party Verification",
      desc: "Identify inefficient process areas in your clients' organization and provide evidence as to why their company should invest in these processes.",
      icon: <CheckCircle className="w-5 h-5 text-indigo-600" />
    }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newApplication = {
        id: `app-${Date.now()}`,
        jobTitle: selectedRole,
        fullName,
        email,
        phone,
        experience,
        status: 'pending',
        submittedAt: new Date().toISOString(),
      };

      try {
        const stored = localStorage.getItem('nis_job_applications');
        const list = stored ? JSON.parse(stored) : [];
        list.unshift(newApplication);
        localStorage.setItem('nis_job_applications', JSON.stringify(list));
        setSubmitStatus('success');
      } catch (err) {
        console.error('Failed to save application:', err);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }, 1200);
  };

  return (
    <section id="careers" className="py-24 bg-white text-slate-800 scroll-mt-20 relative">
      {/* Background Soft Shadows */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UPPER BLOCK: Dedicated program & call center representative training */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-left md:text-center">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600 font-mono block mb-2">
            Opportunity to train yourselves in our dedicated program.
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
            Call Center Representatives
          </h2>
          <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full hidden md:block" />
        </div>

        {/* 6 Training Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 text-left">
          {trainingRoles.map((role, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] border border-slate-200/60 hover:border-indigo-300 rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  {role.icon}
                </div>
                <h3 className="text-base font-black text-slate-900 tracking-tight font-display">
                  {role.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-body-alt">
                  {role.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LOWER BLOCK: Job Opportunities (Go confidently...) */}
        <div className="border-t border-slate-100 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            
            {/* Left Column - Copy and Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-indigo-600 font-mono block">
                Go confidently in the direction of your dreams!
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
                Job Opportunities
              </h2>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-body-alt">
                We pride our association with pioneer companies across the industry. Based on our in-depth knowledge and commitment to deliver quality services, we have secured a vast clientele within a short span of time.
              </p>

              <div className="p-6 bg-indigo-50/50 border border-indigo-100 rounded-2xl">
                <h4 className="text-sm font-black text-slate-900 font-display mb-2">BPO jobs in Kanpur for freshers.</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-body-alt">
                  We specialize in training young talents and freshers right in Kanpur, preparing you for international client support channels, high-quality telemarketing campaigns, and professional customer engagement standards.
                </p>
              </div>
            </div>

            {/* Right Column - Custom Application Form */}
            <div id="apply-now-form" className="lg:col-span-6 bg-[#f8fafc] border border-slate-200 p-6 md:p-8 rounded-[24px] shadow-sm">
              <h3 className="text-xl font-black text-slate-900 font-display mb-2">Apply Now</h3>
              <p className="text-xs text-slate-500 font-body-alt mb-6">NIS-BPO — Here success is a journey, not a destination.</p>

              {submitStatus === 'success' ? (
                <div className="text-center py-8 space-y-4 bg-white border border-slate-200 p-6 rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 font-display">Application Received!</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-body-alt">
                    Thank you, <strong>{fullName}</strong>. Your profile for the <strong>{selectedRole}</strong> division has been successfully submitted and logged. We will contact you soon!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFullName('');
                      setEmail('');
                      setPhone('');
                      setFileName('');
                    }}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Apply for Another Role
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitStatus === 'error' && (
                    <div className="p-3.5 bg-rose-50 border border-rose-100 rounded-xl text-rose-700 text-xs font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span className="font-body-alt">Please complete all required fields (*)</span>
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Amit Sharma"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:border-indigo-500 focus:outline-none font-body-alt"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="amit@gmail.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:border-indigo-500 focus:outline-none font-body-alt"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 95111 02314"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:border-indigo-500 focus:outline-none font-body-alt"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Program Interest</label>
                      <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:border-indigo-500 focus:outline-none font-body-alt cursor-pointer"
                      >
                        <option>Customer Support</option>
                        <option>Call Answering</option>
                        <option>Telemarketing Services</option>
                        <option>Lead Generation</option>
                        <option>IT Help Desk</option>
                        <option>Third Party Verification</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Experience Level</label>
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:border-indigo-500 focus:outline-none font-body-alt cursor-pointer"
                      >
                        <option>Fresher (0 years)</option>
                        <option>Under 1 year</option>
                        <option>1 - 2 years</option>
                        <option>2+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5 font-body-alt">Upload Resume (Optional)</label>
                    <div className="border border-dashed border-slate-200 hover:border-indigo-500 bg-white rounded-xl p-4 text-center cursor-pointer relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <span className="text-xs font-bold text-slate-600 block">
                        {fileName ? fileName : "Click to select resume"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? "Submitting application..." : "Apply Now"}
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
