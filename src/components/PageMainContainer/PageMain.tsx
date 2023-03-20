import React from 'react'
import type { FC, ReactNode } from 'react'
interface Iprops {
  children?: ReactNode
}

const PageMain: FC<Iprops> = ({ children }) => {
  return <div className="aside">{children}</div>
}
export default PageMain
