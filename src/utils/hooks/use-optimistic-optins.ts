import { QueryKey, useQueryClient } from 'react-query'

export const useConfig = (
  queryKey: QueryKey,
  callback: (target: any, old: any) => any[]
) => {
  const queryClient = useQueryClient()
  return {
    onSuccess: () => queryClient.cancelQueries(queryKey), //??
    async onMutate(target: any) {
      const previousItem = queryClient.getQueriesData(queryKey)
      queryClient.setQueryData(queryKey, (old?: any[]) => {
        return callback(target, old)
      })
      return { previousItem }
    },
    onError(error: any, newItem: any, context: any) {
      queryClient.setQueryData(queryKey, context?.previousItem)
    }
  }
}
export const useAddConfig = (queryKey: QueryKey) =>
  useConfig(queryKey, (target, old) => [...old, target])
