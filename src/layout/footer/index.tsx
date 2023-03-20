import React from 'react'
import type { FC, ReactNode } from 'react'
import { FooterContainer } from './style'
interface Iprops {
  children?: ReactNode
}

const Footer: FC<Iprops> = () => {
  return (
    <FooterContainer>
      <p>@2023-2024 By 三原仔</p>
    </FooterContainer>
  )
}
export default Footer
