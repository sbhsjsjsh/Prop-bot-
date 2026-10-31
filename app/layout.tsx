import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'Real Estate AI Chatbot Developer | AI Property Chatbot Solutions',
  description: 'Looking for a real estate AI chatbot developer? Get smart AI chatbot solutions for property websites to handle buyer enquiries, generate leads, answer property questions, and automate customer support.',
  icons: {
    icon: '/icon.jpg',
  },
  openGraph: {
    title: 'Real Estate AI Chatbot Developer | AI Property Chatbot Solutions',
    description: 'Looking for a real estate AI chatbot developer? Get smart AI chatbot solutions for property websites to handle buyer enquiries, generate leads, and automate support.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate AI Chatbot Developer | AI Property Chatbot Solutions',
    description: 'Smart AI chatbot solutions for property websites to automate leads and support.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="antialiased font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
