import React from 'react';
import { StyleSheet, View } from 'react-native';

function PostSeparator() {
    return <View style={styles.separator}/>
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 3,
        backgroundColor: 'black',
        marginVertical: 20
    }
})

export default PostSeparator;