import { createListenerMiddleware } from '@reduxjs/toolkit'

import { toggleChangeAction, updateAction } from './reducer'

const listenerMiddleware = createListenerMiddleware()

// 監聽
listenerMiddleware.startListening({
  actionCreator: toggleChangeAction,
  effect: async (action, listenerApi) => {
    console.log('*** redux middleware', action)
    listenerApi.dispatch(updateAction(action.payload))
  },
})

export default listenerMiddleware
