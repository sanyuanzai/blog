import { createGlobalStyle } from 'styled-components'
import { ScreenWidth } from './variables'
export const GlobalStyle = createGlobalStyle<any>`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
  font-size: 15px;
}
  :root {
    color-scheme: ${({ theme }) => theme.name || 'normal'};
    --color-head:${({ theme }) => theme.color.head || 'inherit'};
    --color-text:${({ theme }) => theme.color.textPrimary || 'inherit'};
    --screen-width:${ScreenWidth.IpadWidth}
  }
  /* h1 {
  color: var(--color-head);} */
  a {
  text-decoration: none;
  color: var(--color-text);
}
`
