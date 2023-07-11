import { AuthResponse } from "src/types/auth.type"
import http from "src/utils/http"

export const registerAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>('/register', body)
// Compare this snippet from ShopeeClone/src/apis/auth.api.ts:

export const login = (body: { email: string; password: string }) =>
  http.post<AuthResponse>('/login', body)
