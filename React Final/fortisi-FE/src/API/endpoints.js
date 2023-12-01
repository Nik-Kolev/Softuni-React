export const userEndpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export const productEndpoints = {
    create: '/product/create',
    getByCategory: (category) => `/product/getByCategory/${category}`,
    getById: (id) => `/product/getSingleProductById/${id}`,
    editProduct: (id) => `/product/editProductById/${id}`,
    delProduct: (id) => `/product/delete/${id}`,
    likeOrDislikeProduct: '/users/liked',
    asdProduct: (id) => `/users/liked/${id}`,
}