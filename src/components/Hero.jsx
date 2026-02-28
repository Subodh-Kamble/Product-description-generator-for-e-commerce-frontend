import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-36 pb-28 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">

      {/* 🌈 Animated Background Orbs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-indigo-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 -right-32 w-[420px] h-[420px] bg-purple-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] bg-pink-400/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* 🏷️ Animated Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                        bg-indigo-100 text-indigo-600 text-sm font-medium
                        shadow-sm backdrop-blur-md
                        animate-fade-in">
          🚀 Built for Modern E-commerce
        </div>

        {/* 🔥 Headline */}
        <h1 className="mt-10 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight
                       animate-slide-up">
          AI-Powered Product <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
            Descriptions That Sell
          </span>
        </h1>

        {/* 📄 Sub-text */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed
                      animate-fade-in delay-150">
          Create high-quality, SEO-optimized product descriptions in seconds.
          Compare multiple variations, analyze performance, and convert more customers effortlessly.
        </p>

        {/* 🎯 CTA */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6 animate-slide-up delay-300">

          <Link
            to="/signup"
            className="group relative inline-flex items-center justify-center
                       bg-gradient-to-r from-indigo-600 to-purple-600
                       text-white px-12 py-4 rounded-xl text-lg font-semibold
                       shadow-xl transition-all duration-300
                       hover:scale-105 hover:shadow-2xl"
          >
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
            Get Started Free
          </Link>

          <div className="flex items-center justify-center text-gray-500 text-sm">
            ✔ No credit card required
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
