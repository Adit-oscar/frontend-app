import { useState, useEffect } from "react";
// import api from "../services/api"; // Un-comment ini jika axios instance kamu sudah siap
import { useAuth } from "../../hooks/useAuth";

export default function OverviewPage() {
  const { user: currentUser } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // State Penanganan Error untuk Popup/Modal
  const [errorState, setErrorState] = useState({
    isError: false,
    title: "",
    message: "",
    type: "", // 'server_offline' | 'database_error' | 'generic'
  });

  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  // Fungsi Fetch Data
  const handleGetUsers = async () => {
    try {
      setLoading(true);
      // Reset status error setiap kali mencoba fetch ulang
      setErrorState({ isError: false, title: "", message: "", type: "" });

      /* 
        ========================================================
        PANGGILAN API SUNGGUHAN (Gunakan ini di produksi):
        ========================================================
        const response = await api.get("/users");
        setData(response.data?.data || response.data || []);
        */

      /* 
        ========================================================
        SIMULASI UNTUK TESTING (Hapus bagian ini nanti):
        ========================================================
      */
      await new Promise((resolve) => setTimeout(resolve, 800));

      // UNCOMMENT salah satu baris di bawah ini untuk tes Popup Error:
      // throw { response: null }; // Test 1: Server Offline
      // throw {
      //   response: {
      //     status: 500,
      //     data: { message: "SQLSTATE[HY000] [2002] Connection refused" },
      //   },
      // }; // Test 2: DB Error

      // Data dummy jika berhasil
      setData([
        { id: 1, name: "Ahmad Dahlan", email: "ahmad@example.com" },
        { id: 2, name: "Budi Santoso", email: "budi@example.com" },
      ]);
    } catch (error) {
      console.error("Gagal mengambil data user:", error);

      // 1. Backend Offline / Network Error (Tidak ada koneksi)
      if (!error.response) {
        setErrorState({
          isError: true,
          type: "server_offline",
          title: "Koneksi ke Server Terputus",
          message:
            "Aplikasi tidak dapat terhubung ke server backend. Pastikan layanan backend/API sudah dijalankan dan koneksi internet kamu stabil.",
        });
      }
      // 2. Database Error / Internal Server Error (Status 500)
      else if (error.response.status === 500) {
        setErrorState({
          isError: true,
          type: "database_error",
          title: "Masalah pada Server / Database",
          message:
            error.response.data?.message ||
            "Server mengalami masalah internal saat mencoba mengambil data dari database.",
        });
      }
      // 3. Error Lainnya (404, 403, dll)
      else {
        setErrorState({
          isError: true,
          type: "generic",
          title: "Gagal Memuat Data",
          message:
            error.response.data?.message ||
            "Terjadi kesalahan yang tidak diketahui saat memuat data.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  const filteredUsers = data.filter(
    (u) =>
      u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto relative">
      {/* ========================================== */}
      {/* POPUP / MODAL ERROR HANDLING               */}
      {/* ========================================== */}
      {errorState.isError && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 transform transition-all space-y-5">
            {/* Header / Icon */}
            <div className="flex items-center gap-4">
              <div
                className={`p-3.5 rounded-2xl shrink-0 ${
                  errorState.type === "server_offline"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-rose-100 text-rose-600"
                }`}
              >
                {errorState.type === "server_offline" ? (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L5.636 18.364"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg leading-snug">
                  {errorState.title}
                </h3>
                <span className="inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md mt-1">
                  Status:{" "}
                  {errorState.type === "server_offline"
                    ? "Offline"
                    : "Server Error"}
                </span>
              </div>
            </div>

            {/* Pesan Error */}
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              {errorState.message}
            </p>

            {/* Tips Troubleshooting */}
            <div className="space-y-1.5 text-xs text-slate-500 pl-1">
              <p className="font-semibold text-slate-700">
                Langkah Penanganan:
              </p>
              {errorState.type === "server_offline" ? (
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    Cek apakah service Backend (Node.js/Laravel) sudah berjalan.
                  </li>
                  <li>
                    Pastikan port URL API di `.env` frontend sudah sesuai.
                  </li>
                </ul>
              ) : (
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    Pastikan Database (MySQL/PostgreSQL) dalam status *Running*.
                  </li>
                  <li>Periksa kredensial DB pada file `.env` milik backend.</li>
                </ul>
              )}
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={handleGetUsers}
                disabled={loading}
                className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-50 text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-indigo-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Menghubungkan...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Coba Hubungi Lagi
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 1. WELCOME BANNER */}
      <div className="bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 text-white shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Selamat datang kembali,{" "}
            <span className="text-indigo-400">
              {currentUser?.name || currentUser?.email || "Pengguna"}
            </span>
            ! 👋
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Berikut adalah ringkasan data dan aktivitas pengguna sistem hari
            ini.
          </p>
        </div>
        <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold rounded-lg capitalize shrink-0">
          Role: {currentUser?.role || "User"}
        </span>
      </div>

      {/* 2. DAFTAR PENGGUNA CONTAINER */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {/* Toolbar Header */}
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="font-bold text-slate-800 text-lg">
              Daftar Pengguna Sistem
            </h2>
            <p className="text-xs text-slate-400">
              Kelola akun dan informasi profil pengguna terdaftar
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Cari nama atau email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "table"
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Konten Area Main */}
        <div className="p-6">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-28 bg-slate-100 rounded-2xl"></div>
              ))}
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 font-medium text-sm">
                Tidak ada data pengguna ditemukan.
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredUsers.map((userItem, index) => (
                <div
                  key={userItem.id || index}
                  className="p-5 border border-slate-200/80 rounded-2xl hover:border-indigo-200 transition-all"
                >
                  <h3 className="font-bold text-slate-800">{userItem.name}</h3>
                  <p className="text-xs text-slate-400">{userItem.email}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-slate-200/80">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b text-slate-500 text-xs uppercase font-semibold">
                    <th className="py-3 px-4">Pengguna</th>
                    <th className="py-3 px-4">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((userItem, index) => (
                    <tr
                      key={userItem.id || index}
                      className="border-b last:border-none"
                    >
                      <td className="py-3 px-4 font-semibold text-slate-800">
                        {userItem.name}
                      </td>
                      <td className="py-3 px-4 text-slate-500">
                        {userItem.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
