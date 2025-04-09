import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Poppins']">
            Empowering You Against Crimes in India
          </h1>
          <p className="text-lg mb-8 text-gray-300 font-['Poppins']">
            Your comprehensive resource for understanding, preventing, and reporting crimes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#emergency" className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition font-[Poppins]">
              <Shield className="w-5 h-5 mr-2" />
              Emergency Help
            </a>
            <a href="#resources" className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition font-[Poppins]">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}