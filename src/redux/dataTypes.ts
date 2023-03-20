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
