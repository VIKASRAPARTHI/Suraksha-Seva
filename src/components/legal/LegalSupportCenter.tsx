import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Book, Download } from 'lucide-react';

export function LegalSupportCenter() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 font-['Poppins']">Legal Support Center</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <div className="bg-slate-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 font-['Poppins']">File a Complaint</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 font-['Poppins']"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 font-['Poppins']"
                    />
                  </div>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 font-['Poppins']">
                    <option>Select Complaint Type</option>
                    <option>Cybercrime</option>
                    <option>Property Crime</option>
                    <option>Personal Crime</option>
                  </select>
                  <textarea
                    rows={3}
                    placeholder="Describe your complaint..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 font-['Poppins']"
                  ></textarea>
                  <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition font-['Poppins']">
                    Submit Complaint
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 p-6 rounded-xl shadow-lg"
              >
                <FileText className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-['Poppins']">FIR Templates</h3>
                <p className="text-gray-600 mb-4 font-['Poppins']">Download ready-to-use FIR templates</p>
                <button className="flex items-center space-x-2 text-purple-500 hover:text-purple-600 transition font-['Poppins']">
                  <Download className="w-4 h-4" />
                  <span>Download Template</span>
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 p-6 rounded-xl shadow-lg"
              >
                <Scale className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-['Poppins']">Legal Rights Guide</h3>
                <p className="text-gray-600 mb-4 font-['Poppins']">Know your fundamental rights</p>
                <button className="flex items-center space-x-2 text-purple-500 hover:text-purple-600 transition font-['Poppins']">
                  <Book className="w-4 h-4" />
                  <span>Read Guide</span>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}