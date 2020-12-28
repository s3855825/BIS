import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import PostCard from './PostCard';
import PostSeparator from './PostSeparator';
import postsApi from '../api/posts';
import ErrorMessage from './ErrorMessage';
import ModButton from './ModButton';

function PostList({ listData }) {
    return (
        <FlatList
            data={listData}
            keyExtractor={post => post.id.toString()}
            renderItem={({ item }) =>
                <PostCard
                    title={item.title}
                    message={item.message}
                />}
            ItemSeparatorComponent={PostSeparator}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PostList;