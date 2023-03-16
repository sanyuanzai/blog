import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import { BASE_URL, TIME_OUT } from '../config'
import { resolve } from 'path'

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
    return this.instance.request<T>(config)
  }
  get<T>(config: AxiosRequestConfig) {
    return this.instance.request<T>({ ...config, method: 'GET' })
  }
}

export default new QZRequest({ baseURL: BASE_URL, timeout: TIME_OUT })
