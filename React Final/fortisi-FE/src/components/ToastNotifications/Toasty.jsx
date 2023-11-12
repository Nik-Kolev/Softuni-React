import './Toasty.css';
import { useEffect, useState } from 'react';
import { useErrorContext } from '../../context/ErrorContext';

export default function Toasty() {
    const [isToastVisible, setToastIsVisible] = useState(false);
    const { errors, clearErrors } = useErrorContext();

    useEffect(() => {
        const hasErrors = Object.keys(errors).length > 0;
        setToastIsVisible(hasErrors);
        if (hasErrors) {
            const timeout = setTimeout(() => {
                setToastIsVisible(false);
                clearErrors();
            }, 3000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [errors, clearErrors]);
    return isToastVisible && <div className='toast-container'>{errors.message}</div>;
}
