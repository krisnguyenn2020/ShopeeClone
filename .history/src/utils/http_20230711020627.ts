import axios, { AxiosError, type AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import HttpStatusCode from 'src/constants/httpStatusCode.enum';
import { AuthResponse } from 'src/types/auth.type';
import { clearAccessTokenFromLS, saveAccessTokenToLS } from './auth';
import { clear } from 'console';

class Http {
  instance: AxiosInstance;
  private accessToken: string
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use((config) => {
      if (this.accessToken && config.headers) {
        config.headers.Authorization = this.accessToken
      }
    })
    // Add a response interceptor
    this.instance.interceptors.request.use(
      (response) => {
        console.log('request', response.)
        const { url } = response
        if (url === '/login' || url === '/register') {
          con
          this.accessToken = (response.data as AuthResponse).data.access_token
          saveAccessTokenToLS(this.accessToken)
        }
        else {
          if (url === '/logout') {
            this.accessToken = ''
            clearAccessTokenFromLS()
          }
        }
        return response
      }
      ,
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          toast.error('Not found')
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          toast.error(message)
        }
        return Promise.reject(error);
      }
    )
  }
}
const http = new Http().instance;

export default http;