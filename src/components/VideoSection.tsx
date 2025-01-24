import React from 'react';
import { Play } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Introduction to Mathematics',
    description: 'Learn the fundamentals of mathematics with this comprehensive guide.',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60',
    category: 'Mathematics'
  },
  {
    id: '2',
    title: 'Basic Physics Concepts',
    description: 'Understand the core principles of physics through interactive examples.',
    thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop&q=60',
    category: 'Physics'
  },
  {
    id: '3',
    title: 'Chemistry Fundamentals',
    description: 'Explore the basics of chemistry with engaging demonstrations.',
    thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&auto=format&fit=crop&q=60',
    category: 'Chemistry'
  }
];

export default function VideoSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Educational Videos</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button className="bg-white rounded-full p-4 transform hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-blue-600" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">{video.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}