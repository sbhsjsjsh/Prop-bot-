'use client';

import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Stats from '@/components/landing/Stats';
import Features from '@/components/landing/Features';
import Pricing from '@/components/landing/Pricing';
import ContactForm from '@/components/landing/ContactForm';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}
