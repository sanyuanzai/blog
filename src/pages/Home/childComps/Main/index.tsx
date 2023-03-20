import React, { useState } from 'react'
import type { FC, ReactNode } from 'react'
import { CardContainer } from '@/components/CardContainer'
import { HomeMainContainer } from './style'
import { getArticle } from '@/api'
import { useMount } from '@/utils/hooks/useMount'
import { ArticlesProps } from '@/redux/dataTypes'
import { ArticleCard } from './ArticleCard'
import { useNavigate } from 'react-router-dom'
import { useRequest } from '@/utils/hooks/useRequest'

interface Iprops {
  children?: ReactNode
  className: string
}
const HomeMain: FC<Iprops> = ({ className }) => {
  const [articles, setArticles] = useState<ArticlesProps[]>()
  useMount(() => {
    getArticle<ArticlesProps>().then((res) => setArticles(res.data))
  })

  return (
    <HomeMainContainer className={className}>
      {articles?.map((article) => (
        <CardContainer key={article.id}>
          <ArticleCard article={article} />
        </CardContainer>
      ))}
    </HomeMainContainer>
  )
}

export default HomeMain
