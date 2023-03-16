import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle<any>`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    color-scheme: ${({ theme }) => theme.name || 'normal'};
    --color-head:${({ theme }) => theme.color.head || 'inherit'};
    --color-text:${({ theme }) => theme.color.textPrimary || 'inherit'};
  }
  /* h1 {
  color: var(--color-head);} */
  a {
  text-decoration: none;
  color: var(--color-text);
}
`
