import type React from 'react';
import Section from '../ui/Section';

const steps = [
  {
    number: 1,
    title: 'Client Posts Job',
    description: 'Clients list detailed requirements and preferred schedule',
  },
  {
    number: 2,
    title: 'Craftsmen Bid',
    description:
      'Qualified craftsmen submit proposals with pricing and timelines',
  },
  {
    number: 3,
    title: 'Client Accepts',
    description: 'Client reviews bids and selects a preferred craftsman',
  },
  {
    number: 4,
    title: 'Job Completed',
    description: 'Craftsman finishes work and client confirms completion',
  },
  {
    number: 5,
    title: 'Review Submitted',
    description: 'Client provides feedback and releases payment',
  },
];

const WorkflowSection: React.FC = () => {
  const title = (
    <>
      <span className="text-blue-600">Herfa</span> Platform Overview
    </>
  );

  const subtitle = (
    <>
      <strong>Herfa</strong> is a local-first{' '}
      <strong>craftsman marketplace</strong> that connects clients with
      verified, bookable <strong>skilled artisans</strong> — reducing
      time-to-hire and dispute risk through our comprehensive digital ecosystem
      featuring <strong>secure payments</strong>,
      <strong> real-time communication</strong>, and{' '}
      <strong>project management tools</strong>.
    </>
  );

  return (
    <Section
      id="workflow"
      title={title}
      subtitle={subtitle}
      className="bg-gray-50 px-6 py-16 md:py-24"
      titleClassName="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl"
      subtitleClassName="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600"
      containerClassName="mx-auto max-w-4xl"
      ariaLabelledBy="workflow-title"
    >
      {/* Workflow Title */}
      <h3 className="mb-12 text-center text-2xl font-semibold text-gray-900">
        How Our <span className="text-blue-600">Craftsman Marketplace</span>{' '}
        Works
      </h3>

      {/* Steps with Enhanced SEO */}
      <div
        className="space-y-6"
        role="list"
        aria-label="Platform workflow steps"
      >
        {steps.map((step) => (
          <article
            key={step.number}
            className="group flex items-center gap-6 rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Step Number */}
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white"
              aria-label={`Step ${step.number}`}
            >
              {step.number}
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                {step.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Additional SEO Content */}
      <div className="mt-16 text-center">
        <p className="text-sm text-gray-500 leading-relaxed">
          Join thousands of satisfied clients and{' '}
          <strong>professional craftsmen</strong> who trust
          <strong> Herfa's secure platform</strong> for{' '}
          <strong>home improvement projects</strong>,<strong> repairs</strong>,
          and <strong>custom craftsmanship services</strong>.
        </p>
      </div>
    </Section>
  );
};

export default WorkflowSection;
