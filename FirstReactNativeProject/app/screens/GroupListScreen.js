import React, { useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import 'react-native-gesture-handler';

import colors from '../config/colors';

import GroupList from '../components/GroupList';
import ScreenHeader from '../components/ScreenHeader';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import ModButton from '../components/ModButton';
import groupsApi from '../api/groups';

export default function App() {
    const [groups, setGroups] = useState([]);

    const [error, setError] = useState(false);

    useEffect(() => {
        loadGroups();
    }, []);

    const loadGroups = async () => {
        const response = await groupsApi.getGroups();
        if (!response.ok) {
            console.log(response.problem);
            return setError(true);
        }
        setError(false);
        setGroups(response.data);
        console.log(groups);
    }

    return (
        <Screen style={styles.container}>
            <ScreenHeader title='Group' />
            <View style={styles.body}>
                <View style={styles.searchArea}>
                    <SearchBar />
                </View>
                <View style={styles.buttonArea}>
                <ModButton
                    title='Reload Groups'
                    onPress={loadGroups}
                />
                <ModButton
                    title='Create a group'
                    onPress={() => navigation.navigate('CreateGroups')}
                />
                </View>
                <View style={styles.postArea}>
                    <GroupList groupData={groups} />
                </View>
            </View>
        </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.screen
  },
  body: {
    flex: 1,
  },
  searchArea: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  postArea: {
    flex: 4,
    marginBottom: 10
  },
  buttonArea: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-evenly'
  },
});

