enum ColorSchemeMode {
  light,
  dark
}
const COLOR_THEME = [
  {
    name: 'light',
    color: {
      bg: '#FFF',
      fontPrimary: '#1A1A1A',
      head: '#3FB887',
      navbg: '#F1F1F1',
      bgPrimary: '#F9F9F9',
      btn: '#eee',
      textPrimary: '#999',
      descPrimary: '#363636'
    },
    icon: {
      modeIcon: 'https://i.328888.xyz/2023/03/16/KXOez.png'
    }
  },
  {
    name: 'dark',
    color: {
      bg: '#1A1A1A',
      fontPrimary: '#F1F1F1',
      head: '#16beec',
      navbg: '#1A1A1A',
      bgPrimary: '#363636',
      btn: '#999',
      textPrimary: '#999',
      descPrimary: '#F9F9F9'
    },
    icon: {
      modeIcon: 'https://i.328888.xyz/2023/03/16/KxQkw.png'
    }
  }
]
export { ColorSchemeMode }
export default COLOR_THEME
