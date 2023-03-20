import React from 'react'
import type { FC, ReactNode } from 'react'
import { HomeAsideContainer } from './style'
import MyCard from './MyCard'
import TagsList from './TagsList'
import CategoriesList from './CategoriesList'
interface Iprops {
  children?: ReactNode
  className: string
}

const HomeAside: FC<Iprops> = ({ className }) => {
  return (
    <HomeAsideContainer className={className}>
      <MyCard />
      <TagsList />
      <CategoriesList />
    </HomeAsideContainer>
  )
}
export default HomeAside
