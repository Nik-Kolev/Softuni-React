export const userEndpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
    storedProducts: '/users/basket',
    changeInfo: '/users/changeInformation',
    resetPass: '/users/resetPassword',
    updateAddressInfo: '/users/addressInformation',
    getAllLiked: (currentPage) => `/users/all-liked?page=${currentPage}`,
    likeOrDislikeProduct: '/users/liked',
    productStatus: (id) => `/users/liked/${id}`,
}

export const productEndpoints = {
    create: '/product/create',
    getByCategory: (category, currentPage) => `/product/getByCategory/${category}?page=${currentPage}`,
    getById: (id) => `/product/getSingleProductById/${id}`,
    editProduct: (id) => `/product/editProductById/${id}`,
    delProduct: (id) => `/product/delete/${id}`,

}