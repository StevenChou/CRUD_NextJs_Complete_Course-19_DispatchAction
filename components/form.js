import { useReducer } from 'react'
import { useSelector } from 'react-redux'

import UpdateUserForm from './UpdateUserForm'
import AddUserForm from './AddUserForm'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  }
}

export default function Form() {
  const formId = useSelector((state) => state.app.client.formId)

  const [formData, setFormData] = useReducer(formReducer, {})

  return (
    <div className='container mx-auto py-5'>
      {formId
        ? UpdateUserForm({ formId, formData, setFormData })
        : AddUserForm({ formData, setFormData })}
    </div>
  )
}
