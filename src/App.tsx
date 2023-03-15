import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter } from 'react-router-dom'
import type { FC, ReactNode } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import './App.css'
import Header from './layout/header'
import Main from './layout/main'
import Footer from './layout/footer'
interface Iprops {
  children?: ReactNode
}
enum ColorSchemeMode {
  light,
  dark
}
const COLOR_THEME = [
  {
    name: 'light',
    color: {
      head: 'black',
      bgPrimary: '#ee9b02',
      txtPrimary: '#eeecec'
    }
  },
  {
    name: 'dark',
    color: {
      head: '#16beec',
      bgPrimary: '#aaa',
      txtPrimary: '#f7f74b'
    }
  }
]
const GlobalStyle = createGlobalStyle<any>`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    color-scheme: ${({ theme }) => theme.name || 'normal'};
    --color-head:${({ theme }) => theme.color.head || 'inherit'};
  }
  h1 {
  color: var(--color-head);
}
`
const App: FC<Iprops> = () => {
  const [mode, setMode] = useState<ColorSchemeMode>(ColorSchemeMode.dark)
  const sysModeChangeHandler = useCallback((e: any) => {
    if (e.matches) {
      setMode(ColorSchemeMode.dark)
    } else {
      setMode(ColorSchemeMode.light)
    }
  }, [])
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
    setMode(isDarkMode ? ColorSchemeMode.dark : ColorSchemeMode.light)
    window
      .matchMedia('(prefers-color-scheme:dark)')
      .addEventListener('change', sysModeChangeHandler)
    return () => {
      window
        .matchMedia('(prefers-color-scheme:dark)')
        .removeEventListener('change', sysModeChangeHandler)
    }
  }, [])
  return (
    <ThemeProvider theme={COLOR_THEME[mode]}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default App
