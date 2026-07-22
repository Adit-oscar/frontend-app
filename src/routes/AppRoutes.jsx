import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/auth";
import Login from "../pages/auth/LoginPage";
import Register from "../pages/auth/RegisterPage";
import ErrorPage from "../pages/ErrorPage";

export const routers = createBrowserRouter([
  // KELOMPOK UTAMA (Butuh Login)
  // {
  //   path: "/",
  //   element: <Layout />, // 1. Cek login dulu di sini
  //   errorElement: <NotFound />,
  //   children: [
  //     {
  //       element: <Layout />, // 2. Jika lolos login, baru muat layout utama (Navbar, Sidebar)
  //       children: [
  //         {
  //           index: true,
  //           element: <Dashboard />, // Halaman utama dashboard (Semua user login bisa lihat)
  //         },
  //         // CONTOH KELOMPOK KHUSUS ADMIN (Misal: Manajemen User)
  //         {
  //           path: "users",
  //           element: <AdminRoute />, // Cek apakah dia ADMIN
  //           children: [
  //             {
  //               index: true,
  //               element: <UserList />, // Akses ke getAllUsers (Hanya Admin)
  //             },
  //             {
  //               path: "create",
  //               element: <UserCreate />, // Akses ke createUser (Hanya Admin)
  //             },
  //             {
  //               path: "edit/:id",
  //               element: <UserEdit />, // Akses ke updateUser (Hanya Admin)
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },

  // KELOMPOK AUTENTIKASI (Terpisah dari Layout Utama)
  {
    path: "/auth",
    element: <Login />, // Bersih tanpa Navbar/Sidebar utama aplikasi
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // HALAMAN ERROR / NOT FOUND GLOBAL
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
