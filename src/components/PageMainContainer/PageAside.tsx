import React from 'react'
import type { FC, ReactNode } from 'react'
interface Iprops {
  children?: ReactNode
}

const PageAside: FC<Iprops> = ({ children }) => {
  return <div className="main">{children}</div>
}
export default PageAside
