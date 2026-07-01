import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  DollarSign, 
  TrendingDown, 
  Percent, 
  ArrowRight, 
  Sparkles, 
  Check, 
  CheckCircle,
  Zap,
  Database,
  UserCheck,
  Award,
  RefreshCw
} from 'lucide-react';

interface CpaCalculatorProps {
  onApplyMetrics: (metrics: {
    campaignType: string;
    monthlyVolume: number;
    currentCpa: number;
    targetCpa: number;
  }) => void;
}

export default function CpaCalculator({ onApplyMetrics }: CpaCalculatorProps) {
  const [activeTab, setActiveTab] = useState<'inbound' | 'outbound'>('inbound');
  
  // States for Inbound support mode
  const [monthlyTickets, setMonthlyTickets] = useState<number>(12000);
  const [currentCostPerTicket, setCurrentCostPerTicket] = useState<number>(5.50);
  const [currentCsat, setCurrentCsat] = useState<number>(72);

  // States for Outbound acquisition mode
  const [monthlyLeads, setMonthlyLeads] = useState<number>(8000);
  const [currentCpa, setCurrentCpa] = useState<number>(18.00);
  const [conversionRate, setConversionRate] = useState<number>(3.2);

  // --- Dynamic Outbound Customization Options ---
  const outboundStyle = 'onesoft' as 'onesoft' | 'mutmiz' | 'cyber';
  const [dialerType, setDialerType] = useState<'predictive' | 'progressive' | 'manual'>('predictive');
  const [leadQuality, setLeadQuality] = useState<'cold' | 'qualified' | 'warm'>('qualified');
  const [agentTier, setAgentTier] = useState<'standard' | 'premium_b2b'>('premium_b2b');
  const [avgDealValue, setAvgDealValue] = useState<number>(1200);

  const [applied, setApplied] = useState<boolean>(false);

  // Style configurations for the typography/layout themes
  const styleConfigs = {
    onesoft: {
      isLight: true,
      headingFont: 'font-display font-black tracking-tight text-slate-900',
      bodyFont: 'font-body-alt text-slate-700',
      numberFont: 'font-display font-extrabold tracking-tight text-slate-900',
      cardClass: 'bg-white/90 backdrop-blur-xl border border-indigo-100/90 rounded-[28px] shadow-2xl shadow-indigo-100/20 p-6 md:p-8 relative',
      containerClass: 'bg-slate-100/60 backdrop-blur-md border border-slate-200/50 rounded-[24px] p-1',
      badgeClass: 'bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full text-[11px] font-bold tracking-wider uppercase px-3 py-1',
      toggleActive: 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full shadow-lg shadow-indigo-500/20 font-bold font-body-alt',
      toggleInactive: 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 rounded-full',
      sliderAccent: 'accent-indigo-600',
      accentColor: 'text-indigo-600',
      buttonClass: 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full font-bold shadow-lg shadow-indigo-500/25',
      glow: 'absolute -top-24 -right-24 w-[450px] h-[450px] bg-gradient-to-br from-violet-300/25 via-indigo-300/20 to-cyan-300/15 rounded-full blur-[100px] pointer-events-none',
      borderClass: 'border-slate-100',
      highlightBorderClass: 'border-indigo-100',
      tagline: 'Onesoft Aurora (Space Grotesk Headings + Plus Jakarta Sans Body)'
    },
    mutmiz: {
      isLight: true,
      headingFont: 'font-body-alt font-extrabold tracking-tight text-slate-900',
      bodyFont: 'font-body-alt text-slate-700',
      numberFont: 'font-body-alt font-extrabold text-slate-900',
      cardClass: 'bg-white border border-slate-200 rounded-[24px] shadow-lg shadow-slate-100/80 p-6 md:p-8 relative',
      containerClass: 'bg-slate-100 border border-slate-200 rounded-[24px] p-1',
      badgeClass: 'bg-blue-50 text-blue-600 border border-blue-100 rounded-full text-[11px] font-bold tracking-wide uppercase px-3 py-1',
      toggleActive: 'bg-blue-600 text-white rounded-[16px] shadow-md shadow-blue-500/10 font-bold font-body-alt',
      toggleInactive: 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 rounded-[16px]',
      sliderAccent: 'accent-blue-600',
      accentColor: 'text-blue-600',
      buttonClass: 'bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold shadow-lg shadow-blue-500/10',
      glow: 'absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/20 rounded-full blur-3xl pointer-events-none',
      borderClass: 'border-slate-100',
      highlightBorderClass: 'border-slate-200',
      tagline: 'Mutmiz Cobalt (Plus Jakarta Sans Everywhere)'
    },
    cyber: {
      isLight: false,
      headingFont: 'font-display font-bold tracking-tight text-white',
      bodyFont: 'font-sans text-slate-300',
      numberFont: 'font-mono tracking-tight text-teal-400',
      cardClass: 'bg-slate-900/80 border border-slate-800 rounded-[20px] shadow-2xl p-6 md:p-8 relative',
      containerClass: 'bg-slate-950 border border-slate-800 rounded-[20px] p-1',
      badgeClass: 'bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-full text-xs font-semibold px-3 py-1',
      toggleActive: 'bg-teal-600 text-slate-950 rounded-full shadow-md shadow-teal-500/20 font-bold',
      toggleInactive: 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 rounded-full',
      sliderAccent: 'accent-teal-500',
      accentColor: 'text-teal-400',
      buttonClass: 'bg-teal-600 hover:bg-teal-500 text-slate-950 rounded-xl font-bold shadow-lg shadow-teal-500/25',
      glow: 'absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none',
      borderClass: 'border-slate-800',
      highlightBorderClass: 'border-slate-700',
      tagline: 'Cyber Dark Tech (Inter + JetBrains Mono)'
    },
  };

  const style = styleConfigs[outboundStyle];

  // Inbound Calculations
  const inboundCurrentMonthlyCost = monthlyTickets * currentCostPerTicket;
  // NIS Outsourced Cost Per Ticket is typically 40-50% lower due to Kanpur talent cost arbitrage
  const inboundNisCostPerTicket = Math.max(1.80, Math.round((currentCostPerTicket * 0.55) * 10) / 10);
  const inboundNisMonthlyCost = monthlyTickets * inboundNisCostPerTicket;
  const inboundSavingsMonthly = inboundCurrentMonthlyCost - inboundNisMonthlyCost;
  const inboundSavingsAnnual = inboundSavingsMonthly * 12;
  const inboundNisCsat = Math.min(96, Math.max(88, Math.round(currentCsat * 1.15)));

  // --- Dynamic Outbound Simulations & Option Modifiers ---
  const outboundCurrentMonthlyCost = monthlyLeads * currentCpa;
  const currentConversions = monthlyLeads * (conversionRate / 100);
  const currentMonthlyRevenue = currentConversions * avgDealValue;

  // Base NIS cost is 32% lower
  let outboundNisCpaBase = currentCpa * 0.68;
  let conversionMultiplier = 1.35; // default 35% improvement in conversion

  // Dialer technology adjustments
  if (dialerType === 'predictive') {
    outboundNisCpaBase += 0.80; // dialer license fee
    conversionMultiplier *= 1.25; // predictive dialer increases connects by 25%
  } else if (dialerType === 'progressive') {
    outboundNisCpaBase += 0.40;
    conversionMultiplier *= 1.10;
  }

  // Lead Quality adjustments
  if (leadQuality === 'qualified') {
    outboundNisCpaBase *= 1.35; // qualified validation/cleansing costs more
    conversionMultiplier *= 1.85; // but converts much higher
  } else if (leadQuality === 'warm') {
    outboundNisCpaBase *= 1.80; // warm intent signals require premium channels
    conversionMultiplier *= 2.95; // converts extremely well
  }

  // Agent Experience Tier adjustments
  if (agentTier === 'premium_b2b') {
    outboundNisCpaBase *= 1.20; // specialized agents paid more
    conversionMultiplier *= 1.45; // has much higher objection handling capacity
  }

  // Compute final optimized CPA
  const outboundNisCpa = Math.max(4.50, Math.round(outboundNisCpaBase * 10) / 10);
  const outboundNisMonthlyCost = monthlyLeads * outboundNisCpa;
  const outboundSavingsMonthly = outboundCurrentMonthlyCost - outboundNisMonthlyCost;
  const outboundSavingsAnnual = outboundSavingsMonthly * 12;

  // Cap conversion rate to realistic maximum of 25%
  const outboundNisConversionRate = Math.min(25.0, Math.round((conversionRate * conversionMultiplier) * 10) / 10);
  const nisConversions = monthlyLeads * (outboundNisConversionRate / 100);
  const nisMonthlyRevenue = nisConversions * avgDealValue;
  const netNewRevenueMonthly = nisMonthlyRevenue - currentMonthlyRevenue;

  const handleApply = () => {
    onApplyMetrics({
      campaignType: activeTab === 'inbound' ? 'Inbound Customer Support' : 'Lead Generation / Outbound Sales',
      monthlyVolume: activeTab === 'inbound' ? monthlyTickets : monthlyLeads,
      currentCpa: activeTab === 'inbound' ? currentCostPerTicket : currentCpa,
      targetCpa: activeTab === 'inbound' ? inboundNisCostPerTicket : outboundNisCpa,
    });
    setApplied(true);
    setTimeout(() => setApplied(false), 3000);
  };

  const isLight = style.isLight;

  const getSelectorBtnClass = (isActive: boolean) => {
    if (isActive) {
      return isLight
        ? outboundStyle === 'onesoft'
          ? 'bg-indigo-50/90 border-indigo-400 text-indigo-700 font-bold shadow-sm'
          : 'bg-blue-50/90 border-blue-400 text-blue-700 font-bold shadow-sm'
        : 'bg-slate-900 border-teal-500 text-teal-400 font-semibold';
    } else {
      return isLight
        ? 'bg-slate-50/60 border-slate-200 text-slate-600 hover:bg-slate-100/80 hover:border-slate-300'
        : 'bg-slate-900/30 border-slate-800 text-slate-400 hover:text-slate-300 hover:border-slate-700';
    }
  };

  const getSelectorDescClass = (isActive: boolean) => {
    if (isActive) {
      return isLight
        ? outboundStyle === 'onesoft' ? 'text-indigo-500/80 font-medium' : 'text-blue-500/80 font-medium'
        : 'text-teal-300';
    } else {
      return isLight ? 'text-slate-400' : 'text-slate-500';
    }
  };

  return (
    <section 
      id="cpa-calculator" 
      className={`py-24 scroll-mt-20 transition-all duration-300 relative overflow-hidden ${
        outboundStyle === 'onesoft'
          ? 'bg-gradient-to-tr from-[#f8fafc] via-[#f5f3ff] to-[#e0f2fe] text-slate-900'
          : outboundStyle === 'mutmiz'
            ? 'bg-[#f8fafc] text-slate-900'
            : 'bg-slate-950 text-slate-100'
      }`}
    >
      {/* Aurora glow effects in light-theme mode */}
      {isLight && outboundStyle === 'onesoft' && (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-purple-200/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-200/30 rounded-full blur-[90px] pointer-events-none" />
        </>
      )}
      {isLight && outboundStyle === 'mutmiz' && (
        <>
          <div className="absolute top-10 left-1/3 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-50/50 rounded-full blur-[90px] pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border transition-all ${
            isLight 
              ? outboundStyle === 'onesoft'
                ? 'bg-indigo-50 border-indigo-100 text-indigo-600 shadow-sm'
                : 'bg-blue-50 border-blue-100 text-blue-600'
              : 'bg-teal-500/10 border-teal-500/30 text-teal-400'
          }`}>
            <Calculator className="w-3.5 h-3.5 animate-pulse" />
            ROI &amp; Cost Optimizer
          </div>
          <h2 className={`text-3xl md:text-5xl font-black tracking-tight mb-4 transition-colors ${
            isLight ? 'text-slate-900 font-display' : 'text-white'
          }`}>
            Calculate Your <span className={isLight ? (outboundStyle === 'onesoft' ? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 font-extrabold' : 'text-blue-600') : 'text-teal-400'}>BPO Savings &amp; ROI</span>
          </h2>
          <p className={`text-lg transition-colors leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            See how outsourcing to NIS BPO Services leverages competitive cost arbitrage in Kanpur, Uttar Pradesh to significantly lower costs while boosting quality.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className={`p-1.5 rounded-2xl flex gap-2 transition-all ${
            isLight ? 'bg-slate-200/50 border border-slate-300/40 shadow-sm' : 'bg-slate-800/80 border border-slate-700/60'
          }`}>
            <button
              onClick={() => setActiveTab('inbound')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'inbound'
                  ? isLight
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-teal-600 text-white shadow-md shadow-teal-900/40'
                  : isLight
                    ? 'text-slate-500 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <TrendingDown className="w-4 h-4" />
              Inbound Support (Cost per Ticket)
            </button>
            <button
              onClick={() => setActiveTab('outbound')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'outbound'
                  ? isLight
                    ? outboundStyle === 'onesoft'
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-teal-600 text-white shadow-md shadow-teal-900/40'
                  : isLight
                    ? 'text-slate-500 hover:text-slate-950 hover:bg-slate-100'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
              }`}
            >
              <Percent className="w-4 h-4" />
              Outbound Sales (Cost per Acquisition)
            </button>
          </div>
        </div>

        {/* Custom clean divider line */}
        <div className="h-px bg-slate-200/60 max-w-7xl mx-auto mb-10" />

        {/* Calculator Body */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-all duration-300 ${activeTab === 'outbound' ? style.bodyFont : 'font-sans'}`}>
          
          {/* Sliders / Inputs - Left Column */}
          <div className={`lg:col-span-6 p-6 md:p-8 rounded-[24px] flex flex-col justify-between transition-all duration-300 ${
            style.cardClass
          }`}>
            <div className="space-y-6">
              <h3 className={`text-xl font-bold flex items-center gap-2 ${
                style.headingFont
              }`}>
                <Sparkles className={`w-5 h-5 ${style.accentColor}`} />
                Input Campaign Parameters
              </h3>

              {activeTab === 'inbound' ? (
                // Inbound Sliders
                <div className="space-y-6">
                  {/* Monthly Tickets */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-300'}`}>Monthly Support Tickets</label>
                      <span className={`text-sm px-2.5 py-1 rounded-xl font-black shadow-sm border transition-all ${
                        isLight
                          ? 'bg-slate-50 text-slate-900 border-slate-200'
                          : 'bg-slate-950 text-teal-400 border-slate-850'
                      } ${style.numberFont}`}>
                        {monthlyTickets.toLocaleString()}
                      </span>
                    </div>
                    <input
                      id="input-tickets-slider"
                      type="range"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={monthlyTickets}
                      onChange={(e) => setMonthlyTickets(Number(e.target.value))}
                      className={`w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none transition-colors ${
                        isLight ? 'bg-slate-200' : 'bg-slate-700'
                      } ${style.sliderAccent}`}
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
                      <span>1,000</span>
                      <span>50,000</span>
                      <span>100,000+</span>
                    </div>
                  </div>

                  {/* Current Cost Per Ticket */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-300'}`}>Current Cost per Ticket ($)</label>
                      <span className={`text-sm px-2.5 py-1 rounded-xl font-black shadow-sm border transition-all ${
                        isLight
                          ? 'bg-slate-50 text-slate-900 border-slate-200'
                          : 'bg-slate-950 text-teal-400 border-slate-850'
                      } ${style.numberFont}`}>
                        ${currentCostPerTicket.toFixed(2)}
                      </span>
                    </div>
                    <input
                      id="input-cost-ticket-slider"
                      type="range"
                      min="1"
                      max="25"
                      step="0.5"
                      value={currentCostPerTicket}
                      onChange={(e) => setCurrentCostPerTicket(Number(e.target.value))}
                      className={`w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none transition-colors ${
                        isLight ? 'bg-slate-200' : 'bg-slate-700'
                      } ${style.sliderAccent}`}
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
                      <span>$1.00</span>
                      <span>$13.00</span>
                      <span>$25.00+</span>
                    </div>
                  </div>

                  {/* Current CSAT */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-300'}`}>Current Satisfaction Rate (CSAT %)</label>
                      <span className={`text-sm px-2.5 py-1 rounded-xl font-black shadow-sm border transition-all ${
                        isLight
                          ? 'bg-slate-50 text-slate-900 border-slate-200'
                          : 'bg-slate-950 text-teal-400 border-slate-850'
                      } ${style.numberFont}`}>
                        {currentCsat}%
                      </span>
                    </div>
                    <input
                      id="input-csat-slider"
                      type="range"
                      min="50"
                      max="95"
                      step="1"
                      value={currentCsat}
                      onChange={(e) => setCurrentCsat(Number(e.target.value))}
                      className={`w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none transition-colors ${
                        isLight ? 'bg-slate-200' : 'bg-slate-700'
                      } ${style.sliderAccent}`}
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
                      <span>50%</span>
                      <span>75%</span>
                      <span>95%</span>
                    </div>
                  </div>
                </div>
              ) : (
                // Outbound Sliders & Options Panel
                <div className="space-y-6">
                  {/* Monthly Leads */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-300'}`}>Monthly Outreach Leads</label>
                      <span className={`text-sm px-2.5 py-1 rounded-xl font-black shadow-sm border transition-all ${
                        isLight
                          ? 'bg-slate-50 text-slate-900 border-slate-200'
                          : 'bg-slate-950 text-teal-400 border-slate-850'
                      } ${style.numberFont}`}>
                        {monthlyLeads.toLocaleString()}
                      </span>
                    </div>
                    <input
                      id="input-leads-slider"
                      type="range"
                      min="500"
                      max="50000"
                      step="500"
                      value={monthlyLeads}
                      onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                      className={`w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none transition-colors ${
                        isLight ? 'bg-slate-200' : 'bg-slate-700'
                      } ${style.sliderAccent}`}
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
                      <span>500</span>
                      <span>25,000</span>
                      <span>50,000+</span>
                    </div>
                  </div>

                  {/* Current CPA */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-300'}`}>Current Cost Per Acquisition (CPA)</label>
                      <span className={`text-sm px-2.5 py-1 rounded-xl font-black shadow-sm border transition-all ${
                        isLight
                          ? 'bg-slate-50 text-slate-900 border-slate-200'
                          : 'bg-slate-950 text-teal-400 border-slate-850'
                      } ${style.numberFont}`}>
                        ${currentCpa.toFixed(2)}
                      </span>
                    </div>
                    <input
                      id="input-cpa-slider"
                      type="range"
                      min="5"
                      max="150"
                      step="1"
                      value={currentCpa}
                      onChange={(e) => setCurrentCpa(Number(e.target.value))}
                      className={`w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none transition-colors ${
                        isLight ? 'bg-slate-200' : 'bg-slate-700'
                      } ${style.sliderAccent}`}
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
                      <span>$5.00</span>
                      <span>$75.00</span>
                      <span>$150.00+</span>
                    </div>
                  </div>

                  {/* Outbound Conversion Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-300'}`}>Current Campaign Conversion Rate</label>
                      <span className={`text-sm px-2.5 py-1 rounded-xl font-black shadow-sm border transition-all ${
                        isLight
                          ? 'bg-slate-50 text-slate-900 border-slate-200'
                          : 'bg-slate-950 text-teal-400 border-slate-850'
                      } ${style.numberFont}`}>
                        {conversionRate}%
                      </span>
                    </div>
                    <input
                      id="input-conversion-rate-slider"
                      type="range"
                      min="0.5"
                      max="15"
                      step="0.1"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className={`w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none transition-colors ${
                        isLight ? 'bg-slate-200' : 'bg-slate-700'
                      } ${style.sliderAccent}`}
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
                      <span>0.5%</span>
                      <span>7.5%</span>
                      <span>15.0%</span>
                    </div>
                  </div>

                  {/* ADVANCED MULTI-OPTIONS SECTION (Requested "gimme more options"!) */}
                  <div className={`pt-4 border-t ${style.borderClass} space-y-4`}>
                    <h4 className={`text-xs font-extrabold uppercase tracking-wider ${style.accentColor} flex items-center gap-1.5`}>
                      <Zap className="w-3.5 h-3.5" />
                      Optimized Campaign Parameters
                    </h4>

                    {/* Dialer Technology Selector */}
                    <div>
                      <label className={`text-[11px] font-bold uppercase tracking-wide block mb-1.5 ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-400'}`}>1. Outreach Dialer System</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'predictive', label: 'Predictive', desc: 'Auto Speed (+25% Connects)' },
                          { id: 'progressive', label: 'Progressive', desc: 'Warm Prep (+10% Connects)' },
                          { id: 'manual', label: 'Manual', desc: 'High Touch (Baseline)' },
                        ].map((d) => {
                          const isActive = dialerType === d.id;
                          return (
                            <button
                              key={d.id}
                              onClick={() => setDialerType(d.id as any)}
                              className={`p-2 rounded-xl text-left border transition-all ${getSelectorBtnClass(isActive)}`}
                            >
                              <span className="text-xs block font-extrabold">{d.label}</span>
                              <span className={`text-[9px] block leading-tight mt-0.5 ${getSelectorDescClass(isActive)}`}>{d.desc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Lead Quality Selector */}
                    <div>
                      <label className={`text-[11px] font-bold uppercase tracking-wide block mb-1.5 ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-400'}`}>2. Target Data Quality</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'cold', label: 'Cold Lead Database', desc: 'Direct prospecting outreach' },
                          { id: 'qualified', label: 'Pre-Filtered / Enriched', desc: 'NIS verified contact channels' },
                          { id: 'warm', label: 'Warm Web Leads', desc: 'Immediate contact back' },
                        ].map((l) => {
                          const isActive = leadQuality === l.id;
                          return (
                            <button
                              key={l.id}
                              onClick={() => setLeadQuality(l.id as any)}
                              className={`p-2 rounded-xl text-left border transition-all ${getSelectorBtnClass(isActive)}`}
                            >
                              <span className="text-xs block font-extrabold">{l.label}</span>
                              <span className={`text-[9px] block leading-tight mt-0.5 ${getSelectorDescClass(isActive)}`}>{l.desc}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Talent Tier Selector */}
                    <div>
                      <label className={`text-[11px] font-bold uppercase tracking-wide block mb-1.5 ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-400'}`}>3. Representative Talent Level</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'standard', label: 'Sales Representatives', desc: 'General volume tele-sales', icon: Database },
                          { id: 'premium_b2b', label: 'Acquisition Experts', desc: 'B2B/Elite closing agents', icon: UserCheck }
                        ].map((tier) => {
                          const isActive = agentTier === tier.id;
                          const IconComp = tier.icon;
                          return (
                            <button
                              key={tier.id}
                              onClick={() => setAgentTier(tier.id as any)}
                              className={`p-2 rounded-xl text-left border transition-all flex items-center gap-2.5 ${getSelectorBtnClass(isActive)}`}
                            >
                              <IconComp className={`w-4 h-4 flex-shrink-0 ${isActive ? (isLight ? 'text-indigo-600' : 'text-teal-400') : 'text-slate-400'}`} />
                              <div>
                                <span className="text-xs block font-extrabold">{tier.label}</span>
                                <span className={`text-[9px] block mt-0.5 ${getSelectorDescClass(isActive)}`}>{tier.desc}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Average Deal Value / Customer Lifetime Value (Revenue Simulator) */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className={`text-[11px] font-bold uppercase tracking-wide ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-400'}`}>4. Revenue Simulator: Avg Deal Value ($)</label>
                        <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded-lg border transition-all ${
                          isLight ? 'bg-slate-100 text-slate-800 border-slate-200' : 'bg-slate-950 text-teal-400 border-slate-800'
                        }`}>
                          ${avgDealValue.toLocaleString()}
                        </span>
                      </div>
                      <input
                        id="input-deal-value-slider"
                        type="range"
                        min="100"
                        max="5000"
                        step="100"
                        value={avgDealValue}
                        onChange={(e) => setAvgDealValue(Number(e.target.value))}
                        className={`w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none transition-colors ${
                          isLight ? 'bg-slate-200' : 'bg-slate-700'
                        } ${style.sliderAccent}`}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Explanatory Note on Regional Advantage */}
            <div className={`mt-8 pt-5 border-t p-4 rounded-xl transition-all ${
              isLight 
                ? 'bg-slate-50 border-slate-200' 
                : `bg-slate-900/30 ${activeTab === 'outbound' ? style.borderClass : 'border-slate-700/50'}`
            }`}>
              <h4 className={`text-[11px] font-extrabold tracking-wider uppercase mb-1 flex items-center gap-1.5 ${
                isLight 
                  ? outboundStyle === 'onesoft' ? 'text-indigo-600' : 'text-blue-600'
                  : 'text-teal-400'
              }`}>
                <DollarSign className="w-3.5 h-3.5" />
                Kanpur Talent Advantage
              </h4>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Operations based in Kanpur, Uttar Pradesh unlock high-caliber English-speaking university graduates and certified tech support professionals at 75% overhead savings compared to Western markets.
              </p>
            </div>
          </div>

          {/* Results Display - Right Column */}
          <div className={`lg:col-span-6 flex flex-col justify-between p-6 md:p-8 rounded-[24px] relative overflow-hidden transition-all duration-300 ${
            style.cardClass
          }`}>
            
            {/* Dynamic Glow Element */}
            <div className={style.glow} />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-sm font-extrabold uppercase tracking-widest ${
                  style.accentColor
                }`}>Projected Comparison</h3>
                <span className={`${style.badgeClass} rounded-xl px-2.5 py-1 text-xs font-bold`}>Active Modeling</span>
              </div>

              {/* Grid of Compare Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Current Cost Column */}
                <div className={`p-4 rounded-xl border transition-all ${
                  isLight 
                    ? 'bg-slate-50/70 border-slate-200' 
                    : `bg-slate-950/40 ${activeTab === 'outbound' ? style.borderClass : 'border-slate-700/30'}`
                }`}>
                  <span className={`text-xs font-bold block mb-1 ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-400'}`}>Current Monthly Spend</span>
                  <span className={`text-xl md:text-2xl font-black ${
                    isLight ? 'text-slate-800 font-sans' : (activeTab === 'outbound' ? `${style.numberFont} text-slate-300` : 'font-mono text-slate-300')
                  }`}>
                    ${activeTab === 'inbound' 
                      ? inboundCurrentMonthlyCost.toLocaleString(undefined, { maximumFractionDigits: 0 })
                      : outboundCurrentMonthlyCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                  <div className={`text-xs mt-1 flex items-center gap-1 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                    <span>At {activeTab === 'inbound' ? `$${currentCostPerTicket.toFixed(2)}` : `$${currentCpa.toFixed(2)}`} / unit</span>
                  </div>
                </div>

                {/* NIS Cost Column */}
                <div className={`p-4 rounded-xl border transition-all ${
                  isLight 
                    ? outboundStyle === 'onesoft'
                      ? 'bg-indigo-50/50 border-indigo-200 text-indigo-950 shadow-sm'
                      : 'bg-blue-50/50 border-blue-200 text-blue-950 shadow-sm'
                    : `bg-slate-900/60 ${style.highlightBorderClass}`
                }`}>
                  <span className={`text-xs block mb-1 font-bold ${
                    isLight 
                      ? outboundStyle === 'onesoft' ? 'text-indigo-600' : 'text-blue-600'
                      : (activeTab === 'outbound' ? style.accentColor : 'text-teal-400')
                  }`}>NIS Proposed Spend</span>
                  <span className={`text-xl md:text-2xl font-black ${
                    isLight 
                      ? outboundStyle === 'onesoft' ? 'text-indigo-950 font-sans' : 'text-blue-950 font-sans'
                      : (activeTab === 'outbound' ? `${style.numberFont} text-white` : 'font-mono text-white')
                  }`}>
                    ${activeTab === 'inbound' 
                      ? inboundNisMonthlyCost.toLocaleString(undefined, { maximumFractionDigits: 0 })
                      : outboundNisMonthlyCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                  <div className={`text-xs mt-1 flex items-center gap-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    <span>At {activeTab === 'inbound' ? `$${inboundNisCostPerTicket.toFixed(2)}` : `$${outboundNisCpa.toFixed(2)}`} / unit</span>
                  </div>
                </div>
              </div>

              {/* BIG SAVINGS DISPLAY */}
              <div className={`mb-6 p-5 rounded-2xl flex items-center justify-between border transition-all ${
                isLight 
                  ? outboundStyle === 'onesoft'
                    ? 'bg-gradient-to-br from-indigo-600 to-indigo-700 border-indigo-500 text-white shadow-lg shadow-indigo-100'
                    : 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500 text-white shadow-lg shadow-blue-100'
                  : activeTab === 'outbound' 
                    ? `bg-slate-950/80 ${style.highlightBorderClass}` 
                    : 'bg-gradient-to-r from-teal-900/40 to-slate-800/80 border-teal-500/30'
              }`}>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider block ${isLight ? 'text-indigo-100' : (activeTab === 'outbound' ? style.accentColor : 'text-teal-400')}`}>Estimated Annual Savings</span>
                  <span className={`text-2xl md:text-3.5xl font-extrabold tracking-tight text-white ${activeTab === 'outbound' ? style.numberFont : 'font-mono'}`}>
                    ${activeTab === 'inbound' 
                      ? inboundSavingsAnnual.toLocaleString(undefined, { maximumFractionDigits: 0 })
                      : outboundSavingsAnnual.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="text-right">
                  <span className={`text-xs block ${isLight ? 'text-indigo-200' : 'text-slate-400'}`}>Monthly Savings</span>
                  <span className={`text-lg font-black ${isLight ? 'text-white' : (activeTab === 'outbound' ? `${style.accentColor} ${style.numberFont}` : 'text-teal-400 font-mono')}`}>
                    +${activeTab === 'inbound' 
                      ? inboundSavingsMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })
                      : outboundSavingsMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo
                  </span>
                </div>
              </div>

              {/* Dynamic Value Boost Comparison */}
              <div className={`space-y-4 mb-8 p-5 rounded-2xl border transition-all ${
                isLight 
                  ? 'bg-slate-50/70 border-slate-200' 
                  : `bg-slate-950/30 ${style.borderClass}`
              }`}>
                
                {activeTab === 'inbound' ? (
                  <>
                    <h4 className={`text-xs font-extrabold uppercase tracking-wider mb-2 ${isLight ? 'text-slate-900 font-display' : 'text-slate-300'}`}>Quality &amp; Performance Boost</h4>
                    <div className="flex justify-between text-xs">
                      <span className={isLight ? 'text-slate-500 font-body-alt' : 'text-slate-400'}>Customer Satisfaction (CSAT)</span>
                      <span className={isLight ? 'text-slate-600 font-body-alt' : 'text-slate-200'}>
                        Current: <strong className="text-slate-400">{currentCsat}%</strong> → NIS: <strong className={`font-bold ${isLight ? 'text-indigo-600' : 'text-teal-400'}`}>{inboundNisCsat}%</strong>
                      </span>
                    </div>
                    {/* Visual bar */}
                    <div className={`w-full h-2 rounded overflow-hidden flex border transition-colors ${
                      isLight ? 'bg-slate-200 border-slate-300' : 'bg-slate-900 border-slate-800'
                    }`}>
                      <div className="bg-slate-450 transition-all duration-500" style={{ width: `${currentCsat}%` }}></div>
                      <div className={`transition-all duration-500 ${isLight ? 'bg-indigo-500' : 'bg-teal-400'}`} style={{ width: `${inboundNisCsat - currentCsat}%` }}></div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Check className={`w-3.5 h-3.5 flex-shrink-0 ${isLight ? 'text-indigo-600' : 'text-teal-400'}`} />
                      <span className={`text-[11px] leading-none ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Standard QA calibration &amp; 100% voice/ticket audit coverage.</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Advanced outbound metrics output */}
                    <h4 className={`text-xs font-extrabold uppercase tracking-wider mb-1 ${style.accentColor}`}>Acquisition Efficiency &amp; Sales Uplift</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className={`font-bold ${isLight ? 'text-slate-500 font-body-alt' : 'text-slate-400'}`}>Outreach Conversion Rate</span>
                          <span className={isLight ? 'text-slate-600' : 'text-slate-200'}>
                            Current: <strong className="text-slate-400 font-mono">{conversionRate}%</strong> → NIS Target: <strong className={`font-black font-mono ${style.accentColor}`}>{outboundNisConversionRate}%</strong>
                          </span>
                        </div>
                        {/* Visual bar */}
                        <div className={`w-full h-2 rounded overflow-hidden flex border transition-colors ${
                          isLight ? 'bg-slate-200 border-slate-300' : 'bg-slate-900 border-slate-800'
                        }`}>
                          <div className="bg-slate-400 transition-all duration-500" style={{ width: `${(conversionRate / 25) * 100}%` }}></div>
                          <div className={`transition-all duration-500 ${isLight ? 'bg-indigo-500' : 'bg-teal-400'}`} style={{ width: `${((outboundNisConversionRate - conversionRate) / 25) * 100}%` }}></div>
                        </div>
                      </div>

                      <div className={`grid grid-cols-2 gap-3 pt-2 border-t ${isLight ? 'border-slate-200' : 'border-slate-900'}`}>
                        <div>
                          <span className="text-[10px] text-slate-500 block uppercase font-bold">Conversions/Month</span>
                          <span className={`text-base font-black ${
                            isLight ? 'text-slate-800 font-sans' : `${style.numberFont} text-slate-300`
                          }`}>
                            {currentConversions.toFixed(0)} <span className="text-xs font-normal text-slate-400">vs</span> {nisConversions.toFixed(0)}/mo
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 block uppercase font-bold">Conversion Lift</span>
                          <span className={`text-base font-black ${
                            isLight 
                              ? outboundStyle === 'onesoft' ? 'text-indigo-600 font-sans' : 'text-blue-600 font-sans'
                              : `${style.numberFont} text-teal-400`
                          }`}>
                            +{Math.round((nisConversions - currentConversions) * 10) / 10} Sales/mo
                          </span>
                        </div>
                      </div>

                      {/* Revenue simulator projection */}
                      <div className={`mt-3 p-3 border rounded-xl flex items-center justify-between transition-all ${
                        isLight ? 'bg-emerald-50/70 border-emerald-200 font-body-alt' : 'bg-slate-950/70 border-slate-900'
                      }`}>
                        <div>
                          <span className="text-[10px] text-slate-500 block uppercase font-bold">Projected Monthly Revenue Gain</span>
                          <span className={`text-lg font-black ${isLight ? 'text-emerald-700 font-sans' : `text-green-400 ${style.numberFont}`}`}>
                            +${netNewRevenueMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] text-slate-500 block">At ${avgDealValue} / deal</span>
                          <span className={`text-xs px-2.5 py-0.5 rounded-xl font-mono font-black ${
                            isLight ? 'bg-emerald-100 text-emerald-800' : 'bg-green-500/10 text-green-400'
                          }`}>+{(conversionMultiplier * 100 - 100).toFixed(0)}% Lift</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Action CTA Block */}
            <div className={`pt-4 border-t flex flex-col sm:flex-row gap-3 items-center justify-between relative z-10 ${
              isLight ? 'border-slate-200' : 'border-slate-750'
            }`}>
              <div className="text-left">
                <p className="text-[11px] text-slate-500 leading-tight">Apply these custom parameters to update your personalized proposal PDF configuration.</p>
              </div>
              <button
                id="apply-calculated-metrics-btn"
                onClick={handleApply}
                className={`w-full sm:w-auto px-5 py-3 transition-all duration-300 flex items-center justify-center gap-2 select-none cursor-pointer rounded-xl font-bold text-sm ${
                  style.buttonClass
                } ${applied ? 'bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg' : ''}`}
              >
                {applied ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Metrics Synchronized!
                  </>
                ) : (
                  <>
                    Apply Proposal Metrics
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
