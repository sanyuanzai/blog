import { FC } from 'react'
import { MyIcon } from './Icon'
import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
interface PostDateProps {
  createdAt: string
}
export const PostDate: FC<PostDateProps> = ({ createdAt }) => {
  const postDate = dayjs(createdAt).format('YYYY-MM-DD')
  return (
    <div className="date">
      <MyIcon type="icon-calendar" style={{ width: '1rem' }} />
      <span id="postdate"> Posted On {postDate}</span>
    </div>
  )
}
// interface PostCategorieProps {}
// export const PostCategorie: FC<PostCategorieProps> = () => {
//   return <span></span>
// }
// interface PostDateProps {
//   createdAt: string
// }
interface RowProps {
  center?: boolean
}
export const Row = styled.div<RowProps>`
  display: flex;
  align-items: ${(props) => props.center && 'center'};
  > * {
    padding: 0;
    margin: 0;
  }
`
