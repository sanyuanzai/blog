import QZRequest from './request'
import type { AxiosRequestConfig } from 'axios'
import { BASE_URL, TIME_OUT } from './config'

export const qzRequest = new QZRequest({ baseURL: BASE_URL, timeout: TIME_OUT })
export function getArticle<T>() {
  return qzRequest.get<T[]>({ url: './articles' })
}
export function getTaglist<T>() {
  return qzRequest.get<T[]>({ url: './tags' })
}
export function getCategorielist<T>() {
  return qzRequest.get<T[]>({ url: './categories' })
}
