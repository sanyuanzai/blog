import { delay } from '@reduxjs/toolkit/dist/utils'
import { message } from 'antd'
import { useRef, useEffect, useCallback } from 'react'
export function useThrottle(
  func: (...args: any) => void,
  dealy: number,
  showTip: boolean
) {
  const previous = useRef(0)
  return function (...args: any) {
    const now = +new Date()

    if (now - previous.current > dealy) {
      func(...args)
      previous.current = now
    } else if (showTip) {
      message.info('您的操作太频繁啦')
    }
  }
}
