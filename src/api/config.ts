let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:1337/api'
}
const TIME_OUT = 10000
export { BASE_URL, TIME_OUT }
