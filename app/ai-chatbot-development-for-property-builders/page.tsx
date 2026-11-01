import type { Metadata } from 'next';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import ContactForm from '@/components/landing/ContactForm';
import { CheckCircle2, Zap, Target, Clock, TrendingUp, Users, Building2, Layout, FileText, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Chatbot Development for Property Builders | Lead Capture & Site Visit Booking',
  description: 'Custom AI chatbot development for property builders. Capture project enquiries, qualify buyers and book site visits 24/7. Web chatbot that integrates anywhere. Book a free demo today.',
  keywords: 'AI Chatbot Development for Property Builders, real estate chatbot for builders, chatbot for developers, project enquiry automation, builder lead qualification bot, AI sales assistant for real estate projects, web chatbot for real estate developers',
  openGraph: {
    title: 'AI Chatbot Development for Property Builders | Lead Capture & Site Visit Booking',
    description: 'Custom AI chatbot development for property builders. Capture project enquiries, qualify buyers and book site visits 24/7.',
    type: 'website',
  },
};

const faqData = [
  {
    q: 'What is AI chatbot development for property builders?',
    a: 'It is the process of building a custom AI assistant trained on your projects that replies to buyer enquiries, qualifies leads and books site visits on your website and landing pages.'
  },
  {
    q: 'Can one chatbot handle multiple projects?',
    a: 'Yes. The chatbot can manage multiple projects, towers and locations, and guide each buyer to the best fit.'
  },
  {
    q: 'Where can the chatbot be integrated?',
    a: 'Anywhere you can add a web embed: your project website, landing pages, ad funnels and microsites.'
  },
  {
    q: 'Will it replace my sales team?',
    a: 'No. It handles first response and qualification so your team spends time only on serious buyers.'
  },
  {
    q: 'Can it share brochures, floor plans and price details?',
    a: 'Yes. It shares brochures, floor plans, videos, price sheets and location details inside the chat.'
  },
  {
    q: 'Does it support Hindi, Hinglish and Marathi?',
    a: 'Yes. It can chat in English, Hindi, Hinglish and Marathi.'
  },
  {
    q: 'How long does development take?',
    a: 'Most chatbots are ready within a few days after we receive your project, pricing and FAQ details.'
  },
  {
    q: 'Can I see a demo before buying?',
    a: 'Yes. Fill the form and book a free demo.'
  }
];

export default function PropertyBuildersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1] text-balance">
              AI Chatbot Development for Property Builders – Turn Project Enquiries into Site Visits and Bookings
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-balance">
              Builders spend lakhs on ads, hoardings and portals to generate project enquiries, but most of those leads go cold because replies are slow, sales teams are busy and follow-ups are inconsistent. <strong>AI chatbot development for property builders</strong> solves this by giving every enquiry an instant, intelligent response and moving serious buyers straight to a site visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                Book a Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Builders Need it */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white">Why Builders Need a Custom AI Chatbot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Instant Replies', desc: 'The builder who replies first, with the right details, usually wins the site visit.', icon: Zap },
              { title: 'Reduce Sales Load', desc: 'Handles repetitive questions about price, amenities and timeline so your team focuses on closing.', icon: Clock },
              { title: 'Qualify Buyers', desc: 'Budget, BHK, purpose and loan requirement are captured automatically before reaching your team.', icon: Target },
              { title: 'Optimize Ad Budget', desc: 'Every rupee spent on Instagram and Google ads works harder when more leads are engaged.', icon: TrendingUp },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it does for Builders */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white">What Our AI Chatbot Does for Builders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Project-Specific Knowledge', desc: 'Trained on your project details: carpet areas, price ranges, payment plans, and RERA details.' },
              { title: '24/7 Lead Capture', desc: 'Collects name, phone number, budget and requirement from every visitor, at any hour.' },
              { title: 'Smart Lead Scoring', desc: 'Ranks leads as hot, warm or cold so your team calls the right buyers first.' },
              { title: 'Site Visit Booking', desc: 'Buyers choose a date and time slot inside the chat, with confirmations sent automatically.' },
              { title: 'Asset Sharing', desc: 'Shares brochures, floor plans, walkthrough videos and price sheets instantly.' },
              { title: 'Multi-Project Support', desc: 'One chatbot can handle multiple projects and towers, recommending the best match.' },
              { title: 'Automatic Follow-Ups', desc: 'Re-engages buyers who showed interest but did not book a visit.' },
              { title: 'System Integration', desc: 'Every lead and chat transcript flows into your CRM or spreadsheet.' },
              { title: 'Multi-Language Support', desc: 'Chats in English, Hindi, Hinglish and Marathi to match your buyer base.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 border-b border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold mb-1 dark:text-white">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & How it works */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-bold mb-8 dark:text-white">Key Features</h2>
              <ul className="space-y-4">
                {[
                  'Custom-built web chatbot that integrates anywhere with a simple embed',
                  'Trained on your projects, pricing and sales process',
                  'Buyer qualification based on budget, BHK, location and timeline',
                  'Instant brochure, floor plan and video sharing',
                  'Instant lead alerts to your sales team',
                  'Smooth handover to a human sales executive',
                  'Daily and weekly lead reports',
                  'Branding that matches your project website'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 dark:text-white">How It Works</h2>
              <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                {[
                  { step: '1', title: 'Buyer Lands on Your Page', desc: 'From your ad, website or landing page. Bot greets them immediately.' },
                  { step: '2', title: 'Instant Answers', desc: 'Price, location, configuration, amenities and offers answered in seconds.' },
                  { step: '3', title: 'Qualification', desc: 'Budget, BHK, purpose and timeline are captured automatically.' },
                  { step: '4', title: 'Visit Booked', desc: 'The buyer picks a slot and gets a confirmation.' },
                  { step: '5', title: 'Team Gets Lead', desc: 'Full details and chat history sent to your sales team.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 ring-4 ring-white dark:ring-slate-950">{item.step}</div>
                    <div>
                      <h3 className="font-bold dark:text-white">{item.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Who Is This For?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Residential Builders', desc: 'Manage enquiries for apartments, townships and premium projects.', icon: Building2 },
              { title: 'Commercial Developers', desc: 'Handle office, retail and showroom enquiries with qualified details.', icon: Layout },
              { title: 'Plotted Developments', desc: 'Share plot sizes, layouts and pricing with serious buyers instantly.', icon: Target },
              { title: 'Redevelopment', desc: 'Answer society member and buyer questions at scale.', icon: Users },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-bold mb-10">Benefits You Will See</h2>
              <ul className="space-y-6">
                {[
                  'Faster response to every project enquiry',
                  'More qualified leads reaching your sales team',
                  'More site visits booked per campaign',
                  'Lower cost per site visit and booking',
                  'Less manual follow-up work',
                  'A modern, professional project experience'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
              <ul className="space-y-6">
                {[
                  'Chatbots built only for real estate',
                  'Custom-trained on your specific projects',
                  'Integrates anywhere with a simple embed',
                  'Practical systems designed for sales teams',
                  'Full support from setup to optimization'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqData.map((faq, i) => (
              <div key={i} className="p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-3 dark:text-white">{faq.q}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Never Miss a Lead Callout */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Turn More Project Enquiries into Site Visits</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Your next buyer is already comparing projects. Make sure your chatbot is the one that replies first, answers best and books the visit.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
            Book a Free Demo
          </a>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
