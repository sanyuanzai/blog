import React from 'react'
import type { FC, ReactNode } from 'react'
import { PageMainContainer } from './style'
import PageMain from './PageMain'
import PageAside from './PageAside'
interface Iprops {
  children?: ReactNode
}

const Home: FC<Iprops> = () => {
  return (
    <PageMainContainer>
      <div className="content_container">
        <PageMain />
        <PageAside />
      </div>
    </PageMainContainer>
  )
}
export default Home
