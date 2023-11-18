import { useState } from 'react'
import { getUserData, setUserData, clearUserData } from '../utils/userLocaleStorage'

export const useLocaleStorage = (initialValue) => {
    const [state, setState] = useState(() => {
        if (!getUserData()) {
            return initialValue
        }
    })

    const updateLocaleState = (value) => {
        if (value == 'clear') {
            setState({})
            clearUserData()
        } else {
            setState(value)
            setUserData(value)
        }
    }

    return [
        state,
        updateLocaleState
    ]
}