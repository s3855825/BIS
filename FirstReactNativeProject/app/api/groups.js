import client from "./client";

const endpoint = "groups/";

const addGroup = (group_name) => client.post(endpoint, { group_name });

const getMembers = (groupId) => client.get(endpoint + groupId + "/members/");

const addMember = (groupId, user_id) =>
  client.post(endpoint + groupId + "/members/", { user_id });

const getTasks = (groupId) => client.get(endpoint + groupId + "/tasks/");

const addTask = (task_name, task_description, groupId) =>
  client.post(endpoint + groupId + "/tasks/", { task_name, task_description });

export default {
  addGroup,
  getMembers,
  getTasks,
  addTask,
  addMember,
};
