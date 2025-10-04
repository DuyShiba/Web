import React from 'react';
import { MessageSquare, Music } from 'lucide-react';

export const SocialCard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Discord Card */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-indigo-400" />
          Discord
        </h3>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-medium">MiuChan</p>
              <p className="text-gray-400 text-sm">Online</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-3 italic">
            "No limit forgiven, doing anything."
          </p>
        </div>
      </div>

      {/* Spotify-style Card */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Music className="w-5 h-5 mr-2 text-green-400" />
          Currently Playing
        </h3>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-sm">Coding Beats</p>
              <p className="text-gray-400 text-xs">Lo-fi Hip Hop</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div className="bg-green-500 h-1 rounded-full w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};