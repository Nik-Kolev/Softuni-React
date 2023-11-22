import { createContext, useContext, useState } from 'react';
import { useLocaleStorage } from '../hooks/useLocalStorage';
import * as productServices from '../services/product';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState();

    const onCreateProductHandler = async (productData) => {
        const productId = await productServices.createProduct(productData);
        setProduct(productId);
    };

    const contextValues = {
        product,
        onCreateProductHandler,
    };

    return <ProductContext.Provider value={contextValues}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => {
    return useContext(ProductContext);
};
