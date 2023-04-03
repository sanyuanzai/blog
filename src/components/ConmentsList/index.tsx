import React, { useState } from 'react'
import type { FC, ReactNode } from 'react'
import EditorBox from '../EditorBox'
import { useComments, useReply } from '@/api'
import CommentCard from '../CommentCard'
import { MyIcon } from '../Icon'
import styled from 'styled-components'
interface Iprops {
  children?: ReactNode
  articleId: number
}

const CommentsList: FC<Iprops> = ({ articleId }) => {
  const { data: comments, isLoading } = useComments()
  const { data: replies } = useReply()
  return (
    <CommentContainer className="comment_pannel">
      <div className="read_part">
        <div className="title underborder">
          <MyIcon className="icon" type="icon-pinglun1" />
          <h3>Read Comment</h3>
        </div>
        {comments?.map(
          (comment) =>
            comment.post_id === articleId && (
              <div className="commentWrapper" key={comment.id}>
                <CommentCard comment={comment} />
                {replies?.map(
                  (reply) =>
                    reply.comment.id === comment.id && (
                      <CommentCard
                        key={'r' + reply.id}
                        comment={reply}
                        reply={true}
                      />
                    )
                )}
              </div>
            )
        )}
      </div>
      <div className="edit_part">
        <div className="title">
          <MyIcon className="icon" type="icon-tianxie" />
          <h3>Edit Comment</h3>
        </div>
      </div>
      <EditorBox articleId={articleId} />
    </CommentContainer>
  )
}
export default CommentsList

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
  .commentWrapper {
    border-bottom: 1px solid ${({ theme }) => theme.color.btn};
  }
`
