import React from 'react';
import { Shield, FileText, Trophy, Tag } from 'lucide-react';

export const Categories: React.FC = () => {
  const categories = [
    { name: 'Malware Analysis', count: 0, icon: Shield, color: 'text-red-400 bg-red-400/10' },
    { name: 'Blog', count: 0, icon: FileText, color: 'text-blue-400 bg-blue-400/10' },
    { name: "CTF's Write-up", count: 1, icon: Trophy, color: 'text-yellow-400 bg-yellow-400/10' },
  ];

  const tags = [
    'Blogging', 'C# reverse-engineering', 'E4L',
    'Github', 'Process Injection', 'CTFS'
  ];

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-yellow-400" />
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors duration-200 cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${category.color}`}>
                  <category.icon className="w-4 h-4" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                  {category.name}
                </span>
              </div>
              <span className="text-gray-500 text-sm font-medium">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-pink-500 transition-all duration-300">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <Tag className="w-5 h-5 mr-2 text-pink-400" />
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-400 rounded-full text-xs font-medium hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-200 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};