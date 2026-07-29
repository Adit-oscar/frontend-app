import React, { useState } from "react";
import {
  FaBagShopping,
  FaMagnifyingGlass,
  FaHeart,
  FaStar,
  FaTruckFast,
  FaShieldCat,
  FaRotateLeft,
  FaCartShopping,
  FaChevronRight,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function GlassECommerceLanding() {
  const [cartCount, setCartCount] = useState(2);

  const products = [
    {
      id: 1,
      name: "CyberHeadset Pro Wireless",
      category: "Audio",
      price: "Rp 1.499.000",
      rating: 4.9,
      badge: "Terlaris",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    },
    {
      id: 2,
      name: "GlassWatch Series X",
      category: "Wearable",
      price: "Rp 2.299.000",
      rating: 4.8,
      badge: "Baru",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    },
    {
      id: 3,
      name: "Mechanical Keyboard RGB",
      category: "Aksesoris",
      price: "Rp 899.000",
      rating: 4.7,
      badge: "Diskon 15%",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
    },
    {
      id: 4,
      name: "Minimalist Ergonomic Mouse",
      category: "Aksesoris",
      price: "Rp 450.000",
      rating: 4.9,
      badge: null,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans antialiased relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* ========================================== */}
      {/* BACKGROUND GLOWS (FIXED VIEWPORT)          */}
      {/* ========================================== */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] max-w-150 h-[50vw] max-h-150 bg-indigo-600/20 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute top-[30%] right-[-5%] w-[45vw] max-w-125 h-[45vw] max-h-125 bg-purple-600/15 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] max-w-175 h-[60vw] max-h-175 bg-blue-600/15 rounded-full blur-[120px] sm:blur-[160px]" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 animate-grid-move bg-size-[32px_32px]"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
            `,
            maskImage: `radial-gradient(ellipse at center, black 40%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, black 40%, transparent 80%)`,
          }}
        />
      </div>

      {/* ========================================== */}
      {/* NAVBAR GLASS (FIXED & RESPONSIVE)          */}
      {/* ========================================== */}
      <nav className="sticky top-2 sm:top-4 z-50 max-w-7xl 2xl:max-w-384 mx-auto px-3 sm:px-6 lg:px-8">
        <div className="backdrop-blur-md bg-white/3 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/40">
          {/* Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-2 sm:p-2.5 bg-linear-to-tr from-indigo-500 to-purple-500 rounded-xl shadow-lg shadow-indigo-500/30">
              <FaBagShopping className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="font-bold text-base sm:text-lg 2xl:text-xl tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-slate-200 to-slate-400">
              Lumina<span className="text-indigo-400">Store</span>
            </span>
          </div>

          {/* Search Bar Input (Tampil dari Tablet / MD) */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl w-60 lg:w-72 2xl:w-96 focus-within:border-indigo-500/50 transition-colors">
            <FaMagnifyingGlass className="text-slate-400 w-3.5 h-3.5" />
            <input
              type="text"
              placeholder="Cari gadget, aksesoris..."
              className="bg-transparent border-none text-xs 2xl:text-sm text-slate-200 placeholder-slate-500 focus:outline-none w-full"
            />
          </div>

          {/* Menu Navigasi (Tampil dari Desktop / LG) */}
          <div className="hidden lg:flex items-center gap-6 2xl:gap-8 text-sm 2xl:text-base text-slate-300 font-medium">
            <a href="#katalog" className="hover:text-white transition-colors">
              Katalog
            </a>
            <a href="#promo" className="hover:text-white transition-colors">
              Promo
            </a>
            <a
              href="#keunggulan"
              className="hover:text-white transition-colors"
            >
              Keunggulan
            </a>
          </div>

          {/* Cart & Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-all">
              <FaCartShopping className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-[9px] sm:text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <Link
              to="/auth/login"
              className="px-3 sm:px-4 py-2 text-xs sm:text-xs 2xl:text-sm font-semibold text-white bg-indigo-600/80 hover:bg-indigo-600 backdrop-blur-sm border border-indigo-400/30 rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95 whitespace-nowrap"
            >
              Masuk / Daftar
            </Link>
          </div>
        </div>
      </nav>

      {/* ========================================== */}
      {/* HERO SECTION                               */}
      {/* ========================================== */}
      <section className="relative scroll-mt-24 pt-10 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 px-4 max-w-7xl 2xl:max-w-384 mx-auto text-center z-10">
        {/* Badge Hero */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-[11px] sm:text-xs 2xl:text-sm font-medium text-indigo-300 mb-6 sm:mb-8 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Koleksi Gadget Masa Kini 2026</span>
        </div>

        {/* Main Headline (Fluid Responsive Typography) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold tracking-tight max-w-5xl 2xl:max-w-6xl mx-auto leading-[1.15] mb-4 sm:mb-6">
          Tingkatkan Gaya Hidup Digital dengan{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-purple-300 to-pink-300">
            Teknologi Premium
          </span>
        </h1>

        <p className="text-xs sm:text-base lg:text-lg 2xl:text-xl text-slate-400 max-w-xl sm:max-w-2xl 2xl:max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
          Temukan berbagai gadget, perangkat audio, dan aksesoris eksklusif
          dengan garansi resmi dan pengiriman gratis ke seluruh Indonesia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 max-w-md sm:max-w-none mx-auto">
          <a
            href="#katalog"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 font-semibold text-xs sm:text-sm 2xl:text-base text-white shadow-xl shadow-indigo-500/25 border border-white/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 group active:scale-95"
          >
            Jelajahi Produk
            <FaChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl backdrop-blur-md bg-white/[0.05] border border-white/10 font-semibold text-xs sm:text-sm 2xl:text-base text-slate-200 hover:bg-white/[0.1] hover:text-white transition-all flex items-center justify-center gap-2">
            <FaWhatsapp className="w-4 h-4 text-emerald-400" />
            Chat CS (Fast Response)
          </button>
        </div>

        {/* Banner Promo Showcase Glass */}
        <div
          id="promo"
          className="max-w-5xl scroll-mt-44 2xl:max-w-6xl mx-auto relative"
        >
          <div className="backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left shadow-2xl shadow-indigo-950/50">
            <div className="space-y-3 max-w-lg">
              <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-500/20">
                Promo Spesial Minggu Ini
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-white leading-tight">
                Diskon Hingga 40% Untuk Perangkat Audio Wireless
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm 2xl:text-base">
                Gunakan kode kupon{" "}
                <span className="text-indigo-300 font-mono font-bold">
                  LUMINA2026
                </span>{" "}
                saat checkout.
              </p>
            </div>
            <button className="w-full md:w-auto shrink-0 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs 2xl:text-sm border border-white/20 transition-all backdrop-blur-md">
              Klaim Kupon Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* KATALOG PRODUK GRID (MULTI-DEVICE LAYOUT) */}
      {/* ========================================== */}
      <section
        id="katalog"
        className="py-12 sm:py-16 px-4 max-w-7xl scroll-mt-24 2xl:max-w-[1536px] mx-auto relative z-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold tracking-tight text-white mb-1.5 sm:mb-2">
              Produk Unggulan
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm 2xl:text-base">
              Pilihan terbaik dengan ulasan tertinggi dari pelanggan kami.
            </p>
          </div>

          {/* Filter Kategori Singkat (Horizontal Scrollable pada HP) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {["Semua", "Audio", "Wearable", "Aksesoris"].map((cat, idx) => (
              <button
                key={idx}
                className={`px-3.5 sm:px-4 py-1.5 rounded-xl text-xs 2xl:text-sm font-medium border whitespace-nowrap transition-all ${
                  idx === 0
                    ? "bg-indigo-600 text-white border-indigo-500"
                    : "bg-white/[0.03] text-slate-400 border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Responsive Grid:
            - Mobile (HP): 1 kolom atau 2 kolom (sm)
            - Tablet (MD): 2 atau 3 kolom
            - Laptop (LG/XL): 4 kolom
            - Layar TV (2XL): 4-5 kolom berkuran presisi
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-indigo-500/40 transition-all hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-44 sm:h-48 lg:h-52 2xl:h-64 w-full overflow-hidden bg-slate-900/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-lg border border-indigo-400/30">
                      {product.badge}
                    </span>
                  )}
                  <button className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/40 backdrop-blur-md text-slate-300 hover:text-rose-400 border border-white/10 transition-colors">
                    <FaHeart className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between text-xs 2xl:text-sm text-slate-400 mb-2">
                    <span>{product.category}</span>
                    <div className="flex items-center gap-1 text-amber-400 font-medium">
                      <FaStar className="w-3 h-3" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-white text-sm sm:text-base 2xl:text-lg mb-2 sm:mb-3 group-hover:text-indigo-300 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-base sm:text-lg 2xl:text-xl font-bold text-slate-100">
                    {product.price}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  onClick={() => setCartCount(cartCount + 1)}
                  className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-indigo-600 text-slate-200 hover:text-white font-medium text-xs 2xl:text-sm border border-white/10 hover:border-indigo-500 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <FaCartShopping className="w-3.5 h-3.5" />+ Keranjang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* KEUNGGULAN TOKO                            */}
      {/* ========================================== */}
      <section
        id="keunggulan"
        className="py-12 sm:py-16 px-4 max-w-7xl 2xl:max-w-[1536px] mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
              <FaTruckFast className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base 2xl:text-lg mb-1">
                Bebas Ongkos Kirim
              </h3>
              <p className="text-slate-400 text-xs 2xl:text-sm leading-relaxed">
                Gratis pengiriman ke seluruh wilayah Jawa & Bali tanpa minimum
                pembelian.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
              <FaShieldCat className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base 2xl:text-lg mb-1">
                Garansi Resmi 100%
              </h3>
              <p className="text-slate-400 text-xs 2xl:text-sm leading-relaxed">
                Semua produk dijamin original dan dilengkapi garansi tukar baru
                selama 30 hari.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0">
              <FaRotateLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base 2xl:text-lg mb-1">
                Kemudahan Pengembalian
              </h3>
              <p className="text-slate-400 text-xs 2xl:text-sm leading-relaxed">
                Proses klaim atau pengembalian barang mudah dilakukan langsung
                via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* FOOTER                                     */}
      {/* ========================================== */}
      <footer className="border-t border-white/10 py-10 sm:py-12 px-4 relative z-10 bg-slate-950/40 backdrop-blur-md mt-12">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-xs 2xl:text-sm text-slate-400">
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <FaBagShopping className="w-4 h-4 text-indigo-400" />
              <span className="font-bold text-sm sm:text-base text-white">
                LuminaStore
              </span>
            </div>
            <p className="leading-relaxed">
              Penyedia gadget dan kebutuhan digital terkini berstandar kualitas
              internasional.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#katalog"
                  className="hover:text-white transition-colors"
                >
                  Semua Produk
                </a>
              </li>
              <li>
                <a href="#promo" className="hover:text-white transition-colors">
                  Promo Spesial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cek Status Pesanan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Dukungan</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-3">
              Ikuti Kami
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs 2xl:text-sm text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} LuminaStore. All rights reserved.</p>
          <p>Dibuat dengan gaya Glassmorphism & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
