import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/auth"; // Layout impor digunakan di sini
import Login from "../pages/auth/LoginPage";
import Register from "../pages/auth/RegisterPage";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/DashboardPage";
import OauthSuccess from "../pages/auth/OauthSuccess";

export const routers = createBrowserRouter([
  // HALAMAN DASHBOARD / UTAMA
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  // KELOMPOK AUTENTIKASI
  {
    path: "/auth",
    element: <AuthLayout />, // ✅ Menggunakan AuthLayout agar <Outlet /> bekerja
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />, // ✅ Mengarahkan /auth langsung ke /auth/login
      },
      {
        path: "login",
        element: <Login />, // ✅ Diakses via /auth/login
      },
      {
        path: "register",
        element: <Register />, // ✅ Diakses via /auth/register
      },
      {
        path: "oauth-success",
        element: <OauthSuccess />,
      },
    ],
  },

  // HALAMAN ERROR / NOT FOUND GLOBAL
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
