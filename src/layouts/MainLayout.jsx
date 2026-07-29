import { Outlet } from "react-router-dom";
import ThemeBackground from "../components/common/theme/ThemeBackground";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans antialiased relative selection:bg-indigo-500/30 selection:text-indigo-200">
      <ThemeBackground />

      <Outlet />
    </div>
  );
}
