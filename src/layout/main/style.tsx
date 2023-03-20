import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  ::before {
    content: '';
    background: url(assets/img/bgImage.jpg) fixed;
    background-size: 100% 100%;
    position: absolute;
    top: 6rem;
    height: 100vh;
    right: 0;
    left: 0;
    z-index: -9;
  }
`
