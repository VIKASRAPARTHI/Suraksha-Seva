import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, AlertTriangle } from 'lucide-react';
import { SecurityTools } from '../components/tools/SecurityTools';
import { CyberSecurityHub } from '../components/cybersecurity/CyberSecurityHub';

export function CyberSecurityPage() {
  return (
    <div>
      <SecurityTools />
      <CyberSecurityHub />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          
          <section className="my-16">
            <h2 className="text-3xl font-bold mb-8 font-['Poppins']">Latest Cyber Threats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-['Poppins']">
              {[
                {
                  title: "Phishing Attacks",
                  description: "Recent surge in banking-related phishing emails",
                  icon: <AlertTriangle className="w-6 h-6" />,
                  color: "bg-red-500"
                },
                {
                  title: "Ransomware",
                  description: "New variants targeting small businesses",
                  icon: <Lock className="w-6 h-6" />,
                  color: "bg-purple-500"
                },
                {
                  title: "Data Breaches",
                  description: "Major e-commerce platforms affected",
                  icon: <Shield className="w-6 h-6" />,
                  color: "bg-blue-500"
                }
              ].map((threat, index) => (
                <motion.div
                  key={threat.title}
                  whileHover={{ scale: 1.05 }}
                  className={`${threat.color} text-white p-6 rounded-xl shadow-lg`}
                >
                  <div className="bg-white/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    {threat.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{threat.title}</h3>
                  <p className="opacity-90">{threat.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}