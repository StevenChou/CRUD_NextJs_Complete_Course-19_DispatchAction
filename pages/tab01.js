import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

export default function Tab01() {
  const [selected, setSelected] = useState([people[0]])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(selected)
  }

  return (
    <>
      <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
        <ul className='flex flex-wrap -mb-px'>
          <li className='mr-2'>
            <a
              href='#'
              className='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
            >
              Profile
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#'
              className='inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
              aria-current='page'
            >
              Dashboard
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#'
              className='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
            >
              Settings
            </a>
          </li>
          <li className='mr-2'>
            <a
              href='#'
              className='inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
            >
              Contacts
            </a>
          </li>
          <li>
            <a className='inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500'>
              Disabled
            </a>
          </li>
        </ul>
      </div>

      {/* <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
        <div
          className='bg-blue-600 h-2.5 rounded-full'
          style='width: 45%'
        ></div>
      </div> */}
      <div className='w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
        <div
          className='bg-blue-600 h-2.5 rounded-full'
          style={{ width: '75%' }}
        ></div>
      </div>
    </>
  )
}
