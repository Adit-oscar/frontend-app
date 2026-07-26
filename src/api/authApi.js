import api from "./axiosInstance";

export const authApi = {
  login: (credential) => api.post("/auth/login", credential),

  register: (userData) => api.post("/auth/register", userData),

  redirectToGoogleAuth: (e) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }

    const baseUrl = api.defaults.baseURL.replace(/\/$/, "");
    window.location.href = `${baseUrl}/auth/google`;
  },

  getMe: () => api.get("/auth/me"),
};

// export default authApi;
