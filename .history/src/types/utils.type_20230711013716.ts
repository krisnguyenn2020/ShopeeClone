import { AuthResponse } from "./auth.type";

export interface ResponseApi<Data> {
  message: string;
  data?: Data
}
export interface ErrorResponse<Data> {
  message: string;
  errors?: Data
}