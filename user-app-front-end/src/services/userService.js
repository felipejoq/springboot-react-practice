import axios from "axios"

const BASE_URL = 'http://localhost:8080/api/users';

export const findAll = async() => {
    try {
        return await axios.get(BASE_URL);
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const save = async ({ username, email, password, name}) => {
    try {
        return await axios.post(BASE_URL, {
            username,
            email,
            password,
            name
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const update = async({ id, username, email, name }) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            username,
            email,
            name
        });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}