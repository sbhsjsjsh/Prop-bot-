'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white whitespace-nowrap shrink-0">
          Prop<span className="text-primary">Bot</span>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#features" className="hover:text-primary transition-colors whitespace-nowrap shrink-0">Features</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors whitespace-nowrap shrink-0">How it Works</a>
          <a href="#pricing" className="hover:text-primary transition-colors whitespace-nowrap shrink-0">Pricing</a>
          <a href="#faq" className="hover:text-primary transition-colors whitespace-nowrap shrink-0">FAQ</a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 whitespace-nowrap shrink-0"
          >
            Get Free Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 dark:text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-6 flex flex-col gap-4"
        >
          <a href="#features" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-600 dark:text-slate-300">Features</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-600 dark:text-slate-300">How it Works</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-600 dark:text-slate-300">Pricing</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="px-5 py-3 text-center text-sm font-semibold text-white bg-primary rounded-lg">Get Free Demo</a>
        </motion.div>
      )}
    </header>
  );
}
