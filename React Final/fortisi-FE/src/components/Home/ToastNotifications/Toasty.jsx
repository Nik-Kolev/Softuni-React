import './Toasty.css';
import { useEffect, useState } from 'react';
import { useNotificationContext } from '../../../context/NotificationContext';

export default function Toasty() {
    const [isToastVisible, setToastIsVisible] = useState(false);
    const { notifications, clearNotification } = useNotificationContext();
    useEffect(() => {
        const hasErrors = Object.keys(notifications).length > 0;
        setToastIsVisible(hasErrors);
        if (hasErrors) {
            const timeout = setTimeout(() => {
                setToastIsVisible(false);
                clearNotification();
            }, 3000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [notifications, clearNotification]);

    return (
        isToastVisible && (
            <div className='toast-container'>
                {notifications.map((x) => (
                    <div key={x} className='error-message'>
                        <p>{`${x}`}</p>
                    </div>
                ))}
            </div>
        )
    );
}
