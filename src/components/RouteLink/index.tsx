import React from 'react'
import type { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
interface RouteLinkProps {
  name: string
  link: string
}
interface Iprops {
  children?: ReactNode
  secondLink: RouteLinkProps
  thirdLink?: RouteLinkProps
}

const RouteLink: FC<Iprops> = ({ secondLink, thirdLink }) => {
  const navigate = useNavigate()
  return (
    <Containner>
      <span className="link" onClick={() => navigate('/')}>
        三原仔的角落
      </span>
      <span>
        <span> &gt; </span>
        <span className="link" onClick={() => navigate(`${secondLink.link}`)}>
          {secondLink.name}
        </span>
      </span>
      {thirdLink && (
        <span>
          <span> &gt; </span>
          <span className="link" onClick={() => navigate(`${thirdLink.link}`)}>
            {thirdLink.name}
          </span>
        </span>
      )}
    </Containner>
  )
}
const Containner = styled.div`
  span {
    color: ${({ theme }) => theme.color.textPrimary};
  }
  .link {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`
export default RouteLink
