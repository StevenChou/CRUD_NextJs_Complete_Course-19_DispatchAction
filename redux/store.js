import { configureStore } from '@reduxjs/toolkit'

import Reducer from './reducer'
import sysSlice from './sysSlice'
import listenerMiddleware from './listener'

export const store = configureStore({
  reducer: {
    app: Reducer,
    sys: sysSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})
