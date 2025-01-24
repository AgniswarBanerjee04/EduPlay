import React, { useState } from 'react';
import { LineChart, Trophy, Target, GraduationCap, BookOpen, Edit2, Save } from 'lucide-react';

interface Goal {
  id: string;
  subject: string;
  target: string;
  deadline: string;
  progress: number;
}

interface Achievement {
  id: string;
  title: string;
  date: string;
  icon: string;
}

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  interests: string[];
  phoneNumber: string;
  education: string;
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState('progress');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Agni',
    email: 'Agni@example.com',
    bio: 'Passionate learner interested in Web Development',
    interests: ['code'],
    phoneNumber: '+91 8967641707',
    education: 'collage',
  });

  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      subject: 'Mathematics',
      target: 'Complete Advanced Algebra',
      deadline: '2024-06-30',
      progress: 65,
    },
    {
      id: '2',
      subject: 'Physics',
      target: "Master Newton's Laws",
      deadline: '2024-05-15',
      progress: 40,
    },
  ]);

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Math Master',
      date: '2024-02-15',
      icon: '🏆',
    },
    {
      id: '2',
      title: '30-Day Streak',
      date: '2024-02-10',
      icon: '🔥',
    },
  ];

  const stats = {
    totalHours: 45,
    completedLessons: 28,
    averageScore: 85,
    currentStreak: 7,
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, you would save the profile to a backend here
  };

  const addGoal = (e: React.FormEvent) => {
    e.preventDefault();
    // Add goal logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-blue-600" />
              </div>
              {!isEditing ? (
                <div className="text-white">
                  <h2 className="text-2xl font-bold">{profile.name}</h2>
                  <p className="text-blue-100">{profile.email}</p>
                  <div className="flex gap-4 mt-2">
                    {profile.interests.map((interest, index) => (
                      <span key={index} className="bg-blue-500 px-3 py-1 rounded-full text-sm">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-white">
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="bg-white text-gray-800 px-3 py-1 rounded mb-2"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="bg-white text-gray-800 px-3 py-1 rounded block mb-2"
                    placeholder="Your email"
                  />
                  <input
                    type="text"
                    value={profile.interests.join(', ')}
                    onChange={(e) => setProfile({ ...profile, interests: e.target.value.split(', ') })}
                    className="bg-white text-gray-800 px-3 py-1 rounded block"
                    placeholder="Interests (comma separated)"
                  />
                </div>
              )}
            </div>
            <button
              onClick={() => isEditing ? handleProfileUpdate : setIsEditing(true)}
              className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors"
            >
              {isEditing ? <Save className="w-5 h-5" /> : <Edit2 className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Additional Profile Fields when Editing */}
        {isEditing && (
          <div className="p-6 border-b">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={profile.phoneNumber}
                  onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Education
                </label>
                <input
                  type="text"
                  value={profile.education}
                  onChange={(e) => setProfile({ ...profile, education: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Your education"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  rows={3}
                  placeholder="Tell us about yourself"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="border-b">
          <nav className="flex">
            {[
              { id: 'progress', label: 'Progress', icon: LineChart },
              { id: 'goals', label: 'Goals', icon: Target },
              { id: 'achievements', label: 'Achievements', icon: Trophy },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-4 ${
                  activeTab === id
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Sections */}
        <div className="p-6">
          {activeTab === 'progress' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {Object.entries(stats).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                    <p className="text-2xl font-bold text-gray-800">{value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium">Completed Algebra Lesson 5</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'goals' && (
            <div className="space-y-6">
              {goals.map((goal) => (
                <div key={goal.id} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">{goal.subject}</h3>
                    <span className="text-sm text-gray-500">Deadline: {goal.deadline}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{goal.target}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 rounded-full h-2"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <p className="text-right text-sm text-gray-500 mt-2">{goal.progress}% Complete</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-gray-50 p-6 rounded-lg flex items-center gap-4">
                  <span className="text-4xl">{achievement.icon}</span>
                  <div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-gray-500">Earned on {achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}