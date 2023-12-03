import { useNavigate } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { supabaseUploader } from '../../../API/supabase';
import { createProduct } from '../../../services/product';
import ProductForm from '../ProductForm/ProductForm';

export default function CreateProduct() {
    const navigateTo = useNavigate();

    const onSubmitHandler = async (data) => {
        const { productType, name, quantity, price, discount, imageUrl, category, ...details } = data;
        try {
            const newLink = await supabaseUploader(imageUrl[0], category);
            const product = await createProduct({ productType, name, quantity, price, discount, imageUrl: newLink, category, details });
            navigateTo(`/catalog/${category}/${product._id}`);
        } catch (err) {
            toast(err.message);
        }
    };

    const data = {
        operationType: 'Създай Продукт',
        onSubmitHandler,
    };

    return <ProductForm {...data} />;
}
