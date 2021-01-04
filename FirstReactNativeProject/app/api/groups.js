import client from "./client";

const endpoint = "groups/";

const getGroups = () => client.get(endpoint);

const addGroup = (group_name) => client.post(endpoint, { group_name });

const getMembers = (groupId) => client.get(endpoint + groupId + "/members/");

const addGroupMember = (member_id, group_id) =>
  client.post(endpoint + group_id + "/members/", { member_id });

const getTasks = (groupId) => client.get(endpoint + groupId + "/tasks/");

const addGroupTask = (task_name, groupId) =>
  client.post(endpoint + groupId + "/members/", { task_name });

export default {
  getGroups,
  addGroup,
  getMembers,
  getTasks,
  addGroupTask,
  addGroupMember,
};
