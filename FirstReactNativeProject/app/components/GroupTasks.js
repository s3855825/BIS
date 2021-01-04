import React from 'react';
import { FlatList } from 'react-native';

import PostCard from './PostCard'
import PostSeparator from './PostSeparator'

const group = [
    {
        'id': 1,
        'name': 'Vinh',
    },
    {
        'id': 2,
        'name': "Viet",
    },
    
]

function PostList(props) {
    return (
        <FlatList
            style={{ paddingHorizontal: 20 }}
            data={group}
            keyExtractor={group => group.id.toString()}
            renderItem={({ item }) =>
                <PostCard
                    name = {item.name}
                    />}
            ItemSeparatorComponent={PostSeparator}
        />
    );
}

export default PostList;