import React from 'react'
import type { FC, ReactNode } from 'react'
import AsidePannel from '../AsidePannel'
import { AsideContentContainer } from '../CategoriesList/style'
import { useAppSelector } from '@/redux/useStore'
import { getTaglist } from '@/api'
interface Iprops {
  children?: ReactNode
}
const Content: FC = () => {
  const { result: tags, error, loading } = getTaglist()
  return (
    <AsideContentContainer column={'column'}>
      {tags?.map((tag) => (
        <div key={tag.id}>
          <p>{tag.name}</p>
        </div>
      ))}
    </AsideContentContainer>
  )
}
const TagsList: FC<Iprops> = () => {
  return (
    <AsidePannel title="Tags" icontype="icon-tags-fill">
      <Content />
    </AsidePannel>
  )
}
export default TagsList
