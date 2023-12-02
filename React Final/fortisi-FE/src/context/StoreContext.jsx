import { useContext, createContext, useReducer } from 'react';
import { initialState, storeReducer } from '../reducers/storeReducer';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);

    const addToProducts = (product) => {
        const updateProducts = [...state.products, product];
        updatePrice(updateProducts);

        dispatch({
            type: 'add',
            payload: updateProducts,
        });
    };

    const removeFromProducts = (product) => {
        const updateProducts = state.products.filter((x) => x.name !== product.name);

        updatePrice(updateProducts);

        dispatch({
            type: 'remove',
            payload: updateProducts,
        });
    };

    const updatePrice = (products) => {
        let total = 0;
        products.forEach((x) => {
            total += Number(x.price);
        });

        dispatch({
            type: 'update price',
            payload: total,
        });
    };

    const contextValues = {
        total: state.total,
        products: state.products,
        addToProducts,
        removeFromProducts,
    };

    return <StoreContext.Provider value={contextValues}>{children}</StoreContext.Provider>;
};

export const useStoreContext = () => {
    return useContext(StoreContext);
};
