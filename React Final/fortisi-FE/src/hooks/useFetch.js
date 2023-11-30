import { useState, useEffect, useCallback } from 'react'

export const useFetch = (service, params) => {
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState()
    const [data, setData] = useState()


    const fetchData = useCallback(async () => {
        setIsLoading(true)
        try {
            const result = await service(params)
            setIsLoading(false)
            setData(result)
        } catch (err) {
            setErrors(err.message)
        } finally {
            setIsLoading(false)
        }
    }, [service, params])

    useEffect(() => {
        fetchData()
    }, [fetchData])


    return { isLoading, errors, data }
}
