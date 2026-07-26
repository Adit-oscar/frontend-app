export const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center transition-all duration-200 font-semibold text-xs rounded-xl active:scale-[0.98] cursor-pointer";

  const variants = {
    // Gradien dibuat diagonal (to-br) + penambahan efek backdrop-blur khas glassmorphism
    primary:
      "bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 hover:opacity-90 text-white px-6 py-3 shadow-lg shadow-indigo-500/25 border border-white/20 backdrop-blur-md",

    // Google Button dikuatkan efek glassmorphism-nya
    google:
      "w-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 backdrop-blur-md overflow-hidden py-2.5 px-4 shadow-sm",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
