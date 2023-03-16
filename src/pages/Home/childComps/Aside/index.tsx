import React from 'react'
import type { FC, ReactNode } from 'react'
import { CardContainer } from '../../../../components/MainContainer'
import { HomeAsideContainer } from './style'
interface Iprops {
  children?: ReactNode
  className: string
}

const HomeAside: FC<Iprops> = ({ className }) => {
  return (
    <HomeAsideContainer className={className}>
      <CardContainer>content</CardContainer>
      <CardContainer>content</CardContainer>
      <CardContainer>content</CardContainer>
    </HomeAsideContainer>
  )
}
export default HomeAside
