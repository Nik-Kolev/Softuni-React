import * as request from "./requester";

export const createGame = async (gameData) => {
    request.post('/games', gameData)
}

export const getAll = async () => {
    let data = await request.get('/games')
    if (data == undefined) {
        return []
    }
    return Object.values(data)
}