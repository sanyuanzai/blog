import { CardContainer } from '@/components/CardContainer'
import styled from 'styled-components'
interface PartContainerProps {
  right: boolean
}
export const PartContainer = styled.div<PartContainerProps>`
  /* p {
    text-indent: 15px;
  } */
  width: 100%;
  background-color: ${({ theme }) => theme.color.bgPrimary};
  ${(props) => (props.right ? 'margin-right:1rem' : 'margin-left:1rem')};
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  .title {
    margin-top: 1.5rem;
  }
  .desc {
    font-size: 0.8rem;
    display: flex;
    margin: 0.5rem 0 1.5rem 0;
    .tag,
    .categorie {
      margin-left: 1rem;
    }
  }
`
