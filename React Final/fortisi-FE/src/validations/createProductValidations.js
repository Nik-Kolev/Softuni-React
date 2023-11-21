import * as yup from 'yup'


export const productSchema = yup.object().shape({
    productType: yup.string().trim().required('Product Type is required.'),
    name: yup.string().trim().required('Product Name is required.'),
    color: yup.string().trim().required('Color is required.'),
    advantages: yup.string().trim().required(),
    imageUrl: yup.string().trim().required(),
    size: yup.string().trim().required(),
    materials: yup.string().trim().required(),
    quantity: yup.string().trim().required(),
    // description: yup.string().trim().required()
})