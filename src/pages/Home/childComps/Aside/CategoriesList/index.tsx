import React from 'react'
import type { FC, ReactNode } from 'react'
import AsidePannel from '../AsidePannel'
import { AsideContentContainer } from './style'
import { useAppSelector } from '@/redux/useStore'
import { getCategorielist } from '@/api'
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
  const { result: categories, loading, error } = getCategorielist()
  return (
    <AsideContentContainer>
      {categories?.map((categorie) => (
        <div key={categorie.id}>
          <p>{categorie.name}</p>
        </div>
      ))}
    </AsideContentContainer>
  )
}
