import client from "./client";

const getUserPosts = (id) => client.get("accounts/" + id + "/posts/");

const getUserGroups = (id) => client.get("accounts/" + id + "/groups/");

export default {
  getUserPosts,
  getUserGroups,
};
