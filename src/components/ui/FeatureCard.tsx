const FeatureCard = ({
  feature,
}: {
  feature: { icon: string; title: string; description: string };
}) => {
  return (
    <div className="group rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Icon */}
      <div className="mb-6 text-4xl transition-transform duration-300 group-hover:scale-110">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="mb-4 text-xl font-semibold text-gray-900">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="leading-relaxed text-gray-600">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
