import * as yup from 'yup'

export const quoteSchema = yup.object().shape({
    quoteTitle: yup.string().trim().required('Цитатът е задължителен.').min(10, 'Цитатът трябва да е между 10 и 30 символа.').max(30, 'Цитатът трябва да е между 10 и 30 символа.'),
    text: yup.string().trim().required('Текстът е задължителен.').min(10, 'Текстът трябва да е между 10 и 50 символа.').max(50, 'Текстът трябва да е между 10 и 50 символа.'),
})
