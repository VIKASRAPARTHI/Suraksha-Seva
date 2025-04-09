import React from 'react';
import { motion } from 'framer-motion';

interface AchievementCardProps {
  title: string;
  progress: number;
  color: string;
}

export function AchievementCard({ title, progress, color }: AchievementCardProps) {
  return (
    <div className="bg-slate-50 p-4 rounded-lg font-['Poppins']">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold font-['Poppins']">{title}</span>
        <span className={`text-${color}`}>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`bg-${color} h-2 rounded-full`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}