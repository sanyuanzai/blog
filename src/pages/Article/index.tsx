import React, { useState } from 'react'
import type { FC, ReactNode } from 'react'
import PageMain from '@/components/PageMainContainer'
import RouteLink from '@/components/RouteLink'
import { getArticleById, getCategorieById } from '@/api'
import ReactMarkdown from 'react-markdown'
import { Button, Form, Input, Spin } from 'antd'
import { Row } from '@/components/lib'
import { PostDate } from '@/components/lib'
import EditorBox from '@/components/EditorBox'
import MarkDown from '@/components/Mrakdown'
import ComentsList from '@/components/ConmentsList'
import { CardContainer } from '@/components/CardContainer'
import { PartContainer } from './style'
import { ArticleCardContainer } from '../Home/childComps/Main/ArticleCard/styled'
interface Iprops {
  children?: ReactNode
}

const Article: FC<Iprops> = () => {
  const articlePath = window.location.pathname.split('/')
  const artcleId = articlePath[articlePath.length - 1]
  const { result: article, loading, error } = getArticleById(artcleId)
  const { result: categorie } = getCategorieById('2')
  return (
    <>
      {!article ? (
        <Spin size="large" spinning={loading}></Spin>
      ) : (
        <PageMain>
          <PartContainer right={true} className="main">
            <RouteLink
              secondLink={{ name: 'Blog', link: '/post' }}
              thirdLink={{
                name: `${article?.title}`,
                link: `/post/${artcleId}`
              }}
            />
            <h2 className="title">{article.title}</h2>
            <div className="desc">
              <PostDate createdAt={article.createdAt} />
              <span className="categorie highlight">{categorie?.name}</span>
              <span className="tag highlight"> {article.tag}</span>
            </div>
            <div className="text">
              {article?.content ? (
                <MarkDown className="markdown">{article.content}</MarkDown>
              ) : null}
            </div>
            <div className="copyright_notice">
              <p>
                作者:<span>三原仔 @ 三原仔的角落</span>
              </p>
              <p>
                本文地址:<span>{window.location.origin}</span>
              </p>
              <p>
                版权声明:本站未标注出处的内容和图片均为本站原创，欢迎转载，转载时请附带原始链接及作者的版权说明；本站已标明出处地内容版权归原始链接作者所有，如侵必删，联系方式；
              </p>
            </div>
            {/* <div className="bottom_nav">
                <div className="prev">已经到头了!</div>
                <div className="next">title</div>
              </div> */}
            <ComentsList articleId={article.id} />
          </PartContainer>
          <PartContainer right={false} className="aside">
            1111111111111111
          </PartContainer>
        </PageMain>
      )}
    </>
  )
}
export default Article
