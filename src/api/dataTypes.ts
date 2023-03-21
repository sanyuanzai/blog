export interface ArticlesProps {
  title: string
  author: string
  tag: string
  post_date: string
  categories_id: number
  createdAt: string
  content: string
  id: number
}
export interface TagListProps {
  name: string
  id: number
}
export interface CategoriesProps {
  name: string
  article_id: any //修改
  id: number
}
export interface ConmentProps {
  id: number
  nickname: string
  email: string
  content: string
  link?: string
  createdAt: string
}
export interface ReplyProps {
  id: number
  toUserName: string
  nickname: string
  content: string
  url?: string
  email: string
  toReplyId: number
  to_conment_id: any
  createdAt: string
}
export interface VisitorInfoProps {
  id: number
  nickname: string
  url: string
  email: string
  createdAt: string
}
