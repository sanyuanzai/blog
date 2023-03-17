import { ScreenWidth } from '@/themes/variables'
import styled from 'styled-components'
export const HeaderContainer = styled.div`
  width: 100%;
  height: 6rem;
  justify-content: space-between;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  ::before {
    content: '';
    border-bottom: 1px solid ${({ theme }) => theme.color.bgPrimary};
    position: absolute;
    left: 0;
    top: 6rem;
    right: 0;
  }
  .top {
    margin-bottom: 1rem;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      .menuItem {
        padding: 0.1rem 0.7rem;
        text-align: right;
        :hover {
          color: ${({ theme }) => theme.color.head};
        }
      }
      .active {
        border-bottom: ${({ theme }) => theme.color.head} 2px solid;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .ant-switch-handle::before {
        background-image: url(${({ theme }) => theme.icon.modeIcon});
        background-repeat: no-repeat;
        background-size: 14px 14px;
        background-position: center;
        background-color: ${({ theme }) => theme.color.bg};
      }
      .ant-switch-inner {
      }
      .ant-input-group-wrapper {
        margin-left: 1.5rem;
      }
    }
  }
  @media screen and (max-width: ${ScreenWidth.PhoneWidth}) {
    .bottom {
      display: none;
    }
  }
`
