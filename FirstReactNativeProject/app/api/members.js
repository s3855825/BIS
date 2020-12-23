import client from './client';

const listOfMembers = (groupname, member_1, member_2, member_3, member_4) => client.post('/groups/members/', { groupname, member_1, member_2, member_3, member_4 })

export default {
    listOfMembers
}