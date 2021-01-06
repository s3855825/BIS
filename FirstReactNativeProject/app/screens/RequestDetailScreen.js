import React from 'react';
import { FlatList } from 'react-native';

import PostCard from '../components/PostCard';
import PostSeparator from '../components/PostSeparator';
import TestScreen from './TestScreen';

const posts = [
    {
        id: 1,
        title: 'Title: Join a group',
        author: 'Requester: Cathrine',
        messagefromrequester: 'Body 1: Some random text for testing. I am trying to make this longer and longer but I know it can be much longer than...',
    }
]

function RequestDetailScreen( {navigation} ) {
    return (
        <TestScreen
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

export default RequestDetailScreen;