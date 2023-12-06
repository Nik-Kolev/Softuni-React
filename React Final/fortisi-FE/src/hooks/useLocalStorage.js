import { useState } from 'react'

import { clearUserData, getUserData, setUserData } from '../utils/userLocaleStorage'

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