import { Zap, Shield, TrendingUp, Clock, BarChart3, Lock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fully Automated',
    description: 'Our AI trading system runs 24/7 without any manual intervention needed.',
  },
  {
    icon: Shield,
    title: '100% Transparent',
    description: 'Real-time portfolio tracking and monthly P&L reports. See every transaction.',
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Analysis',
    description: 'Combines fundamental and technical analysis using machine learning models.',
  },
  {
    icon: Clock,
    title: 'No Time Required',
    description: 'Invest, relax, and let our robots handle everything. Zero effort needed.',
  },
  {
    icon: BarChart3,
    title: 'Proven Strategies',
    description: 'Built on years of research and market-tested trading strategies.',
  },
  {
    icon: Lock,
    title: 'Secure & Safe',
    description: 'Your capital is protected with advanced security and risk management.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Why Choose eDealer?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for successful passive income generation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}