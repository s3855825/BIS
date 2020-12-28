import client from './client';
import { create } from 'apisauce';

const api = create({
    baseURL: 'https://groupmakercollab.herokuapp.com/'
})

const endpoint = 'posts/'

const getPosts = () => client.get(endpoint)

const addPosts = (title, message, author) => client.post(endpoint, { title, message, author })

// const searchPosts = (querytext) => api.get('posts/search',
//     { "querytext": "test" },
//     { headers: { 'Content-Type': 'application/json' }
// })

// const searchPosts = (querytext) => client.any({ method: 'GET', url: 'posts/search/', params: { querytext } })

// const addPosts = posts => {
//     const data = new FormData();
//     data.append('title', posts.title);
//     data.append('description', posts.description);

//     return client.post(endpoint, data);
// }

export default {
    getPosts,
    addPosts,
    searchPosts,
};