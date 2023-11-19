import * as yup from 'yup'

const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const phoneRegex = new RegExp(/^([+]?359)|0?(|-| )8[789]\d{1}(|-| )\d{3}(|-| )\d{3}$/)

export const registerSchema = yup.object().shape({
    firstName: yup.string().trim().required('First name is required.'),
    lastName: yup.string().trim().required('Last name is required.'),
    phoneNumber: yup.string().required('Phone Number is required.').matches(phoneRegex, 'Invalid phone format.'),
    password: yup.string().trim().required('Password is required.').min(3, 'Password must be minimum 3 characters.'),
    rePass: yup.string().required('Confirm password is required.')
        .oneOf([yup.ref('password'), null], 'Passwords must match.'),
    email: yup.string().trim().required('Email is required.').email("Invalid email.").matches(emailRegex, "Invalid email."),
})