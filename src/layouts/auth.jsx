import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="auth-wrapper">
      {/* Tempat Login, Register, dan OAuthSuccess akan dirender */}
      <Outlet />
    </div>
  );
}
