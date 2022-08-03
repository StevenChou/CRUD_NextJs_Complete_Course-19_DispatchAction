import { customFetchTwo } from '@/utils/axios'

export const getUsersPage = async (pageParam = 1) => {
  const response = await customFetchTwo.get(`users?page=${pageParam}`)

  return response.data
}
