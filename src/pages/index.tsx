import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>eDealer - Automated AI Trading System for Passive Income</title>
        <meta
          name="description"
          content="Earn passive income with eDealer's fully automated AI-powered trading system. Free 1-month trial. 100% transparent. No Profit - No Charge."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="eDealer - Passive Income Through Automated Trading" />
        <meta property="og:description" content="Let AI handle your investments 24/7. Free trial available." />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}