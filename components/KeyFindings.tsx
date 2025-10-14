
import React from 'react';
import { ClipboardIcon, SpeechBubbleIcon, BrokenLinkIcon, ThumbsUpIcon } from './IconComponents';

interface StatCardProps {
  icon: React.ReactNode;
  statistic: string;
  text: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, statistic, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
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
            icon={<ClipboardIcon />}
            statistic="82%"
            text="Demand Clearer Structure: Participants' #1 request is for better project guidelines and expectations."
          />
          <StatCard 
            icon={<SpeechBubbleIcon />}
            statistic="75%"
            text="Point to Culture: Team conflicts are most often blamed on unaddressed cultural and communication differences."
          />
          <StatCard 
            icon={<BrokenLinkIcon />}
            statistic="68%"
            text="Face Tech Hurdles: A majority of students experience significant disruptions from technology issues."
          />
          <StatCard 
            icon={<ThumbsUpIcon />}
            statistic="40%"
            text="Higher Success Rate: Teams with intercultural training are 40% more likely to rate their collaboration as 'highly effective.'"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFindings;
