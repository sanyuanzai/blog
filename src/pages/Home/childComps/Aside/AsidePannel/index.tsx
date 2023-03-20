import React, { useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { TagListContainer } from './style'
import { MyIcon } from '@/components/Icon'
interface Iprops {
  title: string
  icontype: string
  children?: ReactNode
}

const AsidePannel: FC<Iprops> = ({ title, icontype, children }) => {
  console.log(children)
  return (
    <TagListContainer>
      <div className="title">
        <h3>
          <MyIcon type={icontype} />
          <span> {title}</span>
        </h3>
      </div>
      <div className="content">{children}</div>
    </TagListContainer>
  )
}
export default AsidePannel
