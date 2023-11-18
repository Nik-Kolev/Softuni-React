import { createContext, useContext } from 'react';
import { useLocaleStorage } from '../hooks/useLocalStorage';
import * as userServices from '../services/user';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useLocaleStorage();

    const onLoginHandler = async (userData) => {
        const user = await userServices.login(userData);
        if (!user) {
            throw user;
        }
        setUser(user);
    };

    const onRegisterHandler = async (userData) => {
        const user = await userServices.register(userData);
        setUser(user);
    };

    const onLogoutHandler = async () => {
        const response = await userServices.logout();
        setUser('clear');
        //TODO: Change user logged out message
        return response;
    };

    const contextValues = {
        user,
        isAuthenticated: !!user?.token,
        onLoginHandler,
        onRegisterHandler,
        onLogoutHandler,
    };

    return <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    return useContext(UserContext);
};
