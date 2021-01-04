import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../config/colors'
import edge from '../config/edge'
function TaskCard({ task }) {
    return (
        <View style={styles.container}>
            <Text>{task}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex: 1,
        borderWidth: 2,
        borderRadius: edge.global,
        backgroundColor: colors.inputbg,
        padding: 5,
    },
})
export default TaskCard;