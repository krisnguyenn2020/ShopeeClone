export const saveAccessTokenToLS = (accessToken: string) => { // 1
  localStorage.setItem("accessToken", accessToken);
}

export const clearAccessTokenFromLS = () => { // 2
  localStorage.removeItem("accessToken");
}
export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''
export const isLoggedIn = () => { // 4
  return !!getAccessTokenFromLS();
}