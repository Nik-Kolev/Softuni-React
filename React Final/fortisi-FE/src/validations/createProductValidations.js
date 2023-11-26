import * as yup from 'yup'

const allowedCategories = ['bedroom', 'livingRoom', 'kitchen', 'children`sRoom', 'entranceHall', 'office'];
const allowedTypes = ['image/jpeg', 'image/png']
const maxSize = 150 * 1024 * 1024
export const productSchema = yup.object().shape({
    productType: yup.string().trim().required('Product type is required.'),
    name: yup.string().trim().required('Product name is required.'),
    category: yup
        .string()
        .test('is-allowed', 'Invalid category selected.', (value) => {
            if (!allowedCategories.includes(value)) {
                throw new yup.ValidationError('Invalid category selected.', value, 'category');
            }
            return true;
        })
        .required('Please select an option.'),
    quantity: yup.string().trim().required('Quantity is required.'),
    price: yup.string().trim().required('Price is required.'),
    description: yup.string().trim().required('Short description is required.'),
    advantages: yup.string().trim().required('Advantages is required.'),
    color: yup.string().trim().required('Color is required.'),
    size: yup.string().trim().required('Size is required.'),
    materials: yup.string().trim().required('Materials is required.'),
    imageUrl: yup.mixed().required('Image is required.')
        .test('fileSize', 'File size is too large', (value) => {
            return value && value[0].size <= maxSize
        })
        .test('fileType', 'Unsupported file type', (value) => {
            return value && allowedTypes.includes(value[0].type);
        })
})