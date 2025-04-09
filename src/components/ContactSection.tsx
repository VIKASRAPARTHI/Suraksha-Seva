import React from 'react';
import { Mail, MapPin, Clock, Phone, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-4 font-[Poppins]">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto font-['Poppins']">
            Our team is here to help you 24/7. Whether you need assistance with reporting a crime or seeking guidance, we're just a message away.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-purple-500" />
                  <div>
                    <h3 className="font-semibold text-lg font-[Poppins]">Call Us</h3>
                    <p className="text-gray-600 font-[Poppins]">+91 1800-123-4567</p>
                    <p className="text-sm text-gray-500 font-[Poppins]">Toll-free number</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-500" />
                  <div>
                    <h3 className="font-semibold text-lg font-[Poppins]">Email Us</h3>
                    <p className="text-gray-600 font-[Poppins]">support@suraksha.com</p>
                    <p className="text-sm text-gray-500 font-[Poppins]">24/7 Email support</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 text-purple-500" />
                  <div>
                    <h3 className="font-semibold text-lg font-[Poppins]">Live Chat</h3>
                    <p className="text-gray-600 font-[Poppins]">Available 24/7</p>
                    <p className="text-sm text-gray-500 font-[Poppins]">Average response time: 5 minutes</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-6 font-[Poppins]">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-[Poppins]">First Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 font-[Poppins]">Last Name</label>
                      <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-[Poppins]">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-[Poppins]">Subject</label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-300 font-[Poppins]">
                      <option>General Inquiry</option>
                      <option>Report a Crime</option>
                      <option>Legal Assistance</option>
                      <option>Technical Support</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-[Poppins]">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition flex items-center justify-center space-x-2 font-[Poppins]">
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}