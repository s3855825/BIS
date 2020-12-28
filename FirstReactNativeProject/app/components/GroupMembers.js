import React from 'react';
import { FlatList } from 'react-native';

import PostCard from './PostCard';
import PostSeparator from './PostSeparator';
import MemberCard from '../components/MemberCard';

const member = [
    {
        'id': 1,
        'name': 'Vinh'        
    },
    {
        'id': 2,
        'name': 'Duc'
    },
]

function GroupList(props) {
    return (
        <FlatList
            style={{ paddingHorizontal: 20 }}
            data={member}
            keyExtractor={member => member.id.toString()}
            renderItem={({ item }) =>
                <MemberCard
                    name = {item.name}
                />}

        />
    );
}

export default GroupList;

