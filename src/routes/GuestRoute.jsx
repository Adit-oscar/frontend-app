import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function GuestRoute() {
  const { token, loading } = useAuth();

  // 1. Tunggu proses pengecekan token/fetchMe selesai
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="flex items-center space-x-2 text-gray-700 font-medium">
          <span className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></span>
          <p>Memeriksa sesi...</p>
        </div>
      </div>
    );
  }

  // 2. Jika token ADA (user sudah login), alihkan ke /dashboard
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  // 3. Jika TIDAK ADA token, izinkan mengakses halaman login/register
  return <Outlet />;
}
