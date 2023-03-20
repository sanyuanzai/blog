import React from 'react'
import type { FC, ReactNode } from 'react'
import { MyCardContainer } from './style'
import { GithubFilled } from '@ant-design/icons'
import { CardContainer } from '@/components/CardContainer'
interface Iprops {
  children?: ReactNode
}

const MyCard: FC<Iprops> = () => {
  return (
    <CardContainer>
      <MyCardContainer>
        <div className="user">
          <img src="assets/img/avatar.jpg" alt="头像" />
          <p className="name">三原仔</p>
        </div>
        <p>本科环境设计,风景园林研究生在读</p>
        <p>曾在2019年于台湾艺术大学图文传播系交换</p>
        <p>动漫游戏宅but爱旅行</p>
        <p>一边看文档一边学开发,各位多多指教!</p>
        <p className="contact_me">
          <a href="https://github.com/sanyuanzai">
            <GithubFilled />
          </a>
        </p>
      </MyCardContainer>
    </CardContainer>
  )
}
export default MyCard
