import styled from 'styled-components'
export const ArticleCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 1rem 1.5rem;
  .title {
    font-weight: 500;
    color: ${({ theme }) => theme.color.head};
  }
  .date {
    margin: 1rem 0;
    #postdate {
      font-size: 0.5rem;
    }
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
  .desc {
    margin-top: 3rem;
    font-size: 0.5rem;
    cursor: pointer;
    #tag,
    #categorie {
      color: ${({ theme }) => theme.color.descPrimary};
      :hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.color.head};
      }
    }
  }
  .date,
  #__ {
    color: #999;
  }
`
