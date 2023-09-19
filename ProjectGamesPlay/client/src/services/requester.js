let host = 'http://localhost:3030/jsonstore';

async function requester(method, url, params) {
    const options = {
        method,
        headers: {}
    }
    if (params) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(params)
    }

    try {
        let response = await fetch(host + url, options)
        let result = null

        if (response.status != 204) {
            result = await response.json()
        }

        if (!response.ok) {
            let error = result
            throw error
        }

        return result
    } catch (err) {
        alert(err.message)
        throw err;
    }
}

export const get = requester.bind(null, 'get')
export const post = requester.bind(null, 'post')
export const del = requester.bind(null, 'delete')
export const put = requester.bind(null, 'put')


