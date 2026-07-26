import { useState } from "react";
import { FaGoogle, FaLock } from "react-icons/fa6";
import { AuthLayout } from "../../layouts/AuthLayout";
import { LoginForm } from "../../components/composite/LoginForm";
import { Button, Divider } from "../../components/ui";
import { authApi } from "../../api/authApi";

const LoginPage = () => {
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
    console.log("Form Data Submitting:", formData);
  };

  const handleLoginWithGoogle = () => {
    authApi.redirectToGoogleAuth();
  };

  return (
    <>
      {/* Title Sub-header */}
      <div className="flex items-center justify-center gap-2 mb-6 pb-2 border-b border-white/5">
        <FaLock className="text-indigo-400 text-xs" />
        <h4 className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
          Masuk ke Akun
        </h4>
      </div>

      {/* Form Login */}
      <LoginForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {/* Pembatas / Divider */}
      <div className="my-6">
        <Divider text="atau" className="text-slate-500 border-white/10" />
      </div>

      {/* Social Login Section */}
      <div className="space-y-3">
        <Button
          variant="google"
          onClick={handleLoginWithGoogle}
          className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 font-medium text-sm transition-all flex items-center justify-between group active:scale-[0.98]"
        >
          <span className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
            <FaGoogle className="text-sm text-slate-200" />
          </span>
          <span className="flex-1 text-center font-semibold text-xs tracking-wide">
            MASUK DENGAN GOOGLE
          </span>
        </Button>
      </div>
    </>
  );
};

export default LoginPage;
