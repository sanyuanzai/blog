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
import { useMutation, useQuery } from 'react-query'
import { useAddConfig } from '@/utils/hooks/use-optimistic-optins'
import { AxiosResponse } from 'axios'

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

export function useComments() {
  return useQuery(['/conments?populate=*'], () =>
    qzRequest.instance
      .get<any, AxiosResponse<ConmentProps[]>>('/conments?populate=*')
      .then((res) => res.data)
  )
}
export function usePostComment() {
  return useMutation(
    (data: Partial<ConmentProps>) =>
      qzRequest.instance.post('./conments', { data: data }),
    useAddConfig('/conments?populate=*')
  )
}
export function useReply() {
  return useQuery(['/comments?populate=*'], () =>
    qzRequest.instance
      .get<any, AxiosResponse<ReplyProps[]>>('/comments?populate=*')
      .then((res) => res.data)
  )
}
export function usePostReply() {
  return useMutation(
    (data: Partial<ReplyProps>) =>
      qzRequest.instance.post('/comments', { data: data }),
    useAddConfig('/comments?populate=*')
  )
}
// export function getReply() {
//   return qzRequest.get<ReplyProps[]>({ url: './comments?populate=*' })
// }
// export function postReply(data: Partial<ReplyProps>) {
//   return qzRequest.instance.post<Partial<ReplyProps>[]>('./comments', {
//     data: data
//   })
// }
export function getVistorsInfo() {
  return qzRequest.get<VisitorInfoProps[]>({ url: './visitors' })
}
export function postVistorInfo() {
  return qzRequest.post<VisitorInfoProps>({ url: './visitors' })
}
