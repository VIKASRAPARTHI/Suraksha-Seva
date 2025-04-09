import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from '../common/SectionTitle';
import { StatCard } from './StatCard';
import { motion } from 'framer-motion';

const crimeData = [
  { year: '2019', count: 51.6 },
  { year: '2020', count: 28.8 },
  { year: '2021', count: 40.2 },
  { year: '2022', count: 44.5 },
  { year: '2023', count: 47.3 },
];

const stats = [
  {
    title: "Cybercrime",
    value: "+52%",
    subtitle: "Increase since 2020",
    color: "bg-blue-500"
  },
  {
    title: "Property Crime",
    value: "-18%",
    subtitle: "Decrease since 2020",
    color: "bg-red-500"
  },
  {
    title: "Case Resolution",
    value: "67%",
    subtitle: "Success rate in 2023",
    color: "bg-green-500"
  },
  {
    title: "Response Time",
    value: "15min",
    subtitle: "Average in metro cities",
    color: "bg-purple-500"
  }
];

export function CrimeStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="pt-16 pb-4 bg-white font-[Poppins]">
      <div className="container mx-auto px-4 font-[Poppins]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <SectionTitle 
            title="Crime Statistics in India" 
            subtitle="Latest trends and insights from across the nation"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-8 rounded-xl shadow-lg font-['Poppins']">
              <h3 className="text-xl font-semibold mb-6 font-[Poppins]">Yearly Crime Rate Trends</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={crimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#993bf6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}