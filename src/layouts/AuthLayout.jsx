import { Outlet } from "react-router-dom";
import { FaCode } from "react-icons/fa6";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans antialiased flex items-center justify-center p-4 relative overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* ========================================== */}
      {/* BACKGROUND GLOWS (Efek Glassmorphism)     */}
      {/* ========================================== */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] bg-indigo-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Pattern Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* ========================================== */}
      {/* GLASS CONTAINER CARD                       */}
      {/* ========================================== */}
      <div className="w-full max-w-md backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-indigo-950/50 relative z-10 transition-all">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl shadow-lg shadow-indigo-500/30 mb-4">
            <FaCode className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Nama Aplikasi
          </h1>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Selamat datang, silakan masuk ke akun Anda
          </p>
        </div>

        {/* Dynamic Content (LoginPage / RegisterPage) */}
        <Outlet />
      </div>
    </div>
  );
};
