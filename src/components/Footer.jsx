import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              ProductGenAI
            </h3>
            <p className="mt-3 text-sm text-gray-400 max-w-sm">
              AI-powered product description generation designed to boost SEO,
              engagement, and conversions for e-commerce businesses.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-8 text-sm">
            <Link
              to="/about"
              className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-500 hover:after:w-full after:transition-all"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-500 hover:after:w-full after:transition-all"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="hover:text-white transition relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-500 hover:after:w-full after:transition-all"
            >
              Privacy
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-gray-400">
            © {new Date().getFullYear()} ProductGenAI <br />
            All rights reserved.
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10"></div>
      </div>
    </footer>
  );
};

export default Footer;
