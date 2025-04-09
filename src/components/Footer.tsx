import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" className="w-12 h-12 text-blue-400" />
              <span className="text-xl font-bold font-[Poppins]">Suraksha</span>
            </div>
            <p className="text-slate-400 mb-6 font-[Poppins]">
              Empowering citizens with knowledge and resources to prevent and combat crime in India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group hover:bg-red-500 transition-all duration-300"
              >
                <Youtube className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group hover:bg-pink-500 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group hover:bg-blue-400 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group hover:bg-blue-500 transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group hover:bg-blue-500 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-[Poppins]">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#emergency" className="text-slate-400 hover:text-white transition flex items-center font-[Poppins]">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Emergency Services
                </a>
              </li>
              <li>
                <a href="#resources" className="text-slate-400 hover:text-white transition flex items-center font-[Poppins]">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Resources
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition flex items-center font-[Poppins]">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition flex items-center font-[Poppins]">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-[Poppins]">Government Partners</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://www.mha.gov.in/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition font-[Poppins]">
                  Ministry of Home Affairs
                </a>
              </li>
              <li>
                <a href="https://www.ncrb.gov.in/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition font-[Poppins]">
                  National Crime Records Bureau
                </a>
              </li>
              <li>
                <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition font-[Poppins]">
                  Cyber Crime Portal
                </a>
              </li>
              <li>
                <a href="https://www.indianembassy.org/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition font-[Poppins]">
                  Indian Embassies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-[Poppins]">Newsletter</h3>
            <p className="text-slate-400 mb-4 font-[Poppins]">
              Subscribe to our newsletter for updates on safety measures and crime prevention.
            </p>
            <form className="space-y-4 font-[Poppins]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400"
              />
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 w-100">
        <div className="container mx-auto px-4 pt-8">
          <div className="text-center text-slate-400">
            <p className="font-[Poppins]"></p>
          </div>
        </div>
      </div>
    </footer>
  );
}