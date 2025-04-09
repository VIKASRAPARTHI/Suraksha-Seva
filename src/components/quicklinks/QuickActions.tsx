import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Phone, AlertTriangle } from 'lucide-react';

export function QuickActions() {
  const actions = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Report a Crime",
      description: "File a complaint or report a crime online",
      link: "#report",
      color: "bg-red-500"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Know Your Rights",
      description: "Learn about your legal rights and protections",
      link: "#rights",
      color: "bg-blue-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Legal Aid",
      description: "Get free legal assistance and support",
      link: "#legal-aid",
      color: "bg-green-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Emergency Help",
      description: "24/7 emergency helpline numbers",
      link: "#emergency",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-12 bg-slate-50 font-[Poppins]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <motion.a
              key={action.title}
              href={action.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`${action.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  {action.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{action.title}</h3>
                  <p className="text-sm opacity-90">{action.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}