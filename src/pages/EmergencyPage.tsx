import React from 'react';
import { motion } from 'framer-motion';
import { EmergencySection } from '../components/EmergencySection';
import { Phone, AlertTriangle, MapPin } from 'lucide-react';

export function EmergencyPage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-red-600 text-white p-8 rounded-xl mb-12">
            <h1 className="text-4xl font-bold mb-4 font-['Poppins']">Emergency Services</h1>
            <p className="text-xl opacity-90 font-['Poppins']">24/7 helpline numbers for immediate assistance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <Phone className="w-12 h-12 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2 font-['Poppins']">Emergency Contacts</h2>
              <p className="text-gray-600 mb-4 font-['Poppins']">Quick access to all emergency numbers</p>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition w-full font-['Poppins']">
                View Numbers
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2 font-['Poppins']">Report Emergency</h2>
              <p className="text-gray-600 mb-4 font-['Poppins']">Super fast reporting for immediate action</p>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition w-full font-['Poppins']">
                Report Now
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <MapPin className="w-12 h-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2 font-['Poppins']">Nearby Services</h2>
              <p className="text-gray-600 mb-4 font-['Poppins']">Find all kind of emergency services near you</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full font-['Poppins']">
                Find Services
              </button>
            </motion.div>
          </div>

        </motion.div>
      </div>
      <EmergencySection />
    </div>
  );
}