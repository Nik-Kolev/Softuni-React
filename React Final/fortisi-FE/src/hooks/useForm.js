import { useState } from 'react'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter'

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues(state => ({ ...state, [name]: value }))
        setErrors(state => ({ ...state, [name]: '' }))
    }

    const handleSubmit = (callback) => {
        return function (e) {
            e.preventDefault()
            const validations = validateForm(values)
            setErrors(validations)

            if (Object.keys(validations.length === 0)) {
                callback(values)
            }
        }
    }

    const validateForm = (formValues) => {
        const errors = {}
        for (const key in formValues) {
            if (!formValues[key]) {
                errors[key] = `${capitalizeFirstLetter(key)} is required !`
            }
        }
        return errors
    }

    return { values, handleChange, handleSubmit, errors }
}