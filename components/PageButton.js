const PageButton = ({ pg, setPage, curPage }) => {
  // return <button onClick={() => setPage(pg)}>{pg}</button>

  console.log('*** current page:', pg, curPage)

  return (
    <>
      {curPage === pg ? (
        <li>
          <button
            onClick={() => setPage(pg)}
            aria-current='page'
            className='z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
          >
            {pg}
          </button>
        </li>
      ) : (
        <li>
          <button
            onClick={() => setPage(pg)}
            className='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            {pg}
          </button>
        </li>
      )}
    </>
  )

  // return
  //   ({curPage === pg ? (
  //     <li>
  //       <button
  //         onClick={() => setPage(pg)}
  //         aria-current='page'
  //         className='z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
  //       >
  //         {pg}
  //       </button>
  //     </li>
  //   ) : (
  //     <button
  //       onClick={() => setPage(pg)}
  //       className='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
  //     >
  //       {pg}
  //     </button>
  //   )})
  // }
}

export default PageButton
