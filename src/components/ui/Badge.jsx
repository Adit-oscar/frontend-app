export default function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-slate-800 text-slate-300 border-slate-700",
    success: "bg-emerald-950/60 text-emerald-400 border-emerald-800/60",
    blue: "bg-blue-950/60 text-blue-400 border-blue-800/60",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full border ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
