import React, { useState } from 'react';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

export default function Scholarship() {
  const [step, setStep] = useState(1);

  const scholarships = [
    {
      id: '1',
      title: 'Academic Excellence Scholarship',
      amount: 100000,
      deadline: '2024-05-30',
      requirements: [
        'Minimum GPA of 3.5',
        'Letter of recommendation',
        'Personal statement',
      ],
      icon: GraduationCap,
    },
    {
      id: '2',
      title: 'STEM Education Grant',
      amount: 75000,
      deadline: '2024-06-15',
      requirements: [
        'Interest in STEM fields',
        'Project portfolio',
        'Academic transcripts',
      ],
      icon: BookOpen,
    },
    {
      id: '3',
      title: 'Merit-Based Learning Fund',
      amount: 50000,
      deadline: '2024-07-01',
      requirements: [
        'Academic achievements',
        'Extracurricular activities',
        'Essay submission',
      ],
      icon: Award,
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Scholarship Opportunities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in making quality education accessible to everyone. Explore our scholarship programs
            and take the first step towards your educational goals.
          </p>
        </div>

        {/* Scholarship Listings */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {scholarships.map((scholarship) => {
            const Icon = scholarship.icon;
            return (
              <div
                key={scholarship.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{scholarship.title}</h3>
                  </div>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">₹{scholarship.amount.toLocaleString('en-IN')}</span>
                    <span className="text-gray-500"> award</span>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Requirements:</p>
                    <ul className="space-y-2">
                      {scholarship.requirements.map((req, index) => (
                        <li key={index} className="text-sm text-gray-700">• {req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Deadline: {scholarship.deadline}
                    </span>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={() => setStep(2)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Application Process Steps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Application Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Check Eligibility',
                description: 'Review requirements and ensure you meet the criteria',
              },
              {
                step: 2,
                title: 'Prepare Documents',
                description: 'Gather all necessary documentation and materials',
              },
              {
                step: 3,
                title: 'Submit Application',
                description: 'Complete the application form and submit your documents',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}