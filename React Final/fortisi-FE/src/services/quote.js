import { quoteEndpoints } from "../API/endpoints"
import { get, post } from '../API/requester'

export async function createQuote(productData) {
    return await post(quoteEndpoints.create, productData)
}

export async function getSingleQuote() {
    return await get(quoteEndpoints.getSingleQuote)
}