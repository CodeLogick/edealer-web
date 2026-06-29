import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-light to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Limited Time Offer
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight">
              Earn Passive Income with{' '}
              <span className="text-primary">AI-Powered Trading</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Let our automated trading system work for you 24/7. Zero effort, maximum returns.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-secondary" size={24} />
                <span className="text-gray-700">Free Trial for 1 Month - No Credit Card</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-secondary" size={24} />
                <span className="text-gray-700">100% Transparent & Real-Time Reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-secondary" size={24} />
                <span className="text-gray-700">No Profit - No Charge Policy</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-secondary" size={24} />
                <span className="text-gray-700">AI + Human Knowledge Combined</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919884177607?text=Hi%20eDealer%2C%20I%20want%20to%20start%20my%20free%20trial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
              >
                Start Free Trial <ArrowRight size={20} />
              </a>
              <Link
                href="#how-it-works"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl h-full flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-6xl font-bold mb-4">📈</p>
                <p className="text-2xl font-bold">Automated Trading</p>
                <p className="text-sm mt-2">24/7 Market Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}