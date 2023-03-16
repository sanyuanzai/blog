import qzRequest from './request'
import type { AxiosRequestConfig } from 'axios'
import { ArticlesProps } from './request/dataTypes'

export function getArticle(config: AxiosRequestConfig) {
  return qzRequest.get<ArticlesProps[]>(config)
}
