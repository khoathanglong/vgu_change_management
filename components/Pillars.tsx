
import React from 'react';
import { TechIcon, CultureIcon, StructureIcon, TimeIcon } from './IconComponents';

interface PillarProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  quote: string;
  stats: string[];
  imageSide?: 'left' | 'right';
}

const Pillar: React.FC<PillarProps> = ({ id, title, icon, description, quote, stats, imageSide = 'right' }) => {
  const imageOrder = imageSide === 'right' ? 'md:order-last' : '';

  return (
    <div id={id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
      <div className={`p-8 flex justify-center items-center ${imageOrder}`}>
        <div className="w-48 h-48 text-[#0A4C7A]">{icon}</div>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-[#0A4C7A] mb-4">{title}</h3>
        <p className="text-lg text-gray-700 mb-6">{description}</p>
        <blockquote className="border-l-4 border-[#F26419] pl-4 italic text-gray-600 mb-6">
          {quote}
        </blockquote>
        <div className="space-y-2">
          {stats?.map((stat, index) => {
            const parts = stat.split(' ');
            const percentage = parts[0];
            const rest = parts.slice(1).join(' ');
            return (
              <p key={index} className="text-md text-gray-800">
                <span className="font-bold text-xl text-[#009688]">{percentage}</span> {rest}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  );
}

const Pillars: React.FC = () => {
  return (
    <section id="TheFourPillars" className="py-20 bg-[#F7F9FA]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A4C7A] mb-4">The Four Pillars of a Successful COIL Project</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our analysis identified four critical areas that determine the success or failure of a COIL initiative.
          </p>
        </div>
        
        <Pillar
          id="pillar-technology"
          title="Pillar 1: Seamless & Equitable Technology"
          icon={<TechIcon />}
          description="Technology should be an invisible enabler, not a barrier. Our data shows that complex or unreliable tools create frustration and disadvantage participants with limited internet access."
          quote='My partner&#39;s internet... was very unstable... It made real-time collaboration almost impossible.'
          stats={['68% faced tech disruptions.', 'Only 22% found the platform "very easy" to use.']}
          imageSide="right"
        />

        <Pillar
          id="pillar-culture"
          title="Pillar 2: Proactive Intercultural Guidance"
          icon={<CultureIcon />}
          description="Expecting students to navigate deep cultural differences without support is a recipe for failure. Structured training is essential for building empathy and effective communication."
          quote='I found my German partners to be very blunt, which I first thought was rude... We should have talked about this at the start.'
          stats={['75% of conflicts were from cultural misunderstandings.', 'Trained teams were 40% more likely to be effective.']}
          imageSide="left"
        />

        <Pillar
          id="pillar-structure"
          title="Pillar 3: Clarity and Deliberate Design"
          icon={<StructureIcon />}
          description="Ambiguity is the enemy of collaboration. Students need and demand a clear roadmap with defined roles, milestones, and transparent grading to ensure fairness and focus."
          quote="We were just told to 'create a marketing plan.' The instruction was so vague that our team argued for three weeks..."
          stats={['82% ranked \'clearer guidelines\' as their top need.', '55% felt the workload was uneven.']}
          imageSide="right"
        />

        <Pillar
          id="pillar-time"
          title="Pillar 4: An Asynchronous-First Mindset"
          icon={<TimeIcon />}
          description="The tyranny of time zones is the biggest logistical hurdle. Successful COIL projects must be built around flexible, asynchronous work to reduce stress and improve efficiency."
          quote='The 12-hour time difference was the biggest challenge. Having to stay up until midnight for meetings meant I was exhausted.'
          stats={['65% spent 2+ hours/week scheduling.', 'Asynchronous tools had an 88% approval rating.']}
          imageSide="left"
        />
      </div>
    </section>
  );
};

export default Pillars;
