import { Fragment, useEffect, useRef, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Layout from '@/components/main/Layout'
import DropdownLink from './../components/DropdownLink'

export default function Menu1() {
  const user = { isAdmin: true, name: 'Whalebro' }

  return (
    <>
      <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <a href='#'>
          <img
            className='rounded-t-lg'
            src='https://cdn.pixabay.com/photo/2022/04/12/04/57/couple-7127168_960_720.jpg'
            alt=''
          />
        </a>
        <div className='p-5'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href='#'
            className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Read more
            <svg
              aria-hidden='true'
              className='ml-2 -mr-1 w-4 h-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex justify-end px-4 pt-4'>
          <Menu as='div' className='relative inline-block'>
            <Menu.Button className='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5'>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
              </svg>
            </Menu.Button>
            <Menu.Items className='absolute left-0 w-56 origin-top-right bg-white  shadow-lg '>
              <Menu.Item>
                <DropdownLink className='dropdown-link' href='/profile'>
                  <span className='text-red-600'>profile</span>
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className='dropdown-link' href='/order-history'>
                  <span className=''>Order History</span>
                </DropdownLink>
              </Menu.Item>
              {user.isAdmin && (
                <Menu.Item>
                  <DropdownLink
                    className='dropdown-link'
                    href='/admin/dashboard'
                  >
                    Admin Dashboard
                  </DropdownLink>
                </Menu.Item>
              )}
              <Menu.Item>
                <a className='dropdown-link' href='#' onClick={() => {}}>
                  Logout
                </a>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className='flex flex-col items-center pb-10'>
          <img
            className='mb-3 w-24 h-24 rounded-full shadow-lg'
            src='https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg'
            alt='Bonnie image'
          />
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            Bonnie Green
          </h5>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            Visual Designer
          </span>
          <div className='flex mt-4 space-x-3 lg:mt-6'>
            <a
              href='#'
              className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Add friend
            </a>
            <a
              href='#'
              className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'
            >
              Message
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

Menu1.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
