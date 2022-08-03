import { customFetchOne } from '@/utils/axios'

// all user
export const getUsers = async () => {
  const response = await customFetchOne.get(`api/users`)

  return response.data
}

// single user
export const getUser = async (userId) => {
  const response = await customFetchOne.get(`api/users/${userId}`)
  const data = response.data

  if (data) return data

  return {}
}

// posting a new user
export async function addUser(formData) {
  try {
    const response = await customFetchOne.post(`api/users`, formData)

    return response.data
  } catch (error) {
    return error
  }
}

// Update a new user
export async function updateUser(userId, formData) {
  const response = await customFetchOne.put(`api/users/${userId}`, formData)

  return response.data
}

// Delete a new user
export async function deleteUser(userId) {
  const response = await customFetchOne.delete(`api/users/${userId}`)

  return response.data
}
