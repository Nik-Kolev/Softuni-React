import { createContext, useContext } from 'react';
import { useLocaleStorage } from '../hooks/useLocalStorage';
import * as productServices from '../services/product';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useLocaleStorage('product');

    const onCreateProductHandler = async (productData) => {
        const product = await productServices.createProduct(productData);
        setProduct(product);
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
