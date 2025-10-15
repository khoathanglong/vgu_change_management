
import React from 'react';
import { ProcessesIcon, MindsetIcon, TimeIcon, SystemsIcon } from './IconComponents';

interface PillarProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  quote: string | string[];
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
        <div className="mb-6">
          {Array.isArray(quote) ? (
            <div className="space-y-4">
              {quote.map((q, index) => (
                <blockquote key={index} className="border-l-4 border-[#F26419] pl-4 italic text-gray-600">
                  {q}
                </blockquote>
              ))}
            </div>
          ) : (
            <blockquote className="border-l-4 border-[#F26419] pl-4 italic text-gray-600">
              {quote}
            </blockquote>
          )}
        </div>
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
          <h2 className="text-4xl font-bold text-[#0A4C7A] mb-4">The Four Pillars of Change</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our analysis identified four critical areas that determine the success or failure of a COIL initiative.
          </p>
        </div>
        
        <Pillar
          id="pillar-processes"
          title="Pillar 1: Processes"
          icon={<ProcessesIcon />}
          description="The current administrative and curricular processes are seen as a major barrier. Faculty need clear, streamlined, and supportive policies, especially regarding assessment and formal recognition of COIL work."
          quote={[
            'The school has a policy allowing lecturers who desire to learn COIL teaching skills, preferential treatment policies, and priorities for individuals with specific achievements in teaching COIL.',
            'The procedures for working with foreigners are complicated and the specialized departments at the unit do not fully understand and do not have an active support team'
          ]}
          stats={['56% agree policies should be established to encourage COIL.', '25% find procedures for working with foreigners "complicated."', '11.1% request support for curriculum and policy agreements.']}
          imageSide="right"
        />

        <Pillar
          id="pillar-mindsets"
          title="Pillar 2: Critical Behaviors / Mindsets"
          icon={<MindsetIcon />}
          description="There's a fundamental gap in the skills, confidence, and readiness (both faculty and student) needed for COIL. This requires targeted training to build new behaviors and foster a proactive, confident mindset towards international collaboration."
          quote={[
            'I need skill to design English slides and skill to deliver my lesson effectively to student who have a average level of English.',
            'Language proficiency is a major challenge for both students and teachers participating in international programs.'
          ]}
          stats={['53% lack confidence in conducting COIL in English.', '49% lack adequate experience to teach COIL.', '56% of engaged faculty want pedagogical guidance/training.']}
          imageSide="left"
        />

        <Pillar
          id="pillar-roles"
          title="Pillar 3: Job Roles"
          icon={<TimeIcon />}
          description="The current demands of faculty job roles (workload, time allocation) do not adequately support COIL. There's a need to recognize COIL as a valid part of the job role and provide the necessary time and training within that role to execute it."
          quote="Give lecturers enough time. Because of my age, I need more time for the family."
          stats={['39% feel they do not have sufficient time.', '25% of hindrances cited a need for more time.', '15.6% of all support requests are for "Time availability."']}
          imageSide="right"
        />

        <Pillar
          id="pillar-systems"
          title="Pillar 4: Systems / Tools / Infrastructure"
          icon={<SystemsIcon />}
          description="The university lacks effective systems (both human and technological) for facilitating connections with international partners and providing reliable online teaching environments."
          quote="Synchronous and asynchronous online teaching methods, tools, devices, platforms to support the teaching process."
          stats={['59% feel they lack international partners to collaborate with.', '22.9% of support requests are for help connecting with partners.', '13.3% of support requests are for a stable IT platform.']}
          imageSide="left"
        />
      </div>
    </section>
  );
};

export default Pillars;
