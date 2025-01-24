import React from 'react';
import { Heart, Leaf, Brain, Trophy } from 'lucide-react';

const topics = [
  {
    title: 'Cell Biology',
    description: 'Study the building blocks of life',
    icon: Heart,
    subtopics: ['Cell Structure', 'Cell Division', 'Metabolism'],
  },
  {
    title: 'Genetics',
    description: 'Explore DNA, inheritance, and evolution',
    icon: Brain,
    subtopics: ['DNA Structure', 'Inheritance', 'Genetic Engineering'],
  },
  {
    title: 'Ecology',
    description: 'Learn about ecosystems and biodiversity',
    icon: Leaf,
    subtopics: ['Ecosystems', 'Population Dynamics', 'Conservation'],
  },
];

export default function Biology() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Biology</h1>
            <p className="text-xl mb-8">
              Explore the science of life and living organisms
            </p>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div key={topic.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <Icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.subtopics.map((subtopic) => (
                    <li key={subtopic} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                      {subtopic}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Start Learning
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lab Activities */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Virtual Biology Lab</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Microscopy',
              'DNA Extraction',
              'Plant Growth',
              'Dissection',
            ].map((activity) => (
              <div key={activity} className="bg-gray-50 rounded-lg p-6 text-center">
                <Trophy className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold">{activity}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}