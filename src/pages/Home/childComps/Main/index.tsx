import React, { useState } from 'react'
import type { FC, ReactNode } from 'react'
import { CardContainer } from '@/components/MainContainer'
import { HomeMainContainer } from './style'
import { getArticle } from '@/api'
import { useMount } from '@/utils/hooks/useMount'
import { ArticlesProps } from '@/api/request/dataTypes'
import { ArticleCard } from './ArticleCard'
import { useNavigate } from 'react-router-dom'

interface Iprops {
  children?: ReactNode
  className: string
}
const HomeMain: FC<Iprops> = ({ className }) => {
  const navigate = useNavigate()

  const [articles, setArticles] = useState<ArticlesProps[]>()
  useMount(() => {
    getArticle({ url: '/articles' }).then((data) => setArticles(data.data))
  })
  function ArticleDetailHandler(id: number) {
    navigate(`/post/${id}`)
  }
  return (
    <HomeMainContainer className={className}>
      {articles?.map((article) => (
        <CardContainer
          key={article.id}
          onClick={() => ArticleDetailHandler(article.id)}
        >
          <ArticleCard article={article} />
        </CardContainer>
      ))}
    </HomeMainContainer>
  )
}

export default HomeMain
