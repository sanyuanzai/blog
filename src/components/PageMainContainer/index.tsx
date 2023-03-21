import React from 'react'
import type { FC, ReactNode } from 'react'
import { PageMainContainer } from './style'
interface Iprops {
  children?: ReactNode
}

const PageMain: FC<Iprops> = ({ children }) => {
  return (
    <PageMainContainer>
      <div className="content_container">{children}</div>
    </PageMainContainer>
  )
}
export default PageMain
