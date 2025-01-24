import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 0,
    features: [
      'Access to basic courses',
      'Limited practice exercises',
      'Community forum access',
      'Basic progress tracking',
    ],
    icon: Star,
  },
  {
    name: 'Premium',
    price: 499,
    features: [
      'All basic features',
      'Unlimited practice exercises',
      'Personalized learning path',
      'Advanced progress analytics',
      'Priority support',
      'Download resources',
    ],
    icon: Zap,
    popular: true,
  },
];

export default function Subscription() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Learning Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan to accelerate your learning journey and unlock your full potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform ${
                  plan.popular ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-gray-500">Perfect for {plan.name === 'Basic' ? 'starters' : 'serious learners'}</p>
                    </div>
                    <Icon className={`w-10 h-10 ${plan.popular ? 'text-blue-600' : 'text-gray-400'}`} />
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold">₹{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need help choosing? <button className="text-blue-600 font-semibold">Contact us</button>
          </p>
        </div>
      </div>
    </div>
  );
}