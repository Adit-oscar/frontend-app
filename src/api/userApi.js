import api from "./axiosInstance";

export const getAllUser = async () => {
  const response = await api.get("/users");

  return response.data;
};
