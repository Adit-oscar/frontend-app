import { createContext, useState, useEffect, useCallback } from "react";
import { storage } from "../utils/storage";
import { authApi } from "../api/authApi";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(storage.getToken());
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Menggunakan useCallback agar referensi fungsi stabil
  const fetchMe = useCallback(async () => {
    const currentToken = storage.getToken();
    if (!currentToken) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await authApi.getMe(); // Endpoint profil pengguna
      setUser(response.data.data || response.data);
    } catch (error) {
      console.error("Gagal mengambil data profil:", error);
      // Jika token tidak valid / expired, bersihkan state

      const status = error.response?.status;

      // HANYA hapus token jika respons server adalah 401 (Unauthorized) atau 403 (Forbidden)
      if (status === 401 || status === 403) {
        console.warn(
          "Token tidak valid atau telah kadaluarsa. Menghapus sesi...",
        );
        storage.removeToken();
        setToken(null);
        setUser(null);
      } else {
        // JIKA Network Error (Server Offline) atau Status 500 (DB Error):
        // TOKEN TETAP DIPERTANKAN di storage/state!
        console.warn(
          "Server/Database bermasalah atau tidak terhubung. Sesi login tetap dipertahankan.",
        );
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Ambil data profil saat pertama kali dikunjungi atau jika token berubah
  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const login = async (newToken) => {
    storage.setToken(newToken);
    setToken(newToken);
    await fetchMe(); // Ambil profil user segera setelah login
  };

  const logout = () => {
    storage.removeToken();
    setToken(null);
    setUser(null);
  };

  const value = {
    token,
    user,
    loading,
    isAuthenticated: Boolean(token),
    login,
    logout,
    fetchMe, // Disalurkan agar komponen lain bisa refetch jika diperlukan
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
