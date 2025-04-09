import React from 'react';
import { BookOpen, Phone, Globe, MessageSquare } from 'lucide-react';

export function ResourcesSection() {
  return (
    <section id="resources" className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-[Poppins]">Helpful Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <BookOpen className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-['Poppins']">Educational Materials</h3>
            <p className="text-slate-300 font-['Poppins']">Access guides and tutorials on crime prevention</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <Phone className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-['Poppins']">Helpline Numbers</h3>
            <p className="text-slate-300 font-['Poppins']">24/7 support lines for immediate assistance</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <Globe className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-['Poppins']">Online Tools</h3>
            <p className="text-slate-300 font-['Poppins']">Security scanners and protection tools</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <MessageSquare className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-['Poppins']">Community Support</h3>
            <p className="text-slate-300 font-['Poppins']">Connect with others and share experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
}