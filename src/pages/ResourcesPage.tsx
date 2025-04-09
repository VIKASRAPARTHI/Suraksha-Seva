import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Video, FileText } from 'lucide-react';
import { ResourcesSection } from '../components/ResourcesSection';

export function ResourcesPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12 font-['Poppins']">Resource Center</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 font-['Poppins']">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl shadow-lg"
            >
              <BookOpen className="w-12 h-12 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Educational Materials</h2>
              <p className="mb-6">Comprehensive guides and tutorials on crime prevention and safety.</p>
              <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                Browse Library
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl shadow-lg"
            >
              <Video className="w-12 h-12 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Video Resources</h2>
              <p className="mb-6">Watch tutorials and informative videos on various safety topics.</p>
              <button className="bg-white text-purple-500 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
                Watch Videos
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-xl shadow-lg"
            >
              <FileText className="w-12 h-12 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Templates & Forms</h2>
              <p className="mb-6">Download ready-to-use legal documents and complaint forms.</p>
              <button className="bg-white text-green-500 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition">
                Download Now
              </button>
            </motion.div>
          </div>

        </motion.div>
      </div>
      <ResourcesSection />
    </div>
  );
}