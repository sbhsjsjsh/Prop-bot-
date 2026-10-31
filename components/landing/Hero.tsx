'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 lg:items-stretch">
          {/* Left Column: Content */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-4 sm:mb-6">
                <MessageSquare size={14} />
                WhatsApp-First AI Automation
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 sm:mb-6 leading-[1.15] lg:leading-[1.1] text-balance">
                Scale Your Real Estate Sales with <span className="text-primary">PropBot.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance">
                Qualified leads don&apos;t wait. Our AI chatbots respond instantly on WhatsApp, qualify buyers, and schedule site visits 24/7.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all shadow-xl shadow-primary/20 w-full sm:w-auto text-sm sm:text-base"
                >
                  Start Free Trial
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#features"
                  className="flex items-center justify-center px-8 py-3.5 sm:py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-[0.98] transition-all w-full sm:w-auto text-sm sm:text-base"
                >
                  See Demo
                </a>
              </div>

              {/* Trust Signal */}
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 grayscale opacity-60">
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 whitespace-nowrap uppercase tracking-widest">Integrating with:</span>
                <div className="flex items-center gap-6 sm:gap-8 overflow-hidden py-1">
                  <span className="text-base sm:text-lg font-bold">99acres</span>
                  <span className="text-base sm:text-lg font-bold">Magicbricks</span>
                  <span className="text-base sm:text-lg font-bold">Housing.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero_propbot_ai_realestate_1793477867354.jpg"
              alt="PropBot AI Real Estate Automation"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            {/* Overlay Gradient for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
