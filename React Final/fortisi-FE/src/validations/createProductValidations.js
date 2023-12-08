import * as yup from 'yup'

const allowedCategories = ['bedroom', 'livingroom', 'kitchen', 'children', 'entranceHall', 'office'];

export const productSchema = yup.object().shape({
    productType: yup.string().trim().required('Полето е задължително.'),
    name: yup.string().trim().required('Полето е задължително.'),
    category: yup
        .string()
        .test('is-allowed', 'Невалидна категория.', (value) => {
            if (!allowedCategories.includes(value)) {
                throw new yup.ValidationError('Невалидна категория.', value, 'category');
            }
            return true;
        })
        .required('Избери опция.'),
    quantity: yup
        .number()
        .typeError('Въведете положително число за количество.')
        .positive('Количество трябва да бъде положително число.')
        .required('Полето е задължително.'),
    price: yup
        .number()
        .typeError('Въведете положително число за цена.')
        .positive('Цена трябва да бъде положително число.')
        .required('Полето е задължително.'),
    discount: yup
        .number()
        .typeError('Въведете положително число за отстъпка.')
        .positive('Отстъпка трябва да бъде положително число.')
        .required('Полето е задължително.'),
    description: yup.string().trim().required('Полето е задължително.'),
    advantages: yup.string().trim().required('Полето е задължително.'),
    color: yup.string().trim().required('Полето е задължително.'),
    size: yup.string().trim().required('Полето е задължително.'),
    materials: yup.string().trim().required('Полето е задължително.'),
})