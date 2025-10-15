import React from 'react';
import { ProcessesIcon, MindsetIcon, TimeIcon, SystemsIcon } from './IconComponents';

interface StatCardProps {
  icon: React.ReactNode;
  statistic: string;
  text: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, statistic, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col justify-center">
    <div className="text-[#0A4C7A] w-16 h-16 mx-auto mb-4">{icon}</div>
    <p className="text-5xl font-bold text-[#F26419] mb-2">{statistic}</p>
    <p className="text-gray-600 font-semibold">{text}</p>
  </div>
);

const KeyFindings: React.FC = () => {
  return (
    <section id="KeyFindings" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#0A4C7A] mb-4">The Data Doesn't Lie</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
          Before diving deep, here are the headline statistics from our survey that every COIL designer should know.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            icon={<ProcessesIcon />}
            statistic="56%"
            text="Agree the university should establish clear policies to encourage COIL."
          />
          <StatCard 
            icon={<MindsetIcon />}
            statistic="53%"
            text="Lack confidence in their English ability to conduct a COIL course."
          />
          <StatCard 
            icon={<TimeIcon />}
            statistic="39%"
            text="Report they do not have sufficient time."
          />
          <StatCard 
            icon={<SystemsIcon />}
            statistic="59%"
            text="Feel they lack international partners to collaborate with."
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFindings;