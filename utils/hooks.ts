import { fetcher } from './helperFn'
import { useQuery } from 'react-query'
import { Characters } from '../utils/typings'

export const useGetChars = (page: number) => {
  const { data, status, error } = useQuery<Characters[]>('characters', () =>
    fetcher(
      `https://breakingbadapi.com/api/characters?limit=10&offset=${page * 10}`
    )
  )

  return { data, status, error }
}
