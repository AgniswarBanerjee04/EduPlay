import React, { useState } from 'react';
import { BookOpen, GamepadIcon, Brain, Mail } from 'lucide-react';
import Chat from './components/Chat';
import Game from './components/Game';
import Login from './components/Login';
import VideoSection from './components/VideoSection';
import Profile from './components/Profile';
import Subscription from './components/Subscription';
import Scholarship from './components/Scholarship';
import Contact from './components/Contact';
import Mathematics from './components/subjects/Mathematics';
import Physics from './components/subjects/Physics';
import Chemistry from './components/subjects/Chemistry';
import Biology from './components/subjects/Biology';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', email, password);
    setIsLoggedIn(true);
    setIsLoginOpen(false);
    setUserData({ name: 'Agni', email });
  };

  const handleSignup = (email: string, password: string, name: string) => {
    console.log('Signup attempt:', email, password, name);
    setIsLoggedIn(true);
    setIsLoginOpen(false);
    setUserData({ name, email });
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'profile':
        return <Profile />;
      case 'subscription':
        return <Subscription />;
      case 'scholarship':
        return <Scholarship />;
      case 'contact':
        return <Contact />;
      case 'mathematics':
        return <Mathematics />;
      case 'physics':
        return <Physics />;
      case 'chemistry':
        return <Chemistry />;
      case 'biology':
        return <Biology />;
      default:
        return (
          <>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                    Learn Through Play
                  </h1>
                  <p className="text-xl mb-8 animate-slide-up">
                    Discover a new way of learning that combines education with fun
                  </p>
                </div>
              </div>
            </div>

            {/* Subjects Section */}
            <div className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-center mb-12">Explore Subjects</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { name: 'Mathematics', color: 'blue', section: 'mathematics', description: 'Master numbers and calculations' },
                  { name: 'Physics', color: 'purple', section: 'physics', description: 'Explore the laws of nature' },
                  { name: 'Chemistry', color: 'green', section: 'chemistry', description: 'Study matter and reactions' },
                  { name: 'Biology', color: 'red', section: 'biology', description: 'Discover living systems' },
                  { name: 'Computer Science', color: 'indigo', section: 'cs', description: 'Learn programming and algorithms' },
                  { name: 'English', color: 'yellow', section: 'english', description: 'Master language and literature' },
                  { name: 'History', color: 'orange', section: 'history', description: 'Explore the past' },
                  { name: 'Geography', color: 'teal', section: 'geography', description: 'Study Earth and its features' }
                ].map((subject) => (
                  <button
                    key={subject.name}
                    onClick={() => setCurrentSection(subject.section)}
                    className={`bg-${subject.color}-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center`}
                  >
                    <h3 className={`text-xl font-semibold text-${subject.color}-600 mb-2`}>
                      {subject.name}
                    </h3>
                    <p className="text-gray-600">{subject.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-4 py-16">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                  <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Lessons</h3>
                  <p className="text-gray-600">
                    Engage with our interactive content designed to make learning fun and effective
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                  <GamepadIcon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Educational Games</h3>
                  <p className="text-gray-600">
                    Learn while playing our carefully crafted educational games
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                  <Brain className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
                  <p className="text-gray-600">
                    Experience personalized learning paths that adapt to your progress
                  </p>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <VideoSection />

            {/* Game Section */}
            <div className="container mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-center mb-8">Try Our Learning Game</h2>
              <Game />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={() => setCurrentSection('home')}
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-8 h-8" />
            EduPlay
          </button>
          <div className="flex items-center gap-4">
            {isLoggedIn && (
              <>
                <button
                  onClick={() => setCurrentSection('profile')}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Profile
                </button>
                <button
                  onClick={() => setCurrentSection('subscription')}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Subscriptions
                </button>
                <button
                  onClick={() => setCurrentSection('scholarship')}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Scholarships
                </button>
              </>
            )}
            <button
              onClick={() => setCurrentSection('contact')}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-1"
            >
              <Mail className="w-4 h-4" />
              Contact
            </button>
            <button
              onClick={() => setIsLoginOpen(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isLoggedIn ? userData.name : 'Sign In'}
            </button>
          </div>
        </div>
      </nav>

      {renderSection()}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About EduPlay</h3>
              <p className="text-gray-400">
                Making education fun and accessible through interactive learning experiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentSection('home')} className="text-gray-400 hover:text-white">Home</button></li>
                <li><button onClick={() => setCurrentSection('subscription')} className="text-gray-400 hover:text-white">Courses</button></li>
                <li><button onClick={() => setCurrentSection('subscription')} className="text-gray-400 hover:text-white">Pricing</button></li>
                <li><button onClick={() => setCurrentSection('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentSection('contact')} className="text-gray-400 hover:text-white">Help Center</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: agniwork99@gmail.com</li>
                <li>Phone: +91 8967641707</li>
                <li>Kolkata, West Bengal</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EduPlay. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />

      {/* Chat Support */}
      <Chat />
    </div>
  );
}

export default App;