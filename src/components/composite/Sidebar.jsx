import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navigation = [
    { name: "Overview", to: "/dashboard", icon: "📊" },
    { name: "Repositories / Data", to: "/dashboard/items", icon: "📦" },
    { name: "Settings", to: "/dashboard/settings", icon: "⚙️" },
  ];

  return (
    <aside className="w-full md:w-64 bg-[#0d1117] border-r border-[#30363d] p-4 flex flex-col justify-between shrink-0">
      <div className="space-y-6">
        <div>
          <p className="px-3 text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Menu Utama
          </p>
          <nav className="space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-[#1f6feb] text-white"
                      : "text-slate-400 hover:text-slate-200 hover:bg-[#161b22]"
                  }`
                }
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* System Status Footer */}
      <div className="pt-4 border-t border-[#30363d] text-[11px] text-slate-500 flex items-center justify-between px-2">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          System Normal
        </span>
        <span>v1.0.0</span>
      </div>
    </aside>
  );
}
