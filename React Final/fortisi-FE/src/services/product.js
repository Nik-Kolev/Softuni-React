import { productEndpoints } from "../API/endpoints"
import { get, post } from '../API/requester'

export async function createProduct(productData) {
    return await post(productEndpoints.create, productData)
}

export async function getProductByCategory(category) {
    return await get(productEndpoints.getByCategory(category))
}

export async function deleteProductById(id) {
    return await get(productEndpoints.delProduct(id))

}

export async function getSingleProductById(id) {
    return await get(productEndpoints.getById(id))
}