import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'

const QZRequest = class {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.response.use(
      (res) => res.data,
      (err) => err
    )
  }
  request<T = any>(config: AxiosRequestConfig) {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }
  get<T>(config: AxiosRequestConfig) {
    return this.instance.request<T>({ ...config, method: 'GET' })
  }
}

export default QZRequest
