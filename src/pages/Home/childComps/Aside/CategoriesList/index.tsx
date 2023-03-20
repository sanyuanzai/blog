import React, { useState } from 'react'
import type { FC, ReactNode } from 'react'
import { getCategorielist } from '@/api'
import { CategoriesProps } from '@/redux/dataTypes'
import { useMount } from '@/utils/hooks/useMount'
import AsidePannel from '../AsidePannel'
import { AsideContentContainer } from './style'
interface Iprops {
  children?: ReactNode
}

const CategoriesList: FC<Iprops> = () => {
  return (
    <AsidePannel
      title={'Categories'}
      icontype={'icon-kufangguanli-danganguanli'}
    >
      <Content />
    </AsidePannel>
  )
}
export default CategoriesList
const Content: FC = () => {
  const [categories, setCategories] = useState<CategoriesProps[]>()
  useMount(() => {
    getCategorielist<CategoriesProps>().then((res) => {
      setCategories(res.data)
    })
  })
  return (
    <AsideContentContainer onColorChange={true}>
      {categories?.map((categorie) => (
        <div key={categorie.id}>
          <p>{categorie.name}</p>
        </div>
      ))}
    </AsideContentContainer>
  )
}
