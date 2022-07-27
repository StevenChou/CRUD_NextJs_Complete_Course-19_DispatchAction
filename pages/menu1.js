import React, { useState } from 'react'

export default function Menu1() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div>
        <a
          href='#'
          className='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
        >
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Noteworthy technology acquisitions 2022
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </a>
      </div>

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
        <div className='flex justify-end px-4 pt-4 relative'>
          <button
            id='dropdownButton'
            data-dropdown-toggle='dropdown'
            className='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5'
            type='button'
            onClick={() => setToggle(!toggle)}
          >
            <span className='sr-only'>Open dropdown</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
            </svg>
          </button>

          <div
            id='dropdown'
            className={` absolute top-0 right-0 ${
              toggle ? '' : 'hidden'
            } z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
          >
            <ul className='py-1' aria-labelledby='dropdownButton'>
              <li>
                <a
                  href='#'
                  className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Export Data
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
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
