import * as yup from 'yup'

const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

export const loginSchema = yup.object().shape({
    email: yup.string().trim().required('Имейлът е задължителен.').email("Невалиден Имейл.").matches(emailRegex, "Невалиден Имейл."),
    password: yup.string().trim().required('Паролата е задължителна.').min(3, 'Паролата трябва да бъде минимум 3 символа.')
})
