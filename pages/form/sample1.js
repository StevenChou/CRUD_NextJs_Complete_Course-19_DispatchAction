import { useForm } from 'react-hook-form'

import Layout from '@/components/main/Layout'

const normalInput =
  'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

export default function Sample1() {
  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className='flex flex-col items-center justify-center px-6 py-8  lg:py-0'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-4 md:space-y-6'
      >
        <div>
          <label
            htmlFor='firstName'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            First Name
          </label>
          <input
            placeholder='bill'
            {...register('firstName')}
            className={normalInput}
          />
        </div>

        <div>
          <label
            htmlFor='lastName'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Last Name
          </label>
          <input
            placeholder='luo'
            {...register('lastName')}
            className={normalInput}
          />
        </div>

        <div>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Email
          </label>
          <input
            placeholder='bluebill1049@hotmail.com'
            type='email'
            {...register('email')}
            className={normalInput}
          />
        </div>

        <div>
          <div className='flex items-center mb-4'>
            <input
              id='default-checkbox'
              type='checkbox'
              {...register('isDeveloper')}
              className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
            <label
              htmlFor='default-checkbox'
              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              Is developer?
            </label>
          </div>
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Age group
          </label>
          <select
            {...register('ageGroup')}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value='0'>0 - 1</option>
            <option value='1'>1 - 100</option>
          </select>
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Sex
          </label>
          <div className='flex'>
            <div className='flex items-center mr-4'>
              <input
                id='inline-radio'
                type='radio'
                {...register('sex')}
                value='male'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                htmlFor='inline-radio'
                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Male
              </label>
            </div>
            <div className='flex items-center mr-4'>
              <input
                id='inline-2-radio'
                type='radio'
                {...register('sex')}
                value='female'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                htmlFor='inline-2-radio'
                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Female
              </label>
            </div>
          </div>
        </div>

        <button
          className='flex h-10 mt-7 bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'
          type='button'
          onClick={() => {
            setValue('firstName', 'Set value by action')
            setValue('ageGroup', '1')
            setValue('isDeveloper', true)
            setValue('sex', 'male')
          }}
        >
          Set All Values
        </button>
        <button className='flex h-10 mt-7 bg-rose-300 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'>
          Submit
        </button>
      </form>
    </div>
  )
}

Sample1.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
