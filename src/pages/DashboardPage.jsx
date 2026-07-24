export default function Dashboard() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState(""); // State tambahan untuk pesan error

  // useEffect(() => {
  //   const handleGetUsers = async () => {
  //     try {
  //       setErrorMessage(""); // Reset error setiap kali fetch
  //       const response = await api.get("/users");

  //       // Perbaikan utama: simpan response.data (bukan response)
  //       setData(response.data.data || []);
  //     } catch (error) {
  //       console.error("Gagal mengambil data user:", error);

  //       // Tangkap pesan error dari backend jika ada
  //       const message =
  //         error.response?.data?.message || "Gagal memuat data pengguna.";
  //       setErrorMessage(message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   handleGetUsers();
  // }, []);

  return (
    <div>
      <h1>Halaman Dashboard</h1>
    </div>
    // <div className="min-h-screen w-screen bg-blue-300 flex flex-col justify-center items-center p-4">
    //   <h4 className="text-xl font-bold mb-4">Halaman Dashboard</h4>

    //   {loading ? (
    //     <p className="text-gray-700 font-medium">Memuat data...</p>
    //   ) : errorMessage ? (
    //     /* UI Tampilan Error */
    //     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md w-full text-center">
    //       <p className="font-semibold">{errorMessage}</p>
    //     </div>
    //   ) : (
    //     /* UI Tampilan Data Sukses */
    //     <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
    //       <h5 className="font-semibold mb-2">Daftar Pengguna:</h5>
    //       {data.length === 0 ? (
    //         <p className="text-gray-500 text-sm">Tidak ada data pengguna.</p>
    //       ) : (
    //         <ul className="list-disc pl-5 space-y-1">
    //           {data.map((user, index) => (
    //             <div
    //               key={index}
    //               className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center w-full max-w-xs"
    //             >
    //               {/* Container Gambar Avatar */}
    //               <div className="relative mb-4">
    //                 <img
    //                   src={user.profile_picture}
    //                   alt={user.name}
    //                   className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-inner"
    //                 />
    //                 {/* Indikator Online (Opsional) */}
    //                 <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
    //               </div>

    //               {/* Nama & Email */}
    //               <h3 className="text-lg font-bold text-gray-800 tracking-tight leading-snug">
    //                 {user.name || "Tanpa Nama"}
    //               </h3>
    //               {user.email && (
    //                 <p className="text-xs text-gray-400 mb-3">{user.email}</p>
    //               )}

    //               {/* Badge Role */}
    //               <span
    //                 className={
    //                   "px-3 py-1 text-xs font-semibold rounded-full border capitalize"
    //                 }
    //               >
    //                 {user.role || "User"}
    //               </span>
    //             </div>
    //           ))}
    //         </ul>
    //       )}
    //     </div>
    //   )}
    // </div>
  );
}
