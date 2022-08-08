import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '@/context/AuthContext'
import { store } from '../redux/store'

import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

// create a client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true)
  const getLayout = Component.getLayout || ((page) => page)

  // useEffect 有 run 表示是在 client 執行
  useEffect(() => {
    setIsSSR(false)
  }, [])

  // server side 不顯示任何元件
  if (isSSR) return null

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Provider store={store}>
          <ToastContainer position='top-center' />
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default MyApp
