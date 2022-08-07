import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import ReactSelect from 'react-select'

import Layout from '@/components/main/Layout'
import {
  Input,
  Checkbox,
  Select,
  Radios,
  Button,
  ColorButton,
} from '@/components/form/components'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const SampleSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('此欄位必填')
    .min(3, '最少 3 個字')
    .max(10, '最多 10 個字'),
  lastName: yup.string().required('此欄位必填'),
  email: yup.string().email('電子郵件格式不符'),
})

export default function Sample1() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(SampleSchema),
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  })

  const watchReactSelect = watch('reactSelect')

  // onChange 的替代
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
          <Input
            label='First Name'
            name='firstName'
            placeholder='bill'
            register={register}
            errors={errors}
            required
          />
        </div>

        <div>
          <Input
            label='Last Name'
            name='lastName'
            placeholder='luo'
            register={register}
            errors={errors}
            required
          />
        </div>

        <div>
          <Input
            type='email'
            label='Email'
            name='email'
            placeholder='bluebill1049@hotmail.com'
            errors={errors}
            register={register}
          />
        </div>

        <div>
          <Checkbox
            name='isDeveloper'
            label='Is developer?'
            register={register}
          />
        </div>

        <div>
          <Select
            register={register}
            name='ageGroup'
            label='Age group'
            options={[
              { label: '0 - 1', value: '0' },
              { label: '1 - 100', value: '1' },
            ]}
          />
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
              <ReactSelect isClearable options={options} {...field} />
            )}
          />
        </div>

        <div>
          <Radios
            register={register}
            name='sex'
            label='Sex'
            options={[
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
            ]}
          />
        </div>

        <Button
          label='Set All Values'
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
        />

        <ColorButton label='Submit' type='submit' />
      </form>
    </div>
  )
}

Sample1.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
