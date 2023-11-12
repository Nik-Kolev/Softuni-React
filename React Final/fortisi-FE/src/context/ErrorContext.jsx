import { createContext, useState, useContext } from 'react';

const ErrorContext = createContext();

export const useErrorContext = () => {
    return useContext(ErrorContext);
};

export const ErrorProvider = ({ children }) => {
    const [errors, setErrors] = useState({});

    const clearErrors = () => {
        setErrors({});
    };

    const setError = (message) => {
        let msg = message.split(', ');
        console.log(message);
        let newErrors = msg.reduce((acc, errorMsg) => {
            const [field, error] = errorMsg.split(': ');
            if (error == undefined) {
                acc[field] = '';
                return acc;
            }
            acc[field] = error;
            return acc;
        }, {});
        console.log(newErrors);
        setErrors((state) => ({ ...state, ...newErrors }));
    };

    return <ErrorContext.Provider value={{ errors, clearErrors, setError }}>{children}</ErrorContext.Provider>;
};
