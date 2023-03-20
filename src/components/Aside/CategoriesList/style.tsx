import styled from 'styled-components'
interface AsideContentProps {
  column?: string
  // onColorChange?: boolean
}
export const AsideContentContainer = styled.div<AsideContentProps>`
  display: flex;
  flex-flow: ${(props) => props.column};
  flex-wrap: wrap;
  div {
    width: 5rem;
    margin: 0.5rem 0;
    cursor: pointer;
    p:hover {
      text-decoration: ${(props) => (props.column ? null : 'underline')};
      color: ${(props) => (props.column ? null : props.theme.color.head)};
      background-color: ${(props) =>
        props.column ? props.theme.color.head : null};
    }
  }
`
