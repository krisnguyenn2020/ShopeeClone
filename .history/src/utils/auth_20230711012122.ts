export const saveAccessTokenToLS = (accessToken: string) => { // 1
  localStorage.setItem("accessToken", accessToken);
}

export const clearAccessTokenFromLS = () => { // 2
  localStorage.removeItem("accessToken");
}