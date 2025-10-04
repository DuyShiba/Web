import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    
  ];

  const currentStatus = [
    'Studying at HCMUTE',
    '3rd year student at HCMUTE Information Security Club',
    'Member of HCMUTE Information Security Club',
    
  ];

  return (
    <div className="space-y-6">
      {/* Achievements */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <Award className="w-5 h-5 mr-2 text-yellow-400" />
          Achievements
        </h3>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-gray-700/30 border border-gray-600 hover:border-gray-500 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${achievement.color} group-hover:scale-110 transition-transform duration-200`}>
                  <achievement.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-200">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Star className="w-5 h-5 mr-2 text-green-400" />
          Current Status
        </h3>
        <div className="space-y-2">
          {currentStatus.map((status, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300 text-sm">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};