import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  color: string;
}

export function StatCard({ title, value, subtitle, color }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${color} text-white p-6 rounded-xl font-['Poppins']`}
    >
      <h4 className="text-lg font-semibold mb-2 font-['Poppins']">{title}</h4>
      <p className="text-3xl font-bold font-['Poppins']">{value}</p>
      <p className="text-sm opacity-80 font-['Poppins']">{subtitle}</p>
    </motion.div>
  );
}