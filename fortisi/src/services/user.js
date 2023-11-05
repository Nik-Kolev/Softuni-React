import { userEndpoints } from '../API/endpoints'
import { post } from '../API/requester'
import { setUserData } from '../Utils/userLocaleStorage'

export async function register(userData) {
    const user = await post(userEndpoints.register, userData)
    setUserData(user)
    return user
}