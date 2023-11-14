import { create } from "zustand";

export const userStore = create((set) => ({
    user: {},

    setUserData: (userInfo) => {
        set(() => {
            return { user: userInfo }
        })
    }
}))