import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Passive Income Journey?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join hundreds of satisfied investors earning passive income with eDealer.
          Start your 1-month free trial today!
        </p>
        <a
          href="https://wa.me/919884177607?text=Hi%20eDealer%2C%20I%20want%20to%20start%20my%20free%20trial%20now"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2 mx-auto"
        >
          Start Free Trial Now <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}