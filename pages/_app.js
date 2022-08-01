import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'

import { AuthProvider } from '@/context/AuthContext'
import { store } from '../redux/store'

import Navbar from './../components/Navbar'
import Sidebar from '../components/Sidebar'

import '../styles/globals.css'

// create a client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  const [isSSR, setIsSSR] = useState(true)

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
          <Navbar />
          <div className='flex gap-6 md:gap-20 mx-6'>
            <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
              <Sidebar />
            </div>
            <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88hv] videos flex-1'>
              <Component {...pageProps} />
            </div>
          </div>
        </Provider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default MyApp
