import client from './client';

const endpoint = 'posts/'

const getPosts = () => client.get(endpoint)

const addPosts = (title, message, author) => client.post(endpoint, { title, message, author })

// const addPosts = posts => {
//     const data = new FormData();
//     data.append('title', posts.title);
//     data.append('description', posts.description);

//     return client.post(endpoint, data);
// }

export default {
    getPosts,
    addPosts,
};