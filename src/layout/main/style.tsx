import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  ::before {
    content: '';
    background: url(assets/img/bgImage.jpg) fixed;
    background-size: 100% 100%;
    position: absolute;
    top: 6rem;
    height: ${document.body.offsetHeight}px;
    right: 0;
    left: 0;
    z-index: -9;
  }
`
