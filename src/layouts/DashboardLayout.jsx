import { Outlet } from "react-router-dom";
import Header from "../components/composite/Header";
import Sidebar from "../components/composite/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 flex flex-col font-sans">
      {/* Top Bar */}
      <Header />

      {/* Body Area */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 bg-[#010409] p-4 sm:p-6 md:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
