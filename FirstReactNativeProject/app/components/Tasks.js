import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

import colors from '../config/colors'
import edge from '../config/edge'
import TaskCard from '../components/TaskCard'

const tasks = [
    {
        'id': 1,
        'task': 'eat',
    },
    {
        'id': 2,
        'task': 'drink',
    }
]
function Tasks(){
    return(
    <FlatList
        style={{ paddingHorizontal: 20 }}
        data={tasks}
        keyExtractor={tasks => tasks.id.toString()}
        renderItem={({ item }) =>
            <TaskCard
                task = {item.task}
                
            />}    
    />
    )
}
export default Tasks;