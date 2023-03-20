import styled from 'styled-components'
import { ScreenWidth } from '@/themes/variables'
export const HomeContainer = styled.div`
  width: 100%;
  .content_container {
    width: 100%;
    display: flex;
    .main {
      width: ${ScreenWidth.PhoneWidth};
      padding-right: 1rem;
    }
    .aside {
      width: ${ScreenWidth.AsideWidth};
      padding-left: 1rem;
    }
    @media screen and (max-width: ${ScreenWidth.IpadWidth}) {
      .main {
        padding: 0 1rem;
        flex: 1;
      }
      .aside {
        display: none;
      }
    }
  }
`
