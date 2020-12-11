import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import InputOne from './InputOne'

function InputTwo({ title, style }) {
    return (
        <View style={[styles.container, {style}]}>
            <View style={styles.title}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <InputOne />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        marginRight: 10
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default InputTwo;