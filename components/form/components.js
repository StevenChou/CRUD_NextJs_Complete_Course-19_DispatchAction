import React from 'react'
import { useForm } from 'react-hook-form'
import tw, { styled } from 'twin.macro'

const TailwindInput = tw.input`
  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
`

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
    <TailwindInput {...register(name, { required, onchange })} {...rest} />
  </>
)

export function Select({ register, options, name, ...rest }) {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value, i) => (
        <option value={value} key={i}>
          {value}
        </option>
      ))}
    </select>
  )
}
