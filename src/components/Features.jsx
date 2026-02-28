const features = [
  {
    title: "AI-Generated Descriptions",
    description:
      "Generate high-converting product descriptions instantly using advanced large language models.",
    icon: "🤖",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your search rankings with automatically optimized keywords built into every description.",
    icon: "📈",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Multiple Variations",
    description:
      "Create and compare multiple tones and styles to find the best-performing description.",
    icon: "📝",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Performance Analysis",
    description:
      "Analyze SEO, engagement, and conversion potential using AI-powered insights.",
    icon: "📊",
    gradient: "from-amber-500 to-orange-500",
  },
];

const Features = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Everything You Need to Sell Better
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful AI-driven tools designed specifically for modern e-commerce businesses.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Icon Circle */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white text-2xl shadow-lg`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-indigo-500/20 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
