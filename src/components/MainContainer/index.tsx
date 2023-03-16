import styled from 'styled-components'
export const CardContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.bgPrimary};
  padding: 1rem 2rem;
  min-height: 15rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  transition: transform ease 400ms;
  :hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 800px) {
    padding: 1rem 0.5rem;
  }
`
