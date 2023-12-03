/* eslint-disable no-useless-catch */
import { useCallback, useState } from 'react'

export const useSpinner = () => {
    const [isLoading, setIsLoading] = useState(true)

    const handleIsLoading = useCallback(async (callBack) => {
        setIsLoading(true)

        try {
            const result = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    callBack().then(resolve).catch(reject);
                }, 1000);
            });
            return result
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false)
        }
    }, [])

    return { isLoading, handleIsLoading }
}