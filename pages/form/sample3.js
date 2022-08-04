import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io'

import Layout from '@/components/main/Layout'

export default function Sample3() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: '', lastName: '' },
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('InputFields', inputFields)
  }

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }

      return i
    })

    setInputFields(newInputFields)
  }

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: '', lastName: '' },
    ])
  }

  const handleRemoveFields = (id) => {
    const values = [...inputFields]
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    )

    setInputFields(values)
  }

  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
      <h1>Add New Member</h1>
      <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
        {inputFields.map((inputField) => (
          <div className='flex gap-2' key={inputField.id}>
            <input
              name='firstName'
              label='First Name'
              variant='filled'
              value={inputField.firstName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <input
              name='lastName'
              label='Last Name'
              variant='filled'
              value={inputField.lastName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
              className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <button
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
              className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'
            >
              <IoIosCloseCircleOutline />
            </button>
            <button
              onClick={handleAddFields}
              className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'
            >
              <IoIosAddCircleOutline />
            </button>
          </div>
        ))}
        <button
          className='bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'
          variant='contained'
          color='primary'
          type='submit'
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </div>
  )
}

Sample3.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
