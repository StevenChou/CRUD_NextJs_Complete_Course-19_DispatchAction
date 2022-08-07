import React from 'react'
import { useForm } from 'react-hook-form'
import tw, { styled } from 'twin.macro'

const normalInput =
  'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

const errorInput =
  'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'

const TailwindInput = tw.input`
  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
`

const TailwindInputAdv = styled.input(({ isError }) => [
  isError ? tw`${errorInput}` : tw`${normalInput}`,
])

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

export function Form({ defaultValues, children, onSubmit }) {
  const { handleSubmit, register } = useForm({ defaultValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child
          })
        : children}
    </form>
  )
}

export const Input = ({
  name,
  label,
  register,
  errors,
  required,
  onchange,
  ...rest
}) => (
  <>
    <label
      htmlFor={label}
      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
    >
      {label}
    </label>
    {/* <TailwindInput {...register(name, { required, onchange })} {...rest} /> */}
    <TailwindInputAdv
      {...register(name, { required, onchange })}
      {...rest}
      isError={errors && errors[name]}
    />
    {errors && errors[name] && (
      <p className='mt-1 text-sm text-red-600 dark:text-red-500'>
        <span className='font-medium'>{errors[name].message}</span>
      </p>
    )}
  </>
)

export const Checkbox = ({ name, label, register, ...rest }) => {
  return (
    <div className='flex items-center mb-4'>
      <TailwindCheckbox
        id={`checkbox-${name}`}
        type='checkbox'
        {...register(name)}
        {...rest}
      />
      <label
        htmlFor={`checkbox-${name}`}
        className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {label}
      </label>
    </div>
  )
}

export function Select({ register, options, name, label, ...rest }) {
  return (
    <>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {label}
      </label>
      <TailwindSelect {...register(name)} {...rest}>
        {options.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </TailwindSelect>
    </>
  )
}

export function Radios({ register, options, name, label, ...rest }) {
  return (
    <>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {label}
      </label>
      <div className='flex'>
        {options.map((option, i) => (
          <div className='flex items-center mr-4' key={i}>
            <TailwindRadio
              id={`inline-${i}-radio-${name}`}
              type='radio'
              value={option.value}
              {...register(name)}
              {...rest}
            />
            <label
              htmlFor={`inline-${i}-radio-${name}`}
              className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </>
  )
}

export const Button = ({ label, ...rest }) => (
  <TailwindButton {...rest}>{label}</TailwindButton>
)

export const ColorButton = ({ label, isRose, ...rest }) => (
  <ConditionalButton isRose {...rest}>
    {label}
  </ConditionalButton>
)
