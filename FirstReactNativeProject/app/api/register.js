import client from "./client";

const register = (userInfo) => client.post("accounts/", userInfo);

export default {
  register,
};
