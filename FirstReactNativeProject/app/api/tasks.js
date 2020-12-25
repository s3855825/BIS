import client from './client';

const listOfTasks = (task_1, task_2, task_3, task_4) => client.post('/groups/tasks/', { task_1, task_2, task_3, task_4 })

export default {
    listOfTasks
}