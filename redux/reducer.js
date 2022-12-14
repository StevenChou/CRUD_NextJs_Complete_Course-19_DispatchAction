import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  client: { toggleForm: false, formId: undefined, deleteId: null },
}

export const ReducerSlice = createSlice({
  name: 'crudapp',
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      console.log('*** 啟動toggle reducer action:')
      state.client.toggleForm = !state.client.toggleForm
    },
    updateAction: (state, action) => {
      console.log('*** 啟動update reducer action:', action)
      state.client.formId = action.payload
    },
    deleteAction: (state, action) => {
      state.client.deleteId = action.payload
    },
  },
})

export const { toggleChangeAction, updateAction, deleteAction } =
  ReducerSlice.actions

export default ReducerSlice.reducer
