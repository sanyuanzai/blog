import React from 'react'
import type { FC, ReactNode } from 'react'
import MarkDown from '../Mrakdown'
import EditorBox from '../EditorBox'
import { getComment } from '@/api'
import CommentCard from '../CommentCard'
import { MyIcon } from '../Icon'
import styled from 'styled-components'
interface Iprops {
  children?: ReactNode
  articleId: number
}

const ComentsList: FC<Iprops> = ({ articleId }) => {
  const { result: comments, loading, error } = getComment()
  const { result: reply } = getComment()
  return (
    <CommentContainer className="comment_pannel">
      <div className="read_part">
        <div className="title underborder">
          <MyIcon className="icon" type="icon-pinglun1" />
          <h3>Read Comment</h3>
        </div>
        {comments?.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="edit_part">
        <div className="title">
          <MyIcon className="icon" type="icon-tianxie" />
          <h3>Edit Comment</h3>
        </div>
      </div>
      <EditorBox />
    </CommentContainer>
  )
}
export default ComentsList

const CommentContainer = styled.div`
  .underborder {
    border-bottom: 1px solid ${({ theme }) => theme.color.btn};
  }
  .title {
    padding: 1rem 0;
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
`
