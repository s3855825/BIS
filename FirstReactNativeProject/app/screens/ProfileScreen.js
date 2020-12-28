import React, { useState, useEffect} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import ModText from '../components/ModText';
import Screen from '../components/Screen';
import authApi from '../api/auth';
import ScreenHeader from '../components/ScreenHeader';
import storeId from '../api/id';
import ModButton from '../components/ModButton';
import PostCard from '../components/PostCard';
import PostSeparator from '../components/PostSeparator';
import auth from '../api/auth';

function ProfileScreen({ navigation }) {
    const [user, setUser] = useState([]);
    const [id, setId] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        storeId.getID().then(item => setId(item));
        loadUser();
      }, []);

    const loadUser = async () => {
        const infoResponse = await authApi.getUserInfo(id);
        const postResponse = await authApi.getUserPosts(id);
        if (!infoResponse.ok) {
            console.log("info" + infoResponse.problem);
            return;
        }
        if (!postResponse.ok) {
            console.log("posts" + postResponse.problem);
            return;
        }
        setPosts(postResponse.data);
        setUser(infoResponse.data);
    }

    // const userDeletion = async () => {
    //     const response = await authApi.deleteUser(id);
    //     if (!response.ok) {
    //         console.log('failed');
    //         return;
    //     }
    //     console.log('success')
    //     navigation.navigate('AuthNav')
    // }

    return (
        <Screen>
            <ScreenHeader title='Profile' />
            <View style={styles.container}>
                <View style={styles.info}>
                    <ModText>Email: {user.email}</ModText>
                    <ModText>Username: {user.username}</ModText>
                </View>
                <ModText>Your posts:</ModText>
                {/* <ModButton
                    title='Log out'
                    onPress={() => navigation.navigate('AuthNav')}
                /> */}
                {/* <ModButton
                    title='Delete'
                    onPress={userDeletion}
                /> */}
                <FlatList
                    data={posts}
                    keyExtractor={post => post.id.toString()}
                    renderItem={({ item }) =>
                        <PostCard
                            title={item.title}
                            message={item.message}
                        />}
                    ItemSeparatorComponent={PostSeparator}
                    style={{ flex: 1, marginTop: 10 }}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    info: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 20
    }
})

export default ProfileScreen;
