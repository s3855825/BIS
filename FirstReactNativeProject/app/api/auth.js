import client from './client';

const login = (username, password) => client.post('accounts/auth/', { username, password })

const register = (email, username, password) => client.post('accounts/', {email, username, password})

const getUserInfo = (id) => client.get('accounts/' + id + '/')

const getUserPosts = (id) => client.get('accounts/' + id + '/posts/')

// const deleteUser = (id) => client.delete('accounts/' + id + '/')

export default {
    login,
    register,
    getUserInfo,
    getUserPosts,
    // deleteUser
};