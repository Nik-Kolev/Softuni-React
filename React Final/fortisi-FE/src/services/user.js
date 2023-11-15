import { userEndpoints } from '../API/endpoints'
import { post, get } from '../API/requester'
import { clearUserData, setUserData } from '../Utils/userLocaleStorage'


export async function register(userData) {
    const user = await post(userEndpoints.register, userData)
    setUserData(user)
}

export async function login(userData) {
    const user = await post(userEndpoints.login, userData)
    setUserData(user)
    return user
}

export async function logout() {
    const user = await get(userEndpoints.logout)
    clearUserData()
    return user
}