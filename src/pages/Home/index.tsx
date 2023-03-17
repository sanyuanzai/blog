import React from 'react'
import type { FC, ReactNode } from 'react'
import { HomeContainer } from './style'
import HomeMain from './childComps/Main'
import HomeAside from './childComps/Aside'
interface Iprops {
  children?: ReactNode
}

const Home: FC<Iprops> = () => {
  return (
    <HomeContainer>
      <div className="content_container">
        <HomeMain className="main" />
        <HomeAside className="aside" />
      </div>
    </HomeContainer>
  )
}
export default Home
