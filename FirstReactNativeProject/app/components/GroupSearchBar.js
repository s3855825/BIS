import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import edge from '../config/edge'

function SearchBar() {
    return (
        <View style={styles.searchBar}>
            <TextInput
                placeholder='search for groups...'
                placeholderTextColor={colors.todo}
                style={styles.searchInput}
            />
            <TouchableOpacity style={styles.advance}>
                <Text style={styles.advanceText}>Advanced Search</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar:{
        width: '90%',
    },
    searchInput: {
        height: 50,
        borderWidth: 2,
        borderRadius: edge.global,
        paddingLeft: 15,
        marginHorizontal: 10,
        backgroundColor: colors.searchbg
    },
    advance: {
        paddingTop: 8,
        alignItems: 'flex-end'
    },
    advanceText: {
        fontSize: 12
    }
})

export default SearchBar;