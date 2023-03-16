import styled from 'styled-components'
export const HomeContainer = styled.div`
  width: 100%;
  .bg {
    height: calc(100vh - 8rem);
    background-color: pink;
    display: grid;
    border-radius: 1rem;
    place-items: center;
  }
  .content_container {
    display: flex;
    .main {
      width: 70%;
      margin-right: 5%;
    }
    .aside {
      width: 30%;
    }
    @media screen and (max-width: 800px) {
      display: block;
      .main {
        width: 100%;
        margin-right: 0;
        margin-bottom: 5%;
      }
      .aside {
        width: 100%;
      }
    }
  }
`
