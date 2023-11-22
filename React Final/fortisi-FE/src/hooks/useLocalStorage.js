import { useState } from 'react'
import { getUserData, setUserData, clearUserData } from '../utils/userLocaleStorage'

export const useLocaleStorage = () => {
    const [state, setState] = useState(getUserData)

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