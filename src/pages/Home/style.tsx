import styled from 'styled-components'
import { ScreenWidth } from '@/themes/variables'
export const HomeContainer = styled.div`
  width: 100%;
  .content_container {
    width: 100%;
    display: flex;
    .main {
      width: ${ScreenWidth.PhoneWidth};
    }
    .aside {
      width: ${ScreenWidth.AsideWidth};
    }
    @media screen and (max-width: ${ScreenWidth.IpadWidth}) {
      padding: 1rem;
      .main {
        flex: 1;
      }
      .aside {
        display: none;
      }
    }
  }
`
