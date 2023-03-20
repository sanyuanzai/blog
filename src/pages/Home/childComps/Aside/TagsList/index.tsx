import React, { useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { getTaglist } from '@/api'
import { TagListProps } from '@/redux/dataTypes'
import AsidePannel from '../AsidePannel'
import { AsideContentContainer } from '../CategoriesList/style'
interface Iprops {
  children?: ReactNode
}
const Content: FC = () => {
  const [tags, setTags] = useState<TagListProps[]>()
  useEffect(() => {
    getTaglist<TagListProps>().then((res) => setTags(res.data))
  }, [])
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
    <AsidePannel title="Favorites" icontype="icon-tags-fill">
      <Content />
    </AsidePannel>
  )
}
export default TagsList
