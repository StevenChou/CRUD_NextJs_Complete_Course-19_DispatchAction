export const getUsersPage = async (pageParam = 1) => {
  const response = await axiosTwo.get(`/users?page=${pageParam}`)

  return response.data
}
