import React from 'react'
import type { FC, ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
interface Iprops {
  children: string
  className?: string
}

const MarkDown: FC<Iprops> = ({ children, className }) => {
  return <ReactMarkdownContainer>{children}</ReactMarkdownContainer>
}
export default MarkDown

const ReactMarkdownContainer = styled(ReactMarkdown)`
  max-width: 100%;
  white-space: pre-wrap;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  /* h1
       { font-size: $xxlfontSize}
    h2 
        {font-size: $xlfontSize}
    h3  
        {font-size: $mdfontSize} */
  li {
    margin: 0 0 5px 30px;
  }
  /* list-style : disc} */
  p {
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
  }
  /* font-size: $noramlfontSize} */
  code {
    display: inline-block;
    /* background-color: $inlineCode; */
    /* color: $highlightText; */
    padding: 5px;
    border-radius: 10px;
  }
  pre code {
    padding: 10px;
    margin-bottom: 10px;
    line-height: 1.5;
  }

  p img {
    display: inline-block;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 12px;
  }
  blockquote {
    /* {background-color: $themeColor; */
    padding: 14px 40px;
    /* font-size: $xlfontSize; */
    border-radius: 20px;
  }
  table {
    margin: 20px auto;
    /* background-color: $themeColor; */
    border-spacing: 0;
    text-align: center;
  }
  table th,
  table td {
    padding: 6px 14px;
  }
`
