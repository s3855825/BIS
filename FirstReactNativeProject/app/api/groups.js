import client from "./client";

const endpoint = "groups/";

const addGroup = (group_name) => client.post(endpoint, { group_name });

const getMembers = (groupId) => client.get(endpoint + groupId + "/members/");

const addMember = (user_id, groupId) =>
  client.post(endpoint + groupId + "/members/", { user_id });

const getTasks = (groupId) => client.get(endpoint + groupId + "/tasks/");

const addTask = (task_name, groupId) =>
  client.post(endpoint + groupId + "/members/", { task_name });

export default {
  addGroup,
  getMembers,
  getTasks,
  addTask,
  addMember,
};
