import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import edge from '../config/edge'

import PostSeparator from '../components/PostSeparator'
import PostCard from '../components/PostCard'
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    member:{
        width: '90%',
        height: 30,
        borderWidth: 2,
        alignItems: 'center',

    },
    }
)

const members = [
       {
            id: 1,
            name: 'Vinh',
       },
       {
            id: 2,
            name: 'Duc',
       },

]
function Member(props) {
    return (
        <FlatList
            style={{ paddingHorizontal: 20 }}
            data={members}
            keyExtractor={members => members.id.toString()}
            renderItem={({ item }) =>
                <PostCard
                    name={item.name}
                    />}
            ItemSeparatorComponent={PostSeparator}
        />
    );
}
    
export default Member;