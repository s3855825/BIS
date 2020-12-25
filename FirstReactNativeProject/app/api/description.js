import client from './client'

const groupDescription = (group_description) => client.post('/groups/description/', { group_description })

export default {
    groupDescription
}