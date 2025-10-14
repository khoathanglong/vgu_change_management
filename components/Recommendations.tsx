
import React from 'react';

interface RecommendationCardProps {
  title: string;
  points: string[];
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ title, points }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg h-full">
    <h3 className="text-xl font-bold text-[#0A4C7A] mb-4">{title}</h3>
    <ul className="space-y-3 list-disc list-inside text-gray-700">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const Recommendations: React.FC = () => {
  return (
    <section id="Recommendations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0A4C7A] mb-4">Our Actionable Recommendations</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Based on this data, here are concrete steps to improve your next COIL project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <RecommendationCard 
            title="For Technology"
            points={[
              "Conduct a Tech Equity Audit",
              "Provide a Curated Toolset",
              "Host a 'Tech Onboarding' Session"
            ]}
          />
          <RecommendationCard 
            title="For Culture"
            points={[
              "Mandate Pre-Project Training",
              "Facilitate a 'Team Charter'",
              "Appoint Faculty as 'Cultural Mediators'"
            ]}
          />
          <RecommendationCard 
            title="For Structure"
            points={[
              "Use a Phased Project Template",
              "Implement Peer Evaluations",
              "Provide an Exemplar Project"
            ]}
          />
          <RecommendationCard 
            title="For Time"
            points={[
              "Design for Asynchronicity",
              "Limit Synchronous Meetings",
              "Teach Asynchronous Best Practices"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
