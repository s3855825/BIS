import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import PostCard from './PostCard';
import PostSeparator from './PostSeparator';
import postsApi from '../api/posts';
import ErrorMessage from './ErrorMessage';
import ModButton from './ModButton';

function PostList() {
    const [posts, setPosts] = useState([]);

    const [error, setError] = useState(false);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const response = await postsApi.getPosts();
        if (!response.ok) {
            console.log(response.problem);
            return setError(true);
        }
        setError(false);
        setPosts(response.data);
        console.log(response.data[5]);
    }

    return (
        // {error && (
        //     <>
        //         <ErrorMessage error="Could not retrieve data. Try again."/>
        //         <ModButton title="Retry" onPress={loadPosts}/>
        //     </>
        // )}
        <FlatList
            data={posts}
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