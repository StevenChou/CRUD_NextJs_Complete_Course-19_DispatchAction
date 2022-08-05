import { useForm, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { v4 as uuidv4 } from 'uuid'
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io'

import Layout from '@/components/main/Layout'

const normalInput =
  'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

const errorInput =
  'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'

const newMemberSchema = yup.object().shape({
  test: yup.array().of(
    yup.object().shape({
      firstName: yup.string().required('First Name is required'),
      lastName: yup.string().required('Last Name is required'),
    })
  ),
})
export default function Sample3() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      test: [{ id: uuidv4(), firstName: 'Bill', lastName: 'Luo' }],
    },
    resolver: yupResolver(newMemberSchema),
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  })

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'test',
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  const handleAddFields = () => {
    append({ id: uuidv4(), firstName: '', lastName: '' })
  }

  const handleRemoveFields = (index) => {
    remove(index)
  }

  const cusInputs = (key, index) => {
    return (
      <div className='flex gap-2' key={key}>
        <div className='flex flex-col w-44'>
          <label
            htmlFor='firstName'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Frist Name
          </label>
          <input
            {...register(`test.${index}.firstName`)}
            className={
              !errors?.test?.[index]?.firstName ? normalInput : errorInput
            }
          />
          {errors?.test?.[index]?.firstName && (
            <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
              <span className='font-medium'>
                {errors?.test?.[index].firstName.message}
              </span>
            </p>
          )}
        </div>

        <div className='flex flex-col w-44'>
          <label
            htmlFor='lastName'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Last Name
          </label>
          <input
            {...register(`test.${index}.lastName`)}
            className={
              !errors?.test?.[index]?.lastName ? normalInput : errorInput
            }
          />
          {errors?.test?.[index]?.lastName && (
            <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
              <span className='font-medium'>
                {errors?.test?.[index].lastName.message}
              </span>
            </p>
          )}
        </div>

        <button
          disabled={fields.length === 1}
          onClick={() => handleRemoveFields(index)}
          className='flex h-10 mt-7 bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'
        >
          <IoIosCloseCircleOutline />
        </button>
        <button
          onClick={handleAddFields}
          className='flex h-10 mt-7 bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'
        >
          <IoIosAddCircleOutline />
        </button>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
      <h1>Add New Member</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-4 md:space-y-6'
      >
        {fields.map((field, index) => cusInputs(field.id, index))}
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
