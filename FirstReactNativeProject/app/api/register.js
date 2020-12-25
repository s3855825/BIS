import client from './client';

const register = ( email, username, password ) => client.post('accounts/', {email, username, password})

export default {
    register,
};