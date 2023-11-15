import { createContext, useState } from 'react';

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const setNotification = (message) => {
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

export { NotificationContext, NotificationProvider };
