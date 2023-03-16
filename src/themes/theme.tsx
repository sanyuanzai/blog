enum ColorSchemeMode {
  light,
  dark
}
const COLOR_THEME = [
  {
    name: 'light',
    color: {
      bg: '#FFF',
      head: '#3FB887',
      navbg: '#F1F1F1',
      bgPrimary: '#F9F9F9',
      btn: '#eee',
      txtPrimary: '#eeecec'
    },
    icon: {
      modeIcon: 'https://i.328888.xyz/2023/03/16/KXOez.png'
    }
  },
  {
    name: 'dark',
    color: {
      bg: '#1A1A1A',
      head: '#16beec',
      navbg: '#1A1A1A',
      bgPrimary: '#363636',
      btn: '#999',
      txtPrimary: '#f7f74b'
    },
    icon: {
      modeIcon: 'https://i.328888.xyz/2023/03/16/KxQkw.png'
    }
  }
]
export { ColorSchemeMode }
export default COLOR_THEME
