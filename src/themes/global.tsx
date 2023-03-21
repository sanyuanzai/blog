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
    --color-font:${({ theme }) => theme.color.fontPrimary || 'inherit'};
    --screen-width:${ScreenWidth.IpadWidth}
  }
  .highlight{
    color:${({ theme }) => theme.color.head || 'inherit'};
    cursor: pointer;
    :hover{text-decoration:underline}
  }
  .flex{
    display: flex;
  }
  h1,h2,h3 {
  color: var(--color-font);}
  /* body{color:${({ theme }) => theme.color.fontPrimary || 'inherit'}} */
  p{color: ${({ theme }) => theme.color.fontPrimary};}
  a {
  text-decoration: none;
  color: var(--color-text);
}
`
