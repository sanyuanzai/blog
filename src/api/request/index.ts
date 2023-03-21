import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import { useState } from 'react'
import { useMount } from '@/utils/hooks/useMount'

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
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const [result, setResult] = useState<T | null>(null)
    useMount(() => {
      setLoading(true)
      this.instance
        .request(config)
        .then((res) => setResult(res.data))
        .catch(setError)
        .finally(() => setLoading(false))
    })
    return { loading, error, result }
  }
  get<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'POST' })
  }
}

export default QZRequest
