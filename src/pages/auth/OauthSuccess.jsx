// src/pages/auth/OAuthSuccess.jsx
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function OAuthSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Tangkap parameter 'token' dari URL (?token=...)
    const token = searchParams.get("token");

    if (token) {
      // 2. Simpan token ke localStorage
      localStorage.setItem("token", token);

      // (Opsional) Jika backend juga mengirim data user/refresh token
      // const user = searchParams.get('user');
      // if (user) localStorage.setItem('user', user);

      // 3. Redirect ke Halaman Utama / Dashboard
      navigate("/dashboard", { replace: true });
    } else {
      // Jika tidak ada token di URL, redirect ke login karena gagal
      console.error("OAuth Failed: Token not found in URL");
      navigate("/auth/login", { replace: true });
    }
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700">
          Memproses Login...
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Mohon tunggu, Anda sedang dialihkan.
        </p>
      </div>
    </div>
  );
}
