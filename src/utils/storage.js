const tokenKey = "token";

export const setStoredToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

export const getStoredToken = () => {
  localStorage.getItem(tokenKey);
};

export const removeStoredToken = () => {
  localStorage.removeItem(tokenKey);
};
