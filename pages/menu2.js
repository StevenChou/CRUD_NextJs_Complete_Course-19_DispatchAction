import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { BiCoffee } from 'react-icons/bi'

import Modal from './../components/Modal'

export default function Menu2() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
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

      {/* <Modal show={showModal} onClose={setShowModal} title='Hello World'>
        {modalContent()}
      </Modal> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='div'
                    className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'
                  >
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                      Terms of Service
                    </h3>
                    <button
                      type='button'
                      onClick={closeModal}
                      className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                      <svg
                        aria-hidden='true'
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      <span className='sr-only'>Close modal</span>
                    </button>
                  </Dialog.Title>

                  {/* Modal body */}
                  <div className='p-6 space-y-6'>
                    <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                      The European Union’s General Data Protection Regulation
                      (G.D.P.R.) goes into effect on May 25 and is meant to
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
                    </p>
                  </div>

                  <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                    <button
                      type='button'
                      onClick={closeModal}
                      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                      I accept
                    </button>
                    <button
                      type='button'
                      className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
                    >
                      Decline
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
