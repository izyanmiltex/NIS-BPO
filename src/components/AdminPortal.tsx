import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutDashboard, Users, MessageSquare, Briefcase, RefreshCw, Eye, CheckCircle2, XCircle, Trash2, Edit3, Send, Reply, AlertCircle, FileText, FolderOpen } from 'lucide-react';
import { SEED_INQUIRIES, SEED_APPLICATIONS } from '../data';
import { Inquiry, JobApplication } from '../types';

interface AdminPortalProps {
  onClose: () => void;
}

export default function AdminPortal({ onClose }: AdminPortalProps) {
  const [activeTab, setActiveTab] = useState<'leads' | 'candidates'>('leads');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  
  // Quick filters
  const [leadFilter, setLeadFilter] = useState<'all' | 'new' | 'contacted' | 'archived'>('all');
  const [candidateFilter, setCandidateFilter] = useState<'all' | 'pending' | 'reviewed' | 'shortlisted' | 'rejected'>('all');
  
  // Note/Staff updates
  const [staffNotes, setStaffNotes] = useState('');
  const [isReplying, setIsReplying] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Sync from localStorage or Seed Data on Mount
  useEffect(() => {
    // 1. Load Inquiries
    const storedInquiries = localStorage.getItem('nis_inquiries');
    if (storedInquiries) {
      setInquiries(JSON.parse(storedInquiries));
    } else {
      localStorage.setItem('nis_inquiries', JSON.stringify(SEED_INQUIRIES));
      setInquiries(SEED_INQUIRIES);
    }

    // 2. Load Applications
    const storedApps = localStorage.getItem('nis_job_applications');
    if (storedApps) {
      setApplications(JSON.parse(storedApps));
    } else {
      localStorage.setItem('nis_job_applications', JSON.stringify(SEED_APPLICATIONS));
      setApplications(SEED_APPLICATIONS);
    }
  }, []);

  const handleResetSeedData = () => {
    localStorage.setItem('nis_inquiries', JSON.stringify(SEED_INQUIRIES));
    localStorage.setItem('nis_job_applications', JSON.stringify(SEED_APPLICATIONS));
    setInquiries(SEED_INQUIRIES);
    setApplications(SEED_APPLICATIONS);
    setSelectedInquiry(null);
    setSelectedApplication(null);
    showSuccessToast('Database reset to defaults!');
  };

  const showSuccessToast = (msg: string) => {
    setActionSuccess(msg);
    setTimeout(() => setActionSuccess(null), 3000);
  };

  // Inquiry actions
  const handleUpdateInquiryStatus = (id: string, status: Inquiry['status']) => {
    const updated = inquiries.map((item) => {
      if (item.id === id) {
        return { ...item, status };
      }
      return item;
    });
    setInquiries(updated);
    localStorage.setItem('nis_inquiries', JSON.stringify(updated));
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status });
    }
    showSuccessToast('Inquiry status updated successfully.');
  };

  const handleSaveInquiryNotes = (id: string) => {
    const updated = inquiries.map((item) => {
      if (item.id === id) {
        return { ...item, notes: staffNotes };
      }
      return item;
    });
    setInquiries(updated);
    localStorage.setItem('nis_inquiries', JSON.stringify(updated));
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, notes: staffNotes });
    }
    setStaffNotes('');
    showSuccessToast('Staff notes saved.');
  };

  const handleDeleteInquiry = (id: string) => {
    const filtered = inquiries.filter(item => item.id !== id);
    setInquiries(filtered);
    localStorage.setItem('nis_inquiries', JSON.stringify(filtered));
    setSelectedInquiry(null);
    showSuccessToast('Inquiry deleted.');
  };

  // Application actions
  const handleUpdateApplicationStatus = (id: string, status: JobApplication['status']) => {
    const updated = applications.map((item) => {
      if (item.id === id) {
        return { ...item, status };
      }
      return item;
    });
    setApplications(updated);
    localStorage.setItem('nis_job_applications', JSON.stringify(updated));
    if (selectedApplication && selectedApplication.id === id) {
      setSelectedApplication({ ...selectedApplication, status });
    }
    showSuccessToast('Candidate status updated successfully.');
  };

  const handleSaveApplicationNotes = (id: string) => {
    const updated = applications.map((item) => {
      if (item.id === id) {
        return { ...item, notes: staffNotes };
      }
      return item;
    });
    setApplications(updated);
    localStorage.setItem('nis_job_applications', JSON.stringify(updated));
    if (selectedApplication && selectedApplication.id === id) {
      setSelectedApplication({ ...selectedApplication, notes: staffNotes });
    }
    setStaffNotes('');
    showSuccessToast('Candidate staffing notes saved.');
  };

  const handleDeleteApplication = (id: string) => {
    const filtered = applications.filter(item => item.id !== id);
    setApplications(filtered);
    localStorage.setItem('nis_job_applications', JSON.stringify(filtered));
    setSelectedApplication(null);
    showSuccessToast('Application record deleted.');
  };

  // Simulate Email Dispatch
  const handleSendSimulatedEmail = (type: 'lead' | 'candidate') => {
    if (!replyMessage.trim()) return;
    setIsReplying(true);
    
    setTimeout(() => {
      setIsReplying(false);
      setReplyMessage('');
      showSuccessToast('Simulated email dispatch success!');
      
      // Auto update status on reply
      if (type === 'lead' && selectedInquiry) {
        handleUpdateInquiryStatus(selectedInquiry.id, 'contacted');
      } else if (type === 'candidate' && selectedApplication) {
        handleUpdateApplicationStatus(selectedApplication.id, 'reviewed');
      }
    }, 1200);
  };

  // Filters
  const filteredInquiries = inquiries.filter((item) => {
    if (leadFilter === 'all') return true;
    return item.status === leadFilter;
  });

  const filteredApplications = applications.filter((item) => {
    if (candidateFilter === 'all') return true;
    return item.status === candidateFilter;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto">
      
      {/* Toast Alert */}
      <AnimatePresence>
        {actionSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 z-50 px-4 py-2.5 bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg border border-emerald-400/30 flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{actionSuccess}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden shadow-2xl relative">
        
        {/* Portal Header */}
        <div className="px-6 py-4 bg-slate-800/80 border-b border-slate-700/60 flex flex-col sm:flex-row justify-between items-center gap-4 flex-shrink-0">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                NIS Internal Team Desk
                <span className="px-1.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-400/20 text-[9px] font-bold rounded">OPERATIONS CONTROL</span>
              </h3>
              <p className="text-[11px] text-slate-400">Manage campaign lead funnels and local recruitment drives</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetSeedData}
              className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-slate-300 text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-1"
              title="Reset Database to standard preloaded entries"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Seeds
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-slate-700 hover:bg-slate-600 hover:text-white rounded-lg text-slate-300 cursor-pointer"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Portal Workspace Grid */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Main workspace section: Left Column (7 cols) */}
          <div className="lg:col-span-7 border-r border-slate-800 flex flex-col overflow-hidden h-full">
            
            {/* Workspace Navbar tabs */}
            <div className="px-4 py-3 bg-slate-900/60 border-b border-slate-800 flex justify-between items-center flex-shrink-0">
              <div className="flex gap-2">
                <button
                  onClick={() => { setActiveTab('leads'); setSelectedInquiry(null); }}
                  className={`px-4 py-2 rounded-lg text-xs font-extrabold flex items-center gap-2 cursor-pointer transition-all ${
                    activeTab === 'leads'
                      ? 'bg-indigo-600 text-white shadow shadow-indigo-600/20'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Campaign Inquiries ({inquiries.length})
                </button>
                <button
                  onClick={() => { setActiveTab('candidates'); setSelectedApplication(null); }}
                  className={`px-4 py-2 rounded-lg text-xs font-extrabold flex items-center gap-2 cursor-pointer transition-all ${
                    activeTab === 'candidates'
                      ? 'bg-indigo-600 text-white shadow shadow-indigo-600/20'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  Candidate Resumes ({applications.length})
                </button>
              </div>
            </div>

            {/* Quick Filters line */}
            <div className="px-4 py-2 bg-slate-900/20 border-b border-slate-800 flex items-center gap-2 flex-shrink-0">
              <span className="text-[10px] text-slate-500 uppercase font-bold">Filter Status:</span>
              
              {activeTab === 'leads' ? (
                <div className="flex gap-1">
                  {(['all', 'new', 'contacted', 'archived'] as const).map((stat) => (
                    <button
                      key={stat}
                      onClick={() => setLeadFilter(stat)}
                      className={`px-2 py-1 text-[10px] font-bold rounded capitalize cursor-pointer transition-colors ${
                        leadFilter === stat
                          ? 'bg-slate-700 text-white'
                          : 'bg-slate-800/40 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {stat}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex gap-1">
                  {(['all', 'pending', 'reviewed', 'shortlisted', 'rejected'] as const).map((stat) => (
                    <button
                      key={stat}
                      onClick={() => setCandidateFilter(stat)}
                      className={`px-2 py-1 text-[10px] font-bold rounded capitalize cursor-pointer transition-colors ${
                        candidateFilter === stat
                          ? 'bg-slate-700 text-white'
                          : 'bg-slate-800/40 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {stat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content Lists Scroll Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              
              {/* Leads List */}
              {activeTab === 'leads' && (
                filteredInquiries.length === 0 ? (
                  <div className="text-center py-20 text-slate-500">
                    <FolderOpen className="w-10 h-10 mx-auto opacity-30 mb-2" />
                    <p className="text-xs">No campaign inquiries found.</p>
                  </div>
                ) : (
                  filteredInquiries.map((inq) => (
                    <div
                      key={inq.id}
                      onClick={() => { setSelectedInquiry(inq); setStaffNotes(inq.notes || ''); }}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                        selectedInquiry?.id === inq.id
                          ? 'bg-slate-800/70 border-indigo-500 shadow-lg ring-1 ring-indigo-500/20'
                          : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/30'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold text-white">{inq.name}</span>
                            <span className="text-[10px] font-semibold text-slate-400">@{inq.company}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-1">{inq.campaignType} • Vol: {inq.monthlyVolume.toLocaleString()}</p>
                          <p className="text-[11px] text-slate-300 mt-2 line-clamp-1 italic">"{inq.message}"</p>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                            inq.status === 'new'
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                              : inq.status === 'contacted'
                              ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                              : 'bg-slate-700/20 text-slate-400 border border-slate-700/20'
                          }`}>
                            {inq.status}
                          </span>
                          <span className="text-[9px] text-slate-500 font-mono">
                            {new Date(inq.submittedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )
              )}

              {/* Candidates List */}
              {activeTab === 'candidates' && (
                filteredApplications.length === 0 ? (
                  <div className="text-center py-20 text-slate-500">
                    <FolderOpen className="w-10 h-10 mx-auto opacity-30 mb-2" />
                    <p className="text-xs">No candidate applications found.</p>
                  </div>
                ) : (
                  filteredApplications.map((app) => (
                    <div
                      key={app.id}
                      onClick={() => { setSelectedApplication(app); setStaffNotes(app.notes || ''); }}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                        selectedApplication?.id === app.id
                          ? 'bg-slate-800/70 border-indigo-500 shadow-lg ring-1 ring-indigo-500/20'
                          : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/30'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold text-white">{app.fullName}</span>
                            <span className="px-1.5 py-0.5 bg-slate-800 text-slate-400 text-[9px] rounded font-semibold">{app.jobTitle}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 mt-1">{app.experience}</p>
                          <p className="text-[11px] text-slate-300 mt-2 line-clamp-1 italic">"{app.coverLetter}"</p>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                            app.status === 'pending'
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                              : app.status === 'reviewed'
                              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              : app.status === 'shortlisted'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-slate-700/20 text-slate-400 border border-slate-700/20'
                          }`}>
                            {app.status}
                          </span>
                          <span className="text-[9px] text-slate-500 font-mono">
                            {new Date(app.submittedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )
              )}

            </div>

          </div>

          {/* Details & Operations section: Right Column (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950/45 flex flex-col overflow-hidden h-full">
            
            {activeTab === 'leads' ? (
              // Inquiry details panel
              selectedInquiry ? (
                <div className="p-6 flex-1 overflow-y-auto space-y-6 text-left">
                  
                  {/* Title & info card */}
                  <div className="pb-4 border-b border-slate-800">
                    <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider block mb-1">Lead Client Dossier</span>
                    <h4 className="text-lg font-black text-white">{selectedInquiry.name}</h4>
                    <span className="text-xs text-slate-400">Representative of <strong>{selectedInquiry.company}</strong></span>
                  </div>

                  {/* Core stats block */}
                  <div className="space-y-3 bg-slate-900/60 p-4 border border-slate-800 rounded-xl text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Corporate Email:</span>
                      <a href={`mailto:${selectedInquiry.email}`} className="text-indigo-400 hover:underline">{selectedInquiry.email}</a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Phone Contact:</span>
                      <span className="text-slate-300 font-mono">{selectedInquiry.phone || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Campaign Channel:</span>
                      <span className="text-slate-300 font-semibold">{selectedInquiry.campaignType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Est. Volume:</span>
                      <span className="text-slate-300 font-bold font-mono">{selectedInquiry.monthlyVolume.toLocaleString()} / mo</span>
                    </div>
                    {selectedInquiry.targetCpa > 0 && (
                      <div className="flex justify-between pt-2 border-t border-slate-800">
                        <span className="text-slate-500">Target Budget Goal:</span>
                        <span className="text-emerald-400 font-bold font-mono">${selectedInquiry.targetCpa.toFixed(2)} CPA</span>
                      </div>
                    )}
                  </div>

                  {/* Narrative details */}
                  <div>
                    <h5 className="text-xs uppercase font-bold text-slate-500 mb-1.5">Campaign Requirements brief</h5>
                    <div className="bg-slate-900/40 p-3.5 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed font-serif italic">
                      "{selectedInquiry.message}"
                    </div>
                  </div>

                  {/* Status update controller */}
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <h5 className="text-xs uppercase font-bold text-slate-400">Transition Status</h5>
                    <div className="flex gap-2">
                      {(['new', 'contacted', 'archived'] as Inquiry['status'][]).map((status) => (
                        <button
                          key={status}
                          onClick={() => handleUpdateInquiryStatus(selectedInquiry.id, status)}
                          className={`flex-1 py-1.5 text-[10px] font-bold rounded uppercase tracking-wider cursor-pointer border ${
                            selectedInquiry.status === status
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                              : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border-slate-800 hover:text-slate-200'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* private staff notes input */}
                  <div className="space-y-2">
                    <h5 className="text-xs uppercase font-bold text-slate-400">Private Staffing / Lead logs</h5>
                    {selectedInquiry.notes && (
                      <div className="p-2.5 bg-indigo-500/5 border border-indigo-500/10 rounded-lg text-[11px] text-slate-300 leading-relaxed mb-2">
                        <strong>Logged staff update:</strong> {selectedInquiry.notes}
                      </div>
                    )}
                    <textarea
                      value={staffNotes}
                      onChange={(e) => setStaffNotes(e.target.value)}
                      placeholder="Add corporate vetting notes, scheduled call dates, or contract status here..."
                      rows={2}
                      className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none"
                    />
                    <button
                      onClick={() => handleSaveInquiryNotes(selectedInquiry.id)}
                      className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg border border-slate-700 transition-colors cursor-pointer"
                    >
                      Save Private Note
                    </button>
                  </div>

                  {/* Email Simulator toggle */}
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <button
                      onClick={() => {
                        setReplyMessage(`Hi ${selectedInquiry.name},\n\nThis is Rajesh from the Corporate Sales desk at NIS BPO Services Pvt Ltd. We received your campaign brief regarding your interest in our ${selectedInquiry.campaignType} solutions with a target goal of $${selectedInquiry.targetCpa.toFixed(2)} CPA.\n\nOur process engineer in Kanpur is analyzing your volume. Would you be available for a short discovery Zoom call tomorrow at 3 PM UTC?\n\nWarm regards,\nRajesh Mehta\nNIS BPO Business Consulting`);
                      }}
                      className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Reply className="w-4 h-4" />
                      Draft Simulated Campaign Reply
                    </button>

                    {replyMessage && (
                      <div className="space-y-2 pt-2">
                        <textarea
                          value={replyMessage}
                          onChange={(e) => setReplyMessage(e.target.value)}
                          rows={4}
                          className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 font-mono leading-relaxed"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => setReplyMessage('')}
                            className="w-1/3 py-2 bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-bold rounded-lg"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleSendSimulatedEmail('lead')}
                            disabled={isReplying}
                            className="w-2/3 py-2 bg-teal-600 hover:bg-teal-500 text-slate-950 text-xs font-bold rounded-lg flex items-center justify-center gap-1"
                          >
                            {isReplying ? 'Sending...' : 'Send Outbound Email'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Destructive Delete actions */}
                  <div className="pt-6 border-t border-slate-800 text-right">
                    <button
                      onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                      className="px-3 py-1.5 bg-rose-950/20 hover:bg-rose-950/50 border border-rose-900/30 text-rose-400 text-[10px] font-bold rounded-lg transition-colors flex items-center gap-1.5 inline-flex cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Purge Lead Record
                    </button>
                  </div>

                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-center items-center text-slate-600 p-6">
                  <Eye className="w-10 h-10 opacity-20 mb-2" />
                  <p className="text-xs">Select a campaign inquiry to review client requirements and transition deal status.</p>
                </div>
              )
            ) : (
              // Candidate details panel
              selectedApplication ? (
                <div className="p-6 flex-1 overflow-y-auto space-y-6 text-left">
                  
                  {/* Title & info card */}
                  <div className="pb-4 border-b border-slate-800">
                    <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider block mb-1">Candidate Profile</span>
                    <h4 className="text-lg font-black text-white">{selectedApplication.fullName}</h4>
                    <span className="text-xs text-slate-400">Applying for: <strong className="text-indigo-300">{selectedApplication.jobTitle}</strong></span>
                  </div>

                  {/* Core stats block */}
                  <div className="space-y-3 bg-slate-900/60 p-4 border border-slate-800 rounded-xl text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Personal Email:</span>
                      <a href={`mailto:${selectedApplication.email}`} className="text-indigo-400 hover:underline">{selectedApplication.email}</a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact Number:</span>
                      <span className="text-slate-300 font-mono">{selectedApplication.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Experience Track:</span>
                      <span className="text-slate-300 font-semibold">{selectedApplication.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Skillset Declared:</span>
                      <span className="text-teal-400 font-bold">{selectedApplication.skills}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-800">
                      <span className="text-slate-500">Resume Status:</span>
                      <span className="text-emerald-400 font-mono flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" />
                        Vetted_CV_Locked.pdf
                      </span>
                    </div>
                  </div>

                  {/* Narrative details */}
                  <div>
                    <h5 className="text-xs uppercase font-bold text-slate-500 mb-1.5">Candidate Cover Note</h5>
                    <div className="bg-slate-900/40 p-3.5 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed font-serif italic">
                      "{selectedApplication.coverLetter}"
                    </div>
                  </div>

                  {/* Status update controller */}
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <h5 className="text-xs uppercase font-bold text-slate-400">HR Pipeline State</h5>
                    <div className="flex gap-1.5 flex-wrap">
                      {(['pending', 'reviewed', 'shortlisted', 'rejected'] as JobApplication['status'][]).map((status) => (
                        <button
                          key={status}
                          onClick={() => handleUpdateApplicationStatus(selectedApplication.id, status)}
                          className={`flex-1 py-1.5 text-[9px] font-bold rounded uppercase tracking-wider cursor-pointer border ${
                            selectedApplication.status === status
                              ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                              : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border-slate-800 hover:text-slate-200'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* private staff notes input */}
                  <div className="space-y-2">
                    <h5 className="text-xs uppercase font-bold text-slate-400">Internal Recruiter Notes</h5>
                    {selectedApplication.notes && (
                      <div className="p-2.5 bg-indigo-500/5 border border-indigo-500/10 rounded-lg text-[11px] text-slate-300 leading-relaxed mb-2">
                        <strong>Recruitment Log:</strong> {selectedApplication.notes}
                      </div>
                    )}
                    <textarea
                      value={staffNotes}
                      onChange={(e) => setStaffNotes(e.target.value)}
                      placeholder="Add interview performance logs, English voice clarity rating (1-10), or shift availability checks here..."
                      rows={2}
                      className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none"
                    />
                    <button
                      onClick={() => handleSaveApplicationNotes(selectedApplication.id)}
                      className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg border border-slate-700 transition-colors cursor-pointer"
                    >
                      Save Recruiter Update
                    </button>
                  </div>

                  {/* Email Simulator toggle */}
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <button
                      onClick={() => {
                        setReplyMessage(`Hi ${selectedApplication.fullName},\n\nThis is the Human Resources desk at NIS BPO Services Pvt Ltd. We reviewed your application for the ${selectedApplication.jobTitle} vacancy based in our Kanpur hub.\n\nWe are highly impressed by your track record. Can you visit our campus this Wednesday at 11:30 AM for a face-to-face communication round and basic computer validation?\n\nPlease carry an updated copy of your Resume.\n\nWarm regards,\nNeha Sen\nLead Talent Acquisition\nNIS BPO Services Kanpur`);
                      }}
                      className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Reply className="w-4 h-4" />
                      Draft Simulated Candidate Reply
                    </button>

                    {replyMessage && (
                      <div className="space-y-2 pt-2">
                        <textarea
                          value={replyMessage}
                          onChange={(e) => setReplyMessage(e.target.value)}
                          rows={4}
                          className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-300 font-mono leading-relaxed"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => setReplyMessage('')}
                            className="w-1/3 py-2 bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-bold rounded-lg"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleSendSimulatedEmail('candidate')}
                            disabled={isReplying}
                            className="w-2/3 py-2 bg-teal-600 hover:bg-teal-500 text-slate-950 text-xs font-bold rounded-lg flex items-center justify-center gap-1"
                          >
                            {isReplying ? 'Sending...' : 'Send Interview Invite'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Destructive Delete actions */}
                  <div className="pt-6 border-t border-slate-800 text-right">
                    <button
                      onClick={() => handleDeleteApplication(selectedApplication.id)}
                      className="px-3 py-1.5 bg-rose-950/20 hover:bg-rose-950/50 border border-rose-900/30 text-rose-400 text-[10px] font-bold rounded-lg transition-colors flex items-center gap-1.5 inline-flex cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Discard Candidate Application
                    </button>
                  </div>

                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-center items-center text-slate-600 p-6">
                  <Eye className="w-10 h-10 opacity-20 mb-2" />
                  <p className="text-xs">Select a candidate application to review qualification logs, verify skills, and schedule interviews.</p>
                </div>
              )
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
