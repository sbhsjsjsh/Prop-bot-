import type { Metadata } from 'next';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import ContactForm from '@/components/landing/ContactForm';
import { CheckCircle2, Zap, Target, Clock, TrendingUp, Users, ShieldCheck, ChevronDown, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Chatbot for Property Dealers | 24/7 Lead Capture & Instant Replies',
  description: 'Get an AI chatbot for property dealers that replies instantly, qualifies leads and books site visits 24/7. Web chatbot that integrates anywhere. Book a free demo today.',
  keywords: 'AI Chatbot for Property Dealers, real estate chatbot for dealers, web chatbot for property dealers, AI lead response for real estate, property lead qualification bot, real estate lead automation, chatbot for real estate brokers',
  openGraph: {
    title: 'AI Chatbot for Property Dealers | 24/7 Lead Capture & Instant Replies',
    description: 'Automate your property leads with AI. Instant replies, smart qualification, and site visit bookings.',
    type: 'website',
  },
};

const faqData = [
  {
    q: 'What is an AI chatbot for property dealers?',
    a: 'It is an automated assistant that replies to property enquiries, qualifies buyers and books site visits on your website without manual effort.'
  },
  {
    q: 'Will the chatbot replace me or my sales team?',
    a: 'No. It handles the first response and qualification so your team only talks to serious buyers and closes faster.'
  },
  {
    q: 'Where can the chatbot be integrated?',
    a: 'Anywhere you can add a web embed: your website, landing pages, ad funnels, microsites and more.'
  },
  {
    q: 'Can it share brochures, photos and location details?',
    a: 'Yes. It shares brochures, images, videos, price lists and location details inside the chat.'
  },
  {
    q: 'Does it support Hindi, Hinglish and Marathi?',
    a: 'Yes. It can chat in English, Hindi, Hinglish and Marathi, depending on your target buyers.'
  },
  {
    q: 'How long does setup take?',
    a: 'Most chatbots are ready within a few days after we receive your project and pricing details.'
  },
  {
    q: 'Can I see a demo before buying?',
    a: 'Yes. Fill the form and book a free demo to see the chatbot in action.'
  }
];

export default function PropertyDealersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1] text-balance">
              AI Chatbot for Property Dealers – Capture, Qualify and Convert Leads 24/7
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-balance">
              Every property dealer knows the pain: enquiries come in at night, on weekends and during site visits, and by the time you reply, the buyer has already spoken to someone else. An <strong>AI chatbot for property dealers</strong> fixes this by replying to every lead instantly, asking the right questions and booking site visits automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                Book a Free Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Property Dealers Need it */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white">Why Property Dealers Need an AI Chatbot</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Instant Replies', desc: 'Leads who get a reply within minutes are far more likely to convert. Your chatbot responds in seconds, day or night.', icon: Zap },
              { title: 'Stop Wasting Time', desc: 'The bot asks about budget, location, property type and timeline, so you only speak to serious buyers.', icon: Clock },
              { title: 'Work Smarter', desc: 'Let AI handle repetitive questions about price, amenities and availability while you focus on closing deals.', icon: Target },
              { title: 'Lower Cost Per Lead', desc: 'Make your ad spend work harder by converting more of the leads you already pay for.', icon: TrendingUp },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it does for you */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 dark:text-white">What Our AI Chatbot Does for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: '24/7 Lead Capture', desc: 'Collects name, phone number, budget and requirement from every visitor and enquiry.' },
              { title: 'Smart Lead Qualification', desc: 'Scores leads as hot, warm or cold so you know who to call first.' },
              { title: 'Property Info on Demand', desc: 'Shares brochures, photos, location and price information instantly inside the chat.' },
              { title: 'Site Visit Booking', desc: 'Lets buyers choose a date and time, and sends confirmations automatically.' },
              { title: 'Automatic Follow-Ups', desc: 'Re-engages leads who went silent with timely, personalised messages.' },
              { title: 'CRM & Excel Integration', desc: 'Every lead is saved in your CRM or spreadsheet, ready for you to follow up.' },
              { title: 'Multi-Language Support', desc: 'Chats in English, Hindi, Hinglish and Marathi, so every buyer feels understood.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & How it works */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 dark:text-white">Key Features</h2>
              <ul className="space-y-4">
                {[
                  'Web chatbot that integrates anywhere: website, landing page, funnel or portal',
                  'Custom-trained on your listings, projects and pricing',
                  'Property recommendation based on buyer budget and location',
                  'Instant brochure and video sharing inside the chat',
                  'Lead alerts sent directly to you',
                  'Easy handover to a human when the buyer is ready to talk',
                  'Daily and weekly lead reports'
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
              <div className="space-y-8">
                {[
                  { step: '1', title: 'Lead Comes In', desc: 'From your ad, website or landing page' },
                  { step: '2', title: 'Bot Replies Instantly', desc: 'Greets the buyer and answers questions' },
                  { step: '3', title: 'Lead Gets Qualified', desc: 'Budget, location, property type and timeline are captured' },
                  { step: '4', title: 'Site Visit Is Booked', desc: 'Buyer picks a slot and gets a confirmation' },
                  { step: '5', title: 'You Get the Hot Lead', desc: 'Alert and full chat history sent to you' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">{item.step}</div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { title: 'Independent Dealers', desc: 'Handle more leads without hiring extra staff.', icon: Users },
              { title: 'Real Estate Agencies', desc: 'Give every agent organised, qualified leads.', icon: Target },
              { title: 'Builders & Developers', desc: 'Manage project enquiries and visits at scale.', icon: TrendingUp },
              { title: 'Land & Plot Dealers', desc: 'Share maps and pricing instantly with buyers.', icon: ShieldCheck },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl">
                <item.icon className="w-10 h-10 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Why Choose Us */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-bold mb-8">Benefits You Will See</h2>
              <ul className="space-y-6">
                {[
                  'Faster response time to every enquiry',
                  'More site visits booked',
                  'Higher lead-to-customer conversion',
                  'Less manual follow-up work',
                  'Better use of your ad budget',
                  'A professional, always-available brand image'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
              <ul className="space-y-6">
                {[
                  'Chatbots built only for real estate, not generic templates',
                  'Trained on your projects, pricing and sales process',
                  'Integrates anywhere with a simple embed',
                  'Simple, practical systems that dealers can actually use',
                  'Support from setup to ongoing optimisation'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, i) => (
              <div key={i} className="border-b border-slate-200 dark:border-slate-800 pb-6">
                <h3 className="text-lg font-bold mb-2 dark:text-white">{faq.q}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA via Contact Form */}
      <div className="bg-primary/5">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
