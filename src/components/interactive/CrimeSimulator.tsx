import React from 'react';
import { motion } from 'framer-motion';
import { Play, Award, BookOpen } from 'lucide-react';

export function CrimeSimulator() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 font-['Poppins']">Interactive Learning</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Play className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-['Poppins']">Crime Prevention Simulator</h3>
                  <p className="text-gray-600 mb-4 font-['Poppins']">Interactive scenarios to test your decision-making</p>
                  <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition font-['Poppins']">
                    Start Simulation
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <Award className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-['Poppins']">Achievement System</h3>
                  <p className="text-gray-600 mb-4 font-['Poppins']">Earn badges by completing safety courses</p>
                  <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-['Poppins']">
                    Achievements
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 font-['Poppins']">Learning Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold font-['Poppins']">Basic Safety</span>
                  <span className="text-green-500 font-['Poppins']">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold font-['Poppins']">Cyber Security</span>
                  <span className="text-blue-500 font-['Poppins']">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold font-['Poppins']">Legal Rights</span>
                  <span className="text-purple-500 font-['Poppins']">50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}