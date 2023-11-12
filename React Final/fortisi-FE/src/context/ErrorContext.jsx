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
        setErrors((state) => ({ ...state, message }));
    };

    return <ErrorContext.Provider value={{ errors, clearErrors, setError }}>{children}</ErrorContext.Provider>;
};
