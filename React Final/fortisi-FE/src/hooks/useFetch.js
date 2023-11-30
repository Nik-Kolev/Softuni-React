import { useState, useEffect } from 'react';

export const useFetch = (service, params) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const result = await service(params);
                setData(result);
            } catch (err) {
                setErrors(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [service, params]);

    return { isLoading, errors, data };
};


//Use this for throttling to see the loading spinner.

// export const useFetch = (service, params) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [errors, setErrors] = useState();
//     const [data, setData] = useState();

//     useEffect(() => {
//         setIsLoading(true);
//         const timeout = setTimeout(() => {
//             const fetchData = async () => {
//                 try {
//                     const result = await service(params);
//                     setData(result);
//                 } catch (err) {
//                     setErrors(err.message);
//                 } finally {
//                     setIsLoading(false);
//                 }
//             };
//             fetchData();
//         }, Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000)
//         return (() => {
//             clearTimeout(timeout)
//         })
//     }, [service, params]);

//     return { isLoading, errors, data };
// };