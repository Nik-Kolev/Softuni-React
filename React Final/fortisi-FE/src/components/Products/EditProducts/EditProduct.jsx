import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { supabaseUploader } from '../../../API/supabase';
import { useSpinner } from '../../../hooks/useSpinner';
import { editSingleProductById, getSingleProductById } from '../../../services/product';
import Spinner from '../../Home/Spinner/Spinner';
import ProductForm from '../ProductForm/ProductForm';

export default function EditProduct() {
    const navigateTo = useNavigate();
    const [data, setData] = useState();
    const { id } = useParams();
    const { isLoading, handleIsLoading } = useSpinner();

    useEffect(() => {
        handleIsLoading(async () => {
            const result = await getSingleProductById(id);
            setData(result);
        }).catch((err) => {
            toast(err.message);
        });
    }, [id, handleIsLoading]);

    const onSubmitHandler = async (data) => {
        const { productType, name, quantity, price, discount, imageUrl, category, ...details } = data;
        try {
            const newLink = await supabaseUploader(imageUrl[0], category);
            await editSingleProductById(id, { productType, name, quantity, price, discount, imageUrl: newLink, category, details });
            navigateTo(`/catalog/${category}/${id}`);
        } catch (err) {
            toast(err.message);
        }
    };

    const props = {
        operationType: 'Редактирай Продукт',
        defaultValues: data,
        onSubmitHandler,
    };

    return isLoading ? <Spinner /> : <ProductForm {...props} />;
}
