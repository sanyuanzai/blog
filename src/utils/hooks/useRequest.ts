import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useState } from 'react'
import { useMount } from './useMount'

// import { useState } from 'react'
export function useRequest<T>(
  callback: <T>() => Promise<AxiosResponse<T, any>>
) {
  const [data, setData] = useState<T[]>()
  // useEffect(() => {
  //   ;(async () => {
  //     data = await callback()
  //   })()
  // }, [])
  //   const [error, setError] = useState<{ [message: 'message']: string }>()
  //     .then((res) => res.data)
  //     .catch((err) => setError(err))
  // return { data }
  useMount(() => {
    callback<T>().then((res) => console.log(res.data))
  })
}
// config: AxiosRequestConfig
