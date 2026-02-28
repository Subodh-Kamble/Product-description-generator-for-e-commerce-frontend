import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async ({ email, password }) => {
    try {
      setLoading(true);
      setError("");

      await createUserWithEmailAndPassword(auth, email, password);

      // ✅ Success toast
      toast.success("Account created successfully!");

      // ✅ Navigate immediately
      navigate("/login");
    } catch (err) {
      // ✅ Error toast
      toast.error(err.message || "Signup failed");
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-gray-50 pt-24 pb-14">
        <SignupForm
          onSubmit={handleSignup}
          loading={loading}
          error={error}
        />
      </main>

      <Footer />
    </>
  );
};

export default Signup;
