import client from "../api/client";
import { create } from "apisauce";

const api = create({
  baseURL: "https://groupmakercollab.herokuapp.com/",
});

const endpoint = "posts/";

const getPosts = () => client.get(endpoint);

const addPost = (title, message, author) =>
  client.post(endpoint, { title, message, author });

const deletePost = (id) => client.delete(endpoint + id + "/");

// const searchPosts = (querytext) => api.get('posts/search',
//     { "querytext": "test" },
//     { headers: { 'Content-Type': 'application/json' }
// })

const searchPosts = (querytext) =>
  client.get(endpoint + "search/", { querytext });

// const addPost = posts => {
//     const data = new FormData();
//     data.append('title', posts.title);
//     data.append('description', posts.description);

//     return client.post(endpoint, data);
// }

export default {
  getPosts,
  addPost,
  searchPosts,
  deletePost,
};