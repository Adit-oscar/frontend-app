import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {
  const { token, loading } = useAuth();

  // 1. Tampilkan loading spinner saat sedang memeriksa status autentikasi/fetchMe
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="flex items-center space-x-2 text-gray-700 font-medium">
          <span className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></span>
          <p>Memeriksa sesi pengguna...</p>
        </div>
      </div>
    );
  }

  // 2. Jika tidak ada token/belum login, arahkan langsung ke halaman login
  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  // 3. Jika sudah login, tampilkan komponen anak (child route)
  return <Outlet />;
}
