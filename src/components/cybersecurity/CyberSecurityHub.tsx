import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, AlertTriangle } from 'lucide-react';

export function CyberSecurityHub() {
  const tools = [
    {
      title: "Password Strength Checker",
      icon: <Key className="w-6 h-6" />,
      description: "Check how strong your password is",
      link: "#password-checker"
    },
    {
      title: "Data Breach Scanner",
      icon: <AlertTriangle className="w-6 h-6" />,
      description: "Check if your data has been compromised",
      link: "#breach-scanner"
    },
    {
      title: "Phishing Simulator",
      icon: <Shield className="w-6 h-6" />,
      description: "Learn to identify phishing attempts",
      link: "#phishing-sim"
    },
    {
      title: "Security Assessment",
      icon: <Lock className="w-6 h-6" />,
      description: "Evaluate your online security",
      link: "#security-check"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white font-[Poppins]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 font-['Poppins']">Cybersecurity Hub</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tools.map((tool, index) => (
              <motion.a
                key={tool.title}
                href={tool.link}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition-all"
              >
                <div className="bg-blue-500/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 font-[Poppins]">{tool.title}</h3>
                <p className="text-slate-300 font-['Poppins']">{tool.description}</p>
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 font-['Poppins']">Interactive Tutorials</h3>
              <div className="space-y-4">
                <div className="bg-slate-600/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 font-[Poppins]">Identifying Phishing Emails</h4>
                  <p className="text-slate-300 font-['Poppins']">Learn the telltale signs of fraudulent emails</p>
                  <button className="mt-4 px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition font-[Poppins]">
                    Start Tutorial
                  </button>
                </div>
                <div className="bg-slate-600/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 font-[Poppins]">Safe Online Banking</h4>
                  <p className="text-slate-300 font-['Poppins']">Best practices for secure financial transactions</p>
                  <button className="mt-4 px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition font-[Poppins]">
                    Start Tutorial
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 font-['Poppins']">Certification Programs</h3>
              <div className="space-y-4">
                <div className="bg-slate-600/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 font-[Poppins]">Cybersecurity Basics</h4>
                  <p className="text-slate-300 font-['Poppins']">Fundamental knowledge for online safety</p>
                  <div className="flex items-center mt-4">
                    <span className="text-green-400 mr-2 font-['Poppins']">4.8/5</span>
                    <span className="text-sm text-slate-400 font-['Poppins']">(2.3k enrolled)</span>
                  </div>
                </div>
                <div className="bg-slate-600/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 font-[Poppins]">Advanced Security</h4>
                  <p className="text-slate-300 font-['Poppins']">Deep dive into cybersecurity practices</p>
                  <div className="flex items-center mt-4">
                    <span className="text-green-400 mr-2 font-['Poppins']">4.9/5</span>
                    <span className="text-sm text-slate-400 font-['Poppins']">(1.8k enrolled)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}