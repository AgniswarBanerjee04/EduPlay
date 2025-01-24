import React from 'react';
import { FlaskRound as Flask, Atom, Beaker, Trophy } from 'lucide-react';

const topics = [
  {
    title: 'Organic Chemistry',
    description: 'Study carbon compounds and their reactions',
    icon: Flask,
    subtopics: ['Hydrocarbons', 'Functional Groups', 'Reactions'],
  },
  {
    title: 'Inorganic Chemistry',
    description: 'Explore elements and their compounds',
    icon: Atom,
    subtopics: ['Periodic Table', 'Chemical Bonding', 'Coordination Compounds'],
  },
  {
    title: 'Physical Chemistry',
    description: 'Learn about energy and reaction dynamics',
    icon: Beaker,
    subtopics: ['Thermodynamics', 'Kinetics', 'Equilibrium'],
  },
];

export default function Chemistry() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Chemistry</h1>
            <p className="text-xl mb-8">
              Discover the fascinating world of molecules and reactions
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
                <Icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.subtopics.map((subtopic) => (
                    <li key={subtopic} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      {subtopic}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Start Learning
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Virtual Lab */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Virtual Chemistry Lab</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Titration Experiments',
              'Organic Synthesis',
              'Chemical Analysis',
              'Reaction Kinetics',
            ].map((experiment) => (
              <div key={experiment} className="bg-gray-50 rounded-lg p-6 text-center">
                <Trophy className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold">{experiment}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}