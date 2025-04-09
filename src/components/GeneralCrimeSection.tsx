import React from 'react';

export function GeneralCrimeSection() {
  return (
    <section id="general-crime" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-[Poppins]">General Crime Help</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 font-[Poppins]">Immediate Steps</h3>
            <ul className="space-y-4 font-[Poppins]">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                Ensure your safety and move to a secure location
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                Contact emergency services if in immediate danger
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                Document everything you can remember
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                Preserve any evidence
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 font-[Poppins]">Types of Assistance</h3>
            <ul className="space-y-4 font-[Poppins]">
              <li>Legal Support and Guidance</li>
              <li>Victim Support Services</li>
              <li>Counseling and Mental Health</li>
              <li>Property Crime Resolution</li>
              <li>Personal Safety Planning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}