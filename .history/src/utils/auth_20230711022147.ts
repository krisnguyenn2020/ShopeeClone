export const saveAccessTokenToLS = (accessToken: string) => { // 1
  localStorage.setItem("accessToken", accessToken);
}

export const clearAccessTokenFromLS = () => { // 2
  localStorage.removeItem("accessToken");
}
export const getAccessTokenFromLS = () => { // 3
  return localStorage.getItem("accessToken") || "";
}
export const isLoggedIn = () => { // 4
  return !!getAccessTokenFromLS();
}