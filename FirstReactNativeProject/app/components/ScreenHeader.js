import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors'
import edge from '../config/edge'

function ScreenTitle({ children }) {
    return (
        <View style={[styles.header]}>
            <View style={styles.hamburger}/>
            <View>
                <Text style={styles.titleText}>{children}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.heading,
        borderTopWidth: 2,
        borderBottomWidth: 2
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 15
    },
    hamburger: {
        width: 50,
        height: 50,
        borderTopRightRadius: edge.global,
        borderBottomRightRadius: edge.global,
        borderRightWidth: 2
    }
})

export default ScreenTitle;