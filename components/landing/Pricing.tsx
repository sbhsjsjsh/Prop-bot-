'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '₹14,999',
    period: 'per month',
    description: 'Perfect for independent brokers and small agencies.',
    features: [
      '1,000 AI Conversations/mo',
      'WhatsApp Integration',
      'Hindi & English Support',
      'Basic Lead Qualification',
      'Email Notifications',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹34,999',
    period: 'per month',
    description: 'Ideal for expanding agencies with multiple projects.',
    features: [
      '5,000 AI Conversations/mo',
      'All Indian Languages',
      'Portal Integration (99acres/MB)',
      'Site Visit Scheduling',
      'CRM Integration (Salesforce/Zoho)',
      'Advanced Lead Dashboard',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large builders and real estate conglomerates.',
    features: [
      'Unlimited AI Conversations',
      'Custom Voice AI Bots',
      'White-label Solution',
      'Dedicated Account Manager',
      'Custom API Integrations',
      'On-site Training',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Transparent Pricing for Every Scale
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose a plan that fits your inventory. No hidden setup fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                tier.popular
                  ? 'border-primary ring-4 ring-primary/10 bg-white dark:bg-slate-950'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50'
              } flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">{tier.price}</span>
                  <span className="text-sm text-slate-500">{tier.period}</span>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <Check size={18} className="text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all shadow-lg active:scale-[0.98] ${
                  tier.popular
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-primary/20'
                    : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
