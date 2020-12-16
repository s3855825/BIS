import client from './client';

const endpoint = '/listing'

const getListings = () => client.get(endpoint);

export default {
    getListings,
}