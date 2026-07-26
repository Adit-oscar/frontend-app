export const Checkbox = ({ label, ...props }) => {
  return (
    <label className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-300 cursor-pointer select-none transition-colors">
      <input
        type="checkbox"
        className="w-4 h-4 rounded border-white/10 bg-slate-950/50 text-indigo-500 focus:ring-indigo-500/40 focus:ring-offset-0 transition-all cursor-pointer accent-indigo-500"
        {...props}
      />
      <span>{label}</span>
    </label>
  );
};
