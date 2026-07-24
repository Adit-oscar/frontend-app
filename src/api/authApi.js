import api from "./axiosInstance";

export const redirectToGoogleAuth = (e) => {
  const baseUrl = api.defaults.baseURL;

  window.location.href = `${baseUrl}/auth/google`;
};
