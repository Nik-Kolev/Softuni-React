const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return data.users;
};

export const getOne = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();

    return data.user;
};

export const createUser = async (userData) => {
    const { country, city, street, streetNumber, ...data } = userData;

    data.address = { country, city, street, streetNumber: Number(streetNumber) };
    const response = await fetch(baseUrl, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    return result.user;
};

export const remove = async (userId) => {
    console.log(userId);
    await fetch(`${baseUrl}/${userId}`, {
        method: 'delete',
    });
};

export const updateUser = async (userId, userData) => {
    const { country, city, street, streetNumber, ...data } = userData;

    data.address = { country, city, street, streetNumber: Number(streetNumber) };
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'put',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    return result.user;
};
