import React, { useState } from 'react'
import type { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { ConmentProps, ReplyProps } from '@/api/dataTypes'
import EditorBox from '../EditorBox'
import MarkDown from '../Mrakdown'
import { useRelativeTime } from '@/utils/hooks/useRelativeTime'
interface Iprops {
  children?: ReactNode
  comment: ConmentProps | ReplyProps
  reply?: boolean
}

const CommentCard: FC<Iprops> = ({ comment, reply }) => {
  const [Edit, setEdit] = useState(true)

  const postDate = useRelativeTime(comment.createdAt)
  return (
    <CommentCardContainer reply={reply}>
      <div className="user">
        <span className="name">{comment.nickname}</span>
        <span className="postdate">{postDate}</span>
      </div>
      <MarkDown>{comment.content}</MarkDown>
      <p className="reply highlight" onClick={() => setEdit((state) => !state)}>
        Reply
      </p>
      <EditorBox
        Edit={Edit}
        setEdit={() => setEdit(true)}
        isReply={true}
        comment={comment}
      />
    </CommentCardContainer>
  )
}
export default CommentCard

const CommentCardContainer = styled.div<Partial<Iprops>>`
  margin-left: ${(props) => props.reply && '0.5rem'};
  .user {
    margin: 1rem 0;
    .name {
      font-weight: 600;
      margin-right: 0.5em;
    }
    .postdate {
      color: ${({ theme }) => theme.color.textPrimary};
      font-size: 0.8em;
    }
  }
  .reply {
    margin: 1rem 0;
  }
`
