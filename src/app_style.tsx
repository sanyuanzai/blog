import styled from 'styled-components'
import { ScreenWidth } from './themes/variables'
export const AppContainer = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  width: ${ScreenWidth.IpadWidth};
  /* @media screen and(min-width: 800px) {
    width: ${ScreenWidth.PhoneWidth};
  } */
`
