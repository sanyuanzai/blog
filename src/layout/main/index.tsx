import React, { Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import { MainContainer } from './style'
import routes from '../../routes'
interface Iprops {
  children?: ReactNode
}

const Main: FC<Iprops> = () => {
  return (
    <Suspense fallback={'loadding...'}>
      <MainContainer>{useRoutes(routes)}</MainContainer>
    </Suspense>
  )
}
export default Main
