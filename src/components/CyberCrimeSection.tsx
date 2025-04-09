import React from 'react';
import { Shield, Wifi, CreditCard, Lock } from 'lucide-react';

export function CyberCrimeSection() {
  const cyberCrimeTypes = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Hacking",
      description: "Unauthorized access to computers or networks"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Identity Theft",
      description: "Fraudulent acquisition and use of personal information"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Ransomware",
      description: "Malicious software that encrypts your data for ransom"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Online Scams",
      description: "Fraudulent schemes to deceive and steal"
    }
  ];

  return (
    <section id="cyber-crime" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-[Poppins]">Cyber Crime Protection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cyberCrimeTypes.map((crime, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-purple-500 mb-4">{crime.icon}</div>
              <h3 className="text-xl font-semibold mb-2 font-['Poppins']">{crime.title}</h3>
              <p className="text-gray-600 font-['Poppins']">{crime.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}