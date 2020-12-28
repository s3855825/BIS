import client from './client';

const endpoint = 'groups/'

const getGroups = () => client.get(endpoint)

const addGroups = (group_name) => client.post(endpoint, { group_name })

export default {
    getGroups,
    addGroups,
};