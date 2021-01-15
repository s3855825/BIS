import client from "./client";

const endpoint = "groups/";

const getGroups = () => client.get(endpoint);

const getUserGroups = (id) => client.get("accounts/" + id + "/groups/");

const addGroup = (group_name) => client.post(endpoint, { group_name });

const getMembers = (groupId) => client.get(endpoint + groupId + "/members/");

const addMember = (groupId, friendcode) =>
  client.post(endpoint + groupId + "/members/", { friendcode });

const getTasks = (groupId) => client.get(endpoint + groupId + "/tasks/");

const addTask = (task_name, task_description, groupId, author) =>
  client.post(endpoint + groupId + "/tasks/", {
    task_name,
    task_description,
    author,
  });

export default {
  getGroups,
  getUserGroups,
  addGroup,
  getMembers,
  getTasks,
  addTask,
  addMember,
};
