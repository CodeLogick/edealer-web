import { CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Sign Up & Verify',
    description: 'Create your account in minutes. Verify your identity for security.',
  },
  {
    number: '02',
    title: 'Make Your First Investment',
    description: 'Start with your preferred investment amount. Minimum as low as ₹10,000.',
  },
  {
    number: '03',
    title: 'Let AI Trade',
    description: 'Our automated system analyzes markets and executes trades 24/7.',
  },
  {
    number: '04',
    title: 'Track & Earn',
    description: 'Monitor your portfolio in real-time. Withdraw profits anytime.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and completely automated
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4 relative z-10">
                {step.number}
              </div>
              <div className="bg-light p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}