import React, { useState, useEffect, useCallback } from 'react'
import { BrowserRouter } from 'react-router-dom'
import type { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { ConfigProvider } from 'antd'
import { AppContainer } from './app_style'
import Header from './layout/header'
import Main from './layout/main'
import Footer from './layout/footer'
import COLOR_THEME, { ColorSchemeMode } from './themes/theme'
import { GlobalStyle } from './themes/global'
interface Iprops {
  children?: ReactNode
}
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
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: COLOR_THEME[mode].color.head
          },
          components: {
            Switch: {
              colorPrimary: '#2F2F2F'
            }
          }
        }}
      >
        <BrowserRouter>
          <AppContainer>
            <Header setMode={setMode} mode={mode} />
            <Main />
            <Footer />
          </AppContainer>
        </BrowserRouter>
      </ConfigProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default App
