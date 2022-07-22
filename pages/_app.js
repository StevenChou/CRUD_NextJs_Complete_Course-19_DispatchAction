import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'

import '../styles/globals.css'

import { store } from '../redux/store'

// create a client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}

export default MyApp
