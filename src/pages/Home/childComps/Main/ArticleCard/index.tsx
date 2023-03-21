import React from 'react'
import type { FC } from 'react'
import { ArticlesProps } from '@/api/dataTypes'
import { ArticleCardContainer } from './styled'
import { MyIcon } from '@/components/Icon'
import { useNavigate } from 'react-router-dom'
import { PostDate } from '@/components/lib'
interface Iprops {
  article: ArticlesProps
}

export const ArticleCard: FC<Iprops> = ({ article }) => {
  const { title, createdAt, tag, categories_id, content, id } = article
  const navigate = useNavigate()
  return (
    <ArticleCardContainer>
      <h3 className="title" onClick={() => navigate(`/post/${id}`)}>
        {title}
      </h3>
      <PostDate createdAt={createdAt} />
      <p className="text">{content}</p>
      <div className="desc">
        <span id="__">Posted in</span>
        <span id="categore">{categories_id} </span>
        <span id="tag"> {tag}</span>
      </div>
    </ArticleCardContainer>
  )
}
