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
  post_id: number
  replies: ReplyProps[]
}
export interface ReplyProps {
  id: number
  toUserName: string
  nickname: string
  content: string
  url?: string
  email: string
  toReplyId: number
  comment: any
  createdAt: string
}
export interface VisitorInfoProps {
  id: number
  nickname: string
  url: string
  email: string
  createdAt: string
}
