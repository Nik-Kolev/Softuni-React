const baseUrl = 'http://localhost:3000'

import { getUserData, clearUserData } from "../utils/userLocaleStorage"

async function request(method, endpoint, params) {
    const options = {
        method,
        headers: {}
    }

    if (params) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(params)
    }

    let user = getUserData()
    if (user) {
        options.headers['auth'] = user.token
    }
    try {
        let response = await fetch(baseUrl + endpoint, options);
        console.log(response)
        let data = null;

        if (response.status != 204) {
            data = await response.json();
        }

        if (!response.ok) {
            if (response.status === 403) {
                clearUserData();
            }
            let error = data;
            console.log(data)
            throw new Error(error);
        }
        return data;
    } catch (err) {
        console.log(err)
        throw new Error(err.message)
    }
}


export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');