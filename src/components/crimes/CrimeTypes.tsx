import React from 'react';
import { motion } from 'framer-motion';
import { UserX, Home, Briefcase, Globe, UserMinus } from 'lucide-react';

const crimeTypes = [
  {
    icon: <UserX className="w-6 h-6" />,
    title: "Violent Crime",
    description: "Physical assault, robbery, and related offenses",
    ipcSections: ["Section 302", "Section 307"],
    color: "bg-red-500"
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Property Crime",
    description: "Burglary, theft, and property damage",
    ipcSections: ["Section 379", "Section 461"],
    color: "bg-blue-500"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "White-Collar Crime",
    description: "Financial fraud and corporate crimes",
    ipcSections: ["Section 420", "Section 467"],
    color: "bg-green-500"
  },
  {
    icon: <UserMinus className="w-6 h-6" />,
    title: "Hate Crime",
    description: "Crimes motivated by bias or prejudice",
    ipcSections: ["Section 153A", "Section 295A"],
    color: "bg-purple-500"
  }
];

export function CrimeTypes() {
  return (
    <section className="py-6 bg-white font-[Poppins]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 font-['Poppins']">Types of Crimes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crimeTypes.map((crime, index) => (
              <motion.div
                key={crime.title}
                whileHover={{ scale: 1.05 }}
                className={`${crime.color} text-white p-6 rounded-xl shadow-lg`}
              >
                <div className="bg-white/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {crime.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 font-[Poppins]">{crime.title}</h3>
                <p className="text-sm mb-4 opacity-90">{crime.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold font-[Poppins]">Relevant IPC Sections:</p>
                  {crime.ipcSections.map((section) => (
                    <span key={section} className="inline-block bg-white/20 px-2 py-1 rounded text-sm mr-2">
                      {section}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}