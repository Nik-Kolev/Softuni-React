import { userEndpoints } from '../API/endpoints'
import { post, get } from '../API/requester'

export async function register(userData) {
    return await post(userEndpoints.register, userData)
}

export async function login(userData) {
    return await post(userEndpoints.login, userData)
}

export async function logout() {
    return await get(userEndpoints.logout)
}