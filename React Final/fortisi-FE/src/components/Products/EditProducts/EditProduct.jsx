import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-simple-toasts';

import { useSpinner } from '../../../hooks/useSpinner';
import { editSingleProductById, getSingleProductById } from '../../../services/product';
import Spinner from '../../Home/Spinner/Spinner';
import ProductForm from '../ProductForm/ProductForm';

export default function EditProduct() {
    const navigateTo = useNavigate();
    const [data, setData] = useState();
    const { id } = useParams();
    // const { isLoading, errors, data } = useFetch(getSingleProductById, id);
    const { isLoading, handleIsLoading } = useSpinner();

    useEffect(() => {
        handleIsLoading(async () => {
            const result = await getSingleProductById(id);
            setData(result);
        }).catch((err) => {
            toast(err.message);
        });
    });
    // if (errors) {
    //     setNotification(errors);
    // }

    const onSubmitHandler = async (data) => {
        const { productType, name, quantity, price, discount, imageUrl, category, ...details } = data;
        try {
            console.log(details);
            await editSingleProductById(id, { productType, name, quantity, price, discount, imageUrl, category, details });
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
    if (isLoading) {
        return <Spinner />;
    }
    return <ProductForm {...props} />;
}
