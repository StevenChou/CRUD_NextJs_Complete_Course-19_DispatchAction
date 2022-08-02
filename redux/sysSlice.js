import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSidebarOpen: true,
}

const sysSlice = createSlice({
  name: 'sys',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
  },
})

export const { toggleSidebar } = sysSlice.actions

export default sysSlice.reducer
