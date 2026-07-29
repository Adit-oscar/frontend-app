import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout"; // Layout impor digunakan di sini
import Login from "../pages/auth/LoginPage";
import Register from "../pages/auth/RegisterPage";
import OauthSuccess from "../pages/auth/OauthSuccess";
import DashboardPage from "../pages/dasboard/OverviewPage";
import ErrorPage from "../pages/error/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import LandingPage from "../pages/landing/HomePage";
import MainLayout from "../layouts/MainLayout";

export const routers = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardLayout />, // Wrapper Layout GitHub Theme
            children: [
              {
                index: true,
                element: <DashboardPage />, // Render di <Outlet />
              },
              // Tambahkan sub-halaman dashboard lain di sini
            ],
          },
        ],
      },

      // KELOMPOK AUTENTIKASI
      {
        path: "/auth",
        element: <GuestRoute />, // Pengecekan token ditaruh di sini
        errorElement: <ErrorPage />,
        children: [
          {
            // Bungkus lagi dengan AuthLayout agar tampilan UI tetap terjaga
            element: <AuthLayout />,
            children: [
              {
                index: true,
                element: <Navigate to="login" replace />,
              },
              {
                path: "login",
                element: <Login />,
              },
              {
                path: "register",
                element: <Register />,
              },
              {
                path: "oauth-success",
                element: <OauthSuccess />,
              },
            ],
          },
        ],
      },

      // HALAMAN ERROR / NOT FOUND GLOBAL
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
