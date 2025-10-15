import React from 'react';

interface RecommendationCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ title, description, children }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
    <h3 className="text-2xl font-bold text-[#0A4C7A] mb-3">{title}</h3>
    <p className="text-gray-700 mb-6">{description}</p>
    <div className="space-y-5 text-gray-800">{children}</div>
  </div>
);

const Point: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h4 className="font-semibold text-lg text-[#009688]">{title}</h4>
        <p className="mt-1 text-gray-700">{children}</p>
    </div>
);

const Recommendations: React.FC = () => {
  return (
    <section id="Recommendations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A4C7A] mb-4">Our Actionable Recommendations</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Based on our analysis, we propose the following strategic interventions to build a robust and sustainable COIL program.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <RecommendationCard
            title="1. Reform and Clarify Processes"
            description="The most critical need is to reduce administrative friction and create clear, supportive policies. The current processes are seen as a major barrier."
          >
            <Point title='Develop a "COIL Playbook"'>
              Create a single, accessible document that outlines the entire process from start to finish. This should include a step-by-step guide for course approval, standardized templates for syllabi, and clear guidelines on student assessment and grading.
            </Point>
            <Point title="Streamline Approval Workflows">
              Reduce the number of departments and signatures required to approve a COIL collaboration. Designate a single point of contact or a small committee to handle COIL proposals to ensure a quick and efficient process.
            </Point>
            <Point title="Decouple from Formal Assessment Initially">
              To lower the barrier to entry, encourage pilot projects that are "feasible as far as no assessments are involved." This allows faculty to gain experience without the added complexity of aligning grading systems, a major point of concern.
            </Point>
          </RecommendationCard>

          <RecommendationCard
            title="2. Invest in Critical Behaviors and Mindsets"
            description="There is a fundamental gap in the confidence and skills needed to run COIL courses effectively. The project must focus on building this human capacity for both faculty and students."
          >
            <Point title="Launch a Tiered Training Program">
              <ul className="list-disc list-inside mt-1 space-y-2 text-gray-700">
                  <li><strong>Tier 1 (Foundational):</strong> Offer practical, classroom-focused English communication courses to directly address the 53% of faculty who lack confidence.</li>
                  <li><strong>Tier 2 (Advanced):</strong> Provide hands-on workshops on COIL pedagogy, online teaching tools, and intercultural communication for the 56% of faculty who want guidance.</li>
              </ul>
            </Point>
            <Point title="Create a Student Readiness Initiative">
              Address faculty concerns about student skills (42% see language as an issue) by offering pre-COIL workshops for students on language, technology, and intercultural collaboration.
            </Point>
          </RecommendationCard>

          <RecommendationCard
            title="3. Redefine Job Roles to Include COIL"
            description="The current faculty workload is a significant barrier. COIL cannot be treated as an extra, unsupported activity; it must be integrated into the formal job role."
          >
            <Point title="Formalize Workload Recognition">
                Amend faculty workload models to officially recognize the time and effort required for developing and teaching a COIL course, equivalent to a standard course.
            </Point>
            <Point title="Offer Course Releases or Stipends">
                Provide tangible support for faculty who are developing the first wave of COIL courses. This directly addresses the 39% who feel they lack sufficient time.
            </Point>
          </RecommendationCard>

          <RecommendationCard
            title="4. Build Systems for Connection and Communication"
            description="Faculty cannot be expected to build international networks or manage complex technology on their own. The university needs to provide the systems to make this easier."
          >
            <Point title="Establish a Partner-Matching Service">
                Create and manage a database of potential international partners. Actively facilitate introductions for faculty, addressing the 59% who feel they lack partners to collaborate with.
            </Point>
            <Point title="Standardize and Support Key Platforms">
                Designate and provide robust support for a primary Learning Management System (LMS) and a set of communication tools (e.g., Zoom, Teams) to ensure a stable and consistent technical environment. While not the top barrier, ensuring reliable technology is a foundational need.
            </Point>
            <Point title="Conduct an Infrastructure Audit">
                Assess the current state of the university's IT infrastructure and, crucially, survey students to understand their access to reliable internet and devices.
            </Point>
            <Point title="Provide Dedicated IT Support">
                Create a specific support channel for faculty and students involved in COIL courses to quickly resolve technical issues.
            </Point>
          </RecommendationCard>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;