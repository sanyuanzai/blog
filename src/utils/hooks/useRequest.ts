import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useState } from 'react'
import { useMount } from './useMount'

// import { useState } from 'react'
export function useRequest(
  fetch: (params: object) => Promise<any>,
  params: object
) {
  const [result, setResult] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  useMount(() => {
    ;(async () => {
      setLoading(true)
      try {
        const result = await fetch(params)
        setResult(result)
      } catch (e: any) {
        setError(e)
      } finally {
        setLoading(false)
      }
    })()
  })
  return { result, loading, error }
}
