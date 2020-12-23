import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import colors from '../config/colors'
import edge from '../config/edge'

function PostCard({ title, author, content, hashtag }) {
    return (
        <View style={styles.postCard}>
            <View style={styles.cardHeader}>
                <Text style={styles.titleText}>{title}</Text>
                <View style={styles.cardSubHeader}>
                    <View style={styles.cardSubHeader1}>
                        <Text style={styles.subText}>{author}</Text>
                    </View>
                    <View style={styles.cardSubHeader2}>
                        <Text style={styles.subText}>{hashtag}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.contentText}>{content}</Text>
            </View>
            <View style={styles.cardFooter}>
                <TouchableOpacity
                    style={styles.approveButtonContainer}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => alert('Boom!')}>
                    <Text style={styles.buttonText}>Approve</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.declineButtonContainer}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => alert('Boom!')}>
                    <Text style={styles.buttonText}>Decline</Text>
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
    approveButtonContainer: {
        margin: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        backgroundColor: "#DDDDDD",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    declineButtonContainer: {
        margin: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        backgroundColor: "#DDDDDD",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
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