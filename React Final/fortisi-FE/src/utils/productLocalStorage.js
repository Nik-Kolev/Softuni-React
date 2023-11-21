export function getProductData() {
    return JSON.parse(localStorage.getItem('productData'));
}

export function setProductData(data) {
    localStorage.setItem('productData', JSON.stringify(data));
}

export function clearProductData() {
    localStorage.removeItem('productData');
}
