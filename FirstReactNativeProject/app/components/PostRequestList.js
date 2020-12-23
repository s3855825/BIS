import React from 'react';
import { FlatList } from 'react-native';

import PostCard from './PostCard'
import PostSeparator from './PostSeparator'

const posts = [
    {
        id: 1,
        title: 'Title: Join a group',
        author: 'Requester: Cathrine',
        messagefromrequester: 'Body 1: Some random text for testing. I am trying to make this longer and longer but I know it can be much longer than...',
    },
    {
        id: 2,
        title: 'Title: Finding last two members',
        author: 'Requester: Cathrine',
        messagefromrequester: 'Body 2: Some random text for testing. I am trying to make this longer and longer but I know it can be much longer than...',
    },
    {
        id: 3,
        title: 'Title: omg i\'m stuck',
        author: 'Requester: Cathrine',
        messagefromrequester: 'Body 3: Some random text for testing. I am trying to make this longer and longer but I know it can be much longer than...',
    }
]

function PostList(props) {
    return (
        <FlatList
            style={{ paddingHorizontal: 20 }}
            data={posts}
            keyExtractor={post => post.id.toString()}
            renderItem={({ item }) =>
                <PostCard
                    title={item.title}
                    author={item.author}
                    content={item.messagefromrequester}
                    />}
            ItemSeparatorComponent={PostSeparator}
        />
    );
}

export default PostList;