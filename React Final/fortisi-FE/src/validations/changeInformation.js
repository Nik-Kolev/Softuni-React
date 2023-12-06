import * as yup from 'yup'

const phoneRegex = new RegExp(/^([+]?359)|0?(|-| )8[789]\d{1}(|-| )\d{3}(|-| )\d{3}$/)

export const changeInformationSchema = yup.object().shape({
    firstName: yup.string().trim().required('Името е задължително.'),
    lastName: yup.string().trim().required('Фамилията е задължителна.'),
    phoneNumber: yup.string().trim().required('Телефонният номер е задължителен.').matches(phoneRegex, 'Невалиден формат на телефонен номер.'),
})