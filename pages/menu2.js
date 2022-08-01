import { useState, Fragment } from 'react'
import { BiBadge, BiCoffee } from 'react-icons/bi'
import { Dialog, Transition } from '@headlessui/react'

import Modal from './../components/Modal'

export default function Menu2() {
  // For Default modal
  let [isOpen, setIsOpen] = useState(false)
  // For Pop-up modal
  let [isOpenPopup, setIsOpenPopup] = useState(false)
  // For Form modal
  let [isOpenForm, setIsOpenForm] = useState(false)

  // For Default modal
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

  // For Default modal
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

  // For Pop-up modal
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

  // For Form modal
  const modalFormContent = () => {
    return (
      <form className='space-y-6' action='#'>
        <div>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
            placeholder='name@company.com'
            required=''
          />
        </div>
        <div>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='••••••••'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
            required=''
          />
        </div>
        <div className='flex justify-between'>
          <div className='flex items-start'>
            <div className='flex items-center h-5'>
              <input
                id='remember'
                type='checkbox'
                value=''
                className='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                required=''
              />
            </div>
            <label
              htmlFor='remember'
              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Remember me
            </label>
          </div>
          <a
            href='#'
            className='text-sm text-blue-700 hover:underline dark:text-blue-500'
          >
            Lost Password?
          </a>
        </div>
        <button
          type='submit'
          className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Login to your account
        </button>
        <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
          Not registered?{' '}
          <a
            href='#'
            className='text-blue-700 hover:underline dark:text-blue-500'
          >
            Create account
          </a>
        </div>
      </form>
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

  function closeModalForm() {
    setIsOpenForm(false)
  }

  function openModalForm() {
    setIsOpenForm(true)
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

      <div className='flex gap-3'>
        <button
          type='button'
          onClick={openModalForm}
          className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'
        >
          Form modal{' '}
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

      <Modal
        show={isOpenForm}
        onClose={closeModalForm}
        title='Sign in to our platform'
        titleClass='flex justify-between text-lg font-medium leading-6 text-gray-900'
      >
        {modalFormContent()}
      </Modal>
    </>
  )
}
