import QZRequest from './request'
import { BASE_URL, TIME_OUT } from './config'
import {
  ArticlesProps,
  CategoriesProps,
  ConmentProps,
  ReplyProps,
  TagListProps,
  VisitorInfoProps
} from '@/api/dataTypes'

export const qzRequest = new QZRequest({ baseURL: BASE_URL, timeout: TIME_OUT })
export function getArticles() {
  return qzRequest.get<ArticlesProps[]>({ url: './articles' })
}
export function getArticleById(id: string) {
  return qzRequest.get<ArticlesProps>({
    url: `./articles/${id}`
  })
}
export function getTaglist() {
  return qzRequest.get<TagListProps[]>({ url: './tags' })
}
export function getCategorielist() {
  return qzRequest.get<CategoriesProps[]>({ url: './categories' })
}
export function getCategorieById(id: string) {
  return qzRequest.get<CategoriesProps>({
    url: `./categories/${id}`
  })
}

export function getComment() {
  return qzRequest.get<ConmentProps[]>({ url: './conments' })
}
export function postComment(param: Partial<ConmentProps>) {
  return qzRequest.post<any>({
    url: './conments',
    params: { param }
  })
}
export function getReply() {
  return qzRequest.get<ReplyProps[]>({ url: './comments' })
}
export function postReply(param: ReplyProps) {
  return qzRequest.post<Partial<ReplyProps>[]>({
    url: './comments',
    params: { param }
  })
}
export function getVistorsInfo() {
  return qzRequest.get<VisitorInfoProps[]>({ url: './visitors' })
}
export function postVistorInfo() {
  return qzRequest.post<VisitorInfoProps>({ url: './visitors' })
}
