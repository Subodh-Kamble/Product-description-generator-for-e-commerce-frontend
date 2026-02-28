import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features/Features";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      {/* 🌈 HERO SECTION WRAPPER */}
      <section className="relative overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />

        <div className="relative">
          <Hero />
        </div>
      </section>

      {/* ✨ FEATURES SECTION */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24">
        {/* Subtle divider glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Glass container */}
          <div
            className="
              rounded-3xl p-[2px]
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              hover:shadow-2xl transition-all duration-500
            "
          >
            <div
              className="
                rounded-3xl bg-white/80 backdrop-blur-xl
                px-8 py-16
                transition-all duration-500
                hover:scale-[1.01]
              "
            >
              <Features />
            </div>
          </div>
        </div>
      </section>

      {/* 🌊 CTA / FOOTER WRAPPER */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        {/* Decorative waves */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_70%)]" />

        <div className="relative">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Landing;
