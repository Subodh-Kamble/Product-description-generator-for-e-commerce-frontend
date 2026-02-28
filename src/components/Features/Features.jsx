import features from "./FeaturesData";

const Features = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Everything You Need to Sell Better
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful AI-driven tools designed for modern e-commerce businesses.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white border shadow-sm
                         hover:shadow-2xl transition hover:-translate-y-2"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl
                            bg-gradient-to-br ${feature.gradient}
                            text-white text-2xl shadow-lg`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
