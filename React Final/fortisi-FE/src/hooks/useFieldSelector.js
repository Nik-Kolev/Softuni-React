import { useEffect, useRef } from "react";

export const useFieldSelector = () => {
    const selectorRef = useRef(null)

    useEffect(() => {
        if (selectorRef.current) {
            selectorRef.current.focus()
        }
    }, [])

    return {
        selectorRef
    }
}