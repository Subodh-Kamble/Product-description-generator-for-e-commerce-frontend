import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  const isLandingPage = location.pathname === "/";
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";


  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
            AI
          </div>
          <span className="text-xl font-bold text-gray-900">
            ProductGenAI
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {user && !isAuthPage && !isLandingPage && (
            <>
              {/* Profile */}
              <div className="flex items-center gap-3 bg-white/80 px-3 py-1.5 rounded-full border">
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm text-gray-700 max-w-[140px] truncate">
                  {user.email}
                </span>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-red-600 hover:text-red-700 transition"
              >
                Logout
              </button>
            </>
          )} 
            {!isAuthPage && isLandingPage && (
             <>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition shadow-sm hover:shadow-md"
              >
                Sign Up
              </Link>
            </>
          )
          }
        </div>
  
      </div>
    </nav>
  );
};

export default Navbar;
