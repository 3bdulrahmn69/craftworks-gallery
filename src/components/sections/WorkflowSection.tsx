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

const WorkflowSection = () => {
  return (
    <section id="workflow" className="bg-gray-50 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Platform Overview
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Herfa is a local-first marketplace that connects clients with
            verified, bookable craftsmen — reducing time-to-hire and dispute
            risk through our comprehensive digital ecosystem.
          </p>
        </div>

        {/* Workflow Title */}
        <h3 className="mb-12 text-center text-2xl font-semibold text-gray-900">
          Streamlined Workflow
        </h3>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex items-center gap-6 rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Step Number */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
