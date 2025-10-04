import React from 'react';
import { User, Calendar, Mail, Hash, MessageSquare, Send } from 'lucide-react';

export const InfoCard: React.FC = () => {
  const infoItems = [
    { label: 'Fullname', value: 'Phạm Lê Anh Duy', icon: User },
    { label: 'DoB', value: '15/09/2005', icon: Calendar },
    { label: 'Email', value: 'miuchoan@gmail.com', icon: Mail },
    { label: 'Discord', value: 'MiuCham', icon: MessageSquare },
    { label: 'Facebook', value: 'Ánh Linh', icon: Send },
  ];

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <Hash className="w-5 h-5 mr-2 text-blue-400" />
        Information
      </h3>
      <div className="space-y-4">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between group">
            <div className="flex items-center text-gray-300">
              <item.icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-blue-400 transition-colors duration-200" />
              <span className="font-medium">{item.label}:</span>
            </div>
            <span className="text-blue-400 text-sm font-mono">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};