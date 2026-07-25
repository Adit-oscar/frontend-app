import { createContext, useState } from "react";
import { storage } from "../utils/storage";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(storage.getToken());

  const login = (newToken) => {
    storage.setToken(newToken);
    setToken(newToken);
  };

  const logout = () => {
    removeStoredToken();
    setToken(null);
  };

  const value = { token, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
