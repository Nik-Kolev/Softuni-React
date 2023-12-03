import * as yup from 'yup'

const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
const phoneRegex = new RegExp(/^([+]?359)|0?(|-| )8[789]\d{1}(|-| )\d{3}(|-| )\d{3}$/)

export const registerSchema = yup.object().shape({
    firstName: yup.string().trim().required('Името е задължително.'),
    lastName: yup.string().trim().required('Фамилията е задължителна.'),
    phoneNumber: yup.string().trim().required('Телефонният номер е задължителен.').matches(phoneRegex, 'Невалиден формат на телефонен номер.'),
    password: yup.string().trim().required('Паролата е задължителна.').min(3, 'Паролата трябва да бъде минимум 3 символа.'),
    rePass: yup.string().required('Потвърждението на паролата е задължително.').oneOf([yup.ref('password'), null], 'Паролите трябва да съвпадат.'),
    email: yup.string().trim().required('Имейлът е задължителен.').email("Невалиден имейл.").matches(emailRegex, "Невалиден имейл.")
})