import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Katie",
      text: "Team NIS is natural at understanding customer pain points and highly effective at following up. Their 24/7 responsiveness is a game-changer.",
      rating: 4.8
    },
    {
      name: "Jeff",
      text: "Very knowledgeable, exceptionally well-trained, and highly recommended for complex enterprise customer relations. Outstanding support quality.",
      rating: 4.7
    },
    {
      name: "Martha",
      text: "Our lead generation campaign got positive results quicker than expected. Higher conversion rates and strict cost-per-acquisition alignment!",
      rating: 4.9
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white text-slate-800 border-t border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#0b4bce] font-sans block mb-2">
            CLIENT REVIEWS
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-display">
            What Our Partners Say
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#0b4bce] to-[#00b0b9] mx-auto mt-4 rounded-full" />
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-8 text-left mb-12">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-slate-50/50 border border-slate-200/60 p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#00b0b9] text-[#00b0b9]" />
                      ))}
                    </div>
                    <span className="text-xs font-black text-[#0b4bce] bg-[#0b4bce]/5 px-2 py-0.5 rounded-lg border border-[#0b4bce]/10">
                      {review.rating} / 5
                    </span>
                  </div>
                  <Quote className="w-8 h-8 text-slate-200" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-body-alt italic">
                  "{review.text}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0b4bce]/5 border border-[#0b4bce]/15 flex items-center justify-center font-black text-xs text-[#0b4bce]">
                  {review.name[0]}
                </div>
                <div>
                  <span className="font-black text-slate-900 block text-xs tracking-tight font-display">{review.name}</span>
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider font-sans">NIS Partner</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel for smaller screens */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-slate-50/50 border border-slate-200/60 p-8 rounded-2xl shadow-sm relative text-left"
          >
            <Quote className="w-8 h-8 text-slate-200 mb-4" />
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00b0b9] text-[#00b0b9]" />
                ))}
              </div>
              <span className="text-xs font-black text-[#0b4bce] bg-[#0b4bce]/5 px-2 py-0.5 rounded-lg border border-[#0b4bce]/10">
                {reviews[activeIndex].rating} / 5
              </span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="text-slate-600 text-sm leading-relaxed font-body-alt italic mb-6 min-h-[100px]"
              >
                "{reviews[activeIndex].text}"
              </motion.p>
            </AnimatePresence>

            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0b4bce]/5 border border-[#0b4bce]/15 flex items-center justify-center font-black text-xs text-[#0b4bce]">
                  {reviews[activeIndex].name[0]}
                </div>
                <div>
                  <span className="font-black text-slate-900 block text-xs tracking-tight font-display">{reviews[activeIndex].name}</span>
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider font-sans">NIS Partner</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-2">
                <button
                  onClick={prevReview}
                  className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-slate-600" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
