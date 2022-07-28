import { useState, Fragment } from 'react'
import { BiCoffee } from 'react-icons/bi'
import { Dialog, Transition } from '@headlessui/react'

import Modal from './../components/Modal'

export default function Menu2() {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpenPopup, setIsOpenPopup] = useState(false)

  const modalContent = () => {
    return (
      <div className='p-6 space-y-6'>
        <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
          With less than a month to go before the European Union enacts new
          consumer privacy laws for its citizens, companies around the world are
          updating their terms of service agreements to comply.
        </p>
        <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
          The European Union’s General Data Protection Regulation (G.D.P.R.)
          goes into effect on May 25 and is meant to ensure a common set of data
          rights in the European Union. It requires organizations to notify
          users as soon as possible of high-risk data breaches that could
          personally affect them.
        </p>
      </div>
    )
  }

  const actions = (onClose) => {
    return (
      <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
        <button
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          I accept
        </button>
        <button
          type='button'
          onClick={onClose}
          className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
        >
          Decline
        </button>
      </div>
    )
  }

  const actionsPopup = (onClose) => {
    return (
      <div className=' pb-6 px-6 text-center'>
        <svg
          aria-hidden='true'
          className='mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
          Are you sure you want to delete this product?
        </h3>
        <button
          type='button'
          className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'
        >
          Yes, I'm sure
        </button>
        <button
          type='button'
          onClick={onClose}
          className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
        >
          No, cancel
        </button>
      </div>
    )
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModalPopup() {
    setIsOpenPopup(false)
  }

  function openModalPopup() {
    setIsOpenPopup(true)
  }

  return (
    <>
      <div className='flex gap-3'>
        <button
          type='button'
          onClick={openModal}
          className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'
        >
          Default modal{' '}
          <span className='px-1'>
            <BiCoffee size={23}></BiCoffee>
          </span>
        </button>
      </div>

      <div className='flex gap-3'>
        <button
          type='button'
          onClick={openModalPopup}
          className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'
        >
          Pop-up modal{' '}
          <span className='px-1'>
            <BiCoffee size={23}></BiCoffee>
          </span>
        </button>
      </div>

      <Modal
        show={isOpen}
        onClose={closeModal}
        title='Hello World'
        actionBtn={actions}
      >
        {modalContent()}
      </Modal>

      <Modal
        show={isOpenPopup}
        onClose={closeModalPopup}
        title=''
        actionBtn={actionsPopup}
        titleClass='flex justify-between text-lg font-medium leading-6 text-gray-900'
      ></Modal>
    </>
  )
}
