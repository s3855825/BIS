import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import colors from '../config/colors'
import edge from '../config/edge'

function MemberCard({ name,}) {
    return (
        <View style={styles.postCard}>
            <Text>{name}</Text>
            
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
})

export default MemberCard;