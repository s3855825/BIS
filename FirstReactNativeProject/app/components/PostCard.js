import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import colors from '../config/colors'
import edge from '../config/edge'

function PostCard({ title, author, content, hashtag }) {
    return (
        <View style={styles.postCard}>
            <View style={styles.cardHeader}>
                <Text style={styles.postCardText}>{title}</Text>
                <View style={styles.cardSubHeader}>
                    <View style={styles.cardSubHeader1}>
                        <Text style={styles.subTitle}>{author}</Text>
                    </View>
                    <View style={styles.cardSubHeader2}>
                        <Text style={styles.subTitle}>{hashtag}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.postCardBody}>
                <Text style={styles.postCardContent}>{content}</Text>
            </View>
            <View style={styles.postCardFooter}>
                <TouchableOpacity
                    style={styles.requestButton}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => alert('Pressed!')}>
                    <Text style={styles.buttonText}>Request</Text>
                </TouchableOpacity>
            </View>
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
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    postCardBody: {
        flex: 3,
    },
    postCardContent: {
        flex: 1,
        padding: 15,
        fontSize: 14
    },
    postCardFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        paddingTop: 0
    },
    requestButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonText: {
        color: colors.todo,
        fontWeight: 'bold',
    },
    postCardText: {
        fontSize: 18,
    },
    subTitle: {
        fontSize: 13,
        fontStyle: 'italic'
    }
})

export default PostCard;