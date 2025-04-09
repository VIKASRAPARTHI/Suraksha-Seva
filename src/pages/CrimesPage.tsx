import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, UserX, Home, Briefcase, Globe, UserMinus } from 'lucide-react';

const crimeTypes = [
  {
    id: 'violent',
    icon: <UserX className="w-6 h-6" />,
    title: "Violent Crime",
    description: "Physical assault, robbery, and related offenses",
    ipcSections: ["Section 302", "Section 307"],
    color: "bg-red-500"
  },
  {
    id: 'property',
    icon: <Home className="w-6 h-6" />,
    title: "Property Crime",
    description: "Burglary, theft, and property damage",
    ipcSections: ["Section 379", "Section 461"],
    color: "bg-blue-500"
  },
  {
    id: 'white-collar',
    icon: <Briefcase className="w-6 h-6" />,
    title: "White-Collar Crime",
    description: "Financial fraud and corporate crimes",
    ipcSections: ["Section 420", "Section 467"],
    color: "bg-green-500"
  },
  {
    id: 'hate',
    icon: <UserMinus className="w-6 h-6" />,
    title: "Hate Crime",
    description: "Crimes motivated by bias or prejudice",
    ipcSections: ["Section 153A", "Section 295A"],
    color: "bg-purple-500"
  }
];

function CrimeTypeDetail({ crimeType }) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className={`${crimeType.color} text-white p-8 rounded-xl mb-8`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                {crimeType.icon}
              </div>
              <h1 className="text-3xl font-bold">{crimeType.title}</h1>
            </div>
            <p className="text-lg opacity-90">{crimeType.description}</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">IPC Sections</h2>
            <div className="grid gap-4">
              {crimeType.ipcSections.map((section) => (
                <div key={section} className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold">{section}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CrimesList() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12 font-['Poppins']">Types of Crimes</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {crimeTypes.map((crime) => (
              <Link key={crime.id} to={`/crimes/${crime.id}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`${crime.color} text-white p-6 rounded-xl shadow-lg`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      {crime.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-['Poppins']">{crime.title}</h3>
                      <p className="opacity-90 font-['Poppins']">{crime.description}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function CrimesPage() {
  return (
    <Routes>
      <Route path="/" element={<CrimesList />} />
      {crimeTypes.map((crime) => (
        <Route
          key={crime.id}
          path={`/${crime.id}`}
          element={<CrimeTypeDetail crimeType={crime} />}
        />
      ))}
    </Routes>
  );
}