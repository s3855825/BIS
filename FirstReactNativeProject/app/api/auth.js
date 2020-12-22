import client from './client';

const login = (username, password) => client.post('accounts/auth/', { username, password })

export default {
    login,
};