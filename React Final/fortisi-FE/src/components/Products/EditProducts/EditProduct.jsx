import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useNotificationContext } from '../../../context/NotificationContext';
import { editSingleProductById, getSingleProductById } from '../../../services/product';
import ProductForm from '../ProductForm/ProductForm';

export default function EditProduct() {
    const [currentProduct, setCurrentProduct] = useState();
    const { setNotification } = useNotificationContext();
    const navigateTo = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        getSingleProductById(id)
            .then((data) => {
                setCurrentProduct(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const onSubmitHandler = async (data) => {
        const { productType, name, quantity, price, discount, imageUrl, category, ...details } = data;
        try {
            console.log(details);
            await editSingleProductById(id, { productType, name, quantity, price, discount, imageUrl, category, details });
            navigateTo(`/catalog/${category}/${id}`);
        } catch (err) {
            setNotification(err.message);
        }
    };

    const data = {
        operationType: 'Редактирай Продукт',
        defaultValues: currentProduct,
        onSubmitHandler,
    };

    return <ProductForm {...data} />;
}
