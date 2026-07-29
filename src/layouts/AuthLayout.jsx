import { FaCode } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
      {/* GLASS CONTAINER CARD */}
      <div className="w-full max-w-md backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-indigo-950/50 transition-all">
        {/* Header Branding / Logo Global */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl shadow-lg shadow-indigo-500/30 mb-4">
            <FaCode className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mt-3">
            Nama Aplikasi
          </h1>
        </div>

        {/* Dynamic Form Content (Login / Register / Forgot Password) */}
        <Outlet />
      </div>
    </div>
  );
}
