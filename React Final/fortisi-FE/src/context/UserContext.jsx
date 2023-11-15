import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    // const setUserData = (userData) => {
    //     setUser();
    // };
    const clearUserData = () => {
        setUser([]);
    };

    const contextValues = {
        user,
        setUser,
        isAuthenticated: !!user.token,
        clearUserData,
    };

    return <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
