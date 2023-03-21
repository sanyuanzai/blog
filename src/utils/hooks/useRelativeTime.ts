import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export function useRelativeTime(date: string) {
  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')
  date = dayjs(date).fromNow()
  return date
}
