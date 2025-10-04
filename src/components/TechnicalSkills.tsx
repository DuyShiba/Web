import React from 'react';
import { Code, Wrench, Monitor, Globe, Heart } from 'lucide-react';

export const TechnicalSkills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'C++', 'C#', '(like coding 40% of the time)'],
      color: 'text-green-400'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['IDA Pro', 'x64dbg', 'WinDbg', 'Splunk', 'Wireshark', 'Burp Suite', 'Volatility', 'FTK Imager', 'Autopsy'],
      color: 'text-yellow-400'
    },
    {
      title: 'Operating Systems',
      icon: Monitor,
      skills: ['Windows', 'Linux'],
      color: 'text-blue-400'
    },
    {
      title: 'Languages',
      icon: Globe,
      skills: ['English', 'Vietnamese'],
      color: 'text-purple-400'
    },
    {
      title: 'Interests',
      icon: Heart,
      skills: ['Reverse Engineering', 'Malware Researching', 'Cybersecurity'],
      color: 'text-red-400'
    }
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <Code className="w-5 h-5 mr-2 text-green-400" />
        Technical Skills
      </h3>
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="group">
            <h4 className="flex items-center text-white font-medium mb-3">
              <category.icon className={`w-4 h-4 mr-2 ${category.color} group-hover:scale-110 transition-transform duration-200`} />
              {category.title}:
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium hover:bg-gray-600 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};