import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import colors from '../config/colors'
import edge from '../config/edge'

function PostCard({ name, description, createdDate, deadline }) {
    return (
        <View style={styles.postCard}>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text>{createdDate}</Text>
            <Text>{deadline}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    postCard: {
        flex: 1,
        borderWidth: 2,
        borderRadius: edge.global,
        backgroundColor: colors.inputbg
    },
    cardHeader: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    cardSubHeader: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5
    },
    cardSubHeader1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    cardSubHeader2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    cardBody: {
        flex: 3,
        padding: 15,
    },
    cardFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    requestButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    titleText: {
        fontSize: 18,
    },
    subText: {
        fontSize: 13,
        fontStyle: 'italic',
    },
    contentText: {
        fontSize: 14,
    },
    buttonText: {
        color: colors.todo,
        fontWeight: 'bold',
    },
})

export default PostCard;