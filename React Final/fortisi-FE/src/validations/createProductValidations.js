import * as yup from 'yup'


export const productSchema = yup.object().shape({
    productType: yup.string().trim().required('Product Type is required.'),
    name: yup.string().trim().required('Product Name is required.'),
    quantity: yup.string().trim().required(),
    price: yup.string().trim().required(),
    imageUrl: yup.string().trim().required(),
    description: yup.string().trim().required(),
    advantages: yup.string().trim().required(),
    color: yup.string().trim().required('Color is required.'),
    size: yup.string().trim().required(),
    materials: yup.string().trim().required()
})