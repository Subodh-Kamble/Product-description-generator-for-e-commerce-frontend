const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-6 py-20">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Contact Us
        </h1>

        <p className="text-gray-700 mb-8">
          Have questions, feedback, or suggestions? We’d love to hear from you.
        </p>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-gray-800">
              subodh2005kamble@gmail.com
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Developer</p>
            <p className="font-semibold text-gray-800">
              Subodh Kamble
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Project Type</p>
            <p className="font-semibold text-gray-800">
              AI-Powered E-Commerce Tool
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
