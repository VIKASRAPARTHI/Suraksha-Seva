import React from 'react';
import { motion } from 'framer-motion';
import { ContactSection } from '../components/ContactSection';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12 font-['Poppins']">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 font-['Poppins']">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                info: "+91 1800-123-4567",
                color: "bg-blue-500"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                info: "support@suraksha.com",
                color: "bg-green-500"
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Live Chat",
                info: "24/7 Support",
                color: "bg-purple-500"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Visit Us",
                info: "Gurugram, India",
                color: "bg-red-500"
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                whileHover={{ scale: 1.05 }}
                className={`${contact.color} text-white p-6 rounded-xl shadow-lg`}
              >
                <div className="bg-white/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p className="opacity-90">{contact.info}</p>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
      </div>
      <ContactSection />
    </div>
  );
}