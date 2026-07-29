import React from "react";

export const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) => {
  // Styling dasar universal (tanpa ukuran padding/rounded yang kaku)
  const baseStyles =
    "flex items-center justify-center transition-all duration-200 font-semibold text-xs active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 select-none";

  const variants = {
    // Varian Utamanya (Primary Indigo-Purple)
    primary:
      "bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-xl shadow-lg shadow-indigo-500/25 border border-white/20 backdrop-blur-md",

    // Varian Google Glassmorphism
    google:
      "w-full bg-gradient-to-r from-[#EA4335]/45 via-[#FF6B00]/45 to-[#FBBC05]/45 hover:from-[#EA4335]/35 hover:via-[#FF6B00]/35 hover:to-[#FBBC05]/35 text-white border border-orange-400/40 backdrop-blur-md overflow-hidden py-2.5 px-4 rounded-xl shadow-lg shadow-red-500/15 hover:shadow-orange-500/25 transition-all duration-200",

    // Varian Secondary (Glassmorphism Neutral)
    secondary:
      "bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 backdrop-blur-md px-5 py-2.5 rounded-xl shadow-sm",

    // Varian Ghost / Minimalis
    ghost:
      "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white px-4 py-2 rounded-xl",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
