import React, { useState } from 'react'
// import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import GoogleLogin from 'react-google-login'
import {
  AiFillHome,
  AiFillGooglePlusSquare,
  AiFillMail,
  AiFillPushpin,
  AiFillTag,
  AiOutlineMenu,
} from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'

// import useAuthStore from '../store/authStore'

// import SuggestedAccounts from './SuggestedAccounts'
// import Discover from './Discover'
import Footer from './Footer'

const normalLink =
  'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded'
const activeLink =
  'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded'
const subNormalLink =
  'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
const subActiveLink =
  'flex items-center p-2 pl-11 w-full text-base font-normal text-[#F51997] rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'

const Sidebar = () => {
  const { pathname } = useRouter()
  console.log('*** pathname:', pathname)

  const [showSidebar, setShowSidebar] = useState(true)

  const [isOpen, setIsOpen] = useState(false)

  const userProfile = false

  return (
    <div>
      <div
        className='block xl:hidden m-2 ml-4 mt-3 text-xl'
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>

      {showSidebar && (
        <div className='xl:w-260 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 '>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href='/'>
              <div className={pathname === '/' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <AiFillHome />
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  CRUD Samples
                </span>
              </div>
            </Link>
          </div>

          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href='/menu1'>
              <div className={pathname === '/menu1' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <AiFillGooglePlusSquare />
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  Card Samples
                </span>
              </div>
            </Link>
          </div>

          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href='/menu2'>
              <div className={pathname === '/menu2' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <AiFillMail />
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  Dialog(Modal) Samples
                </span>
              </div>
            </Link>
          </div>

          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href='/menu3'>
              <div className={pathname === '/menu3' ? activeLink : normalLink}>
                <p className='text-2xl'>
                  <AiFillPushpin />
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  Tabs Samples(to be continued)
                </span>
              </div>
            </Link>
          </div>

          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href='/sidebar'>
              <button
                type='button'
                onClick={() => setIsOpen((pre) => !pre)}
                className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
              >
                <div
                  className={pathname === '/sidebar' ? activeLink : normalLink}
                >
                  <p className='text-2xl'>
                    <AiFillTag />
                  </p>
                  <span className='capitalize text-xl hidden xl:block'>
                    Sidebar Samples
                  </span>
                  <svg
                    sidebar-toggle-item=''
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
            <ul
              id='dropdown-example'
              className={`${isOpen ? '' : 'hidden'} py-2 space-y-2`}
            >
              <li>
                <Link href='/sidebar/sample1'>
                  <a
                    href='#'
                    className={
                      pathname === '/sidebar/sample1'
                        ? subActiveLink
                        : subNormalLink
                    }
                  >
                    Multi-level dropdown
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/sidebar/sample2'>
                  <a
                    href='#'
                    className={
                      pathname === '/sidebar/sample2'
                        ? subActiveLink
                        : subNormalLink
                    }
                  >
                    Content separator
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/sidebar/sample3'>
                  <a
                    href='#'
                    className={
                      pathname === '/sidebar/sample3'
                        ? subActiveLink
                        : subNormalLink
                    }
                  >
                    CTA button
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* {!userProfile && (
            <div className=' px-2 py-4 hidden xl:block'>
              <p className=' text-gray-400'>
                Log in to like and comment on video
              </p>
              <div className='pr-4'>
                <GoogleLogin
                  clientId=''
                  render={(renderProps) => (
                    <button
                      className=' cursor-pointer bg-white text-lg text-[#F51996] border-[1px] border-[#F51996] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51996]'
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      This is my custom Google button
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy='single_host_origin'
                />
              </div>
            </div>
          )} */}

          {/* <Discover /> */}

          {/* <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          />*/}
          <Footer />
        </div>
      )}
    </div>
  )

  // const { fetchAllUsers, allUsers }: any = useAuthStore()

  // return (
  //   <div>
  //     <div
  //       className='block xl:hidden m-2 ml-4 mt-3 text-xl'
  //       onClick={() => setShowSidebar(!showSidebar)}
  //     >
  //       {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
  //     </div>
  //     {showSidebar && (
  //       <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 '>
  //         <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
  //           <Link href='/'>
  //             <div className={pathname === '/' ? activeLink : normalLink}>
  //               <p className='text-2xl'>
  //                 <AiFillHome />
  //               </p>
  //               <span className='capitalize text-xl hidden xl:block'>
  //                 For You
  //               </span>
  //             </div>
  //           </Link>
  //         </div>
  //         <Discover />
  //         <SuggestedAccounts
  //           fetchAllUsers={fetchAllUsers}
  //           allUsers={allUsers}
  //         />
  //         <Footer />
  //       </div>
  //     )}
  //   </div>
  // )
}

export default Sidebar
