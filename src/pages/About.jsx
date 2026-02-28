const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-6 py-20">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          About ProductGenAI
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          ProductGenAI is an AI-powered platform designed to help e-commerce
          businesses generate high-quality product descriptions that improve
          SEO, engagement, and conversion rates.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Using cutting-edge Large Language Models, ProductGenAI analyzes your
          product details and creates descriptions, SEO keywords, and analytics
          that help your products stand out in competitive marketplaces.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This project demonstrates a full-stack architecture using React,
          FastAPI, Firebase Authentication, SQLite, and LangChain-powered AI
          workflows.
        </p>
      </div>
    </div>
  );
};

export default About;
