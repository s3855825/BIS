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

const replyRequest = (request_id, response, sender) =>
  client.post(endpoint + sender + "/reply/", {
    request_id,
    response,
    sender,
  });

// const approve = (group_id, )

export default {
  getInbox,
  getOutbox,
  sendRequest,
  replyRequest,
};
