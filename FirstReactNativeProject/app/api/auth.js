import client from "./client";

const login = (username, password) =>
  client.post("accounts/auth/", { username, password });

const register = (email, username, password) =>
  client.post("accounts/", { email, username, password });

const deleteUser = (id) => client.delete("accounts/" + id + "/");

export default {
  login,
  register,
  deleteUser,
};
