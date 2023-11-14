import { create } from 'zustand'

export const useErrorStore = create((set) => ({
    errors: [],

    clearErrors: () => {
        set({ errors: [] })
    },

    setError: (message) => {
        set(() => {
            return { errors: message.split(',') }
        });
    },
}));