/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';

import { useLocaleStorage } from '../hooks/useLocalStorage';
import * as userServices from '../services/user';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useLocaleStorage();
    console.log(user);
    const onLoginHandler = async (userData) => {
        try {
            const user = await userServices.login(userData);
            setUser(user);
        } catch (err) {
            throw Error(err.message);
        }
    };

    const onRegisterHandler = async (userData) => {
        const user = await userServices.register(userData);
        setUser(user);
    };

    const onLogoutHandler = async () => {
        const response = await userServices.logout(user);
        setUser('clear');
        return response;
    };

    const onChangeUserInfo = async (userData) => {
        const response = await userServices.changeUserInformation(userData);
        setUser(response);
    };

    const onChangePassword = async (userData) => {
        const response = await userServices.resetPassword(userData);
        setUser(response);
    };

    const contextValues = {
        user,
        isAuthenticated: !!user?.token,
        isAdmin: !!user?.admin,
        onLoginHandler,
        onRegisterHandler,
        onLogoutHandler,
        onChangeUserInfo,
        onChangePassword,
    };

    return <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
    return useContext(UserContext);
};
