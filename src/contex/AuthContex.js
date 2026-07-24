import { createContext, useState } from "react";
import {
  getStoredToken,
  removeStoredToken,
  setStoredToken,
} from "../utils/storage";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(getStoredToken());

  const login = (newToken) => {
    setStoredToken(newToken);
    setToken(newToken);
  };

  const logout = () => {
    removeStoredToken();
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
