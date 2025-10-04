import React from 'react';
import avatar from './assets/avt.jpg';
import { ProfileCard } from './components/ProfileCard';
import { InfoCard } from './components/InfoCard';
import { TechnicalSkills } from './components/TechnicalSkills';
import { SocialCard } from './components/SocialCard';
import { Categories } from './components/Categories';
import { Achievements } from './components/Achievements';
import { Labs } from './components/Labs';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Profile & Info */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileCard
              name="Anh Duy"
              title="Information Security"
              avatar={avatar}
              description="Eat for life"
            />
            <InfoCard />
          </div>

          {/* Middle Column - Technical Skills & Social */}
          <div className="lg:col-span-2 space-y-6">
            <TechnicalSkills />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <SocialCard />
              </div>
              <div>
                <Categories />
              </div>
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div className="lg:col-span-1">
            <Achievements />
          </div>
        </div>

        {/* Labs Section - Full Width */}
        <div className="mt-8">
          <Labs />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">Currently available for projects</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;