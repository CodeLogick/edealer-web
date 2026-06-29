import { CheckCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '1 Month Trial',
    description: 'Perfect for getting started',
    features: [
      'Automated trading access',
      'Portfolio tracking',
      'Monthly P&L reports',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '₹999',
    period: 'Monthly',
    description: 'Most popular choice',
    features: [
      'Everything in Starter',
      'Priority support',
      'Advanced analytics',
      'Custom strategy selection',
      'Weekly performance calls',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Elite',
    price: 'Custom',
    period: 'Negotiable',
    description: 'For serious investors',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom trading strategies',
      'Quarterly reviews',
      'WhatsApp priority support',
    ],
    cta: 'Contact Us',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. No Profit - No Charge policy always applies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl transition ${
                plan.highlighted
                  ? 'bg-primary text-white shadow-2xl transform scale-105'
                  : 'bg-light text-dark shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 right-8 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`text-sm mb-4 ${
                  plan.highlighted ? 'text-white/80' : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <p className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.period}
                </p>
              </div>
              <button
                className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {plan.cta}
              </button>
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle size={20} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}