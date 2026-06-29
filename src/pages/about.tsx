import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <>
      <Head>
        <title>About eDealer - Our Mission & Vision</title>
        <meta
          name="description"
          content="Learn about eDealer's mission to democratize passive income generation through AI-powered automated trading."
        />
      </Head>

      <Header />
      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-light">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-dark mb-6">About eDealer</h1>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-dark mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At eDealer, we believe that passive income should be accessible to everyone. Our mission is to
                democratize investment opportunities by combining human knowledge with artificial intelligence to
                create a fully automated trading system that works 24/7.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-dark mb-4">Why We Started</h2>
              <p className="text-lg text-gray-700 mb-6">
                Traditional investment methods require constant monitoring and expert knowledge. We realized that
                most people don't have the time or expertise to manage their investments effectively. That's why we
                built eDealer - to automate the entire process and make investing effortless.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-dark mb-6">Our Principles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle className="text-secondary flex-shrink-0" size={28} />
                  <div>
                    <h3 className="font-bold text-dark mb-2">Transparency</h3>
                    <p className="text-gray-700">Real-time reporting and 100% visibility into all trades.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-secondary flex-shrink-0" size={28} />
                  <div>
                    <h3 className="font-bold text-dark mb-2">Trust</h3>
                    <p className="text-gray-700">No hidden fees. Our success is tied to your success.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-secondary flex-shrink-0" size={28} />
                  <div>
                    <h3 className="font-bold text-dark mb-2">Innovation</h3>
                    <p className="text-gray-700">Constantly improving our AI models and strategies.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="text-secondary flex-shrink-0" size={28} />
                  <div>
                    <h3 className="font-bold text-dark mb-2">Simplicity</h3>
                    <p className="text-gray-700">Easy setup, minimal effort, maximum results.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-6">Join hundreds of investors generating passive income with eDealer.</p>
              <a
                href="https://wa.me/919884177607?text=Hi%20eDealer%2C%20I%20want%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}