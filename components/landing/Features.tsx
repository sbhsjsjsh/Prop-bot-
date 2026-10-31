'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Smartphone, Globe, BarChart3, Clock, CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'WhatsApp Business Automation',
    description: 'Instantly respond to leads from Facebook, Instagram, and portals. No app downloads required for your customers.',
    image: '/images/feature_whatsapp_real_estate_bot_1793477551023.jpg',
    icon: Smartphone,
    colSpan: 'lg:col-span-2',
  },
  {
    title: 'Multilingual Support',
    description: 'Our AI speaks Hindi, English, Marathi, Tamil, Kannada, and more. Connect with buyers in their preferred language.',
    icon: Globe,
    colSpan: 'lg:col-span-1',
  },
  {
    title: 'Automatic Lead Qualification',
    description: 'Filter serious buyers from window shoppers. Automatically collect budget, location, and BHK preferences.',
    image: '/images/feature_ai_dashboard_leads_1793477548245.jpg',
    icon: BarChart3,
    colSpan: 'lg:col-span-1',
  },
  {
    title: '24/7 Site Visit Scheduling',
    description: 'Seamlessly integrate with your sales team calendars to book site visits even while you sleep.',
    icon: Clock,
    colSpan: 'lg:col-span-2',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Built for the Modern Indian Real Estate Agency
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Stop losing leads to slow response times. Our AI engine handles the heavy lifting so your sales team can focus on closing deals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${feature.colSpan} bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all group`}
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 size={16} className="text-primary" />
                    Increased response rate by 90%
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 size={16} className="text-primary" />
                    Zero lead leakage
                  </li>
                </ul>
              </div>
              {feature.image && (
                <div className="relative h-64 w-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
