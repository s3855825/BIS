import client from "./client";

const endpoint = "accounts/";

const getInbox = (id) => client.get(endpoint + id + "/inbox/");

const getOutbox = (id) => client.get(endpoint + id + "/outbox/");

const sendRequest = (
  title,
  message,
  sender,
  receiver,
  post,
  status = "Pending"
) =>
  client.post(endpoint + sender + "/send/", {
    title,
    message,
    sender,
    receiver,
    post,
    status,
  });

const replyRequest = (
  title,
  message,
  sender,
  receiver,
  post,
  status = "Pending"
) =>
  client.post(endpoint + sender + "/reply/", {
    title,
    message,
    sender,
    receiver,
    post,
    status,
  });

// const approve = (group_id, )

export default {
  getInbox,
  getOutbox,
  sendRequest,
  replyRequest,
};
