import React, { useState } from "react";
import api from "../../api/axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "developer",
    terms: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", text: "" });

    try {
      await api.post("/users", formData);
      setStatus({
        type: "success",
        text: "Account created successfully. Welcome aboard.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        role: "developer",
        terms: false,
      });
    } catch (error) {
      setStatus({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-gray-900 my-5 font-bold">Day 4 and 5 progress</h1>
    <div className="min-h-screen bg-gray-100 flex  p-12 font-sans rounded-3xl justify-center items-center ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Sign Up Form</h2>
          <p className="text-xs text-gray-500 mt-1.5">
            By signing up, you agree to our{" "}
            <span className="text-[#00a8e8] cursor-pointer">
              Terms and Conditions.
            </span>
          </p>
        </div>

        {/* Status Message */}
        {status.text && (
          <div
            className={`mb-5 px-4 py-2.5 rounded-md border text-sm text-center ${
              status.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : "bg-red-50 border-red-200 text-red-800"
            }`}
          >
            {status.text}
          </div>
        )}

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="John"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00a8e8] focus:ring-1 focus:ring-[#00a8e8] transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Doe"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00a8e8] focus:ring-1 focus:ring-[#00a8e8] transition-colors text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@company.com"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#00a8e8] focus:ring-1 focus:ring-[#00a8e8] transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-gray-900 bg-white focus:outline-none focus:border-[#00a8e8] focus:ring-1 focus:ring-[#00a8e8] transition-colors text-sm"
            >
              <option value="developer">Web Developer</option>
              <option value="designer">UI/UX Designer</option>
              <option value="manager">Project Manager</option>
            </select>
          </div>

          <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
              className="w-4 h-4 mt-0.5 rounded border-gray-300 text-[#00a8e8] focus:ring-[#00a8e8]"
            />
            <span className="text-xs text-gray-600">
              I agree to the{" "}
              <span className="text-gray-900 font-medium">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-gray-900 font-medium">Privacy Policy</span>
            </span>
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg text-sm font-semibold text-white transition-colors mt-2 shadow-sm ${
              isLoading
                ? "bg-[#7fd0f5] cursor-not-allowed"
                : "bg-[#00a8e8] hover:bg-[#0092cd]"
            }`}
          >
            {isLoading ? "Creating account..." : "Create account"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-5">
          Already registered?{" "}
          <span className="text-[#00a8e8] font-medium cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default RegistrationForm;
