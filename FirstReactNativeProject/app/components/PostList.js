import React from 'react';
import { FlatList } from 'react-native';

import PostCard from './PostCard'
import PostSeparator from './PostSeparator'

const posts = [
    {
        id: 1,
        title: 'Title: Looking for a group',
        author: 'Author: Cathrine',
        description: 'Body 1: Some random text for testing. I am trying to make this longer and longer but I know it can be much longer than...',
        hashtag: '#art',
    },
    {
        id: 2,
        title: 'Title: Finding last two members',
        author: 'Author: Monserrate',
        description: 'Body 2: Some random text for testing. I am trying to make this longer and longer but I know it can be much longer than...',
        hashtag: '#marketing',
    },
    {
        id: 3,
        title: 'Title: omg i\'m stuck',
        author: 'Author: Filomena',
        description: 'Body 3: Some random text for testing. I am trying to make this longer and longer but I know it can be much longer than...',
        hashtag: '#IT',
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
                    hashtag={item.hashtag}
                    content={item.description}
                    />}
            ItemSeparatorComponent={PostSeparator}
        />
    );
}

export default PostList;