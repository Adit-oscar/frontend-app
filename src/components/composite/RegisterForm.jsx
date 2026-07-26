import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { InputGroup, Button } from "../ui";

export const RegisterForm = ({ formData, onChange, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Full Name */}
      <InputGroup
        icon={FaUser}
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={onChange}
        required
      />

      {/* Email */}
      <InputGroup
        icon={FaEnvelope}
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={onChange}
        required
      />

      {/* Password */}
      <InputGroup
        icon={FaKey}
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={onChange}
        required
        rightAction={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="p-3 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        }
      />

      {/* Confirm Password */}
      <InputGroup
        icon={FaKey}
        type={showConfirmPassword ? "text" : "password"}
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={onChange}
        required
        rightAction={
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="p-3 text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        }
      />

      {/* Submit Button */}
      <Button type="submit" variant="primary" className="w-full mt-2">
        REGISTER NOW
      </Button>

      {/* Link ke Login */}
      <div className="text-center text-xs pt-1">
        <span className="text-gray-500">Already have an account? </span>
        <Link
          to="/auth/login"
          className="text-blue-500 hover:underline font-semibold"
        >
          Login here
        </Link>
      </div>
    </form>
  );
};
