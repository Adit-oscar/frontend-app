import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaSpinner, FaExclamationCircle } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";

export default function OAuthSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // 1. Tangkap parameter 'token' dari URL
    const token = searchParams.get("token");

    if (token) {
      // 2. Simpan token lewat AuthContext
      // Otomatis menjalankan storage.setToken(token) dan mengupdate state global
      login(token);

      // 3. Redirect ke Dashboard
      navigate("/dashboard", { replace: true });
    } else {
      // Jika token tidak ditemukan di URL
      console.error("OAuth Failed: Token not found in URL");
      setIsError(true);

      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [searchParams, navigate, login]);

  return (
    <div className="flex flex-col items-center justify-center py-4 text-center">
      {!isError ? (
        <>
          <FaSpinner className="animate-spin text-3xl text-blue-500 mb-3" />
          <h2 className="text-base font-semibold text-gray-700">
            Memproses Login...
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Mohon tunggu, Anda sedang dialihkan ke dashboard.
          </p>
        </>
      ) : (
        <>
          <FaExclamationCircle className="text-3xl text-red-500 mb-3" />
          <h2 className="text-base font-semibold text-gray-700">
            Autentikasi Gagal
          </h2>
          <p className="text-xs text-red-500 mt-1">
            Token tidak ditemukan. Mengalihkan Anda kembali ke halaman login...
          </p>
        </>
      )}
    </div>
  );
}
