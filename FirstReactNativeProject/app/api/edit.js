import client from './client';

const edit = ( email, username, password ) => client.post('accounts/', {email, username, password})

export default {
    edit,
};