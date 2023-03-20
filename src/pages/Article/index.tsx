import React from 'react'
import type { FC, ReactNode } from 'react'
import { PageMainContainer } from '@/components/PageMainContainer/style'
import RouteLink from '@/components/RouteLink'
interface Iprops {
  children?: ReactNode
}

const Article: FC<Iprops> = () => {
  return (
    <>
      <RouteLink
        secondLink={{ name: 'Blog', link: '/post' }}
        thirdLink={{ name: 'title', link: '/post/1' }}
      />
      <PageMainContainer>Article</PageMainContainer>
    </>
  )
}
export default Article
