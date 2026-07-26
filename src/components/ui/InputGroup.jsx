export const InputGroup = ({ icon: Icon, rightAction, ...inputProps }) => {
  return (
    <div className="flex items-center bg-slate-950/40 border border-white/10 rounded-xl overflow-hidden focus-within:border-indigo-500/80 focus-within:ring-1 focus-within:ring-indigo-500/80 transition-all">
      {/* Icon Kiri */}
      {Icon && (
        <span className="pl-3.5 pr-1 text-slate-400 shrink-0 flex items-center justify-center">
          <Icon className="w-4 h-4" />
        </span>
      )}

      {/* Input Field */}
      <input
        className="w-full py-2.5 px-3 bg-transparent text-slate-200 placeholder-slate-500 text-sm focus:outline-none"
        {...inputProps}
      />

      {/* Tombol Aksi Kanan (misal: Toggle Password / Show-Hide) */}
      {rightAction && (
        <div className="pr-3 shrink-0 flex items-center">{rightAction}</div>
      )}
    </div>
  );
};
