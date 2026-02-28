import { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";

const SignupForm = ({ onSubmit, loading, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  // Strong email regex (no ****@gmail.com allowed)
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9._]{2,}@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d).{6,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid email with meaningful characters");
      return;
    }

    if (!passwordRegex.test(password)) {
      setFormError(
        "Password must be at least 6 characters and contain a number"
      );
      return;
    }

    onSubmit({ email, password });
  };

  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10">
      <h2 className="text-3xl font-extrabold text-center text-gray-900">
        Create Account
      </h2>
      <p className="mt-2 text-sm text-center text-gray-600">
        Start generating AI-powered descriptions
      </p>

      {(formError || error) && (
        <div className="mt-4 bg-red-50 text-red-600 p-3 rounded-xl text-sm">
          {formError || error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <InputField
          type="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
