import { productEndpoints } from "../API/endpoints"
import { post } from '../API/requester'

export async function createProduct(productData) {
    return await post(productEndpoints.create, productData)
}