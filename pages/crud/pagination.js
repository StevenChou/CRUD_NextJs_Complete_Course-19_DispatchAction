import { useState } from 'react'
import { useQuery } from 'react-query'

import { getUsersPage } from '@/lib/helper-pagination'

import Layout from '@/components/main/Layout'
import User from '@/components/User'
import PageButton from '@/components/PageButton'

export default function Pagination() {
  const [page, setPage] = useState(1)

  const {
    isLoading,
    isError,
    error,
    data: users,
    isFetching,
    isPreviousData,
  } = useQuery(['/users', page], () => getUsersPage(page), {
    keepPreviousData: true,
  })

  if (isLoading) return <p>Loading Users...</p>

  if (isError) return <p>Error: {error.message}</p>

  const content = users.data.map((user) => <User key={user.id} user={user} />)

  const lastPage = () => setPage(users.total_pages)

  const firstPage = () => setPage(1)

  const pagesArray = Array(users.total_pages)
    .fill()
    .map((_, index) => index + 1)

  // const nav = (
  //   <nav className='nav-ex2'>
  //     <button onClick={firstPage} disabled={isPreviousData || page === 1}>
  //       &lt;&lt;
  //     </button>
  //     {/* Removed isPreviousData from PageButton to keep button focus color instead */}
  //     {pagesArray.map((pg) => (
  //       <PageButton key={pg} pg={pg} setPage={setPage} />
  //     ))}
  //     <button
  //       onClick={lastPage}
  //       disabled={isPreviousData || page === users.total_pages}
  //     >
  //       &gt;&gt;
  //     </button>
  //   </nav>
  // )

  const nav = (
    <nav aria-label='Page navigation example' className=' mt-2'>
      <ul className='inline-flex items-center -space-x-px'>
        <li>
          <button
            onClick={firstPage}
            disabled={isPreviousData || page === 1}
            className='block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            <span className='sr-only'>Previous</span>
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </li>

        {pagesArray.map((pg) => (
          <PageButton key={pg} pg={pg} setPage={setPage} curPage={page} />
        ))}

        <li>
          <button
            onClick={lastPage}
            disabled={isPreviousData || page === users.total_pages}
            className='block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            <span className='sr-only'>Next</span>
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  )

  return (
    <>
      {nav}
      {isFetching && <span className='loading'>Loading...</span>}
      {content}
    </>
  )
}

Pagination.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
