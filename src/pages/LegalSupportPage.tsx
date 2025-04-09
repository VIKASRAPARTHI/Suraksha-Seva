import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Book, Download, AlertCircle } from 'lucide-react';
import { LegalSupportCenter } from '../components/legal/LegalSupportCenter';

export function LegalSupportPage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12 font-['Poppins']">Legal Support & Resources</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 font-['Poppins']">
            <div className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-purple-500 text-white p-8 rounded-xl shadow-lg mb-8"
              >
                <h2 className="text-2xl font-bold mb-4">Know Your Rights</h2>
                <p className="mb-6">Understanding your legal rights is the first step towards justice.</p>
                <button className="bg-white text-purple-500 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
                  Learn More
                </button>
              </motion.div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6">Common Legal Procedures</h3>
                <div className="space-y-4">
                  {[
                    "Filing an FIR",
                    "Bail Application Process",
                    "Court Hearing Preparation",
                    "Legal Documentation"
                  ].map((procedure, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-purple-500" />
                      <span>{procedure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <FileText className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Legal Documents</h3>
                <p className="text-gray-600 mb-4">Access and download legal templates</p>
                <button className="flex items-center space-x-2 text-purple-500 hover:text-purple-600 transition">
                  <Download className="w-4 h-4" />
                  <span>Download Templates</span>
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <Scale className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Find a Lawyer</h3>
                <p className="text-gray-600 mb-4">Connect with legal professionals</p>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition w-full">
                  Search Directory
                </button>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>
      <LegalSupportCenter />
    </div>
  );
}