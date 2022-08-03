import axios from 'axios'

// import { clearStore } from '../features/user/userSlice'
import { getUserFromLocalStorage } from './localStorage'
import { NEXT_URL } from '@/config/index'

// for CRUD
// baseURL: `${process.env.REACT_APP_API_DOMAIN}/api/v1/toolkit`,
export const customFetchOne = axios.create({
  baseURL: `${NEXT_URL}/`,
})

customFetchOne.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage()

  if (user) {
    config.headers.common['Authorization'] = `Bearer ${user.token}`
  }

  return config
})

// export const checkForUnauthorizedResponse = (error, thunkAPI) => {
//   if (error.response.status === 401) {
//     thunkAPI.dispatch(clearStore())

//     return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
//   }

//   return thunkAPI.rejectWithValue(error.response.data.msg)
// }

// export default customFetch
