import QZRequest from './request'
import { BASE_URL, TIME_OUT } from './config'
import {
  ArticlesProps,
  CategoriesProps,
  CommentProps,
  TagListProps
} from '@/redux/dataTypes'

export const qzRequest = new QZRequest({ baseURL: BASE_URL, timeout: TIME_OUT })
export function getArticles() {
  return qzRequest.get<ArticlesProps[]>({ url: './articles' })
}
export function getArticleById(id: string) {
  return qzRequest.get<ArticlesProps>({ url: `./articles/${id}` })
}
export function getTaglist() {
  return qzRequest.get<TagListProps[]>({ url: './tags' })
}
export function getCategorielist() {
  return qzRequest.get<CategoriesProps[]>({ url: './categories' })
}
export function getComment() {
  return qzRequest.get<CommentProps[]>({ url: './comments' })
}
