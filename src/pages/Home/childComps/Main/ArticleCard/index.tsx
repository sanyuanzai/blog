import React from 'react'
import type { FC } from 'react'
import { ArticlesProps } from '@/redux/dataTypes'
import { ArticleCardContainer } from './styled'
import { MyIcon } from '@/components/Icon'
interface Iprops {
  article: ArticlesProps
}

export const ArticleCard: FC<Iprops> = ({ article }) => {
  const { title, createdAt, tag, categories_id, content, id } = article
  return (
    <ArticleCardContainer>
      <h3 className="title">{title}</h3>
      <div className="date">
        <MyIcon type="icon-calendar" style={{ width: '1rem' }} />
        <span id="postdate"> Posted On {createdAt}</span>
      </div>
      <p className="text">{content}</p>
      <div className="desc">
        <span id="__">Posted in</span>
        <span id="categore">{categories_id} </span>
        <span id="tag"> {tag}</span>
      </div>
    </ArticleCardContainer>
  )
}
