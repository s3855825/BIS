import React from 'react';
import { FlatList } from 'react-native';

import PostCard from './PostCard';
import PostSeparator from './PostSeparator';
import MemberCard from '../components/MemberCard';

const group = [
    {
        'id': 1,
        'name': 'watering',
        'description': 'asdsadsads',
        'createdDate': 'asdsdsa',
        'deadline': 'adsdasd',
    },
    {
        'id': 2,
        'name': "Viet",
        'description': 'asdsadsads',
        'createdDate': 'asdsdsa',
        'deadline': 'adsdasd',
    },
    
]

function PostList(props) {
    return (
        <FlatList
            style={{ paddingHorizontal: 20 }}
            data={group}
            keyExtractor={group => group.id.toString()}
            renderItem={({ item }) =>
                <MemberCard
                    name = {item.name}
                    description = {item.description}
                    createdDate = {item.createdDate}
                    deadline = {item.deadline}
                    />}
        />
    );
}

export default PostList;