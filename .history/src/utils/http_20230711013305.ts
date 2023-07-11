import axios, { AxiosError, type AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import HttpStatusCode from 'src/constants/httpStatusCode.enum';

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

    // Add a response interceptor
    this.instance.interceptors.request.use(
      (response) => {
        const { url } = response.config
        if (url ===
          '/login' || url === '/register') {
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