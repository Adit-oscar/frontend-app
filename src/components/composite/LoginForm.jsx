import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { InputGroup, Checkbox, Button } from "../ui";

export const LoginForm = ({ formData, onChange, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Username / Email */}
      <InputGroup
        icon={FaUser}
        type="text"
        name="username"
        placeholder="Username or email"
        value={formData.username}
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

      {/* Remember Me & Login Button */}
      <div className="flex items-center justify-between pt-2">
        <Checkbox
          name="rememberMe"
          label="Remember me"
          checked={formData.rememberMe}
          onChange={onChange}
        />
        <Button type="submit" variant="primary">
          LOGIN
        </Button>
      </div>

      {/* Navigasi Link */}
      <div className="flex justify-between text-xs pt-1">
        <Link to="/auth/register" className="text-blue-500 hover:underline">
          Register now
        </Link>
        <a href="#forgot" className="text-gray-400 hover:underline">
          Forgot password?
        </a>
      </div>
    </form>
  );
};
