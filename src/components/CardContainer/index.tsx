import { Card } from 'antd'
import styled from 'styled-components'
export const CardContainer = styled(Card)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.bgPrimary};
  padding: 2.5% 5%;
  min-width: 15rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: box-shadow ease 400ms;
  :hover {
    box-shadow: 0 0 8px 6px rgba(0, 0, 0, 0.4);
    /* transform: scale(1.05); */
  }
  /* @media screen and (max-width: 800px) {
    padding: 0.5rem 1rem;
  } */
`
