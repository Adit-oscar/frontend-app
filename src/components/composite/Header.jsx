import Avatar from "../ui/Avatar";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-[#0d1117] border-b border-[#30363d] px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Brand & Search */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 16 16"
            version="1.1"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
          </svg>
          <span className="hidden sm:inline-block text-sm font-semibold bg-[#21262d] px-2.5 py-1 rounded-md border border-[#30363d] text-slate-300">
            Dashboard
          </span>
        </div>

        {/* Global Search Input */}
        <div className="relative hidden md:block w-64">
          <input
            type="text"
            placeholder="Type '/' to search..."
            className="w-[#21262d] focus:w-full bg-[#010409] text-xs text-slate-200 placeholder-slate-500 rounded-md px-3 py-1.5 border border-[#30363d] focus:outline-none focus:border-blue-500 transition-all duration-200"
          />
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <Avatar
            src={user?.profile_picture}
            fallback={user?.name || user?.email}
            size="sm"
          />
          <span className="text-xs font-medium text-slate-200 hidden sm:inline-block">
            {user?.name || user?.username || "User"}
          </span>
        </div>

        <button
          onClick={logout}
          className="text-xs px-3 py-1.5 bg-[#21262d] hover:bg-[#30363d] text-slate-300 hover:text-white rounded-md border border-[#30363d] transition-colors font-medium"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
