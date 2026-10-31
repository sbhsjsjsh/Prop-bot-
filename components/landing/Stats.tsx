'use client';

import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { value: '3x', label: 'Higher Conversion', sub: 'vs traditional forms' },
  { value: '10s', label: 'Response Time', sub: 'Instant WhatsApp reply' },
  { value: '45%', label: 'Cost Reduction', sub: 'In lead pre-qualification' },
  { value: '24/7', label: 'Availability', sub: 'Works holidays & nights' },
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-primary mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
