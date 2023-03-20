import React from 'react'
import type { FC, ReactNode } from 'react'
import { CardContainer } from '@/components/CardContainer'
import { HomeMainContainer } from './style'
import { ArticleCard } from './ArticleCard'
import { useAppDispatch } from '@/redux/useStore'
import { getArticles } from '@/api'

interface Iprops {
  children?: ReactNode
  className: string
}
const HomeMain: FC<Iprops> = ({ className }) => {
  const { result: articles, loading, error } = getArticles()
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
