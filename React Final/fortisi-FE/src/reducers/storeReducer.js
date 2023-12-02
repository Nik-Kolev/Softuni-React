export const initialState = {
    total: 0,
    products: []
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                products: action.payload
            }
        case "remove":
            return {
                ...state,
                products: action.payload
            }
        case "update price":
            return {
                ...state,
                total: action.payload
            }
        default: throw Error('Such case do not exist.')
    }
}