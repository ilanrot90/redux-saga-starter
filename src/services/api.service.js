import axios from 'axios';

axios.defaults.baseURL = 'https://rem-rest-api.herokuapp.com/api';
axios.defaults.withCredentials = true;

export const getUsers = async () => {
    const { data } = await axios.get('/users', {
        params: {
            limit: 10
        }
    });

    return data;
}

export const createUser = async (user) => {
    const { data } = await axios.post('/users', user);
    return data;
}

export const deleteUser = async (userId) => {
    await axios.delete(`/users/${userId}`);
}