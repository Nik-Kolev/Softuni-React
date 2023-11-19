import * as yup from 'yup'

const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

export const loginSchema = yup.object().shape({
    email: yup.string().trim().required('Email is required.').email("Invalid email").matches(emailRegex, "Invalid email"),
    password: yup.string().trim().required('Password is required.').min(3, 'Password must be minimum 3 characters.')
})
