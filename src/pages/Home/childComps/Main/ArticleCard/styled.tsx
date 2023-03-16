import styled from 'styled-components'
export const ArticleCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;

  .title,
  .desc {
    margin-bottom: 1rem;
    text-align: center;
  }
  .text {
    width: 100%;
    text-indent: 2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: box-aixs;
  }
  span {
    padding: 0 0.5rem;
  }
`
