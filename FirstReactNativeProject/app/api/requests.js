import client from "./client";

const endpoint = "accounts/";

const getInbox = (id) => client.get(endpoint + id + "/inbox/");

const getOutbox = (id) => client.get(endpoint + id + "/outbox/");

// const getOutbox = (id) => console.log(endpoint + id + "/outbox/");

export default {
  getInbox,
  getOutbox,
};
