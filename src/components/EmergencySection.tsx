import React from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import { emergencyContacts } from '../data/emergencyContacts';
import { motion } from 'framer-motion';

export function EmergencySection() {
  return (
    <section id="emergency" className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-red-600 text-white p-6 rounded-lg mb-8 flex items-center"
          >
            <AlertTriangle className="w-12 h-12 mr-4 animate-pulse" />
            <div>
              <h2 className="text-2xl font-bold mb-2 font-['Poppins']">Emergency Numbers</h2>
              <p className="font-['Poppins']">24/7 helpline numbers for immediate assistance across India</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 font-['Poppins']" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1 font-['Poppins']">{contact.name}</h3>
                    <p className="text-3xl font-bold text-red-600 mb-2 font-['Poppins']">{contact.number}</p>
                    <p className="text-gray-600 font-['Poppins']">{contact.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}