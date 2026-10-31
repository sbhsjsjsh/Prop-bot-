'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-primary overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Ready to Automate Your Real Estate Pipeline?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Join 500+ Indian real estate agencies using PropBot to close deals faster. Get a personalized demo and a free 14-day trial.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle size={14} />
                </div>
                <span>Setup in less than 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle size={14} />
                </div>
                <span>No credit card required for trial</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/20"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-600">Our solution expert will call you within 2 hours to schedule your demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Agency Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Elite Realty"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number (WhatsApp)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">+91</span>
                      <input
                        required
                        type="tel"
                        pattern="[0-9]{10}"
                        placeholder="98765 43210"
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Email</label>
                    <input
                      required
                      type="email"
                      placeholder="rahul@eliterealty.in"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 mt-4"
                  >
                    Get Demo
                    <Send size={18} />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-4">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
