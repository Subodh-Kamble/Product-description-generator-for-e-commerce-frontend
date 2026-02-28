const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-6 py-20">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Your privacy is important to us. ProductGenAI does not sell or share
          your personal data with third parties.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Authentication is handled securely using Firebase Authentication.
          Product data and generated content are stored only for providing
          application functionality.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This project is intended for educational and demonstration purposes.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
