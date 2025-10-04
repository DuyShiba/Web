import React from 'react';
import { MessageSquare } from 'lucide-react';

export const DiscordCard: React.FC = () => {
  return (
    <div className="bg-[#1e2124] rounded-xl p-6 border border-gray-700 hover:border-[#5865F2] transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
        <MessageSquare className="w-5 h-5 mr-2 text-[#5865F2]" />
        Discord
      </h3>
      
      <div className="flex items-center space-x-3 bg-[#282b30] p-4 rounded-lg cursor-pointer"
           onClick={() => window.open('https://discordapp.com/users/740190403881467947', '_blank')}>
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center">
            <span className="text-white text-lg font-bold">M</span>
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#282b30]"></div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="text-white font-semibold">MiuChan</span>
            <span className="text-gray-400 text-sm">Online</span>
          </div>
          <p className="text-gray-400 text-sm italic">
            "No limit forgiven, doing anything."
          </p>
        </div>
      </div>
    </div>
  );
};