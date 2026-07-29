import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { RegisterForm } from "../../components/composite/RegisterForm";
import { Button, Divider } from "../../components/ui";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Reset error message ketika user mulai mengetik ulang
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    console.log("Registering user:", formData);
    // Jalankan API Register di sini
  };

  const handleRegisterWithGoogle = () => {
    // Redirect ke endpoint OAuth backend kamu
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
    <div className="space-y-6">
      {/* Subtitle / Header Deskripsi Halaman */}
      <div className="text-center -mt-4 mb-2">
        <p className="text-xs text-slate-400 leading-relaxed">
          Buat akun baru untuk mulai mengakses seluruh fitur
        </p>
      </div>

      {/* Alert Error Lokal (Jika Validasi Gagal) */}
      {errorMessage && (
        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs text-center backdrop-blur-md animate-fade-in">
          {errorMessage}
        </div>
      )}

      {/* Form Register Manual */}
      <RegisterForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {/* Pembatas / Divider */}
      <Divider text="atau" />

      {/* Google OAuth Register */}
      <div>
        <Button variant="google" onClick={handleRegisterWithGoogle}>
          <span className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
            <FaGoogle className="text-sm text-slate-200" />
          </span>
          <span className="flex-1 text-center font-semibold text-xs tracking-wide">
            DAFTAR DENGAN GOOGLE
          </span>
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
