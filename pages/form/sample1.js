import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import tw, { styled } from 'twin.macro'

import Layout from '@/components/main/Layout'
import { Input } from '@/components/form/components'

// const TailwindInput = tw.input`
//   bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
// `

const TailwindCheckbox = tw.input`
  w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600
`

const TailwindSelect = tw.select`
  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
`

const TailwindRadio = tw.input`
  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600
`

const TailwindButton = tw.button`
  flex h-10 mt-7 bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800
`

const ConditionalButton = styled.button(({ isRose }) => [
  isRose
    ? `background:rgb(253 164 175);`
    : tw`bg-indigo-500 hover:border-indigo-700`,
  tw`
    flex h-10 mt-7
    text-white px-4 py-2 border rounded-md
    hover:text-gray-800
  `,
])

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export default function Sample1() {
  const { register, handleSubmit, setValue, control, reset, watch } = useForm()

  const watchReactSelect = watch('reactSelect')

  useEffect(() => {
    console.log('*** react select value:', watchReactSelect)
  }, [watchReactSelect])

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
          {/* <label
            htmlFor='firstName'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            First Name
          </label>
          <TailwindInput
            placeholder='bill'
            {...register('firstName', {
              onChange: (e) => console.log(e.target.value),
            })}
          /> */}
          <Input
            label='First Name'
            name='firstName'
            placeholder='bill'
            onChange={(e) => console.log(e.target.value)}
            register={register}
            required
          />
        </div>

        <div>
          {/* <label
            htmlFor='lastName'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Last Name
          </label>
          <TailwindInput placeholder='luo' {...register('lastName')} /> */}
          <Input
            label='Last Name'
            name='lastName'
            placeholder='luo'
            register={register}
            required
          />
        </div>

        <div>
          {/* <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Email
          </label>
          <TailwindInput
            placeholder='bluebill1049@hotmail.com'
            type='email'
            {...register('email')}
          /> */}
          <Input
            type='email'
            label='Email'
            name='email'
            placeholder='bluebill1049@hotmail.com'
            register={register}
          />
        </div>

        <div>
          <div className='flex items-center mb-4'>
            <TailwindCheckbox
              id='default-checkbox'
              type='checkbox'
              {...register('isDeveloper')}
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
          <TailwindSelect {...register('ageGroup')}>
            <option value='0'>0 - 1</option>
            <option value='1'>1 - 100</option>
          </TailwindSelect>
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Wrapper component(React Select)
          </label>

          <Controller
            name='reactSelect'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select isClearable options={options} {...field} />
            )}
          />
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Sex
          </label>
          <div className='flex'>
            <div className='flex items-center mr-4'>
              <TailwindRadio
                id='inline-radio'
                type='radio'
                {...register('sex')}
                value='male'
              />
              <label
                htmlFor='inline-radio'
                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Male
              </label>
            </div>
            <div className='flex items-center mr-4'>
              <TailwindRadio
                id='inline-2-radio'
                type='radio'
                {...register('sex')}
                value='female'
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

        <TailwindButton
          type='button'
          onClick={() => {
            setValue('firstName', 'Set value by action')
            // setValue('lastName', 'Chou')
            setValue('ageGroup', '1')
            setValue('isDeveloper', true)
            setValue('sex', 'male')
            setValue('reactSelect', { value: 'vanilla', label: 'Vanilla' })

            // reset({ ReactSelect: { value: 'vanilla', label: 'Vanilla' } })
          }}
        >
          Set All Values
        </TailwindButton>
        <ConditionalButton isRose>Submit</ConditionalButton>
      </form>
    </div>
  )
}

Sample1.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
