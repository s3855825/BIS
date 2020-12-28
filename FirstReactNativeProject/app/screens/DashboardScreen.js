import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';

import colors from '../config/colors';

import ScreenHeader from '../components/ScreenHeader';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import ModButton from '../components/ModButton';
import PostCard from '../components/PostCard';
import PostSeparator from '../components/PostSeparator';
import postsApi from '../api/posts';
import ErrorMessage from '../components/ErrorMessage';
import PostList from '../components/PostList';
import ModTextInput from '../components/ModTextInput';
// import storeToken from '../api/token';
// import storeID from '../api/id';

export default function DashboardScreen({ navigation }) {
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
  }

  const handleSubmit = async ({ searchText }) => {
    const searchResponse = await postsApi.searchPosts(searchText);
    
    console.log(searchText)
    // if (!searchResponse.ok) {
    //     console.log('search ' + searchResponse.error + '\n' + searchResponse.data);
    //     return;
    // }
    // console.log("success");
    console.log(searchResponse.data);
    // setPosts(searchResponse.data);
  }

  return (
    <Screen style={styles.container}>
      <ScreenHeader title='Dashboard' />
      <View style={styles.body}>
        <View style={styles.searchArea}>
          <Formik
            initialValues={{ searchText: '' }}
            onSubmit={handleSubmit}
          >
            { ({ handleSubmit, handleChange }) => (
              <>
                <ModTextInput
                  placeholder='search for post...'
                  placeholderTextColor={'black'}
                  style={{ width: '95%' }}
                  onChangeText={handleChange('searchText')}
                />
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }}
                >
                  <Text>OK</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
        <View style={styles.buttonArea}>
          <ModButton
            title='Reload Posts'
            onPress={loadPosts}
          />
          <ModButton
            title='Create Posts'
            onPress={() => navigation.navigate('CreatePosts')}
          />
        </View>
        {/* {error && (
          <>
              <ErrorMessage error="Could not retrieve data. Try again." visible={error}/>
          </>
        )} */}
        <View style={styles.postArea}>
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
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screen,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  searchArea: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonArea: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-evenly'
  },
  postArea: {
    flex: 1,
    marginBottom: 10,
  },
});