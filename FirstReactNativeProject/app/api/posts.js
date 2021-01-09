import client from "./client";

const endpoint = "posts/";

const getPosts = () => client.get(endpoint);

const addPost = (title, message, group, author) =>
  client.post(endpoint, { title, message, group, author });

const deletePost = (id) => client.delete(endpoint + id + "/");

const searchPosts = (querytext) =>
  client.post(endpoint + "search/", { querytext });

export default {
  getPosts,
  addPost,
  searchPosts,
  deletePost,
};
