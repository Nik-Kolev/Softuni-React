import { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const setNotification = (message) => {
        console.log(message);
        setNotifications(message.split(','));
    };

    const clearNotification = () => {
        setNotifications([]);
    };

    const contextValues = {
        notifications,
        setNotification,
        clearNotification,
    };

    return <NotificationContext.Provider value={contextValues}>{children}</NotificationContext.Provider>;
};

export const useNotificationContext = () => {
    return useContext(NotificationContext);
};
