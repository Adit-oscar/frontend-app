import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaKey,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-sm p-6">
        {/* Form Input */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Username/Email */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:border-blue-500">
            <span className="p-3 text-gray-400 border-r border-gray-200 bg-white">
              <FaUser />
            </span>
            <input
              type="text"
              name="username"
              placeholder="Username or email"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm text-gray-700 focus:outline-none placeholder-gray-400"
              required
            />
          </div>

          {/* Input Password */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:border-blue-500">
            <span className="p-3 text-gray-400 border-r border-gray-200 bg-white">
              <FaKey />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm text-gray-700 focus:outline-none placeholder-gray-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember Me & Login Button */}
          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Remember me</span>
            </label>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs px-6 py-2.5 rounded transition duration-200"
            >
              LOGIN
            </button>
          </div>

          {/* Links: Register & Forgot Password */}
          <div className="flex justify-between text-xs pt-1">
            <Link to="/auth/register" className="text-blue-500 hover:underline">
              Register now
            </Link>
            <a href="#forgot" className="text-gray-400 hover:underline">
              Forgot password?
            </a>
          </div>
        </form>

        {/* Separator Divider */}
        <div className="relative flex py-5 items-center my-2">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-xs">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          {/* Facebook */}
          <button
            type="button"
            className="w-full flex items-center bg-[#3b5998] hover:bg-[#324b80] text-white rounded overflow-hidden text-xs font-semibold transition duration-200"
          >
            <span className="p-3 bg-black/15 flex items-center justify-center">
              <FaFacebookF className="text-sm" />
            </span>
            <span className="flex-1 text-center pr-4">LOGIN WITH FACEBOOK</span>
          </button>

          {/* Twitter */}
          <button
            type="button"
            className="w-full flex items-center bg-[#00acee] hover:bg-[#0096d1] text-white rounded overflow-hidden text-xs font-semibold transition duration-200"
          >
            <span className="p-3 bg-black/15 flex items-center justify-center">
              <FaTwitter className="text-sm" />
            </span>
            <span className="flex-1 text-center pr-4">LOGIN WITH TWITTER</span>
          </button>

          {/* Google */}
          <button
            type="button"
            className="w-full flex items-center bg-[#ea4335] hover:bg-[#d3382b] text-white rounded overflow-hidden text-xs font-semibold transition duration-200"
          >
            <span className="p-3 bg-black/15 flex items-center justify-center">
              <FaGoogle className="text-sm" />
            </span>
            <span className="flex-1 text-center pr-4">LOGIN WITH GOOGLE</span>
          </button>
        </div>
      </div>
    </div>
  );
}
