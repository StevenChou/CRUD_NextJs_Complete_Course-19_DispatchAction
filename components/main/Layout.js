import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className='flex gap-6 md:gap-20 mx-6'>
        <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
          <Sidebar />
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88hv] videos flex-1'>
          {children}
        </div>
        {/* <div className='mt-4 flex flex-col gap-10 overflow-auto videos flex-1'>
          {children}
        </div> */}
      </div>
    </>
  )
}
