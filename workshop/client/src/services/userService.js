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
