import React from 'react'
import type { FC } from 'react'
import { ArticlesProps } from '@/api/request/dataTypes'
import { ArticleCardContainer } from './styled'
interface Iprops {
  article: ArticlesProps
}

export const ArticleCard: FC<Iprops> = ({ article }) => {
  const { title, createdAt, tag, categories_id, content, id } = article
  return (
    <ArticleCardContainer>
      <h2 className="title">{title}</h2>
      <div className="desc">
        <span>{createdAt}</span>
        <span>{categories_id}</span>
        <span>{tag}</span>
      </div>
      <div className="text">{content}</div>
    </ArticleCardContainer>
  )
}
