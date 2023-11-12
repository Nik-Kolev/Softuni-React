export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem('userData');
}

// export function setError(data) {
//     localStorage.setItem('Error', JSON.stringify(data.error))
// }

// export function clearError() {
//     localStorage.removeItem('Error')
// }