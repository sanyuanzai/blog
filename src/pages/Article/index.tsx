import React, { useState } from 'react'
import type { FC, ReactNode } from 'react'
import { PageMainContainer } from '@/components/PageMainContainer/style'
import RouteLink from '@/components/RouteLink'
import { useAppSelector } from '@/redux/useStore'
import { getArticleById } from '@/api'
import { ArticlesProps } from '@/redux/dataTypes'
import { useMount } from '@/utils/hooks/useMount'
import { Form } from 'antd'
interface Iprops {
  children?: ReactNode
}

const Article: FC<Iprops> = () => {
  const articleUrl = window.location.pathname.split('/')
  const artcleId = articleUrl[articleUrl.length - 1]
  const { result: article, loading, error } = getArticleById(artcleId)
  return (
    <>
      <RouteLink
        secondLink={{ name: 'Blog', link: '/post' }}
        thirdLink={{ name: `${article?.title}`, link: `/post/${artcleId}` }}
      />
      <PageMainContainer>
        <div className="main">
          <h2 className="title">{article?.title}</h2>
          <div className="content">{article?.content}</div>
          <div className="bottom_nav">
            <div className="prev">已经到头了!</div>
            <div className="next">title</div>
          </div>
        </div>
        <div className="comment__pannel">
          <h3>Post Comment</h3>
          <div className="comment_table">
            <Form name="comment">
              <Form.Item label></Form.Item>
            </Form>
          </div>
        </div>
        <div className="aside"></div>
      </PageMainContainer>
    </>
  )
}
export default Article
