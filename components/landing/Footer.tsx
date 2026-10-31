'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white mb-4 block">
              Prop<span className="text-primary">Bot</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Leading AI automation partner for the Indian real estate industry. Helping developers and agencies scale with technology.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Product</h4>
              <nav className="flex flex-col gap-2">
                <a href="#features" className="text-sm text-slate-500 hover:text-primary">Features</a>
                <a href="#pricing" className="text-sm text-slate-500 hover:text-primary">Pricing</a>
                <a href="#" className="text-sm text-slate-500 hover:text-primary">Integrations</a>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Company</h4>
              <nav className="flex flex-col gap-2">
                <a href="#" className="text-sm text-slate-500 hover:text-primary">About Us</a>
                <a href="#" className="text-sm text-slate-500 hover:text-primary">Contact</a>
                <a href="#" className="text-sm text-slate-500 hover:text-primary">Careers</a>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Legal</h4>
              <nav className="flex flex-col gap-2">
                <a href="#" className="text-sm text-slate-500 hover:text-primary">Privacy Policy</a>
                <a href="#" className="text-sm text-slate-500 hover:text-primary">Terms of Service</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} PropBot India. All rights reserved.
          </p>
          <div className="text-xs text-slate-400">
            Made with ❤️ for Indian Real Estate
          </div>
        </div>
      </div>
    </footer>
  );
}
