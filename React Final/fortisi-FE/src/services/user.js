import { userEndpoints } from '../API/endpoints'
import { get, post } from '../API/requester'

export async function register(userData) {
    return await post(userEndpoints.register, userData)
}

export async function login(userData) {
    return await post(userEndpoints.login, userData)
}

export async function logout(userData) {
    return await post(userEndpoints.logout, userData)
}

export async function getStoredProducts() {
    return await get(userEndpoints.storedProducts)
}

export async function postStoredProducts(data) {
    return await post(userEndpoints.storedProducts, data)
}

export async function changeUserInformation(data) {
    return await post(userEndpoints.changeInfo, data)
}

export async function resetPassword(data) {
    return await post(userEndpoints.resetPass, data)
}

export async function updateUserAddress(data) {
    return await post(userEndpoints.updateAddressInfo, data)
}

export async function likeOrDislikeProduct(data) {
    return await post(userEndpoints.likeOrDislikeProduct, data)
}

export async function productStatus(id) {
    return await get(userEndpoints.productStatus(id))
}

export async function getAllLikedProducts(currentPage) {
    return await get(userEndpoints.getAllLiked(currentPage))
}
