export default function Avatar({ src, alt, size = "md", fallback = "U" }) {
  const sizeClasses = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };

  return (
    <div
      className={`relative inline-block rounded-full overflow-hidden bg-slate-700 border border-slate-600 flex items-center justify-center font-semibold text-slate-200 ${sizeClasses[size]}`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span>{fallback?.charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
}
