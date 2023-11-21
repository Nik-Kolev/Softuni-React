import { useState } from 'react'
import { clearProductData, getProductData, setProductData } from '../utils/productLocalStorage';
import { getUserData, setUserData, clearUserData } from '../utils/userLocaleStorage'

export const useLocaleStorage = (storageUnit) => {
    let getData;
    let setData;
    let clearData;

    if (storageUnit == 'user') {
        getData = getUserData;
        setData = setUserData;
        clearData = clearUserData;
    } else {
        getData = getProductData;
        setData = setProductData;
        clearData = clearProductData
    }
    const [state, setState] = useState(getData)

    const updateLocaleState = (value) => {
        if (value == 'clear') {
            setState({})
            clearData()
        } else {
            setState(value)
            setData(value)
        }
    }

    return [
        state,
        updateLocaleState
    ]
}