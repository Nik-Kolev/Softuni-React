import { create } from "zustand";

export const userStore = create((set) => ({
    user: { isAuthenticated: false },

    setUserData: (userInfo) => {
        set(() => {
            return { user: { ...userInfo, isAuthenticated: true } }
        })
    },

    clearUserData: () => {
        set({ user: {} })
    },

}))