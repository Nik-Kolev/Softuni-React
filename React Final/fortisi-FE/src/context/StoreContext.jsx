/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import toast from 'react-simple-toasts';

import { initialState, storeReducer } from '../reducers/storeReducer';
import { getStoredProducts } from '../services/user';
import { useUserContext } from './UserContext';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    const { user } = useUserContext();
    
    useEffect(() => {
        if (user) {
            const fetchStoredProducts = async () => {
            try {
                const result = await getStoredProducts();

                if (result && result.storedProducts.length > 0) {
                    dispatch({
                        type: 'add',
                        payload: result.storedProducts,
                    });

                    let total = 0;

                    result.storedProducts.forEach((x) => {
                        total += Number(x.price);
                        
                    });

                     dispatch({
                        type: 'update price',
                        payload: total,
                    });
                }
            } catch (err) {
                toast(err.message)
            }
        };

        fetchStoredProducts();
        }
        
    }, [user]);

    const addToBasket = useCallback(
        (products) => {
            let newProducts = Array.isArray(products) ? products : [products];
            let updatedProducts = [...state.products, ...newProducts];
        
            let total = 0;
            updatedProducts.forEach((x) => {
                total += Number(x.price);
            });

            dispatch({
                type: 'update price',
                payload: total,
            });

            dispatch({
                type: 'add',
                payload: updatedProducts,
            });
        },
        [state.products]
    );

    const removeFromBasket = useCallback(
        (id) => {
            const updateProducts = state.products.filter((x) => x._id != id);
           
            let total = state.total - state.products.find(x => x.id = id).price
           
            dispatch({
                type: 'update price',
                payload: total,
            });
            
            dispatch({
                type: 'remove',
                payload: updateProducts,
            });
        },
        [state.products, state.total]
    );

    const emptyBasket = useCallback(() => {
        dispatch({
            type: 'empty basket',
        });
    }, []);

    const contextValues = {
        total: state.total,
        products: state.products,
        addToBasket,
        removeFromBasket,
        emptyBasket,
    };

    return <StoreContext.Provider value={contextValues}>{children}</StoreContext.Provider>;
};

export const useStoreContext = () => {
    return useContext(StoreContext);
};
