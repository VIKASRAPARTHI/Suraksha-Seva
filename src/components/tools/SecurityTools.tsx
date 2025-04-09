import React from 'react';
import { motion } from 'framer-motion';
import { Lock, AlertTriangle, Shield } from 'lucide-react';

export function SecurityTools() {
  const [password, setPassword] = React.useState('');
  const [passwordStrength, setPasswordStrength] = React.useState(0);

  const checkPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 8) strength += 25;
    if (pass.match(/[A-Z]/)) strength += 25;
    if (pass.match(/[0-9]/)) strength += 25;
    if (pass.match(/[^A-Za-z0-9]/)) strength += 25;
    setPasswordStrength(strength);
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 font-['Poppins']">Security Tools</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-semibold font-[Poppins]">Password Strength Checker</h3>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  checkPasswordStrength(e.target.value);
                }}
                placeholder="Enter password to check strength"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-4 font-[Poppins]"
              />
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full ${
                    passwordStrength <= 25 ? 'bg-red-500' :
                    passwordStrength <= 50 ? 'bg-orange-500' :
                    passwordStrength <= 75 ? 'bg-yellow-500' :
                    'bg-purple-500'
                  }`}
                  style={{ width: `${passwordStrength}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 font-[Poppins]">
                Strength: {
                  passwordStrength <= 25 ? 'Weak' :
                  passwordStrength <= 50 ? 'Fair' :
                  passwordStrength <= 75 ? 'Good' :
                  'Strong'
                }
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold font-[Poppins]">Security Checklist</h3>
              </div>
              <div className="space-y-4">
                {[
                  "Use strong, unique passwords",
                  "Enable two-factor authentication",
                  "Keep software updated",
                  "Use antivirus protection",
                  "Backup important data"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-green-500" />
                    <span className="font-[Poppins]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}